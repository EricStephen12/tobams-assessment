"use client";

import Image from "next/image";
import heroImg from "../../public/images/hero.jpg";
import CTA from "./CTA";

const Hero = () => {
  return (
    <section className="relative w-full h-[500px] md:h-[780px] mt-[72px] md:mt-[112px] flex items-center justify-center text-center px-4 md:px-6">
      <Image 
        src={heroImg} 
        alt="Tobams Group Training and Development" 
        fill
        className="object-cover brightness-[0.3]"
        priority
      />
      
      {/* Content Overlay */}
      <div className="relative z-10 max-w-2xl md:max-w-none px-4 flex flex-col items-center text-center space-y-4 md:space-y-6 animate-in fade-in slide-in-from-bottom duration-1000">
        {/* Badge */}
        <div className="px-6 py-2 md:px-10 md:py-3.5 bg-white/10 backdrop-blur-md rounded-full text-white text-[10px] md:text-sm font-500 tracking-[0.2em] md:tracking-widest uppercase">
          What we do
        </div>
        
        {/* Main Title */}
        <h1 className="text-3xl md:text-7xl font-600 text-white tracking-tight leading-tight">
          <span className="md:hidden">Learning and Development</span>
          <span className="hidden md:inline">Training and Development</span>
        </h1>
        
        <p className="text-base md:text-lg text-white md:text-white max-w-2xl md:max-w-5xl leading-relaxed font-light">
          <span className="md:hidden">Our comprehensive range of programs and resources is designed to enhance skills, broaden knowledge, and propel careers forward in today&apos;s ever-evolving landscape.</span>
          <span className="hidden md:inline">Our comprehensive range of programs and resources is designed to enhance skills, broaden knowledge, and propel careers forward <br className="hidden md:block"/> in today&apos;s ever-evolving landscape.</span>
        </p>
        
        {/* CTA Button */}
        <div className="pt-2 md:pt-4">
          <CTA 
            text="Book a Consultation" 
            className="scale-90 md:scale-110" 
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;