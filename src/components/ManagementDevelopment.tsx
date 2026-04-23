'use client'
import Image from "next/image";
import managementDevelopmentImg from "../../public/images/ManagementDevelopment.jpg";
import { FaBolt } from "react-icons/fa6";

const ManagementDevelopment = () => {
  const points = [
    "Enhanced Leadership Skills",
    "Improved Employee Engagement",
    "Stronger Organisational Culture",
    "Sustainable Growth"
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-[1800px] mx-auto bg-bg-darkpurple rounded-[40px] overflow-hidden p-16">
        <div className="flex items-center gap-20">
          
          {/* Left Column: Image */}
          <div className="flex-shrink-0">
            <div className="relative w-[650px] h-[720px]">
              <Image
                src={managementDevelopmentImg}
                alt="Management Development Program"
                fill
                className="rounded-[10px] object-cover"
              />
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="flex-1 space-y-10 text-white">
            <div className="space-y-6">
              <h2 className="text-5xl font-medium leading-tight">
                Management Development Program
              </h2>
              <div className="space-y-4 text-lg text-white leading-relaxed">
                <p>
                  Tobams Group offers a comprehensive Management Development Program designed to equip corporate organisations with the high-performing leaders they need to thrive.
                </p>
                <p>
                  Our program includes workshops, seminars, coaching sessions, online courses, and experiential learning opportunities designed to improve leadership, strategic thinking, communication, and other essential managerial competencies for corporate organisations.
                </p>
              </div>
            </div>

            {/* Benefit Cards */}
            <div className="space-y-4">
              {points.map((point) => (
                <div 
                  key={point} 
                  className="bg-bg-lighterpurple backdrop-blur-sm p-4 px-6 rounded-xl flex items-center gap-4 border border-white/5 hover:bg-white/15 transition-all"
                >
                  <FaBolt className="text-white" size={20} />
                  <span className="text-xl font-medium">{point}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ManagementDevelopment;