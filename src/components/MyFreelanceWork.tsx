// 'use client';

// import React from 'react';
// import { motion, Variants } from 'framer-motion';
// import {
//   Code,
//   Calendar,
//   Users,
//   ExternalLink,
//   Star,
//   Briefcase,
// } from 'lucide-react';
// import Image from 'next/image';
// import type { StaticImageData } from 'next/image';

// // Logo
// import logofreeelance from '/public/assets/logofreeelance.png';

// // --- Freelance Data Interface ---
// interface FreelanceProject {
//   title: string;
//   client: string;
//   duration: string;
//   role: string;
//   description: string[];
//   technologies?: string[];
//   logo?: string | StaticImageData;
//   website?: string;
// }

// const freelanceData: FreelanceProject[] = [
//   {
//     title: 'Travel Agency Website',
//     client: 'Indian Travels',
//     duration: 'Sep 2025 - Oct 2025 (2 Months)',
//     role: 'Frontend Lead (Full Frontend + Partial Backend Integration)',
//     description: [
//       'Designed a modern, responsive travel agency platform with pixel-perfect UI.',
//       'Managed entire frontend architecture including animations, responsiveness, and UX.',
//       'Integrated backend APIs for bookings, forms, and user authentication.',
//       'Handled two project cycles within timeline—one delivered, another in progress.',
//       'Ensured excellent mobile responsiveness and interactive booking flow.',
//     ],
//     technologies: [
//       'HTML', 'CSS', 'Tailwind CSS', 'Next.js', 'React', 'Framer Motion', 'Modern UI Libraries',
//     ],
//     logo: logofreeelance,
//     website: '#',
//   },
// ];

// // Motion Variants
// const containerVariants: Variants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, staggerChildren: 0.1 },
//   },
// };

// const itemVariants: Variants = {
//   hidden: { opacity: 0, x: -20 },
//   visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
// };

// const cardVariants: Variants = {
//   hidden: { opacity: 0, scale: 0.95 },
//   visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
// };

// const MyFreelanceWork: React.FC = () => {

//   const renderFreelanceCard = (project: FreelanceProject, idx: number) => (
//     <motion.div
//       key={idx}
//       variants={cardVariants}
//       className="mb-12 sm:mb-16"
//     >
//       <div className="relative group">

//         {/* Glow Border Effect */}
//         <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-green-500 rounded-2xl blur opacity-10 group-hover:opacity-20 transition-all duration-500"></div>

//         <div className="relative bg-zinc-900 p-6 md:p-8 rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-all duration-300 shadow-xl">

//           {/* Top Section */}
//           <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">

//             {/* Logo + Title */}
//             <div className="flex items-center gap-4">
//               {project.logo && (
//                 <div className="w-16 h-16 bg-gradient-to-br from-green-900 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
//                   <Image
//                     src={project.logo}
//                     alt={`${project.client} logo`}
//                     width={64}
//                     height={64}
//                     className="object-contain"
//                   />
//                 </div>
//               )}
//               <div>
//                 <h3 className="text-2xl sm:text-3xl font-bold text-white">{project.title}</h3>
//                 <p className="text-lg text-green-400 font-medium">{project.client}</p>
//               </div>
//             </div>

//             {/* Info Right */}
//             <div className="flex flex-col sm:flex-row gap-3 text-gray-300 text-sm">
//               <div className="flex items-center gap-2">
//                 <Calendar className="w-4 h-4 text-green-300" />
//                 <span>{project.duration}</span>
//               </div>

//               <div className="flex items-center gap-2">
//                 <Users className="w-4 h-4 text-green-300" />
//                 <span className="font-medium">Role: {project.role}</span>
//               </div>
//             </div>
//           </div>

//           {/* Description List */}
//           <ul className="space-y-3 mb-8">
//             {project.description.map((point, index) => (
//               <motion.li
//                 key={index}
//                 variants={itemVariants}
//                 className="flex items-start gap-3"
//               >
//                 <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>

//                 <span className="text-gray-300 text-base sm:text-lg leading-relaxed">
//                   <Star className="inline w-4 h-4 mr-2 text-green-400" />
//                   {point}
//                 </span>
//               </motion.li>
//             ))}
//           </ul>

//           {/* Technology Section */}
//           {project.technologies && (
//             <div className="mb-10">
//               <h4 className="text-lg font-semibold text-green-400 flex items-center gap-2 mb-4">
//                 <Code className="w-5 h-5" /> Technologies Used
//               </h4>

//               <div className="flex flex-wrap gap-2">
//                 {project.technologies.map((tech, i) => (
//                   <motion.span
//                     key={i}
//                     variants={itemVariants}
//                     className="px-4 py-2 text-xs sm:text-sm font-medium text-emerald-300 bg-zinc-800 rounded-full border border-green-700/50 hover:bg-zinc-700 transition-all"
//                   >
//                     {tech}
//                   </motion.span>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Button */}
//           {project.website && (
//             <div className="flex justify-end pt-6 border-t border-zinc-800">
//               <motion.a
//                 href={project.website}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 whileHover={{ scale: 1.05 }}
//                 className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-500 text-white font-semibold rounded-lg shadow-md hover:shadow-green-500/20 transition-all"
//               >
//                 Visit Website
//                 <ExternalLink className="w-4 h-4" />
//               </motion.a>
//             </div>
//           )}

