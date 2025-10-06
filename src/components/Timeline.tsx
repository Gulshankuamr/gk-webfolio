// components/Timeline.tsx
import { FC } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { SkillTag } from '@/components/SkillTag';

interface TimelineHeadingProps {
  date: string;
  title: string;
  company: string;
  location: string;
}

export const TimelineHeading: FC<TimelineHeadingProps> = ({ 
  date, title, company, location 
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-100px" }}
      className="relative"
    >
      <div className="absolute right-0 w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hidden md:block mr-2"></div>
      <div className="space-y-1">
        <p className="text-gray-400 text-sm">{date}</p>
        <h3 className="text-2xl font-bold">{title}</h3>
        <div className="flex items-center gap-2 text-gray-400">
          <div className="bg-gray-700 text-white px-2 py-1 text-xs rounded">{company}</div>
        </div>
        <div className="flex items-center gap-1 text-gray-400 text-sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          {location}
        </div>
      </div>
    </motion.div>
  );
};

interface TimelineContentProps {
  children: React.ReactNode;
}

export const TimelineContent: FC<TimelineContentProps> = ({ children }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
      className="pl-0 md:pl-10 pb-20"
    >
      <div className="p-8 rounded-xl bg-gray-900 bg-opacity-50 backdrop-blur-sm border border-gray-800">
        {children}
      </div>
    </motion.div>
  );
};

interface TimelineExperienceProps {
  description: string;
  achievements: string[];
  projectImages: string[];
  skills: string[];
}

export const TimelineExperience: FC<TimelineExperienceProps> = ({ 
  description, achievements, projectImages, skills 
}) => {
  return (
    <TimelineContent>
      <div className="prose prose-invert max-w-none">
        <p className="text-gray-300">
          {description}
        </p>
        <ul className="space-y-6 mt-6">
          {achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </div>

      {/* Project image gallery */}
      <div className="mt-8 grid grid-cols-2 gap-4">
        {projectImages.map((image, index) => (
          <Image 
            key={index}
            src={image} 
            alt={`Project screenshot ${index + 1}`} 
            width={480} 
            height={300} 
            className="rounded-lg"
          />
        ))}
      </div>

      {/* Skills tags */}
      <div className="mt-6 flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <SkillTag key={index}>{skill}</SkillTag>
        ))}
      </div>
    </TimelineContent>
  );
};