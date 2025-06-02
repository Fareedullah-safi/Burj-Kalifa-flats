'use client';

import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div className="bg-zinc-950 text-white min-h-screen font-sans">
            {/* Hero Section */}
            <section className="bg-gradient-to-b from-black via-zinc-900 to-zinc-800 py-24 px-6 text-center">
                <h1 className="text-5xl md:text-6xl font-extrabold text-cyan-400 tracking-wide drop-shadow-lg">
                    Burj Khalifa
                </h1>
                <p className="text-lg md:text-xl text-zinc-300 mt-6 max-w-3xl mx-auto">
                    The tallest building in the world, redefining the skyline of Dubai and architectural boundaries across the globe.
                </p>
            </section>

            {/* About Section */}
            <section className="max-w-6xl mx-auto px-6 py-20 space-y-10">
                <h2 className="text-3xl md:text-4xl font-bold text-cyan-300 border-b border-cyan-500 inline-block pb-2">
                    About Burj Khalifa
                </h2>
                <p className="text-zinc-300 leading-relaxed text-lg">
                    The <strong className="text-cyan-400">Burj Khalifa</strong> is a global icon and the centerpiece of downtown Dubai. Standing at an astonishing 828 meters, it is the tallest building in the world. It redefines architecture, engineering, and luxury living.
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-zinc-400 text-base bg-zinc-900 rounded-xl p-6 shadow-inner ring-1 ring-zinc-800">
                    <li>🏗️ <span className="font-semibold text-white">Construction started:</span> January 2004</li>
                    <li>🚀 <span className="font-semibold text-white">Completed:</span> October 2009</li>
                    <li>📏 <span className="font-semibold text-white">Height:</span> 828 meters (2,717 ft)</li>
                    <li>🏢 <span className="font-semibold text-white">Floors:</span> 163 + 2 basements</li>
                    <li>🌍 <span className="font-semibold text-white">Location:</span> Downtown Dubai, UAE</li>
                    <li>🏡 <span className="font-semibold text-white">Residences:</span> 900+ luxury apartments</li>
                    <li>🌅 <span className="font-semibold text-white">Observation Decks:</span> 124th, 125th & 148th floors</li>
                    <li>👷 <span className="font-semibold text-white">Architect:</span> Adrian Smith (SOM)</li>
                </ul>
            </section>

            {/* Image & Description Section */}
            <section className="px-6 py-20 bg-gradient-to-r from-zinc-800 via-zinc-900 to-zinc-950">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
                    <img
                        src="/images/night time.jpg"
                        alt="Burj Khalifa at night"
                        className="w-full md:w-1/2 rounded-2xl shadow-2xl ring-1 ring-cyan-700/20"
                    />
                    <div className="space-y-4 md:w-1/2">
                        <h3 className="text-2xl md:text-3xl font-semibold text-cyan-400">
                            A Marvel of Modern Architecture
                        </h3>
                        <p className="text-zinc-300 text-lg leading-relaxed">
                            From luxury residences and sky lounges to fine dining and panoramic observatories, the Burj Khalifa blends futuristic design with ultra-premium experiences.
                        </p>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="bg-zinc-950 py-20 px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Ready to Experience Life at the Top?
                </h2>
                <p className="text-zinc-400 mb-8 text-lg">
                    Explore our luxury flats and live in the world’s most iconic tower.
                </p>
                <Link
                    href="/flats"
                    className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-lg font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-lg"
                >
                    🏙️ View Available Flats
                </Link>
            </section>
        </div>
    );
};

export default page;