//         </div>
//       </div>
//     </motion.div>
//   );

//   return (
//     <section className="w-full py-5 sm:py-20 bg-black text-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6">

//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 mb-5">
//             <Briefcase className="w-4 h-4 text-green-400" />
//             <span className="text-sm text-gray-300">Freelance Projects</span>
//           </div>

//           <h3 className="text-3xl sm:text-5xl font-bold mb-3">
//             Stunning Freelance Work
//           </h3>

//           <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
//             High-quality freelance projects delivered with modern UI, clean architecture & seamless UX.
//           </p>
//         </motion.div>

//         {/* Cards */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//         >
//           {freelanceData.map((project, idx) => renderFreelanceCard(project, idx))}
//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default MyFreelanceWork;


'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import {
  Code,
  Calendar,
  Users,
  ExternalLink,
  Star,
  Briefcase,
} from 'lucide-react';
import Image from 'next/image';
import type { StaticImageData } from 'next/image';

// Logo
const logofreeelance = '/assets/logofreeelance.png';

// --- Freelance Data Interface ---
interface FreelanceProject {
  title: string;
  client: string;
  duration: string;
  role: string;
  description: string[];
  technologies?: string[];
  logo?: string | StaticImageData;
  website?: string;
}

const freelanceData: FreelanceProject[] = [
  {
    title: 'Travel Agency Website',
    client: 'Indian Travels',
    duration: 'Sep 2025 - Oct 2025 (2 Months)',
    role: 'Frontend Lead (Full Frontend + Partial Backend Integration)',
    description: [
      'Designed a modern, responsive travel agency platform with pixel-perfect UI.',
      'Managed entire frontend architecture including animations, responsiveness, and UX.',
      'Integrated backend APIs for bookings, forms, and user authentication.',
      'Handled two project cycles within timeline—one delivered, another in progress.',
      'Ensured excellent mobile responsiveness and interactive booking flow.',
    ],
    technologies: [
      'HTML', 'CSS', 'Tailwind CSS', 'Next.js', 'React', 'Framer Motion', 'Modern UI Libraries',
    ],
    logo: logofreeelance,
    website: '#',
  },
];

// Motion Variants
const containerVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const MyFreelanceWork: React.FC = () => {

  const renderFreelanceCard = (project: FreelanceProject, idx: number) => (
    <motion.div
      key={idx}
      variants={cardVariants}
      className="mb-12 sm:mb-16"
    >
      <div className="relative group">

        {/* Glow Border Effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-green-500 rounded-2xl blur opacity-10 group-hover:opacity-20 transition-all duration-500"></div>

        <div className="relative bg-zinc-900 p-6 md:p-8 rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-all duration-300 shadow-xl">

          {/* Top Section */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">

            {/* Logo + Title */}
            <div className="flex items-center gap-4">
              {project.logo && (
                <div className="w-16 h-16 bg-gradient-to-br from-green-900 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Image
                    src={project.logo}
                    alt={`${project.client} logo`}
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
              )}
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">{project.title}</h3>
                <p className="text-lg text-green-400 font-medium">{project.client}</p>
              </div>
            </div>

            {/* Info Right */}
            <div className="flex flex-col sm:flex-row gap-3 text-gray-300 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-green-300" />
                <span>{project.duration}</span>
              </div>

              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-green-300" />
                <span className="font-medium">Role: {project.role}</span>
              </div>
            </div>
          </div>

          {/* Description List */}
          <ul className="space-y-3 mb-8">
            {project.description.map((point, index) => (
              <motion.li
                key={index}
                variants={itemVariants}
                className="flex items-start gap-3"
              >
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>

                <span className="text-gray-300 text-base sm:text-lg leading-relaxed">
                  <Star className="inline w-4 h-4 mr-2 text-green-400" />
                  {point}
                </span>
              </motion.li>
            ))}
          </ul>

          {/* Technology Section */}
          {project.technologies && (
            <div className="mb-10">
              <h4 className="text-lg font-semibold text-green-400 flex items-center gap-2 mb-4">
                <Code className="w-5 h-5" /> Technologies Used
              </h4>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <motion.span
                    key={i}
                    variants={itemVariants}
                    className="px-4 py-2 text-xs sm:text-sm font-medium text-emerald-300 bg-zinc-800 rounded-full border border-green-700/50 hover:bg-zinc-700 transition-all"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          )}

          {/* Button */}
          {project.website && (
            <div className="flex justify-end pt-6 border-t border-zinc-800">
              <motion.a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-500 text-white font-semibold rounded-lg shadow-md hover:shadow-green-500/20 transition-all"
              >
                Visit Website
                <ExternalLink className="w-4 h-4" />
              </motion.a>
            </div>
          )}

        </div>
      </div>
    </motion.div>
  );

  return (
    <section className="w-full py-5 sm:py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 mb-5">
            <Briefcase className="w-4 h-4 text-green-400" />
            <span className="text-sm text-gray-300">Freelance Projects</span>
          </div>

          <h3 className="text-3xl sm:text-5xl font-bold mb-3">
            Stunning Freelance Work
          </h3>

          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
            High-quality freelance projects delivered with modern UI, clean architecture & seamless UX.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {freelanceData.map((project, idx) => renderFreelanceCard(project, idx))}
        </motion.div>

      </div>
    </section>
  );
};

export default MyFreelanceWork;

