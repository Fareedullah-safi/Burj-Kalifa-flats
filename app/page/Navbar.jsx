'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';
import { SignInButton, SignUpButton, UserButton, useUser } from '@clerk/nextjs';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { isSignedIn } = useUser();

    return (
        <header className="bg-zinc-900 shadow-md">
            <div className="px-6 py-4 flex items-center justify-between w-full">
                <Link href="/" className="flex flex-col items-start leading-tight group">
                    <span className="font-bold text-cyan-300 tracking-widest uppercase font-[Cinzel] group-hover:text-cyan-400 transition text-3xl sm:text-4xl">
                        Burj Khalifa
                    </span>
                    <span className="text-xs text-zinc-400 tracking-wider group-hover:text-zinc-300 transition">
                        Luxury Living Redefined
                    </span>
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex space-x-6 text-gray-200 font-medium items-center">
                    <Link href="/" className="hover:text-cyan-300 transition">Home</Link>
                    <Link href="/about" className="hover:text-cyan-300 transition">About</Link>
                    <Link href="/flats" className="hover:text-cyan-300 transition">Explore Flats</Link>

                    {!isSignedIn ? (
                        <>
                            <SignInButton mode="modal">
                                <button className="hover:text-cyan-300 transition">Sign In</button>
                            </SignInButton>
                            <SignUpButton mode="modal">
                                <button className="hover:text-cyan-300 transition">Sign Up</button>
                            </SignUpButton>
                        </>
                    ) : (
                        <UserButton />
                    )}
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-cyan-300 text-2xl focus:outline-none"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    {isMobileMenuOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <nav
                className={`md:hidden bg-zinc-800 transition-all duration-300 ease-in-out px-6 overflow-hidden ${isMobileMenuOpen ? 'max-h-screen opacity-100 pb-6' : 'max-h-0 opacity-0'
                    }`}
            >
                <ul className="flex flex-col space-y-4 text-gray-100 font-medium cursor-pointer">
                    <li>
                        <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-cyan-300 transition">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-cyan-300 transition">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/flats" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-cyan-300 transition">
                            Explore Flats
                        </Link>
                    </li>

                    {!isSignedIn ? (
                        <>
                            <li>
                                <SignInButton mode="modal">
                                    <button
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="hover:text-cyan-300 transition"
                                    >
                                        Sign In
                                    </button>
                                </SignInButton>
                            </li>
                            <li>
                                <SignUpButton mode="modal">
                                    <button
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="hover:text-cyan-300 transition"
                                    >
                                        Sign Up
                                    </button>
                                </SignUpButton>
                            </li>
                        </>
                    ) : (
                        <li>
                            <UserButton />
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
