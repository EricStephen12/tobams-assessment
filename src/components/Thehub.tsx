'use client'
import Image from "next/image";
import hubImg from "../../public/images/thehub.jpg";
import { LuZap } from "react-icons/lu";

import CTA from "./CTA";

const Thehub = () => {
  const points = [
    "Strategic Career Guidance",
    "Leadership Development",
    "CV Development",
    "Sustainability Leadership",
    "Communication Skills",
    "Business Model"
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-[1800px] mx-auto bg-bg-pink rounded-[40px] overflow-hidden p-16">
        <div className="space-y-6 mb-10">
          <h3 className="text-brand-blue font-medium text-xl">
            Learning With Our CEO:
          </h3>
          <h2 className="text-5xl font-medium text-brand-primary">
            Transformation Hub With Jite Newton
          </h2>
          <p className="text-lg text-black leading-relaxed max-w-7xl">
            Transformation Hub with Jite Newton is a flagship webinar series curated by the CEO, Dr. Jite Newton. Designed to elevate career trajectories and leadership capabilities, this exclusive event offers invaluable insights and strategies for personal and professional growth. Whether you&apos;re seeking to advance your career or enhance your leadership skills, the Transformation Hub provides a transformative learning experience to unlock your full potential and drive success in your endeavours.
          </p>
        </div>

        <div className="flex items-center gap-12">
          {/* Left: Image */}
          <div className="flex-shrink-0">
            <div className="relative w-[550px] h-[380px]">
              <Image
                src={hubImg}
                alt="Transformation Hub"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* Right */}
          <div className="flex-1 space-y-8 bg-white/20 p-6 rounded-2xl ">
            <div className="grid grid-cols-2 gap-4 ">
              {points.map((point) => (
                <div 
                  key={point} 
                  className="bg-white p-4 px-6 rounded-xl flex items-center gap-4 shadow-sm hover:shadow-md transition-all border border-gray-100 font-bold text-lg text-black"
                >
                  <LuZap className="text-brand-primary" size={20} />
                  <span className="text-gray-700 font-medium">{point}</span>
                </div>
              ))}
            </div>

            <CTA text="Learn More" showArrow={true} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Thehub;