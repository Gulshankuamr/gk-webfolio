'use client'

import React from 'react';

// import EducationSection from './EducationSection';
import EducationSection from '@/components/EducationSection';

import { motion } from 'framer-motion';
import {
  Code,
  Calendar,
  MapPin,
  ExternalLink,
  Tractor,
  Database,
  Globe,
  Users,
  Zap,
  Building2,
  LayoutGrid,
  
} from 'lucide-react';
import Image from 'next/image';
import type { StaticImageData } from 'next/image';

// Logos
import byteupriselogo from '/public/assets/byteupriselogo.png';

import logo from '/public/assets/logo.png';



interface WorkExperience {
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string[];
  logo: string | StaticImageData;
  screenshots?: (string | StaticImageData)[];
  website: string;
  achievements: string[];
  techStack: string[];
}

const workData: WorkExperience[] = [
{
  company: 'ByteUprise',
  role: 'Frontend Developer',
  duration: 'Jan 2025 - Aug 2025',
  location: 'Remote',
  description: [
    'Contributed to the development of responsive and user-friendly web applications using React.js and Next.js.',
    'Built and optimized reusable React components with a focus on performance and scalability.',
    'Implemented responsive designs using Tailwind CSS and Bootstrap, ensuring seamless UI across devices.',
    'Integrated REST APIs for real-time data handling and enhanced application functionality.',
    'Collaborated with senior developers through Git/GitHub workflows, managing version control and code reviews.',
    'Enhanced problem-solving and debugging skills by working on live projects under tight deadlines.'
  ],
  logo: byteupriselogo,
 
  website: 'https://www.byteuprise.com/',
achievements: [
  'Worked on live company projects involving React.js and Next.js.',
  'Successfully implemented fully responsive UIs for real-time applications.',
  'Improved cross-browser compatibility and UI performance across multiple projects.',
  'Strengthened collaboration skills by working in a dynamic and fast-paced development team.'
],
  techStack: [
    'React.js', 'Next.js', 'Tailwind CSS', 'REST APIs',
    'Bootstrap', 'JavaScript', 'Git/GitHub', 'Figma' , 'Vercel'
  ],

},
{
  company: 'Techpile Technology Pvt. Ltd.',
  role: 'Web Developer Intern',
  duration: 'Jul 2024 - Dec 2024',
  location: 'Lucknow, Uttar Pradesh, India · On-site',
  description: [
    'Gained hands-on experience in frontend web development using HTML5, CSS3, JavaScript, and bootstrap.',
    'Worked on building responsive, scalable, and user-friendly interfaces.',
    'Enhanced understanding of modern development practices and UI/UX design principles.',
    'Improved skills in structuring clean and maintainable front-end code for real-world projects.'
  ],
  logo: logo, // tum apne assets me logo daal dena
  website: 'https://www.techpile.in',
  achievements: [
    'Developed a **Myntra Clone** focusing on layout structure and product presentation.',
    'Built the **Taniqu Website**, a clean and responsive company profile UI.',
    'Created the **Blankit Website**, a professional and engaging front-end for a tech platform.',
    'Successfully applied responsive web design practices to deliver cross-device compatibility.'
  ],
  techStack: [
    'HTML5', 'CSS3', 'JavaScript',
    'Bootstrap', 'UI/UX Design','SQL'
  ],
},
];

