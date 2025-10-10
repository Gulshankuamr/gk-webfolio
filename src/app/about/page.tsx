'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {  Linkedin,  Mail, Instagram , FileUser} from 'lucide-react';
import SplashCursor from './SplashCursor'


// Import social icons
import profileImage from '/public/gulshan.jpg'; // Replace with your actual image path
// import resumegk from '/public/resumegk.pdf'; // Replace with your actual image path

interface TimelineItem {
  id: number;
  date: string;
  title: string;
  company: string;
  location: string;
  remote: boolean;
  description: string;
  achievements: string[];
  skills: string[];
  images?: string[];
}

export default function AboutPage() {
  const [activeTimelineItem, setActiveTimelineItem] = useState(0);
  const timelineRefs = useRef<(HTMLDivElement | null)[]>([]);

 const timelineItems: TimelineItem[] = [
  {
    id: 1,
    date: "JAN 2025 - AUG 2025",
    title: "Frontend Developer",
    company: "ByteUprise",
    location: "Remote",
    remote: true,
    description: "At ByteUprise, I worked on live company projects building the core car rental management dashboard. My role focused on creating responsive, dynamic web applications and improving UI performance across devices.",
    achievements: [
      "Built fully responsive UIs for real-time applications using React.js and Next.js.",
      "Implemented reusable components with a focus on performance and scalability.",
      "Integrated REST APIs for real-time data handling and enhanced app functionality.",
      "Strengthened collaboration skills in a fast-paced development team.",
      "Delivered technology-driven solutions enhancing usability and efficiency."
    ],
   skills: [
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "Bootstrap",
  "Material-UI (MUI)",
  "GSAP (GreenSock Animation)",
  "Chakra UI",
  "React Router",
  "Redux / Redux Toolkit",
  "Context API",
  "JavaScript (ES6+)",
  "TypeScript",
  "Axios / Fetch API",
  "Framer Motion",
  "Formik / React Hook Form",
  "Yup / Zod (validation)",
  "Git / GitHub",
  "REST APIs",
  "React Query",
  "React Icons",
  "Vite / Webpack / Babel"
]

  },
  {
    id: 2,
    date: "JUL 2024 - DEC 2024",
    title: "Web Developer Intern",
    company: "Techpile Technology Pvt. Ltd.",
    location: "Lucknow, India · On-site",
    remote: false,
    description: "Worked on multiple frontend projects including the Myntra Clone, Taniqu Website, and Blankit Website. Applied responsive web design principles and created scalable, clean interfaces for real-world applications.",
    achievements: [
      "Developed Myntra Clone focusing on layout and product presentation.",
      "Built Taniqu Website and Blankit Website with clean, responsive UI.",
      "Gained hands-on experience with HTML, CSS, JavaScript, and Bootstrap.",
      "Enhanced understanding of UI/UX design principles and frontend architecture."
    ],
   skills: [
  "HTML5",
  "CSS3",
  "JavaScript (ES6+)",
  "Bootstrap",
  "Tailwind CSS",
  "SQL ",
  "RESTful APIs",
  "GraphQL / Apollo Client",
  "Axios / Fetch API",
  "Responsive Web Design",
  "Cross-Browser Compatibility",
  "Version Control",
 
]

  },
{
  id: 3,
  date: "2020 - 2025",
  title: "Education",
  company: "Dr. Ram Manohar Lohia Avadh University, Ayodhya",
  location: "Lucknow / Ayodhya, India",
  remote: false,
  description: "Completed Bachelor and Master programs with specialization in Frontend & MERN Stack development, building strong foundations in programming, web development, and AI-based projects.",
  achievements: [
    "Master of Computer Applications (MCA): Led AI-based projects including Traffic Prediction System, completed full-stack web projects, published a minor ML research project, and gained hands-on experience in React.js, Node.js, and Python.",
    "Bachelor of Computer Applications (BCA): Built solid foundation in Java, OOPs, DBMS, Web Development & Data Structures, completed practical projects including Document Management System, participated in coding contests and tech clubs.",
    "Awarded 'Best Performer' in university coding competitions and secured top 10% in semester exams.",
    "Certified in Python & Web Development and contributed actively to university tech forums and hackathons."
  ],
 skills: [
  "C",
  "C++",
  "Python",
  "HTML",
  "CSS",
  "JavaScript",
  "Database Management (SQL)",
  "Data Structures & Algorithms",
  "Operating Systems",
  "Networking Fundamentals",
  "Software Engineering",
  "Problem Solving",
  "Version Control (Git/GitHub)"
],

}

];

// Education Section

  
  // Handle scroll events to update active timeline item based on visibility
  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const viewportCenter = viewportHeight / 2;

      let closestItem = 0;
      let closestDistance = Number.MAX_VALUE;

      timelineRefs.current.forEach((itemRef, index) => {
        if (!itemRef) return;

        const rect = itemRef.getBoundingClientRect();
        const itemCenter = rect.top + rect.height / 2;
        const distance = Math.abs(itemCenter - viewportCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestItem = index;
        }
      });

      if (closestItem !== activeTimelineItem) {
        setActiveTimelineItem(closestItem);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeTimelineItem]);

  const heroRef = useRef<HTMLDivElement | null>(null);
  const badgeRefs = useRef<Array<HTMLDivElement | null>>([null, null, null]);

  const [constraints, setConstraints] = useState<{
    left: number;
    right: number;
    top: number;
    bottom: number;
  }>({ left: 0, right: 0, top: 0, bottom: 0 });

  const [positions, setPositions] = useState<{ x: number; y: number }[]>([
    { x: 0, y: 0 }, // I Code
    { x: 0, y: 0 }, // I Lift
    { x: 0, y: 0 }, // I Vibin'
  ]);

  useEffect(() => {
    const updateLayout = () => {
      if (heroRef.current) {
        const heroRect = heroRef.current.getBoundingClientRect();
        const newConstraints = {
          left: 0,
          right: heroRect.width,
          top: 0,
          bottom: heroRect.height,
        };
        setConstraints(newConstraints);

        // Mobile-specific badge positioning
        const isMobile = window.innerWidth < 768;
        
        const newPositions = badgeRefs.current.map((ref, index) => {
          const badgeRect = ref?.getBoundingClientRect() || { width: 100, height: 40 };
          
          // Mobile layout - vertical stacking with smaller gaps
          if (isMobile) {
            const yOffset = 20; // Space between badges on mobile
            return {
              x: 20, // Fixed x position from left
              y: yOffset + (badgeRect.height + yOffset) * index, // Stack vertically
            };
          } 
          // Desktop layout - horizontal spacing
          else {
            const yPosition = (heroRect.height - badgeRect.height) / 2;
            const xPosition = (heroRect.width - badgeRect.width * 3 - 2 * 2) / 2 + 
              (badgeRect.width + 2) * index;
            return { x: xPosition, y: yPosition };
          }
        });

        setPositions(newPositions);
      }
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  const badgeData = [
    { label: "I Lift", color: "emerald" },
    { label: "I Code", color: "purple" },
    { label: "I Vibin'", color: "blue" },
  

  ];

  return (
    <div className="bg-black min-h-screen text-white pt-16 md:pt-32">
      {/* Hero Section - Mobile Optimized */}
      <section
        ref={heroRef}
        className="px-4 md:px-10 max-w-7xl mx-auto mb-16 md:mb-24 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-gray-400 ml-5 md:ml-0 uppercase tracking-wider font-medium text-xs md:text-sm mb-2"
        >
          MORE ABOUT ME
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start lg:items-center"
        >
          {/* Mobile First: Photo on top for small screens */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full lg:w-1/3 relative mx-auto max-w-[250px] md:max-w-full lg:mx-0"
          >
            <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-purple-600 to-pink-500 p-1">
              <div className="rounded-xl overflow-hidden aspect-square">
                <Image
                  src={profileImage}
                  alt="Gulshan Kumar"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAEtAJJUw8YhgAAAABJRU5ErkJggg=="
                  loading="eager"
                  priority

                />
              </div>
            </div>
          </motion.div>

          <div className="lg:w-2/3 mt-6 md:mt-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-center lg:text-left">
              Hi there! I&apos;m <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">Gulshan</span>
            </h1>

            <div className="space-y-3 md:space-y-4 text-gray-300 text-sm md:text-base">
              <p>A passionate Frontend Developer from  Lucknow, India. I specialize in building modern, responsive, and user-friendly web interfaces that deliver seamless digital experiences.</p>

<p>As a Frontend Developer (React.js & Next.js), I have hands-on experience in developing scalable web applications. My expertise lies in React.js, Next.js, and modern JavaScript, along with creating dynamic UIs, integrating third-party APIs, and implementing responsive designs using Tailwind CSS and Bootstrap.</p>

<p>Beyond coding, I’m constantly exploring new technologies, brainstorming fresh ideas, and striving to level up every single day. My goal is simple — to craft impactful web solutions and grow into a top developer who makes a difference.</p>
<div className="flex justify-center lg:justify-start gap-4 pt-2 mb-2">
  {/* LinkedIn */}
  <Link 
    href="https://www.linkedin.com/in/gulshan-kumar-61b446253/" 
    target="_blank" 
    rel="noopener noreferrer" 
    aria-label="LinkedIn"
  >
    <Linkedin className="w-5 h-5 md:w-6 md:h-6 text-gray-400 hover:text-white transition-colors" />
    <b>Linkedln</b>
  </Link>

  {/* Instagram */}
  <Link 
    href="https://www.instagram.com/developer_tipss/" 
    target="_blank" 
    rel="noopener noreferrer" 
    aria-label="Instagram"
  >
    <Instagram className="w-5 h-5 md:w-6 md:h-6 text-gray-400 hover:text-white transition-colors" />
    <b>Instagram</b>
  </Link>

  {/* Email */}
  <Link 
    href="mailto:gulshan73939314@gmail.com" 
    aria-label="Email"
  >
    <Mail className="w-5 h-5 md:w-6 md:h-6 text-gray-400 hover:text-white transition-colors" />
    <b>Email</b>
  </Link>

  {/* Resume Icon Button */}
  <Link
    href="/resumegk.pdf"
    target="_blank"
    rel="noopener noreferrer"
    download
    aria-label="Resume"
    className=""
  >
    {/* Tumhara resume icon, yahan main example SVG laga raha hoon */}
   <FileUser className="w-5 h-5 md:w-6 md:h-6 text-gray-400 hover:text-white transition-colors" />
    <b>Resume</b>
  </Link>
</div>



            </div>
          </div>
        </motion.div>

        {/* Draggable Badges - Mobile Optimized */}
        <div className="mt-12 md:mt-0 gap-2 ">
          {badgeData.map((badge, index) => (
            <motion.div
              key={index}
              drag
              dragConstraints={constraints}
              dragElastic={0.2}
              dragMomentum={true}
              ref={(el) => {
                badgeRefs.current[index] = el;
              }}
              style={{
                x: positions[index]?.x ?? 0,
                y: positions[index]?.y ?? 0,
              }}
              className="pointer-events-auto absolute cursor-grab active:cursor-grabbing z-50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            >
              <div
                className={`px-4 py-2 md:px-6 md:py-3 rounded-full border-2 border-${badge.color}-500 text-${badge.color}-500 text-sm md:text-base font-semibold hover:bg-${badge.color}-500 hover:text-white transition-all duration-300 bg-black whitespace-nowrap`}
              >
                {badge.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience Section - Mobile Optimized */}
      <section className="py-12 md:py-20 bg-black">
        <div className="px-4 md:px-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="text-gray-300 uppercase tracking-wider font-medium text-xs md:text-sm mb-2">
              THE EXPERIENCE
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              Crafting <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">Experiences</span>
            </h2>
          </motion.div>

          {/* Mobile Timeline Navigation Tabs */}
          <div className="lg:hidden mb-8 overflow-x-auto scrollbar-hide">
            <div className="flex space-x-2 min-w-max">
              {timelineItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTimelineItem(index);
                    timelineRefs.current[index]?.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start',
                    });
                  }}
                  className={`px-4 py-2 rounded-full text-xs whitespace-nowrap transition-all duration-300 ${
                    index === activeTimelineItem
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-800 text-gray-400'
                  }`}
                >
                  {item.title}
                </button>
              ))}
            </div>
          </div>

          <div className="relative flex flex-col lg:flex-row">
            {/* Left side - sticky timeline markers (desktop only) */}
            <div className="hidden lg:block lg:w-1/3 sticky top-0 h-screen">
              <div className="h-full flex flex-col justify-center space-y-8 relative">
                {/* Vertical line */}
                <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 via-purple-600 to-pink-600"></div>

                {timelineItems.map((item, index) => (
                  <div key={item.id} className="relative pl-10">
                    {/* Timeline dot */}
                    <div className={`absolute left-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${index === activeTimelineItem ? 'bg-purple-500 scale-110' : 'bg-gray-800'}`}>
                      <div className={`w-3 h-3 rounded-full ${index === activeTimelineItem ? 'bg-white' : 'bg-gray-500'}`}></div>
                    </div>

                    <div className="space-y-1">
                      <p className={`text-sm ${index === activeTimelineItem ? 'text-white' : 'text-gray-600'} `}>{item.date}</p>
                      <h3 className={`text-2xl font-bold transition-all duration-300 ${index === activeTimelineItem ? 'text-white' : 'text-gray-600'}`}>
                        {item.title}
                      </h3>
                      <div className="flex items-center space-x-2">
                        <div className={`rounded-md px-2 py-1 text-sm ${index === activeTimelineItem ? 'bg-purple-800 text-white' : 'bg-gray-900 text-gray-600'}`}>
                          {item.company}
                        </div>
                      </div>
                      <div className="flex items-center space-x-1 text-sm text-gray-500">
                        <span>{item.location}</span>
                        {item.remote && <span>• Remote</span>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - scrollable content - Mobile Optimized */}
            <div className="lg:w-2/3 lg:pl-16">
              {timelineItems.map((item, index) => (
                <div
                  key={item.id}
                  ref={el => { timelineRefs.current[index] = el; }}
                  className="py-8 md:py-16 lg:py-24 min-h-[80vh] lg:min-h-screen flex flex-col justify-center"
                >
                  {/* Mobile timeline header with visual improvements */}
                  <div className="lg:hidden mb-6 space-y-1 relative pl-8 border-l-2 border-purple-500">
                    <div className="absolute left-0 top-0 w-4 h-4 bg-purple-500 rounded-full -translate-x-1/2"></div>
                    <p className="text-gray-400 text-xs">{item.date}</p>
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <div className="flex items-center space-x-2">
                      <div className="rounded-md px-2 py-1 text-xs bg-gray-800 text-white">
                        {item.company}
                      </div>
                    </div>
                    <div className="flex items-center space-x-1 text-xs text-gray-400">
                      <span>{item.location}</span>
                      {item.remote && <span>• Remote</span>}
                    </div>
                  </div>

                  {/* Content - Mobile Optimized */}
                  <div className="space-y-6 md:space-y-8">
                    <p className="text-gray-300 text-sm md:text-base">{item.description}</p>

                    <div className="space-y-3 md:space-y-4">
                      {item.achievements.map((achievement, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: i * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-2 md:gap-3"
                        >
                          <span className="text-purple-500 mt-1 text-lg flex-shrink-0">•</span>
                          <p className="text-gray-300 text-sm md:text-base">{achievement}</p>
                        </motion.div>
                      ))}
                    </div>

                    {/* Skills - Mobile Optimized */}
                    <div className="mt-4 md:mt-6">
                      <div className="flex flex-wrap gap-1.5 md:gap-2">
                        {item.skills.map((skill, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: i * 0.05 }}
                            viewport={{ once: true }}
                            className="rounded-md py-1 px-2 md:px-3 bg-gray-800 text-xs md:text-sm font-medium"
                          >
                            {skill}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
         <SplashCursor />
    </div>
  );
}