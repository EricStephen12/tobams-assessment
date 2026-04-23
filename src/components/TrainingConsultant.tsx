'use client'
import { LuZap } from "react-icons/lu";
import CTA from "./CTA";

const TrainingConsultant = () => {
  const benefits = [
    {
      title: "Expert-Led Learning",
      description: "Gain insight from seasoned professionals in the field as they mentor you through the subtleties of business analysis."
    },
    {
      title: "Interactive Workshops",
      description: "Engage in hands-on workshops designed to enhance your training capabilities and provide practical insights."
    },
    {
      title: "Comprehensive Curriculum",
      description: "Access a robust curriculum that covers fundamental principles and advanced methodologies, ensuring a well-rounded understanding."
    },
    {
      title: "Global Recognition",
      description: "You will attain a globally recognized certification, opening doors to new career opportunities and industry recognition."
    }
  ];

  return (
    <>
    <div className="w-full h-16 bg-gray-50" />
    <section className="py-10 md:py-20 px-4 bg-bg-pale">
      <div className="max-w-[1800px] mx-auto px-4 md:px-10 space-y-8 md:space-y-12">
        
        <div className="space-y-6 max-w-7xl">
          <h2 className="text-3xl md:text-5xl font-500 text-brand-primary">
            Training The Consultant
          </h2>
          <h3 className="text-brand-primary font-medium text-base md:text-xl">
            Maximise Your Potential as a Certified Trainer:
          </h3>
          <p className="text-base md:text-lg text-black leading-relaxed">
            With the help of our Training Consultants program, take a revolutionary step toward becoming a distinguished certified training consultant. Learn from professionals in the field, immerse yourself in a thorough curriculum, and hone your training methods through interactive workshops. Participating in our program will enable you to gain expertise in diverse courses while also developing the abilities to mentor and encourage others in their career advancement.
          </p>
        </div>

        <div className="bg-brand-primary rounded-[5px] p-4 lg:p-5 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-x-20 lg:gap-y-12">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="space-y-2">
                <h4 className="text-base md:text-xl font-semibold flex items-center gap-2">
                  {benefit.title}
                </h4>
                <p className="text-white/90 text-sm md:text-lg leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-4">
          <CTA text="Learn More" showArrow={true} />
        </div>
      </div>
    </section>
    </>
  );
};

export default TrainingConsultant;