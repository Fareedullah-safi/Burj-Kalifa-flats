'use client';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
// import { ArrowRight } from 'lucide-react';

export const sampleFlats = [
    {
        "image": "/images/1.jpg",
        "title": "Luxury Sky Villa",
        "description": "Stunning 3-bedroom flat with Burj & Fountain view.",
        "floor": 1,
        "bedrooms": 3,
        "size": 2100,
        "price": 5400000
    },
    {
        "image": "/images/2.jpg",
        "title": "Luxury Sky Villa",
        "description": "Stunning 3-bedroom flat with Burj & Fountain view.",
        "floor": 2,
        "bedrooms": 3,
        "size": 2100,
        "price": 5400000
    },
    {
        "image": "/images/3.jpg",
        "title": "Luxury Sky Villa",
        "description": "Stunning 3-bedroom flat with Burj & Fountain view.",
        "floor": 3,
        "bedrooms": 3,
        "size": 2100,
        "price": 5400000
    }
];

const Flats = () => {
    return (
        <main className="bg-gradient-to-br from-gray-900 via-gray-950 to-black text-gray-200 min-h-screen">
            <div className="p-6 pb-0 max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold mb-2 text-white">Flats of Burj Khalifa</h1>
                <p className="text-gray-400 max-w-xl">
                    Experience luxury living at its finest with our exclusive collection of flats in the iconic Burj Khalifa.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-12">
                <h2 className="text-3xl font-bold mb-8 text-white border-b border-gray-700 pb-2">
                    Available Flats
                </h2>

                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {sampleFlats.map((flat, index) => (
                        <div
                            key={index}
                            className="backdrop-blur-sm bg-gray-800/50 border border-gray-700 rounded-2xl shadow-xl hover:scale-[1.02] transition-transform duration-300 overflow-hidden relative group"
                        >
                            <Image
                                src={flat.image}
                                alt={flat.title}
                                width={500}
                                height={300}
                                className="object-cover w-full h-64 transition group-hover:scale-105"
                            />
                            <div className="absolute top-4 left-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-xs px-3 py-1 rounded-full text-white shadow-lg">
                                Floor {flat.floor}
                            </div>

                            <div className="p-5 space-y-3">
                                <h3 className="text-xl font-semibold text-white">{flat.title}</h3>
                                <p className="text-gray-400 text-sm">{flat.description}</p>

                                <div className="flex flex-wrap justify-between text-xs text-gray-500 mt-3 border-t border-gray-700 pt-2">
                                    <span>🛏️ {flat.bedrooms} Bed</span>
                                    <span>📐 {flat.size} sqft</span>
                                </div>

                                <div className="flex items-center justify-between mt-4">
                                    <span className="text-lg font-semibold text-emerald-400">
                                        ${flat.price.toLocaleString()}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="flex justify-center mt-12">
                    <Link
                        href="/flats"
                        className="cursor-pointer inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-500 text-white rounded-full text-lg font-medium hover:scale-105 transition"
                    >
                        Explore More
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default Flats;
