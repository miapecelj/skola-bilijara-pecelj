import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import StudentsSection from "./components/StudentsSection";
import BookingSection from "./components/BookingSection";
import ContactSection from "./components/ContactSection";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-in-out",
      once: false,
      mirror: false,
      offset: 80,
      delay: 0,
    });

    const handleResize = () => setTimeout(() => AOS.refresh(), 200);
    window.addEventListener("resize", handleResize);
    window.addEventListener("load", () => AOS.refresh());
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100 flex flex-col overflow-x-hidden scroll-smooth">
      <Header />
      <main>
        <section id="hero">
          <HeroSection />
        </section>

        <section id="about">
          <AboutSection />
        </section>

        <section id="polaznici" data-aos="fade-up">
          <StudentsSection />
        </section>

        <section id="booking" data-aos="fade-up">
          <BookingSection />
        </section>

         <section id="booking" data-aos="fade-up">
          <ContactSection />
        </section>
      </main>
    </div>
  );
}
