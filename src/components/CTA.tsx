import { LuArrowUpRight, LuChevronRight } from "react-icons/lu";
import { ReactNode } from "react";

interface CTAProps {
  text: string;
  href?: string;
  className?: string;
  variant?: 'primary' | 'secondary' | 'white';
  showArrow?: boolean;
  icon?: ReactNode;
}

const CTA = ({ text, href = "#", className = "", variant = 'primary', showArrow = false, icon }: CTAProps) => {
  const baseStyles = "px-8 py-4 rounded font-semibold transition-all active:scale-95 text-center inline-flex items-center justify-center gap-2 shadow-xl hover:shadow-brand-primary/20 group";
  const variants = {
    primary: "bg-brand-primary text-white hover:bg-brand-primary/90",
    secondary: "bg-brand-secondary text-white hover:bg-brand-secondary/90",
    white: "bg-white text-brand-primary hover:bg-gray-50",
  };

  return (
    <div className={`${className}`}>
      <a 
        href={href} 
        className={`${baseStyles} ${variants[variant]}`}
      >
        {text}
        {icon}
        {showArrow && !icon && (
          <>
            <LuChevronRight className="md:hidden group-hover:translate-x-1 transition-transform" size={22} />
            <LuArrowUpRight className="hidden md:inline group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={25} />
          </>
        )}
      </a>
    </div>
  );
};

export default CTA;