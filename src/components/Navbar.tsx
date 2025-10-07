"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../lib/utils";
import { Menu, X } from "lucide-react";

interface NavItem {
  name: string;
  url: string;
}

const navItems: NavItem[] = [
  { name: "Home", url: "/" },
  { name: "Projects", url: "/projects" },
  { name: "About", url: "/about" },
  { name: "Experience", url: "/experience" },
  { name: "Blog", url: "/blog" },
  { name: "Contact", url: "/contact" },
];

const NavBar: React.FC = () => {
  const pathname = usePathname();
  const [activeItem, setActiveItem] = useState<string>("");
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const hamburgerButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const active = navItems.find((item) => pathname?.startsWith(item.url))?.name || navItems[0].name;
    setActiveItem(active);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        hamburgerButtonRef.current &&
        !hamburgerButtonRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };
    if (isMobileMenuOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <div className="fixed md:top-2 left-1/2 -translate-x-1/2 z-50 w-full max-w-screen-lg px-5">
      <div className="flex backdrop-blur-sm md:backdrop-blur-none py-4 md:py-0 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-white">
          GK
        </Link>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            ref={hamburgerButtonRef}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center justify-center bg-black/20 backdrop-blur-md rounded-full px-6 py-2 border border-white/10 relative">
          {navItems.map((item) => {
            const isActive = activeItem === item.name;
            const isHovered = hoveredItem === item.name;
            return (
              <div
                key={item.name}
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
                className="relative"
              >
                <Link
                  href={item.url}
                  onClick={() => setActiveItem(item.name)}
                  className={cn(
                    "relative px-4 py-2 text-sm transition-colors",
                    isActive || isHovered
                      ? "text-white font-semibold"
                      : "text-white/70 hover:text-white"
                  )}
                >
                  {item.name}
                </Link>

                {/* Animated line for hover/active */}
                {(isActive || isHovered) && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-white rounded-full"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex ml-4 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/10 hover:bg-white/20 transition">
          <Link href="/contact" className="text-white text-sm font-medium">
            Book a Call
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 bg-black/95 rounded-xl px-4 py-4 border border-white/10"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.url}
                onClick={() => {
                  setActiveItem(item.name);
                  setIsMobileMenuOpen(false);
                }}
                className={cn(
                  "block py-2 text-sm transition-colors",
                  activeItem === item.name
                    ? "text-white font-semibold"
                    : "text-white/70 hover:text-white"
                )}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-3">
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block bg-white/20 px-4 py-2 rounded-full text-white text-sm text-center border border-white/10 hover:bg-green-500 hover:text-white transition duration-300"
              >
                Book a Call
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavBar;
