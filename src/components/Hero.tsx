"use client";

import Image from "next/image";
import heroImg from "../../public/images/hero.jpg";
import CTA from "./CTA";

const Hero = () => {
  return (
    <section className="relative w-full h-[780px] mt-[112px] flex items-center justify-center text-center px-6">
      <Image 
        src={heroImg} 
        alt="Tobams Group Training and Development" 
        fill
        className="object-cover brightness-[0.3]"
        priority
      />
      
      {/* Content Overlay */}
      <div className="relative z-10 max-w-5xl flex flex-col items-center space-y-6 animate-in fade-in slide-in-from-bottom duration-1000">
        {/* Badge */}
        <div className="px-10 py-3.5 bg-white/10 backdrop-blur-md rounded-full text-white text-sm font-[500] tracking-widest uppercase">
          What we do
        </div>
        
        {/* Main Title */}
        <h1 className="text-7xl font-[600] text-white tracking-tight">
          Training and Development
        </h1>
        
        <p className="text-lg text-white max-w-5xl leading-relaxed font-light">
          Our comprehensive range of programs and resources is designed to enhance skills, broaden knowledge, and propel careers forward <br/> in today&apos;s ever-evolving landscape.
        </p>
        
        {/* CTA Button */}
        <CTA text="Book a Consultation" />
      </div>
    </section>
  );
};

export default Hero;