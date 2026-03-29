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
  const [active, setActive] = useState("#hero");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
          scrolled
            ? "bg-zinc-950/95 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.5)] border-b border-zinc-800/80"
            : "bg-zinc-950/70 backdrop-blur-sm border-b border-transparent"
        }`}
      >
        {/*
          Mobile:  flex + justify-end  → hamburger snaps to the right corner
          Desktop: grid-cols-3         → [empty] [centered nav] [empty]
        */}
        <div className="h-16 px-4 sm:px-6 flex items-center justify-end md:grid md:grid-cols-3 md:max-w-7xl md:mx-auto">

          {/* LEFT — empty spacer (desktop only) */}
          <div className="hidden md:block" />

          {/* CENTER — desktop nav */}
          <nav className="hidden md:flex items-center justify-center gap-8">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setActive(href)}
                className={`relative text-sm font-medium tracking-wide py-1 transition-colors duration-200
                  after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-emerald-400 after:rounded-full after:transition-all after:duration-300
                  ${active === href
                    ? "text-emerald-400 after:w-full"
                    : "text-zinc-300 hover:text-emerald-400 after:w-0 hover:after:w-full"
                  }`}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* RIGHT — hamburger (mobile) / empty (desktop) */}
          <div className="flex items-center justify-end">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-zinc-300 hover:text-emerald-400 hover:bg-zinc-800/60 transition-all duration-200"
              aria-label={isOpen ? "Zatvori meni" : "Otvori meni"}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[99] md:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />

        <div
          className={`absolute top-0 right-0 h-full w-72 max-w-[85vw] bg-zinc-950 border-l border-zinc-800 flex flex-col shadow-2xl transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Drawer header */}
          <div className="flex items-center justify-between px-5 h-16 border-b border-zinc-800">
            <span className="text-zinc-200 font-semibold text-sm tracking-wide">Meni</span>
            <button
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center w-9 h-9 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition-all"
              aria-label="Zatvori meni"
            >
              <X size={20} />
            </button>
          </div>

          {/* Links */}
          <nav className="flex flex-col px-3 py-4 gap-1 flex-grow">
            {navLinks.map(({ href, label }, i) => (
              <a
                key={href}
                href={href}
                onClick={() => { setIsOpen(false); setActive(href); }}
                className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 border
                  ${active === href
                    ? "bg-emerald-500/15 text-emerald-400 border-emerald-500/25"
                    : "text-zinc-300 hover:bg-zinc-800/60 hover:text-zinc-100 border-transparent"
                  }`}
                style={{ transitionDelay: isOpen ? `${i * 35}ms` : "0ms" }}
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="px-5 py-4 border-t border-zinc-800">
            <p className="text-zinc-600 text-xs text-center">© 2025 Pecelj Billiard School</p>
          </div>
        </div>
      </div>
    </>
  );
}
