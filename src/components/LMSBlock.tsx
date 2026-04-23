'use client'
import Image from "next/image";
import { FaBolt } from "react-icons/fa6";
import corporateImg from "../../public/images/block1.jpg";
import personalizedImg from "../../public/images/block2.jpg";
import capacityImg from "../../public/images/block3.jpg";

const LMSBlock = () => {
  const corporatePoints = [
    "Leadership Training",
    "Strategic Planning and Implementation",
    "Project Management",
    "Sustainability Training",
    "Customised Training"
  ];

  const personalizedPoints = [
    "Leadership Development",
    "Soft Skills Development",
    "Industry Specific Knowledge",
    "Technical Skills Enhancement",
    "Time Management and Productivity",
    "Career Development"
  ];

  const capacityPoints = [
    "Tailored Training Programs",
    "Expert-Led Workshops",
    "Personalized Mentorship",
    "Technical Skills Enhancement",
    "Collaborative Learning Environment",
    "Ongoing Support and Resources"
  ];

  return (
    <section>
      <div className="w-full h-16 bg-gray-50" />
      
      <div className="w-full space-y-16 md:space-y-20 py-12 md:py-20 bg-white">

        {/* Corporate Trainings */}
        <div className="max-w-[1800px] mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center gap-10 md:gap-20">
          {/* Content */}
          <div className="flex-1 space-y-6 md:space-y-8 w-full order-2 md:order-1">
            <h2 className="text-3xl md:text-3xl lg:text-5xl font-medium text-black">Corporate Trainings</h2>
            <p className="text-base md:text-lg text-gray-500 leading-relaxed max-w-2xl">
              Empower your team with our customised Corporate Training programs designed to address the unique needs and objectives of your organisation. Our expert facilitators work closely with your team to deliver tailored learning experiences that align with your company&apos;s goals and values.
            </p>
            <ul className="space-y-4 px-4 md:px-8">
              {corporatePoints.map((point) => (
                <li key={point} className="flex items-center gap-3 text-gray-500 font-medium text-base md:text-lg">
                  <FaBolt className="text-brand-primary flex-shrink-0" size={18} />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          {/* Image */}
          <div className="flex-shrink-0 w-full md:w-auto order-1 md:order-2">
            <div className="relative w-full h-[240px] md:w-[750px] md:h-[480px]">
              <Image
                src={corporateImg}
                alt="Corporate Training Session"
                fill
                className="object-cover rounded-tl-[60px] rounded-tr-[40px] rounded-br-[20px] rounded-bl-[10px] shadow-xl"
              />
            </div>
          </div>
        </div>

        {/* Personalised Individual Training */}
        <div className="max-w-[1800px] mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center gap-10 md:gap-20">
          {/* Image — top on mobile, left on desktop */}
          <div className="flex-shrink-0 w-full md:w-auto order-1 md:order-1">
            <div className="relative w-full h-[240px] md:w-[750px] md:h-[480px]">
              <Image
                src={personalizedImg}
                alt="Personalised Individual Training"
                fill
                className="object-cover rounded-tl-[40px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px] shadow-xl"
              />
            </div>
          </div>
          {/* Content */}
          <div className="flex-1 space-y-6 md:space-y-8 w-full order-2 md:order-2">
            <h2 className="text-3xl md:text-3xl lg:text-5xl font-medium text-black">Personalised Individual Training</h2>
            <p className="text-base md:text-lg text-gray-500 leading-relaxed max-w-2xl">
              Begin a journey of lifelong learning and professional development with Tobams Group&apos;s diverse range of training programs for individuals. From technical skills mastery to soft skills enhancement, our courses cover a wide spectrum of topics to meet the evolving needs of today&apos;s professionals.
            </p>
            <ul className="space-y-4 px-4 md:px-8">
              {personalizedPoints.map((point) => (
                <li key={point} className="flex items-center gap-3 text-gray-500 font-medium text-base md:text-lg">
                  <FaBolt className="text-brand-primary flex-shrink-0" size={18} />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Capacity Development */}
        <div className="max-w-[1800px] mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center gap-10 md:gap-20">
          {/* Content */}
          <div className="flex-1 space-y-6 md:space-y-8 w-full order-2 md:order-1">
            <h2 className="text-3xl md:text-3xl lg:text-5xl font-medium text-black">Capacity Development</h2>
            <p className="text-base md:text-lg text-gray-500 leading-relaxed max-w-2xl">
              At Tobams Group, we empower individuals and organizations through tailored training programs, expert-led workshops, and personalized mentorship. We are committed to your success and growth. We are dedicated to providing a comprehensive suite of benefits designed to foster your development and success:
            </p>
            <ul className="space-y-4 px-4 md:px-8">
              {capacityPoints.map((point) => (
                <li key={point} className="flex items-center gap-3 text-gray-500 font-medium text-base md:text-lg">
                  <FaBolt className="text-brand-primary flex-shrink-0" size={18} />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          {/* Image */}
          <div className="flex-shrink-0 w-full md:w-auto order-1 md:order-2">
            <div className="relative w-full h-[240px] md:w-[750px] md:h-[480px]">
              <Image
                src={capacityImg}
                alt="Capacity Development Session"
                fill
                className="object-cover rounded-tl-[40px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px] shadow-xl"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default LMSBlock;