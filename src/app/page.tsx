import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LMSBlock from "@/components/LMSBlock";
import ManagementDevelopment from "@/components/ManagementDevelopment";
import TrainingConsultant from "@/components/TrainingConsultant";
import LearningManagement from "@/components/LearningManagement";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Thehub from "@/components/Thehub";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <LearningManagement />
      <LMSBlock />
      <ManagementDevelopment />
      <Thehub />
      <TrainingConsultant />
      <Testimonials />
      <Footer />
    </main>
  );
}