const WorkExperience: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-16 sm:py-20 w-full bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 mb-4 sm:mb-6">
            <Building2 className="w-4 h-4 text-green-400" />
            <span className="text-xs sm:text-sm text-gray-300">Professional Experience</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent mb-3 sm:mb-4">
             
            <span className="text-white">Work </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
              Experience
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-xl text-gray-400 max-w-2xl mx-auto">
            Building impactful solutions that transform industries
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {workData.map((work, idx) => (
            <motion.div key={idx} variants={cardVariants} className="mb-10 sm:mb-12">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-zinc-600 via-zinc-500 to-zinc-600 rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-500"></div>
                <div className="relative bg-zinc-900 p-6 sm:p-8 rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 sm:mb-8">
                    <div className="flex items-center mb-4 lg:mb-0">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-green-900 to-emerald-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                        <Image src={work.logo} alt="logo" className="object-contain" />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-3xl font-bold text-white mb-1">{work.company}</h3>
                        <p className="text-sm sm:text-xl text-green-400 font-semibold">{work.role}</p>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-gray-400 text-xs sm:text-sm">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{work.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{work.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6 sm:mb-8">
                    <p className="text-sm sm:text-lg text-gray-300 leading-relaxed mb-4">
                      {work.company === 'ByteUprise'
                          ? "At ByteUprise, I crafted modern web applications using React.js and Next.js, delivering responsive, high-performing, and reusable UI components while contributing to live projects and enhancing team collaboration."
                          : "At Techpile Technology Pvt. Ltd., I built clean, responsive user interfaces using HTML, CSS, JavaScript, and Bootstrap, working on real-world projects like Myntra Clone, Taniqu, and Blankit websites to strengthen my frontend development skills."}
                    </p>
                  </div>

                  {/* Achievements */}
                  <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
                    {work.achievements.map((achievement, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="bg-zinc-800 rounded-lg p-3 sm:p-4 text-center border border-green-900 hover:border-green-500/50 transition-colors duration-300"
                      >
                        <div className="text-green-400 font-bold text-base mb-1">
                          {index === 0 && <Users className="w-5 h-5 mx-auto mb-1" />}
                          {index === 1 && (work.company === 'ByteUprise' ? <LayoutGrid className="w-5 h-5 mx-auto mb-1" /> : <LayoutGrid className="w-5 h-5 mx-auto mb-1" />)}
                          {index === 2 && <Globe className="w-5 h-5 mx-auto mb-1" />}
                          {index === 3 && <Zap className="w-5 h-5 mx-auto mb-1" />}
                        </div>
                        <p className="text-xs sm:text-sm text-gray-300 font-medium">{achievement}</p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Responsibilities */}
                  <div className="mb-6 sm:mb-8">
                    <h4 className="text-lg sm:text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <Code className="w-5 h-5 text-green-400" />
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-3">
                      {work.description.map((point, index) => (
                        <motion.li key={index} variants={itemVariants} className="flex items-start group">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0 group-hover:bg-green-300 transition-colors"></div>
                          <span className="text-sm sm:text-base text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                            {point}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6 sm:mb-8">
                    <h4 className="text-lg sm:text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <Database className="w-5 h-5 text-blue-400" />
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {work.techStack.map((tech, index) => (
                        <motion.span
                          key={index}
                          variants={itemVariants}
                          className="px-3 py-1 sm:px-4 sm:py-2 bg-zinc-800 text-gray-300 rounded-full text-xs sm:text-sm border border-emerald-900 hover:border-blue-500/50 hover:text-blue-300 transition-all duration-300"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Only show screenshots if available */}
                  {work.screenshots && (
                    <div className="mb-6 sm:mb-8">
                      <h4 className="text-lg sm:text-xl font-semibold text-white mb-4 flex items-center gap-2">
                        <Globe className="w-5 h-5 text-purple-400" />
                        Platform Preview
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                        {work.screenshots.map((screenshot, index) => (
                          <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ scale: 1.01, y: -1 }}
                            transition={{ duration: 0.3 }}
                            className="relative group cursor-pointer"
                          >
                            <div className="absolute -inset-1 bg-gradient-to-r from-zinc-600 to-zinc-500 rounded-lg blur opacity-10 group-hover:opacity-20 transition duration-300"></div>
                            <div className="relative bg-zinc-800 rounded-lg overflow-hidden border border-zinc-700 aspect-video">
                              <Image src={screenshot} alt="screenshot" fill className="object-cover" />
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-between pt-5 border-t border-zinc-800">
                    <p className="text-sm text-gray-400 flex items-center gap-2">
                      {work.company === 'ByteUprise'
                        ? <Globe className="w-5 h-5 text-green-400" />
                        : <Globe className="w-5 h-5 text-green-400" />}
                      {work.company === 'ByteUprise'
                        ? 'Explore my journey at ByteUprise'
                        : 'Explore my journey at Techpile'}
                    </p>
                    <motion.a
                      href={work.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-6 py-2 sm:py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 group text-sm sm:text-base"
                    >
                      Visit {work.company}
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <EducationSection/>
    </section>
  );
};

export default WorkExperience;
