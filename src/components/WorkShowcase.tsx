
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import type { StaticImageData } from "next/image";

import myntraimage from "/public/assets/myntraimage.png";
import weatherapp from "/public/assets/weatherapp.png";
import imageResize from "/public/assets/imageResize.png";
import gsapwww from "/public/assets/gsapwww.png";
import gsap from "/public/assets/gsap.png";
import PortfolioImage from "/public/assets/portfolio.png";
import blogsphere from "/public/assets/blogsphere.png";
import videochatapp from "/public/assets/videochatapp.png";

import html from "/public/assets/html.png";
import csss from "/public/assets/csss.png";
import javascriptt from "/public/assets/javascriptt.png";
import nextjs from "/public/assets/nextjs.png";
import react from "/public/assets/react.png";
import tailwindcss from "/public/assets/tailwindcss.png";
import typescript from "/public/assets/typescript.svg";
import shadcn from "/public/assets/shadcn.png";
import framer from "/public/assets/framermotion.png";
import restapi from "/public/assets/restapi.png";

import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";

interface Project {
  id: number;
  link: string;
  title: string;
  description: string;
  tagline: string;
  techStack: {
    name: string;
    icon: string | StaticImageData;
  }[];
  features: string[];
  image: string | StaticImageData;
  accentColor: string;
  bgGradient: string;
}

