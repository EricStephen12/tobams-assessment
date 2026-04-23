'use client'
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/images/logo.png";
import { FaLinkedinIn, FaXTwitter, FaEnvelope, FaPhone } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import CTA from "./CTA";

const Footer = () => {
  return (
    <footer className="w-full px-4">
      {/* CTA Banner */}
      <div className="bg-bg-footerbanner py-10 px-6 md:py-16 md:px-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-white/5">
        <div className="space-y-3 md:space-y-4">
          <p className="text-white text-base md:text-xl font-medium">Ready to be a part of something extraordinary?</p>
          <h2 className="text-3xl md:text-5xl font-500 text-white tracking-tight">Let&apos;s work together to create a difference</h2>
        </div>
        <CTA 
          text="Get In Touch" 
          variant="primary" 
          className="md:scale-110 flex-shrink-0" 
        />
      </div>

      {/* Main Footer Section */}
      <div className="bg-bg-footer text-white pt-12 md:pt-24 pb-12 px-6 md:px-16">
        <div className="max-w-[1800px] mx-auto space-y-12 md:space-y-24">
          
          {/* Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-16">
            {/* Logo + About */}
            <div className="space-y-6 md:space-y-10">
              <div className="relative w-[200px] md:w-[240px] h-[60px] md:h-[70px]">
                <Image 
                  src={Logo} 
                  alt="Tobams Group Logo" 
                  fill 
                  className="object-contain" 
                />
              </div>
              <p className="text-white leading-relaxed text-base md:text-lg font-light">
                Tobams Group is an innovative consultancy firm reshaping the future of tech talent development in Africa, specializing in talent acquisition, internships, and skill development with a global perspective.
              </p>
              <div className="flex gap-5">
                {[FaLinkedinIn, RiInstagramFill, FaXTwitter].map((Icon, i) => (
                  <a key={i} href="#" className="w-11 h-11 rounded-full bg-white flex items-center justify-center text-[#0A0108] hover:bg-brand-secondary hover:text-white transition-all shadow-md">
                    <Icon size={22} />
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-6 md:space-y-8">
              <h4 className="text-xl md:text-2xl font-600 text-white">What We Do</h4>
              <ul className="space-y-3 md:space-y-4 text-white text-base md:text-[18px] font-light">
                {["Sustainability Services", "Strategy Planning and Implementation", "Tech Talent Solutions", "Training and Development", "IT Consulting Services", "Social Impact", "Talent Recruitment"].map(item => (
                  <li key={item} className="hover:text-white cursor-pointer transition-colors">{item}</li>
                ))}
              </ul>
            </div>

            <div className="space-y-6 md:space-y-8">
              <h4 className="text-xl md:text-2xl font-600 text-white">Company</h4>
              <ul className="space-y-3 md:space-y-4 text-white text-base md:text-[18px] font-light">
                {["About", "Jobs", "Projects", "Our Founder", "Business Model", "The Team", "Contact Us", "Blog", "FAQs", "Testimonials"].map(item => (
                  <li key={item} className="hover:text-white cursor-pointer transition-colors">{item}</li>
                ))}
              </ul>
            </div>

            <div className="space-y-6 md:space-y-8">
              <h4 className="text-xl md:text-2xl font-600 text-white">Solution</h4>
              <ul className="space-y-3 md:space-y-4 text-white text-base md:text-[18px] font-light">
                {["Tobams Group Academy", "Help a Tech Talent", "Campus Ambassadors Program", "Join Our Platform", "Pricing", "Book a Consultation", "Join Our Slack Community"].map(item => (
                  <li key={item} className="hover:text-white cursor-pointer transition-colors">{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Offices + Contact Card */}
          <div className="bg-bg-footerbanner rounded-3xl p-6 md:p-12 flex flex-col md:grid md:grid-cols-3 gap-8 md:gap-16 border border-white/5 shadow-2xl">
            {/* Contact Info — first on mobile, last on desktop */}
            <div className="order-1 md:order-2 space-y-6 md:space-y-8 md:border-l md:border-white/10 md:pl-16 md:col-start-3">
              <h5 className="text-xl md:text-2xl font-600 text-white">Contact Information</h5>
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center gap-4 text-white group cursor-pointer">
                  <FaEnvelope className="text-brand-secondary flex-shrink-0" size={20} />
                  <span className="text-sm md:text-lg font-light">theteam@tobamsgroup.com</span>
                </div>
                <div className="flex items-center gap-4 text-white group cursor-pointer">
                  <FaPhone className="text-brand-secondary flex-shrink-0" size={20} />
                  <span className="text-sm md:text-lg font-light">+447886600748</span>
                </div>
              </div>
            </div>

            {/* Registered Offices — second on mobile, first on desktop */}
            <div className="order-2 md:order-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
              <div className="space-y-4 md:space-y-6">
                <h5 className="text-xl md:text-2xl font-600 text-white">Registered Offices</h5>
                <div className="space-y-2">
                  <p className="text-brand-secondary font-600 text-base md:text-lg">United Kingdom</p>
                  <p className="text-white text-sm md:text-base leading-relaxed font-light">
                    07451196 (Registered by Company House) Vine Cottages, 215 North Street, Romford, Essex, United Kingdom, RM1 4QA
                  </p>
                </div>
              </div>
              <div className="space-y-4 md:space-y-6 md:pt-14">
                <div className="space-y-2">
                  <p className="text-brand-secondary font-600 text-base md:text-lg">Nigeria</p>
                  <p className="text-white text-sm md:text-base leading-relaxed font-light">
                    RC 1048722 (Registered by the Corporate Affairs Commission) 4, Muaz Close, Angwar-Rimi
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-6 md:pt-10 border-t border-white/10 text-white text-[13px] md:text-[15px]">
            {/* Mobile layout */}
            <div className="flex flex-col items-center gap-2 md:hidden text-white/60">
              <div className="flex gap-6">
                <Link href="#" className="transition-colors underline">Privacy Policy</Link>
                <Link href="#" className="transition-colors underline">Cookies Policy</Link>
              </div>
              <Link href="#" className="transition-colors underline">Terms and Conditions</Link>
              <p className="text-center mt-1">Copyright &copy; Tobams Group, 2024. All rights reserved.</p>
            </div>
            {/* Desktop layout */}
            <div className="hidden md:flex items-center justify-between">
              <p>Copyright &copy; Tobams Group, 2024. All rights reserved.</p>
              <div className="flex gap-10">
                {["Terms and Conditions", "Privacy Policy", "Cookies Policy"].map(item => (
                  <Link key={item} href="#" className="hover:text-white transition-colors underline">{item}</Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;