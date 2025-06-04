'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function BookingClient() {
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
            <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-zinc-900 to-black text-white">
                <p className="text-xl animate-pulse">Loading booking details...</p>
            </div>
        );
    }

    return (
        <div className="bg-zinc-950 text-white min-h-screen px-4 py-6 sm:px-6 md:px-10 lg:px-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow mb-10 leading-tight sm:leading-[1.4]">
                Booking Details
            </h1>


            <div className="max-w-6xl mx-auto bg-zinc-900/70 backdrop-blur-md p-5 sm:p-8 rounded-3xl shadow-2xl border border-zinc-800 grid grid-cols-1 lg:grid-cols-2 gap-8">

                {/* Image */}
                <div className="relative w-full h-64 sm:h-80 md:h-[22rem] rounded-2xl overflow-hidden shadow-lg">
                    <Image
                        src={flat.image}
                        alt={flat.title}
                        fill
                        className="object-cover rounded-2xl transition-transform duration-500 hover:scale-105"
                        priority
                    />
                </div>

                {/* Details */}
                <div className="flex flex-col justify-between gap-6">
                    <div className="space-y-3">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-400">
                            {flat.title}
                        </h2>
                        <p className="text-zinc-300 leading-relaxed text-sm sm:text-base">
                            {flat.description}
                        </p>

                        <div className="grid grid-cols-2 gap-4 pt-2 text-sm sm:text-base text-zinc-400">
                            <div>🏢 <strong>Floor:</strong> {flat.floor}</div>
                            <div>🛏️ <strong>Bedrooms:</strong> {flat.bedrooms}</div>
                            <div>📐 <strong>Size:</strong> {flat.size} sqft</div>
                            <div>💰 <strong>Price:</strong> ${Number(flat.price).toLocaleString()}</div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="text-base sm:text-lg font-semibold">
                            Status: <span className="text-green-400">Available</span>
                        </div>

                        <Link
                            href={{
                                pathname: '/UserDetails',
                                query: { ...flat },
                            }}
                            className="group relative inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 text-base sm:text-lg font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
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
        </div>
    );
}
