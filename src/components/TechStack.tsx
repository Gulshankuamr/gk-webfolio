'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

import html from '/public/assets/html.webp';
import css from '/public/assets/css.svg';
import javascript from '/public/assets/javascript.webp';
import typescript from '/public/assets/typescript.svg';
import react from '/public/assets/react.png';
import nextjs from '/public/assets/nextjs.png';
import tailwindcss from '/public/assets/tailwindcss.png';
import framermotion from '/public/assets/framermotion.png';
import shadcn from '/public/assets/shadcn.png';
import nodejs from '/public/assets/nodejs.png';
import expressjs from '/public/assets/expressjs.png';
import mongodb from '/public/assets/mongodb.png';
import sql from '/public/assets/sql.webp';
import github from '/public/assets/github.png';
import vercel from '/public/assets/vercel.png';
import postman from '/public/assets/postman.webp';
import npm from '/public/assets/npm.webp';
import figma from '/public/assets/figma.png';
import restapi from '/public/assets/restapi.webp';

// Tech stack images
interface TechItem {
  name: string;
  icon: string;
}

const techStack: TechItem[] = [
  { name: 'HTML', icon: html },
  { name: 'CSS', icon: css },
  { name: 'JavaScript', icon: javascript },
  { name: 'TypeScript', icon: typescript },
  { name: 'ReactJS', icon: react },
  { name: 'NextJS', icon: nextjs },
  { name: 'Tailwind CSS', icon: tailwindcss },
  { name: 'Framer Motion', icon: framermotion },
  { name: 'Shadcn', icon: shadcn },
  { name: 'NodeJS', icon: nodejs },
  { name: 'ExpressJS', icon: expressjs },
  { name: 'MongoDB', icon: mongodb },
  { name: 'SQL', icon: sql },
  { name: 'GitHub', icon: github },
  { name: 'Vercel', icon: vercel },
  { name: 'Postman', icon: postman },
  { name: 'npm', icon: npm },
  { name: 'Figma', icon: figma },
  { name: 'REST API', icon: restapi },
];

const TechStack: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "center center"], // triggers animation when centered
  });

  const side1Progress = useTransform(scrollYProgress, [0, 0.33], [0, 1]);
  const side2Progress = useTransform(scrollYProgress, [0.33, 0.66], [0, 1]);
  const side3Progress = useTransform(scrollYProgress, [0.66, 1], [0, 1]);

  return (
    <div ref={containerRef} className="min-h-screen w-full pt-24 sm:pt-52 bg-black text-white py-12 sm:py-20 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center mb-10 sm:mb-16">

          {/* Triangle + Heading Section */}
          <div className="relative w-full flex flex-col items-center justify-center mb-5">
            <motion.div
              className="absolute w-40 h-40 sm:w-64 sm:h-64"
              style={{ zIndex: 0 }}
            >
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <motion.line x1="50" y1="10" x2="10" y2="90" stroke="orange" strokeWidth="2" style={{ pathLength: side1Progress }} />
                <motion.line x1="10" y1="90" x2="90" y2="90" stroke="orange" strokeWidth="2" style={{ pathLength: side2Progress }} />
                <motion.line x1="90" y1="90" x2="50" y2="10" stroke="orange" strokeWidth="2" style={{ pathLength: side3Progress }} />
              </svg>
            </motion.div>

            <div className="relative pb-4 sm:pb-6 backdrop-blur-xs mt-24 sm:mt-32 z-10 text-center">
              <p className="text-[10px] sm:text-xs uppercase tracking-widest">
                Better than yesterday.
              </p>
              <motion.h1
                className="text-3xl sm:text-5xl font-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                My Tech Stack
              </motion.h1>
            </div>
          </div>
        </div>

        <div className="mt-6 sm:mt-10 flex flex-col gap-2 sm:gap-3 items-center justify-center">
          {[0, 7, 15].map((startIdx, group) => (
            <div key={group} className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-3 w-full sm:w-auto">
              {techStack.slice(startIdx, startIdx + 7).map((tech, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: i * 0.02 }}
                  whileHover={{ scale: 1.05, rotate: 3, color: "orange" }}
                  viewport={{ once: false, amount: 0.2 }}
                  className="rounded-full py-1.5 sm:py-2 px-2 sm:px-3 flex items-center gap-1.5 sm:gap-2 border border-gray-700 bg-gray-900/50"
                >
                  <span className="w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center">
                    <Image src={tech.icon} alt={tech.name} />
                  </span>
                  <span className="text-xs sm:text-sm font-medium">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
