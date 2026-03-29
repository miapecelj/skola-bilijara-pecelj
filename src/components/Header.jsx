import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#hero", label: "Početna" },
  { href: "#about", label: "O nama" },
  { href: "#gallery", label: "Galerija" },
  { href: "#pricing", label: "Treninzi" },
  { href: "#contact", label: "Kontakt" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
          scrolled
            ? "bg-zinc-900/95 backdrop-blur shadow-lg border-b border-zinc-800"
            : "bg-zinc-900/80 backdrop-blur border-b border-zinc-800/50"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <a
            href="#hero"
            className="text-emerald-400 text-xl font-semibold hover:text-emerald-300 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Škola bilijara Pecelj
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center space-x-8 text-zinc-200 text-sm font-medium">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="relative py-1 hover:text-emerald-400 transition-colors after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-emerald-400 after:transition-all hover:after:w-full"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-zinc-200 hover:text-emerald-400 transition-colors p-1 rounded"
            aria-label={isOpen ? "Zatvori meni" : "Otvori meni"}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-[99] transition-all duration-300 md:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60"
          onClick={() => setIsOpen(false)}
        />

        {/* Slide-in panel */}
        <div
          className={`absolute top-0 right-0 h-full w-72 max-w-full bg-zinc-900 border-l border-zinc-800 flex flex-col transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Panel header */}
          <div className="flex justify-between items-center px-6 py-4 border-b border-zinc-800">
            <span className="text-emerald-400 font-semibold text-lg">Meni</span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-zinc-400 hover:text-zinc-100 transition-colors"
              aria-label="Zatvori meni"
            >
              <X size={24} />
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex flex-col px-6 py-6 space-y-1 flex-grow">
            {navLinks.map(({ href, label }, i) => (
              <a
                key={href}
                href={href}
                onClick={() => setIsOpen(false)}
                className="text-zinc-200 hover:text-emerald-400 hover:bg-zinc-800 transition-colors text-base font-medium px-4 py-3 rounded-lg"
                style={{ transitionDelay: isOpen ? `${i * 40}ms` : "0ms" }}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Panel footer */}
          <div className="px-6 py-4 border-t border-zinc-800 text-zinc-500 text-xs text-center">
            © 2025 Škola bilijara Pecelj
          </div>
        </div>
      </div>
    </>
  );
}
