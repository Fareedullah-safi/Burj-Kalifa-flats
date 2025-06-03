'use client';

import axios from 'axios';
import flats from '@/app/data/data.json';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import Image from 'next/image';
import { useState } from 'react';
import { Loader2 } from 'lucide-react';

const Page = () => {
    const router = useRouter();
    const [loadingIndex, setLoadingIndex] = useState(null); // track which flat is loading

    const handleClick = async (flat, index) => {
        setLoadingIndex(index); // start loading this flat
        try {
            const res = await axios.post(`/api/middleware`, { floor: flat.floor });
            if (res.data.success) {
                toast.success('Flat available! Redirecting to booking...');
                const params = new URLSearchParams({
                    image: flat.image,
                    title: flat.title,
                    description: flat.description,
                    floor: flat.floor.toString(),
                    bedrooms: flat.bedrooms.toString(),
                    size: flat.size.toString(),
                    price: flat.price.toString(),
                });
                setTimeout(() => {
                    router.push(`/booking?${params.toString()}`);
                }, 1500);
            } else {
                toast.error('Sorry, this floor is already booked.');
            }
        } catch (err) {
            console.error('API error:', err);
            toast.error('Failed to check floor availability. Please try again.');
        } finally {
            setLoadingIndex(null); // stop loading
        }
    };

    return (
        <section className="bg-zinc-950 min-h-screen text-zinc-100 pt-10">
            {/* Intro */}
            <div className="max-w-7xl mx-auto px-6 space-y-4 text-center">
                <h2 className="text-5xl font-extrabold text-cyan-400 drop-shadow-md">
                    Welcome to Burj Khalifa Living
                </h2>
                <p className="text-zinc-400 text-lg max-w-3xl mx-auto leading-relaxed">
                    Discover a new standard of luxury living in the sky. Find your dream flat in the world’s most iconic tower.
                </p>
            </div>

            {/* Flats Section */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {flats.map((flat, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700 rounded-2xl shadow-xl transform hover:scale-[1.02] transition-all duration-300 overflow-hidden relative group"
                        >
                            <Image
                                src={flat.image}
                                alt={flat.title}
                                width={500}
                                height={300}
                                className="object-cover w-full h-64 transition-transform duration-300 group-hover:scale-105"
                            />

                            {/* Badge */}
                            <div className="absolute top-4 left-4 bg-cyan-600/90 text-xs px-3 py-1 rounded-full text-white shadow-md font-semibold tracking-wide">
                                Floor {flat.floor}
                            </div>

                            <div className="p-5 space-y-3">
                                <h3 className="text-xl font-bold text-white">{flat.title}</h3>
                                <p className="text-zinc-400 text-sm leading-snug">{flat.description}</p>

                                <div className="flex justify-between items-center text-xs text-zinc-500 mt-4 border-t border-zinc-700 pt-3">
                                    <span>🛏️ {flat.bedrooms} Bed</span>
                                    <span>📐 {flat.size} sqft</span>
                                </div>

                                <div className="flex items-center justify-between mt-5">
                                    <span className="text-lg font-semibold text-emerald-400">
                                        ${flat.price.toLocaleString()}
                                    </span>
                                    <button
                                        onClick={() => handleClick(flat, index)}
                                        disabled={loadingIndex === index}
                                        className="cursor-pointer flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm rounded-full hover:brightness-110 transition duration-300 shadow-md disabled:opacity-50"
                                    >
                                        {loadingIndex === index ? (
                                            <>
                                                <Loader2 className="w-4 h-4 animate-spin" />
                                                Loading
                                            </>
                                        ) : (
                                            'View Details'
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Page;
