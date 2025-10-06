import React from "react";

// Freelance services data
const freelanceServices = [
  {
    title: "Landing Pages",
    description: "Creating responsive, high-converting landing pages with pixel-perfect design.",
  },
  {
    title: "Web Applications",
    description: "Building full-featured web apps using React.js, Next.js, and Tailwind CSS.",
  },
  {
    title: "UI/UX Design",
    description: "Designing clean, user-friendly interfaces with attention to modern UX patterns.",
  },
  {
    title: "Git & Collaboration",
    description: "Efficient version control and team collaboration using Git and GitHub.",
  },
];

// BentoCard component with hover effect
const BentoCard: React.FC<{
  title?: string;
  subtitle?: string;
  description?: string;
  className?: string;
  background?: React.ReactNode;
}> = ({ title, subtitle, description, className, background }) => (
  <div
    className={`group relative overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow-md p-6
     
      ${className}`}
  >
    {subtitle && <div className="text-sm text-zinc-400 mb-2">{subtitle}</div>}
    {title && <h3 className="font-bold text-zinc-200 text-xl mb-2">{title}</h3>}
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
          subtitle="Freelance Frontend Services"
          title="Modern, Responsive, and Pixel-Perfect Frontend Solutions"
          description="I provide freelance frontend development services focusing on React.js, Next.js, and Tailwind CSS. From landing pages to full-featured web apps, I ensure clean code, fast performance, and excellent user experience."
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
