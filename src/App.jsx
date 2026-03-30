import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import StudentsSection from "./components/StudentsSection";
import BookingSection from "./components/BookingSection";
import ContactSection from "./components/ContactSection";
// import GallerySection from "./components/GallerySection";
// import PricingSection from "./components/PricingSection";

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 700, easing: "ease-in-out", once: false, mirror: false, offset: 80 });
    const onResize = () => setTimeout(() => AOS.refresh(), 200);
    window.addEventListener("resize", onResize);
    window.addEventListener("load", () => AOS.refresh());
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100 flex flex-col overflow-x-hidden scroll-smooth">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <StudentsSection />
        {/* <GallerySection /> */}
        {/* <PricingSection /> */}
        <BookingSection />
        <ContactSection />
      </main>
    </div>
  );
}
