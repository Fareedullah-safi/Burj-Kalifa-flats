"use client"
import React, { useState } from 'react';
import Link from 'next/link';
const Hero = () => {
    const [loading, setLoading] = useState(false)
    const handleClick = () => {
        setLoading(true)
    }
    return (
        <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white min-h-[80vh] flex items-center">
            {/* Overlay gradient for subtle depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/70 pointer-events-none"></div>

            <div className="relative max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
                {/* Text Section */}
                <div className="z-10">
                    <h1 className="text-6xl text-zinc-400 md:text-blue-500 md:text-5xl font-extrabold mb-6 drop-shadow-lg">
                        Live Above the World
                    </h1>
                    <p className="text-lg md:text-xl text-zinc-300 mb-8 leading-relaxed drop-shadow-md">
                        Discover ultra-luxury flats at the iconic Burj Khalifa. Experience unmatched views, world-class amenities, and a lifestyle like no other in the tallest building on earth.
                    </p>
                    <Link
                        onClick={handleClick}
                        href="/flats"
                        className="
                                                    bg-gradient-to-r from-cyan-500 to-blue-600
                        text-white font-semibold py-3 px-8 rounded-full shadow-lg
                        hover:from-cyan-600 hover:to-blue-700
                        transition duration-300 ease-in-out
                        focus:outline-none focus:ring-4 focus:ring-cyan-400/50
                        drop-shadow-xl
                        "
                    >
                        {loading ? 'Loading...' : 'Explore Flats'}
                    </Link>
                </div>

                {/* Image Section */}
                <div className="flex justify-center md:justify-end z-10">
                    <img
                        src="/images/pexels-pixabay-162031.jpg"
                        alt="Burj Khalifa"
                        width={600}
                        height={750}
                        className="
                            rounded-3xl
                            object-cover
                            shadow-2xl
                            ring-4 ring-cyan-600/40
                            transition-transform duration-500 ease-in-out
                            hover:scale-105
                            max-w-full
                            h-auto
                        "
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
