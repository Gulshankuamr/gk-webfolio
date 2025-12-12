import React from "react";

// Freelance services data
const freelanceServices = [
  {
    title: "Landing Pages",
    description: "High-converting, responsive landing pages crafted with modern UI precision.",
  },
  {
    title: "Web Applications",
    description: "Custom web apps built using React.js, Next.js, and Tailwind for performance.",
  },
  {
    title: "UI/UX Improvements",
    description: "Enhancing user experience with clean, intuitive, and modern interface design.",
  },
  {
    title: "Code Collaboration",
    description: "Professional Git & GitHub workflow for smooth team collaboration.",
  },
];

// BentoCard component with hover effect
interface BentoCardProps {
  title?: string;
  subtitle?: string;
  description?: string;
  className?: string;
  background?: React.ReactNode;
}

const BentoCard = ({ title, subtitle, description, className, background }: BentoCardProps) => (
  <div
    className={`group relative overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow-md p-6 
      transition-all duration-300 
      hover:border-purple-500 hover:shadow-purple-500/30 hover:scale-[1.03]
      ${className}`}
  >
    {subtitle && <div className="text-sm text-zinc-400 mb-2">{subtitle}</div>}
    {title && <h3 className="font-bold text-zinc-200 text-xl mb-2 group-hover:text-purple-400 transition-all">{title}</h3>}
    {description && <p className="text-sm text-zinc-400">{description}</p>}
    {background && <div className="mt-4">{background}</div>}
  </div>
);

// Main Freelance Services Section
export default function FreelanceServicesSection() {
  return (
    <div className="bg-black w-full py-16">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-4 mx-auto max-w-7xl">
        
        {/* Full Width Intro Card */}
        <BentoCard
          subtitle="Available for Freelance Work"
          title="Building Modern, High-Quality Web Experiences"
          description="I help businesses and individuals create fast, responsive, and visually impressive digital experiences. From landing pages to complete web applications — I deliver pixel-perfect results with clean code and modern technologies."
          className="md:col-span-12"
        />

        {/* Service Cards */}
        {freelanceServices.map((service, idx) => (
          <BentoCard
            key={idx}
            title={service.title}
            description={service.description}
            className="md:col-span-3 h-40"
          />
        ))}
      </div>
    </div>
  );
}
