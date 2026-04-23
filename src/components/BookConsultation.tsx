'use client'
import CTA from "./CTA";

const BookConsultation = () => {
  return (
    <section className="py-10 px-2 bg-bg-whitelight">
      <div className="max-w-[1400px] mx-auto bg-brand-primary rounded-[10px] p-10 text-center space-y-10">
        <h2 className="text-2xl font-medium text-white max-w-4xl mx-auto leading-tight">
          Want to accelerate professional growth and development at your organisation? See how we can help.
        </h2>
        
        <div className="flex justify-center pt-2">
          <CTA 
            text="Book a Consultation" 
            variant="white" 
            className="scale-110" 
          />
        </div>
      </div>
    </section>
  );
};

export default BookConsultation;