export default function WorkShowcaseSnapping() {
  const [activeProject, setActiveProject] = useState(0);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [expandedMobile, setExpandedMobile] = useState<number | null>(null);
  const componentRef = useRef<HTMLDivElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  const projects: Project[] = [
    {
      id: 1,
      link: "https://myntrix.vercel.app/",
      title: "Myntra WebApp",
      tagline: "A responsive e-commerce UI inspired by Myntra.",
      description:
        "Built a modern, mobile-friendly e-commerce web application UI using React.js and Bootstrap, with reusable components, product listings, navigation bar, and category sections for consistent user experience.",
      techStack: [
        { name: "React", icon: react },
        { name: "HTML", icon: html },
        { name: "CSSS", icon: csss },
        { name: "Javascriptt", icon: javascriptt },
      ],
      features: [
        "Responsive and mobile-friendly interface",
        "Reusable components for consistent UI",
        "Category-based navigation and product listings",
        "Optimized performance and smooth UX across devices",
        "Responsive UI designed for student accessibility",
      ],
      image: myntraimage,
      accentColor: "bg-green-500",
      bgGradient: "from-green-800 to-green-600",
    },
    {
      id: 2,
      link: "https://meet-vidchat-app.vercel.app/",
      title: "Video Chat App",
      tagline: "Seamless real-time video calling and chat platform.",
      description:
        "Built a real-time Video Chat Application using React.js, Tailwind CSS, and JavaScript with API integration, enabling instant messaging and smooth live video meetings. Designed an interactive, responsive interface for users.",
      techStack: [
        { name: "React", icon: react },
        { name: "HTML", icon: html },
        { name: "CSSS", icon: csss },
        { name: "Javascriptt", icon: javascriptt },
        { name: "REST API", icon: restapi },
        { name: "Tailwind CSS", icon: tailwindcss },
      ],
      features: [
        "Real-time video calling and chat",
        "Interactive and responsive UI",
        "Smooth performance for live communication",
        "API integration for instant messaging",
      ],
      image: videochatapp,
      accentColor: "bg-orange-500",
      bgGradient: "from-zinc-950 to-orange-400",
    },
    {
      id: 3,
      link: "https://weatherapp-react-sandy.vercel.app/",
      title: "Weather App",
      tagline: "Real-time weather updates with dynamic, responsive UI.",
      description:
        "Developed a modern Weather App using React.js and Tailwind CSS with real-time Weather API integration. Features include city-based search, dynamic backgrounds, and smooth performance across devices.",
      techStack: [
        { name: "React", icon: react },
        { name: "Tailwind CSS", icon: tailwindcss },
        { name: "HTML", icon: html },
        { name: "CSSS", icon: csss },
        { name: "Javascriptt", icon: javascriptt },
        { name: "REST API", icon: restapi },
      ],
      features: [
        "City-based weather search",
        "Dynamic background changes based on weather",
        "Responsive design for desktop and mobile",
        "Smooth and interactive UI experience",
      ],
      image: weatherapp,
      accentColor: "bg-yellow-500",
      bgGradient: "from-yellow-600 to-orange-600",
    },
    {
      id: 4,
      link: "https://blog-sphere-gamma-ruby.vercel.app/",
      title: "BlogSphere",
      tagline:
        "A personal blogging platform built entirely on the frontend, empowering anyone to create, customize, and share their own blogs with ease.",
      description:
        "BlogSphere is a frontend blog application designed with Next.js and Tailwind CSS. It allows users to easily write, update, and showcase their personal blogs within a smooth and interactive interface, offering a complete blogging experience without complex setup.",
      techStack: [
        { name: "Next.js", icon: nextjs },
        { name: "Tailwind CSS", icon: tailwindcss },
        { name: "HTML", icon: html },
        { name: "Javascriptt", icon: javascriptt },
      ],
      features: [
        "User-based personal blogging system",
        "Create, edit, and delete blogs with ease",
        "Responsive design optimized for all devices",
        "Fast navigation and performance with Next.js",
        "Clean and modern UI built with Tailwind CSS",
      ],
      image: blogsphere,
      accentColor: "bg-green-600",
      bgGradient: "from-green-700 to-lime-600",
    },
    {
      id: 5,
      link: "https://gk-webfolio.vercel.app/",
      title: "Portfolio",
      tagline: "Dynamic and interactive portfolio showcasing my work and skills.",
      description:
        "Built a high-performance portfolio website to highlight my projects, technical skills, and web development journey, combining modern UI design with smooth animations and a responsive layout",
      techStack: [
        { name: "Next.js", icon: nextjs },
        { name: "TypeScript", icon: typescript },
        { name: "Framer Motion", icon: framer },
        { name: "Tailwind CSS", icon: tailwindcss },
        { name: "ShadCN UI", icon: shadcn },
      ],
      features: [
        "Smooth animations and transitions using Framer Motion",
        "Interactive UI components with ShadCN and Tailwind CSS",
        "Project showcase with detailed descriptions and tech stack",
        "Fully responsive design optimized for all devices",
        "Clean codebase using TypeScript for maintainability",
      ],
      image: PortfolioImage,
      accentColor: "bg-cyan-500",
      bgGradient: "from-cyan-800 to-cyan-600",
    },
    {
      id: 6,
      link: "https://image-resize-gamma-tan.vercel.app/",
      title: "PicResizer",
      tagline: "Resize, compress, and convert images instantly with just a few clicks.",
      description:
        "PicResizer is a powerful image resizing and conversion tool built with Next.js and Tailwind CSS. It supports multiple formats like PNG, JPG, and PDF, allowing users to easily reduce or increase file size (KB ↔ MB) while maintaining quality. With a simple and intuitive interface, it delivers fast and accurate results for all image processing needs.",
      techStack: [
        { name: "Next.js", icon: nextjs },
        { name: "Tailwind CSS", icon: tailwindcss },
        { name: "HTML", icon: html },
        { name: "TypeScript", icon: typescript },
      ],
      features: [
        "Resize images from KB to MB or MB to KB effortlessly",
        "Support for multiple file formats (PNG, JPG, PDF, etc.)",
        "High-quality compression without losing clarity",
        "Convert between image types instantly",
        "Responsive UI optimized for all devices",
        "Fast and smooth performance with Next.js",
      ],
      image: imageResize,
      accentColor: "bg-blue-500",
      bgGradient: "from-blue-950 to-blue-800",
    },
    {
      id: 7,
      link: "https://gsapawwwwwwrads.vercel.app/",
      title: "Awwwards Site Clone",
      tagline: "Experience a visually stunning, interactive website powered by GSAP animations and React UI.",
      description:
        "An award-worthy, interactive website focused on stunning UI and smooth GSAP animations. Built with ReactJS and Tailwind CSS, it brings every element to life with dynamic scroll effects and engaging motion design, creating a truly immersive user experience.",
      techStack: [
        { name: "React", icon: react },
        { name: "Tailwind CSS", icon: tailwindcss },
        { name: "GSAP", icon: gsap },
        { name: "HTML", icon: html },
        { name: "JavaScript", icon: javascriptt },
      ],
      features: [
        "Smooth and dynamic GSAP animations for an engaging UI",
        "Interactive scroll effects with ScrollTrigger & ScrollSmoother",
        "Pin and animate elements to highlight key content",
        "Clip-path animations for creative, modern layouts",
        "Text and content reveal animations that enhance UX",
        "Highly responsive and visually consistent across devices",
        "Clean, modern UI designed for maximum aesthetic appeal",
        "Fully hands-on: build, animate, and customize every component",
      ],
      image: gsapwww,
      accentColor: "bg-teal-500",
      bgGradient: "from-teal-800 to-teal-600",
    },
  ];

  const toggleExpandedMobile = (index: number) => {
    setExpandedMobile(expandedMobile === index ? null : index);
  };

  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const viewportCenter = viewportHeight / 2;

      let closestProject = 0;
      let closestDistance = Number.MAX_VALUE;

      projectRefs.current.forEach((projectRef, index) => {
        if (!projectRef) return;
        const rect = projectRef.getBoundingClientRect();
        const projectCenter = rect.top + rect.height / 2;
        const distance = Math.abs(projectCenter - viewportCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestProject = index;
        }
      });

      if (closestProject !== activeProject) {
        setActiveProject(closestProject);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeProject]);

  return (
    <div ref={componentRef} className="bg-black pt-20 md:pt-8 w-full text-white">
      <div className="pt-5 px-4 md:px-10 max-w-7xl mx-auto">
        <div className="text-center mb-5">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="text-gray-300 uppercase tracking-wider font-medium text-xs md:text-sm mb-1 md:mb-2"
          >
            Code Meets Creativity
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold"
          >
            <span className="text-white">Crafted </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
              Projects
            </span>
          </motion.div>
        </div>

        <div className="relative">
          <div className="flex flex-col md:flex-row">
            {/* Left side */}
            <div className="w-full md:w-1/2">
              {/* Mobile Cards */}
              <div className="md:hidden space-y-8 my-8">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    className="rounded-xl overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: false, margin: "-50px" }}
                  >
                    <div className={`bg-gradient-to-b ${project.bgGradient} rounded-xl`}>
                      <div className="relative h-52 w-full overflow-hidden">
                        <Image src={project.image} alt={project.title} className="object-cover" />
                      </div>
                      <div className="p-4">
                        <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                        <p className="text-sm text-gray-300 mb-3">{project.tagline}</p>

                        <div className="flex flex-wrap gap-2 mb-3">
                          {project.techStack.slice(0, 4).map((tech, i) => (
                            <div key={i} className="rounded-full py-1 px-2 flex items-center gap-1 border border-gray-700 bg-black/30">
                              <span className="w-3 h-3 flex items-center justify-center">
                                <Image src={tech.icon} alt={tech.name} />
                              </span>
                              <span className="text-xs font-medium">{tech.name}</span>
                            </div>
                          ))}
                          {project.techStack.length > 4 && (
                            <div className="rounded-full py-1 px-2 flex items-center border border-gray-700 bg-black/30">
                              <span className="text-xs font-medium">+{project.techStack.length - 4}</span>
                            </div>
                          )}
                        </div>

                        <div className="mt-2">
                          <button onClick={() => toggleExpandedMobile(index)} className="flex items-center text-xs text-gray-300 font-medium">
                            {expandedMobile === index ? "Show less" : "Show more"}
                            {expandedMobile === index ? <ChevronUp className="w-4 h-4 ml-1" /> : <ChevronDown className="w-4 h-4 ml-1" />}
                          </button>
                          {expandedMobile === index && (
                            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="mt-3 space-y-3">
                              <p className="text-xs text-gray-300">{project.description}</p>
                              <div className="space-y-2">
                                <h4 className="text-sm font-medium text-white">Key Features:</h4>
                                {project.features.map((feature, i) => (
                                  <div key={i} className="flex items-start gap-2">
                                    <span className={`${project.accentColor.replace("bg-", "text-")} text-xs mt-1`}>•</span>
                                    <p className="text-xs text-gray-300">{feature}</p>
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </div>

                        <Link href={project.link} target="_blank" rel="noopener noreferrer" className="mt-4 flex justify-center items-center gap-2 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-sm w-full py-2 text-sm font-medium transition-colors">
                          View Project <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Desktop Cards */}
              <div className="hidden md:block">
                {projects.map((project, index) => {
                  const isHovered = hoveredProject === index;
                  return (
                  <div
  key={project.id}
  ref={(el) => {
    projectRefs.current[index] = el;
  }}
  className="py-24 flex items-center relative"
  onMouseEnter={() => setHoveredProject(index)}
  onMouseLeave={() => setHoveredProject(null)}
>
  <Link href={project.link} target="_blank" rel="noopener noreferrer">
    <motion.div
      whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
      className="w-full cursor-pointer"
    >
      <div
        className={`bg-gradient-to-b ${project.bgGradient} overflow-hidden rounded-3xl px-8 pt-10 flex flex-col`}
      >
        <div className="text-white flex flex-row text-2xl font-bold mb-6">
          {project.tagline}
          <div className="ml-auto flex items-center justify-center">
            <motion.div
              className="flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-6 py-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          </div>
        </div>
        <div
          className={`relative h-80 w-full overflow-hidden transition-transform duration-300 rounded-xl mt-4 group ${
            isHovered ? "scale-110 -rotate-5" : "scale-100"
          }`}
        >
          <Image src={project.image} alt={project.title} />
        </div>
      </div>
    </motion.div>
  </Link>
</div>

                  );
                })}
              </div>
            </div>

            {/* Right side */}
            <div className="hidden md:block md:w-1/2 sticky top-0 h-screen items-center">
              <div className="h-full flex items-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeProject}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="p-8 h-full flex flex-col justify-center"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <div className={`h-1 w-10 ${projects[activeProject].accentColor}`}></div>
                      <h3 className="text-2xl font-bold">{projects[activeProject].title}</h3>
                    </div>
                    <p className="text-gray-300 mb-6">{projects[activeProject].description}</p>
                    <div className="space-y-4">
                      {projects[activeProject].features.map((feature, i) => (
                        <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} className="flex items-start gap-3">
                          <span className={`${projects[activeProject].accentColor.replace("bg-", "text-")} mt-1`}>+</span>
                          <p className="text-gray-300">{feature}</p>
                        </motion.div>
                      ))}
                    </div>
                    <div className="mt-10 flex flex-wrap gap-3">
                      {projects[activeProject].techStack.slice(0, 12).map((tech, i) => (
                        <motion.div key={i} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3, delay: i * 0.05 }} className="rounded-full py-1 px-2 flex items-center gap-2 border border-gray-700">
                          <span className="w-5 h-5 flex items-center justify-center">
                            <Image src={tech.icon} alt={tech.name} />
                          </span>
                          <span className="text-sm font-medium">{tech.name}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
