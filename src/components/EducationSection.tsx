'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { BookOpen, Calendar, Building2, Award, Code, Users } from 'lucide-react';
import Image from 'next/image';

interface Education {
  degree: string;
  institute: string;
  duration: string;
  cgpa: string;
  description: string[];
  achievements?: string[];
  logo?: string;
}

const educationData: Education[] = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institute: 'Dr. Ram Manohar Lohia Avadh University, Ayodhya',
    duration: '2024 - 2025',
    cgpa: '8.6',
    description: [
      'Specialized in Frontend & MERN Stack development with hands-on projects.',
      'Led a team in AI-based projects including Traffic Prediction System using Python & ML models.',
      'Enhanced research & problem-solving skills through workshops, webinars, and tech competitions.',
      'Gained practical experience in database management and full-stack web applications.',
    ],
    achievements: [
      'Published a minor research project on Machine Learning-based predictions.',
      'Completed 3+ advanced courses on React.js, Node.js, and Python.',
      'Awarded “Best Performer” in university coding competitions.',
    ],
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institute: 'Dr. Ram Manohar Lohia Avadh University, Ayodhya',
    duration: '2020 - 2023',
    cgpa: '8.2',
    description: [
      'Built strong foundation in Java, OOPs, DBMS, Web Development & Data Structures.',
      'Participated in coding contests, workshops, and technical clubs to strengthen programming skills.',
      'Completed multiple practical projects including Document Management System and mini web apps.',
    ],
    achievements: [
      'Secured top 10% in semester exams consistently.',
      'Certified in Python & Web Development from reputed online platforms.',
      'Active contributor in university tech forums and hackathons.',
    ],
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const EducationSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 w-full bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
            backgroundSize: '20px 20px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 mb-4 sm:mb-6">
            <BookOpen className="w-4 h-4 text-green-400" />
            <span className="text-xs sm:text-sm text-gray-300">Education</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent mb-3 sm:mb-4">
            Academic Background
          </h2>
          <p className="text-sm sm:text-base md:text-xl text-gray-400 max-w-2xl mx-auto">
            Building knowledge, skills & achievements that empower impactful solutions
          </p>
        </motion.div>

        {/* Education Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {educationData.map((edu, idx) => (
            <motion.div key={idx} variants={cardVariants} className="mb-10 sm:mb-12">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-zinc-600 via-zinc-500 to-zinc-600 rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-500"></div>
                <div className="relative bg-zinc-900 p-6 sm:p-8 rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-all duration-300">
                  {/* Top Info */}
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 sm:mb-8">
                    <div className="flex items-center mb-4 lg:mb-0">
                      {edu.logo && (
                        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-green-900 to-emerald-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                          <Image
                            src={edu.logo}
                            alt="logo"
                            className="object-contain"
                            width={64}
                            height={64}
                          />
                        </div>
                      )}
                      <div>
                        <h3 className="text-xl sm:text-3xl font-bold text-white mb-1">{edu.degree}</h3>
                        <p className="text-sm sm:text-xl text-green-400 font-semibold">{edu.institute}</p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-gray-400 text-xs sm:text-sm">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Building2 className="w-4 h-4" />
                        <span>CGPA: {edu.cgpa}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-6 sm:mb-4">
                    <ul className="space-y-3">
                      {edu.description.map((point, index) => (
                        <motion.li key={index} variants={itemVariants} className="flex items-start group">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0 group-hover:bg-green-300 transition-colors"></div>
                          <span className="text-sm sm:text-base text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                            <Code className="inline w-4 h-4 mr-2 text-green-400" />
                            {point}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Achievements */}
                  {edu.achievements && (
                    <div className="mt-4 sm:mt-6">
                      <h4 className="text-sm sm:text-base font-semibold text-green-400 flex items-center gap-2 mb-2">
                        <Award className="w-4 h-4" /> Achievements
                      </h4>
                      <ul className="space-y-2">
                        {edu.achievements.map((ach, i) => (
                          <motion.li key={i} variants={itemVariants} className="flex items-start group">
                            <Users className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                            <span className="text-sm sm:text-base text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                              {ach}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
