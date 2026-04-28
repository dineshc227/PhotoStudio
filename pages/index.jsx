import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import PricingSection from "@/components/sections/PricingSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar onScrollTo={scrollTo} />

      <main>
        <HeroSection onScrollTo={scrollTo} />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <WhyUsSection />
        <TestimonialsSection />
        <PricingSection onScrollTo={scrollTo} />
        <ContactSection />
      </main>

      <Footer />
      <WhatsAppButton phone="919876543210" />
    </>
  );
}
