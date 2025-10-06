"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import myPhoto from "/public/myimage.png";

export default function HeroSection() {
  return (
    <div className="relative min-h-[100svh] w-full h-full overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-black/60 z-0">
        {/* Star field effect */}
      </div>

      {/* Planet curve at bottom - Responsive */}
      <div className="absolute border-b-4 sm:border-b-6 md:border-b-8 mb-1 sm:mb-2 border-black bottom-0 left-0 right-0 h-40 sm:h-48 md:h-52 lg:h-40 xl:h-32 bg-purple-900 rounded-t-[100%] blur-md z-0"></div>
      <div className="absolute bottom-0 left-0 right-0 h-40 sm:h-48 md:h-52 lg:h-40 xl:h-32 bg-black/90 rounded-t-[100%] z-0"></div>

      {/* Main Content - Centered in viewport */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-3 sm:px-4 lg:px-6 xl:px-8 z-10">
        <div className="container mx-auto max-w-7xl 2xl:max-w-8xl flex flex-col justify-center items-center">
          {/* Announcement banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-4 sm:mb-6 md:mb-8 lg:mb-12 w-full px-1 sm:px-2 flex justify-center"
          >
            <a
              href="https://image-resize-gamma-tan.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-2 lg:px-5 lg:py-3 bg-black/40 backdrop-blur-md rounded-full border border-white/10 text-white/90 hover:bg-black/50 transition-colors text-xs sm:text-sm md:text-base lg:text-lg"
            >
              <span className="bg-purple-800 text-gray-200 text-xs font-medium px-1 py-0.5 sm:px-1.5 sm:py-0.5 md:px-2 md:py-1 rounded-full">New</span>
              <AnimatedShinyText>Project Launched</AnimatedShinyText>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-3 sm:h-3 md:w-4 md:h-4">
                <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-10 px-1 sm:px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl font-bold text-white leading-tight">
            Turning ideas into interactive and<br />
             modern <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-b from-zinc-600 to-white">
                web applications.
              </span>
            </h1>
          </motion.div>

          {/* Introduction with image */}
          <motion.div
            className="flex relative flex-col items-center justify-center gap-2 sm:gap-3 md:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90">Hello, I&apos;m
              <span
                className="mx-1.5 sm:mx-2 px-2 sm:px-3 md:px-5 py-0.5 sm:py-1 text-white bg-purple-700 inline-block text-sm sm:text-base md:text-lg lg:text-xl"
                style={{
                  clipPath: "polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)"
                }}
              >
                Gulshan Kumar
              </span>
            </p>
            
            {/* Profile Image - Show on mobile with different styling */}
            <div className="group block md:block cursor-pointer h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 rounded-full overflow-hidden border-2 border-white/20 my-1 sm:my-2 md:my-0">
              <Image
                src={myPhoto}
                alt="Talagana Rajesh"
                width={56}
                height={56}
                className="h-full w-full object-cover"
              />

              {/* Hover Popup */}
              <div
                className="absolute rounded-full -top-12 sm:-top-16 md:-top-20 lg:-top-16 left-1/2 ml-7 -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out
                 border border-white/30 shadow-lg overflow-hidden z-10"
              >
                <Image
                  src={myPhoto}
                  alt="Talagana Rajesh"
                  width={120}
                  height={120}
                  className="object-cover w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48"
                />
              </div>
            </div>

            <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-white/90">A Full Stack Developer</p>
          </motion.div>
        </div>
      </div>

      {/* CTA Section - Fixed at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-20 pb-4 sm:pb-6 md:pb-8 lg:pb-12">
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 w-full px-3 sm:px-4 lg:px-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          {/* Let's Connect Button */}
          <Link
            href="/contact"
            className="group flex items-center justify-center gap-1.5 sm:gap-2 px-4 py-2.5 sm:px-5 sm:py-3 md:px-6 md:py-4 lg:px-7 lg:py-4 bg-black/40 backdrop-blur-md rounded-full border border-white/30 text-zinc-400 hover:bg-black/50 transition-colors w-full sm:w-auto max-w-xs sm:max-w-none"
          >
            <span className="text-sm sm:text-base md:text-lg lg:text-xl font-medium">Let&apos;s Connect</span>
            <div className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 lg:h-9 lg:w-9 rounded-full bg-zinc-400 flex items-center justify-center group-hover:bg-purple-600 group-hover:translate-x-2 transition-all duration-300 ease-in-out">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-4 sm:h-4 md:w-5 md:h-5">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </Link>

          {/* Email */}
          <a
            href="mailto:gulshan73939314@gmail.com"
            className="flex items-center z-10 justify-center gap-1.5 sm:gap-2 text-center w-full sm:w-auto max-w-xs sm:max-w-none"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 flex-shrink-0">
              <rect x="2" y="4" width="20" height="16" rx="2" stroke="gray" strokeWidth="2" />
              <path d="M2 7L9.95263 12.4526C10.5936 12.8747 11.3796 13.0964 12.1748 13.0964C12.97 13.0964 13.756 12.8747 14.397 12.4526L22 7" stroke="gray" strokeWidth="2" />
            </svg>
            <span className="text-zinc-400 hover:text-purple-500 transition-all duration-300 text-xs sm:text-sm md:text-base lg:text-lg truncate">gulshan73939314@gmail.com</span>
          </a>
        </motion.div>
      </div>
    </div>
  );
}