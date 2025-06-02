"use client"
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className="bg-zinc-950 text-white ">
            <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                    <h2 className="text-xl font-bold mb-2">Burj Flats</h2>
                    <p className="text-zinc-400 text-sm">
                        Experience the height of luxury living in the world’s tallest tower.
                    </p>
                </div>

                <div>
                    <h3 className="font-semibold mb-2">Navigation</h3>
                    <ul className="space-y-1 text-zinc-400 text-sm">
                        <li><a href="/" className="hover:underline">Home</a></li>
                        <li><a href="/flats" className="hover:underline">Available Flats</a></li>
                        <li><a href="#" className="hover:underline">Contact</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold mb-2">Contact</h3>
                    <ul className="space-y-1 text-zinc-400 text-sm">
                        <li>Email: info@burjflats.com</li>
                        <li>Phone: +971 50 123 4567</li>
                        <li>Address: Downtown Dubai, UAE</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold mb-2">Follow Us</h3>
                    <ul className="flex space-x-4 text-zinc-400 text-xl">
                        <li><a href="#"><i className="fab fa-facebook hover:text-white" /><FaFacebook /></a></li>
                        <li><a href="#"><i className="fab fa-twitter hover:text-white" /><FaTwitter /></a></li>
                        <li><a href="#"><i className="fab fa-instagram hover:text-white" /><FaInstagram /></a></li>
                        <li><a href="#"><i className="fab fa-linkedin hover:text-white" /><FaLinkedin /></a></li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-zinc-800 text-center text-sm text-zinc-500 py-4">
                © {new Date().getFullYear()} Burj Flats. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
