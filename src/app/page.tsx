import HeroSection from "@/components/HeroSection";
import SpaceBackground from "@/components/SpaceBG";

import Grids from "@/components/Grids";
import WorkShowcase from '../components/WorkShowcase';
import EnhancedTechStack from "@/components/TechStack";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";

import { FaArrowRight } from "react-icons/fa";

import Link from "next/link";
import WorkExperience from "@/components/WorkExperience";


export default function Home() {
  return (
    <div className=" flex flex-col justify-center items-center  font-[family-name:var(--font-geist-sans)]">
      <SpaceBackground/>
      <HeroSection/>
      
     <Grids/>
     <WorkShowcase/>

     <div className="bg-black flex justify-center items-center w-full">
     <Link href="/projects" className="bg-zinc-900 w-40 text-center flex flex-row justify-center items-center gap-2 rounded-full text-white px-3 py-1">Explore More <FaArrowRight />  </Link>
     </div>
     
     <EnhancedTechStack/>


    <WorkExperience/>



     <Services/>
     <Marquee/>
      
    </div>
  );
}
