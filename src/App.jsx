import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import GallerySection from "./components/GallerySection";
import PricingSection from "./components/PricingSection";
import ContactSection from "./components/ContactSection";
import BookingModal from "./components/BookingModal";

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);

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
      <Header onOpenBooking={() => setBookingOpen(true)} />
      <main className="pt-0 space-y-4">
        <section id="hero" data-aos="fade-up" data-aos-duration="200">
          <HeroSection onOpenBooking={() => setBookingOpen(true)} />
        </section>

        {/* <section id="about" data-aos="fade-up" data-aos-duration="200">
          <AboutSection />
        </section>

        <section id="gallery" data-aos="fade-up" data-aos-duration="200">
          <GallerySection />
        </section>

        <section id="pricing" data-aos="fade-up" data-aos-duration="200">
          <PricingSection />
        </section>

        <section id="contact" data-aos="fade-up" data-aos-duration="200">
          <ContactSection />
        </section> */}
      </main>

      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}
