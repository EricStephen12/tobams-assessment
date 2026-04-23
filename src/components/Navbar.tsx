"use client";

import Link from "next/link";
import Logo from "../../public/images/logo.png";
import Image from "next/image";
import { LuUser, LuChevronDown, LuMenu, LuX } from "react-icons/lu";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { 
      name: 'About', 
      href: '/about', 
      dropdownItems: [
        { name: 'Our Story', href: '/about/story' },
        { name: 'Our Team', href: '/about/team' },
        { name: 'Careers', href: '/about/careers' }
      ] 
    },
    { 
      name: 'What We Do', 
      href: '/what-we-do', 
      dropdownItems: [
        { name: 'Digital Transformation', href: '/services/digital-transformation' },
        { name: 'Tech Talent Empowerment', href: '/services/talent' },
        { name: 'Innovative Solutions', href: '/services/solutions' }
      ] 
    },
    { 
      name: 'Jobs', 
      href: '/jobs', 
      dropdownItems: [
        { name: 'Openings', href: '/jobs/openings' },
        { name: 'Internships', href: '/jobs/internships' },
        { name: 'Contract Roles', href: '/jobs/contracts' }
      ] 
    },
    { name: 'Projects', href: '/projects' },
    { name: 'TG Academy', href: '/academy' },
    { name: 'Strategic Partnership', href: '/partnership' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Book a Consultation', href: '/consultation' },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-white border-b border-brand-primary/20 px-6 md:px-16 py-4 md:py-7 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src={Logo}
            alt="Tobams Group Logo"
            width={290}
            height={90}
            className="h-10 md:h-auto w-auto max-h-16 md:max-h-20 object-contain"
            priority
          />
        </Link>

        {/* Desktop Action Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <button className='flex items-center gap-2 bg-brand-primary text-white px-3 py-2.5 rounded-[3px] font-medium hover:opacity-90 transition-opacity'>
            <span className="w-7 h-7 rounded-full bg-brand-user flex items-center justify-center text-white">
              <LuUser className="text-brand-primary" />
            </span>
            <p className="text-white">Account</p>
            <LuChevronDown size={18} className="text-white mt-0.5" />
          </button>

          <button className="bg-brand-secondary text-white px-6 py-3 rounded-[3px] font-semibold hover:opacity-90 transition-opacity shadow-sm">
            Take Assessment
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden w-8 h-8 bg-black rounded-md flex items-center justify-center text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <LuX size={24} /> : <LuMenu size={24} />}
        </button>
      </nav>

      {/* Desktop Links Nav */}
      <nav className="fixed top-[72px] md:top-[112px] w-full z-40 bg-white transition-all duration-300 py-2 hidden lg:block">
        <div className="px-6 flex justify-center">
          <ul className="flex items-center gap-8 text-black text-[19px] font-[400]">
            {navItems.map((item) => (
              <li key={item.name} className="relative group py-4">
                <Link 
                  href={item.href} 
                  className="flex items-center gap-1 hover:text-brand-primary transition-colors duration-300 relative"
                >
                  {item.name}
                  {item.dropdownItems && <LuChevronDown size={14} className="mt-1 group-hover:rotate-180 transition-transform duration-300" />}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-brand-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
                
                {item.dropdownItems && (
                  <div className="absolute top-full left-0 w-64 bg-white shadow-xl border border-gray-100 rounded-md py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-50">
                    {item.dropdownItems.map((subItem) => (
                      <Link 
                        key={subItem.name}
                        href={subItem.href} 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-primary transition-colors"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-white transition-transform duration-300 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden pt-24 overflow-y-auto`}>
        <div className="px-6 py-8 space-y-6">
          <ul className="space-y-6 text-xl font-medium">
            {navItems.map((item) => (
              <li key={item.name} className="border-b border-gray-100 pb-4">
                <div className="flex justify-between items-center">
                  <Link href={item.href} onClick={() => setIsMenuOpen(false)}>{item.name}</Link>
                  {item.dropdownItems && <LuChevronDown size={20} />}
                </div>
                {item.dropdownItems && (
                  <ul className="mt-4 ml-4 space-y-3">
                    {item.dropdownItems.map((subItem) => (
                      <li key={subItem.name}>
                        <Link href={subItem.href} className="text-gray-600 text-lg" onClick={() => setIsMenuOpen(false)}>
                          {subItem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          
          <div className="pt-6 space-y-4">
            <button className='w-full flex items-center justify-center gap-2 bg-brand-primary text-white px-6 py-4 rounded-md font-medium'>
              <LuUser size={24} />
              <span>Account</span>
            </button>
            <button className="w-full bg-brand-secondary text-white px-6 py-4 rounded-md font-semibold shadow-sm">
              Take Assessment
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;