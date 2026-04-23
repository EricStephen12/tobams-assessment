'use client'
import Image from "next/image";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { useRef } from "react";
import t1 from "../../public/images/testimonial1.png";
import t2 from "../../public/images/testimonial2.png";
import t3 from "../../public/images/testimonial3.png";
import t4 from "../../public/images/testimonial4.jpg";

const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 550; // min-w of card + gap
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const testimonials = [
    {
      name: "Aisha Yusuf",
      role: "Founder, CraftHub NG",
      content: "Working with Tobams Group on our website was a breeze. They understood our vision and transformed it into a beautiful online space. Highly recommend their Website Design service!",
      image: t1
    },
    {
      name: "John Davies",
      role: "Marketing Manager, E-Commerce Emporium",
      content: "Tobams Group's Digital Marketing strategies gave our brand the boost it needed. Simple yet powerful techniques that delivered tangible results. A pleasure to collaborate with!",
      image: t2
    },
    {
      name: "Chinonso Nwankwo",
      role: "HR Director, FutureTech Solutions",
      content: "Tobams Group has been instrumental in our talent acquisition journey. Their Tech Talent Solution service consistently connects us with the right professionals. Reliable and straightforward.",
      image: t3
    },
    {
      name: "David Smith",
      role: "Creative Director, Studio X",
      content: "The Creative and Digital Media services at Tobams Group brought our ideas to life. Simple, creative, and impactful – exactly what we needed for our projects.",
      image: t4
    }
  ];

  return (
    <section className="py-12 md:py-24 bg-bg-whitelight overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-4 md:px-16 space-y-10 md:space-y-16">
        <h2 className="text-3xl md:text-5xl font-600 text-black text-center">
          Testimonials
        </h2>

        <div className="relative">
          <div 
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto pb-8 no-scrollbar snap-x snap-mandatory"
          >
            {testimonials.map((t, i) => (
              <div 
                key={i} 
                className="min-w-[85vw] md:min-w-[500px] bg-white p-6 md:p-10 rounded-2xl shadow-sm border-l-[4px] border-brand-secondary space-y-6 snap-start"
              >
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gray-100">
                    <Image
                      src={t.image}
                      alt={t.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-500 text-black">{t.name}</h4>
                    <p className="text-gray-500">{t.role}</p>
                  </div>
                </div>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed italic">
                  &ldquo;{t.content}&rdquo;
                </p>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-end gap-4 mt-8 px-4">
            <button 
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-[10px] bg-brand-secondary/10 flex items-center justify-center text-brand-secondary hover:bg-brand-secondary hover:text-white transition-all"
            >
              <LuChevronLeft size={24} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-[10px] bg-brand-secondary/10 flex items-center justify-center text-brand-secondary hover:bg-brand-secondary hover:text-white transition-all"
            >
              <LuChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;