import React from 'react';
import Link from 'next/link';
import { Linkedin, Instagram, Mail, Phone } from 'lucide-react';
import { FaXTwitter, FaFacebookF } from "react-icons/fa6";

// Tooltip Component ★★★★★
const Tooltip = ({
    icon,
    label,
    href,
}: {
    icon: React.ReactNode;
    label: string;
    href: string;
}) => {
    return (
        <Link
            href={href}
            className="relative group flex items-center justify-center
                       w-12 h-12 rounded-full border border-gray-400/30
                       hover:bg-blue-600 hover:text-white
                       transition-all duration-300"
        >
            {icon}

            {/* Tooltip Box */}
            <span
                className="absolute -top-10 left-1/2 -translate-x-1/2 scale-75
                           opacity-0 group-hover:opacity-100 group-hover:scale-100
                           group-hover:-top-14 bg-blue-600 text-white text-xs font-medium
                           px-3 py-1 rounded-md shadow-lg transition-all duration-300"
            >
                {label}

                {/* Arrow */}
                <span
                    className="absolute left-1/2 -bottom-1 w-2 h-2 bg-blue-600
                               rotate-45 -translate-x-1/2"
                ></span>
            </span>
        </Link>
    );
};

// FOOTER COMPONENT ★★★★★
const Footer: React.FC = () => {
    return (
        <footer className="w-full bg-black text-white py-10 sm:py-16">
            <div className="mx-auto px-4 max-w-7xl">

                {/* Main Footer Content */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 md:gap-20 mb-8 sm:mb-12">

                    {/* COLUMN 1 - Social + Intro */}
                    <div className="col-span-1">
                        <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                            Gulshan Kumar
                        </h2>

                        <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-6">
                            Building modern, responsive, and user-friendly web applications with clean design and scalable functionality.
                        </p>

                        {/* Social Icons */}
                        <div className="flex space-x-3 sm:space-x-4">

                            <Tooltip
                                icon={<FaXTwitter className="w-5 h-5" />}
                                label="Twitter"
                                href="https://twitter.com/"
                            />

                            <Tooltip
                                icon={<FaFacebookF className="w-5 h-5" />}
                                label="Facebook"
                                href="https://facebook.com/"
                            />

                            <Tooltip
                                icon={<Instagram className="w-5 h-5" />}
                                label="Instagram"
                                href="https://www.instagram.com/developer_tipss/"
                            />

                            <Tooltip
                                icon={<Linkedin className="w-5 h-5" />}
                                label="LinkedIn"
                                href="https://www.linkedin.com/in/gulshan-kumar-61b446253/"
                            />

                            <Tooltip
                                icon={<Mail className="w-5 h-5" />}
                                label="Mail"
                                href="mailto:gulshan73939314@gmail.com"
                            />

                            <Tooltip
                                icon={<Phone className="w-5 h-5" />}
                                label="Phone"
                                href="tel:+917393931450"
                            />

                        </div>
                    </div>

                    {/* COLUMN 2 - Website Links */}
                    <div className="col-span-1 my-5 md:my-0 flex flex-row justify-between items-start gap-6 sm:gap-8">

                        <div>
                            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">The Website</h3>
                            <nav className="flex flex-col space-y-1 sm:space-y-2">
                                <Link href="/" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-base">Home</Link>
                                <Link href="/projects" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-base">Projects</Link>
                                <Link href="/about" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-base">About</Link>
                                <Link href="/experience" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-base">Experience</Link>
                                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-base">Contact</Link>
                            </nav>
                        </div>

                        {/* Project Links */}
                        <div>
                            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Projects</h3>
                            <nav className="flex flex-col space-y-1 sm:space-y-2">
                                <a href="#" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-base">Myntra</a>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-base">VideoChatApp</a>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-base">WeatherApp</a>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-base">Awwwards</a>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-base">BlogSphere</a>
                            </nav>
                        </div>
                    </div>

                    {/* COLUMN 3 - Contact */}
                    <div className="col-span-1">
                        <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4">
                            I&apos;m open to freelance projects, full-time roles, or collaborative ideas. Let&apos;s build something impactful together.
                        </p>

                        <Link
                            href="mailto:gulshan73939314@gmail.com"
                            className="text-blue-400 hover:text-blue-300 transition-colors flex items-center text-sm sm:text-base"
                        >
                            <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                            gulshan73939314@gmail.com
                        </Link>

                        <Link
                            href="tel:+917393931450"
                            className="mt-2 flex items-center text-blue-400 hover:text-blue-500 text-sm sm:text-base"
                        >
                            <Phone className="inline-block mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                            +91 7393931450
                        </Link>
                    </div>
                </div>

                {/* COPYRIGHT */}
                <div className="pt-6 sm:pt-8 border-t border-gray-800 text-center text-gray-500 text-xs sm:text-sm">
                    <p>Copyright © {new Date().getFullYear()} Gulshan Kumar. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
