'use client'
import Image from "next/image";
import learningManagementImg from "../../public/images/LearningManagement.jpg";
import CTA from "./CTA";

const LearningManagement = () => {
  const courses = [
    "Business Analysis",
    "Design Thinking",
    "Effective Communication",
    "Entrepreneurship",
    "Career Development",
    "Business Model"
  ];

  return (
    <section className="mt-15">
      <div className="bg-bg-pale py-16 px-4 overflow-hidden">
        <div className="max-w-[1800px] mx-auto px-4">

          {/* Mobile title */}
          <h2 className="md:hidden text-3xl font-500 text-brand-primary mb-6">
            Learning Management System
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">

            {/* Left: Image */}
            <div className="flex-shrink-0 w-full md:w-auto flex justify-center">
              <div className="relative w-[85vw] h-[85vw] sm:w-[480px] sm:h-[480px] md:w-[700px] md:h-[700px]">
                <Image
                  src={learningManagementImg}
                  alt="Learning Management System"
                  fill
                  className="rounded-full object-cover border-2 border-white/20"
                />
              </div>
            </div>

            {/* Right: Content */}
            <div className="flex-1 space-y-8 py-6 w-full">

              {/* Title - desktop only */}
              <h2 className="hidden md:block text-5xl font-500 text-brand-primary">
                Learning Management System
              </h2>

              <div className="bg-bg-palepink backdrop-blur-sm p-6 md:p-12 rounded-3xl border border-white/20 space-y-6">
                <p className="text-black text-lg leading-relaxed">
                  TG Academy is a hub of knowledge and skill-building resources designed to empower tech talents on their learning journey. From technical courses covering the latest programming languages and development frameworks to soft skills training in leadership, effective communication and project management, TG Academy offers a wide range of courses to cater to diverse learning needs. With accessible and interactive learning materials, individuals can enhance their skills and stay ahead in today&apos;s competitive tech landscape.
                </p>

                <div className="space-y-4">
                  <h3 className="text-brand-primary font-600 text-xl">
                    Some of our courses include:
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-3 gap-x-2 gap-y-3">
                    {courses.map((course) => (
                      <li key={course} className="flex items-center gap-2 text-black">
                        <span className="w-1.5 h-1.5 rounded-full bg-black" />
                        <span className="text-base font-medium">{course}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA inside card on mobile, hidden on desktop */}
                <div className="flex justify-start md:hidden pt-2">
                  <CTA text="Learn More" showArrow={true} />
                </div>
              </div>

              {/* CTA outside card on desktop only */}
              <div className="hidden md:flex justify-start pt-4">
                <CTA text="Learn More" showArrow={true} />
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningManagement;