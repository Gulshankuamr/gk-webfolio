'use client';

import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence, Variants, Transition } from "framer-motion";

interface Feature {
  title: string;
  description: string;
  icon: string;
  details: string;
}

const features: Feature[] = [
  {
    title: "Website Development",
    description: "Custom websites tailored to your vision.",
    icon: "💻",
    details:
      "I design and develop responsive, high-performance websites from scratch using modern technologies. Portfolio, blogs, or business sites – all with intuitive navigation and seamless user experience.",
  },
  {
    title: "SEO Optimized",
    description: "Better visibility & higher rankings.",
    icon: "🔎",
    details:
      "Using semantic HTML, metadata, clean URLs, and fast-loading pages to improve search engine visibility, drive traffic, and boost online presence effectively.",
  },
  {
    title: "Modern Design",
    description: "Clean, contemporary UI reflecting your brand.",
    icon: "🎨",
    details:
      "I craft visually appealing interfaces using modern UI/UX principles: minimal design, smooth interactions, accessible layouts that leave a lasting impression.",
  },
  {
    title: "Responsive",
    description: "Perfect experience across all devices.",
    icon: "📱",
    details:
      "Every website works flawlessly on desktops, tablets, and mobiles. Responsive layouts, flexible grids, and mobile-first design ensure smooth functionality everywhere.",
  },
  {
    title: "Landing Pages",
    description: "High-converting pages built for impact.",
    icon: "⚡",
    details:
      "Fast, optimized landing pages that convert visitors into customers. From compelling headlines to focused CTAs, every element serves a purpose.",
  },
];

export default function Services() {
  const [showModal, setShowModal] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null);

  const carousel = useRef<HTMLDivElement>(null);

  // Close modal on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        showModal &&
        carousel.current &&
        !carousel.current.contains(e.target as Node)
      ) {
        setShowModal(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showModal]);

  const openModal = (feature: Feature) => {
    setSelectedFeature(feature);
    setShowModal(true);
  };

  // Animation variants
  const overlayVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  };

  const modalVariants: Variants = {
    hidden: { scale: 0.8, opacity: 0, y: 20 },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, damping: 25, stiffness: 300 } as Transition,
    },
    exit: {
      scale: 0.8,
      opacity: 0,
      y: 20,
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="py-8 sm:py-16 bg-black w-full">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 text-center">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-10"
        >
          <span className="text-white">What I </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
            Provide
          </span>
        </motion.h2>

        {/* Feature Carousel */}
        <motion.div
          ref={carousel}
          className="cursor-grab overflow-x-auto flex gap-4 snap-x snap-mandatory"
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              className="min-w-[280px] sm:min-w-[300px] h-[360px] sm:h-[400px] p-6 bg-zinc-800 rounded-2xl shadow-lg flex flex-col justify-between snap-center border-2 border-transparent hover:border-pink-500 transition-all duration-300"
            >
              <div>
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base">
                  {feature.description}
                </p>
              </div>
              <button
                onClick={() => openModal(feature)}
                className="mt-4 text-white text-sm sm:text-base hover:underline"
              >
                Learn more →
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {showModal && selectedFeature && (
            <motion.div
              className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={overlayVariants}
            >
              <motion.div
                className="bg-zinc-800 rounded-lg p-6 sm:p-8 max-w-md w-full relative shadow-xl"
                variants={modalVariants}
              >
                {/* Close Button */}
                <button
                  onClick={() => setShowModal(false)}
                  className="absolute top-3 right-3 text-gray-100 hover:text-gray-400 transition-colors"
                >
                  ✕
                </button>

                {/* Modal Content */}
                <div className="text-4xl mb-4">{selectedFeature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white">
                  {selectedFeature.title}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base mb-4">
                  {selectedFeature.description}
                </p>
                <div className="border-t border-gray-700 pt-3">
                  <h4 className="text-base font-semibold mb-2 text-white">
                    Details
                  </h4>
                  <p className="text-gray-300 text-sm sm:text-base">
                    {selectedFeature.details}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
