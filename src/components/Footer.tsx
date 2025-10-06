import React from 'react';
import Link from 'next/link';
import { Linkedin, Instagram, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="w-full bg-black text-white py-10 sm:py-16">
            <div className="mx-auto px-4 max-w-7xl">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 md:gap-20 mb-8 sm:mb-12">
                    
                    {/* Column 1 - Personal Info */}
                    <div className="col-span-1">
                        <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Gulshan Kumar</h2>
                        <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-6">
                            Building modern, responsive, and user-friendly web applications with clean design and scalable functionality.
                        </p>
                        <div className="flex space-x-3 sm:space-x-4">
                            <Link href="https://www.linkedin.com/in/gulshan-kumar-61b446253/" className="text-gray-400 hover:text-white transition-colors">
                                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                            <Link href="https://www.instagram.com/developer_tipss/" className="text-gray-400 hover:text-white transition-colors">
                                <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
                                <span className="sr-only">Instagram</span>
                            </Link>
                        </div>
                    </div>

                    {/* Column 2 - Website Links */}
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

                        {/* Projects */}
                        <div>
                            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Projects</h3>
                            <nav className="flex flex-col space-y-1 sm:space-y-2">
                                <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-base">Myntra</a>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-base">VideoChatApp</a>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-base">WeatherApp</a>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-base">Awwwards</a>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-base">BlogSphere</a>
                            </nav>
                        </div>
                    </div>

                    {/* Column 3 - Contact Info */}
                    <div className="col-span-1">
                        <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4">
                            I&apos;m open to freelance projects, full-time roles, or collaborative ideas. Let&apos;s build something impactful together.
                        </p>

                        <Link href="mailto:gulshan73939314@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors flex items-center text-sm sm:text-base">
                            <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2" />
                            gulshan73939314@gmail.com
                        </Link>
                        <Link href="tel:+91739393131450" className="mt-2 flex items-center text-blue-400 hover:text-blue-500 text-sm sm:text-base">
                            <Phone className="inline-block mr-1.5 sm:mr-3 w-4 h-4 sm:w-5 sm:h-5" />
                            +91 7393931450
                        </Link>
                    </div>
                </div>

                {/* Copyright */}
                <div className="pt-6 sm:pt-8 border-t border-gray-800 text-center text-gray-500 text-xs sm:text-sm">
                    <p>Copyright © {new Date().getFullYear()} Gulshan Kumar. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
