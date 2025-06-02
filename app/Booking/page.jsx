'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function BookingPage() {
    const searchParams = useSearchParams();
    const [flat, setFlat] = useState(null);

    useEffect(() => {
        const title = searchParams.get('title');
        if (title) {
            setFlat({
                title,
                description: searchParams.get('description') || 'No description available.',
                floor: searchParams.get('floor') || 'N/A',
                bedrooms: searchParams.get('bedrooms') || 'N/A',
                size: searchParams.get('size') || 'N/A',
                price: searchParams.get('price') || '0',
                image: searchParams.get('image') || '/fallback.jpg',
            });
        }
    }, [searchParams]);

    if (!flat) {
        return (
            <div className="flex justify-center items-center min-h-screen text-white bg-zinc-900">
                <p className="text-xl animate-pulse">Loading booking details...</p>
            </div>
        );
    }

    return (
        <div className="bg-zinc-900 text-white min-h-screen p-6 md:p-10">
            <h1 className="text-4xl font-extrabold text-cyan-400 mb-10 text-center drop-shadow">
                Booking Details
            </h1>

            <div className="max-w-6xl mx-auto bg-zinc-800 p-5 rounded-2xl shadow-2xl grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="w-full h-64 md:h-80 relative rounded-xl overflow-hidden col-span-1">
                    <Image
                        src={flat.image}
                        alt={flat.title}
                        fill
                        className="rounded-xl object-cover"
                        priority
                    />
                </div>

                <div className="space-y-4 col-span-1 md:col-span-2">
                    <h2 className="text-3xl font-bold text-white">{flat.title}</h2>
                    <p className="text-zinc-300">{flat.description}</p>

                    <div className="grid grid-cols-2 gap-4 text-sm text-zinc-400 pt-4">
                        <div>🏢 <strong>Floor:</strong> {flat.floor}</div>
                        <div>🛏️ <strong>Bedrooms:</strong> {flat.bedrooms}</div>
                        <div>📐 <strong>Size:</strong> {flat.size} sqft</div>
                        <div>💰 <strong>Price:</strong> ${Number(flat.price).toLocaleString()}</div>
                    </div>

                    <div className="pt-4 text-lg font-semibold">
                        Status: <span className="text-green-400">Available</span>
                    </div>

                    <Link
                        href={{
                            pathname: '/UserDetails',
                            query: {
                                image: flat.image,
                                title: flat.title,
                                description: flat.description,
                                floor: flat.floor,
                                bedrooms: flat.bedrooms,
                                size: flat.size,
                                price: flat.price,
                            },
                        }}
                        className="group relative inline-flex items-center justify-center w-full py-3 px-6 text-lg font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-lg transition-all duration-300 ease-in-out hover:from-cyan-600 hover:to-blue-700 hover:shadow-cyan-600/50 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    >
                        <span className="mr-2">📝</span>
                        Book Now
                        <span
                            className="absolute inset-0 rounded-full ring-1 ring-white/10 group-hover:ring-white/20"
                            aria-hidden="true"
                        ></span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
