import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-zinc-900/90 backdrop-blur z-[100] border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#hero"
          className="text-emerald-400 text-xl font-semibold hover:text-emerald-300 transition"
        >
          Škola bilijara Pecelj
        </a>

        {/* Desktop meni */}
        <nav className="hidden md:flex space-x-8 text-zinc-200">
          <a href="#about" className="hover:text-emerald-400 transition">O nama</a>
          <a href="#gallery" className="hover:text-emerald-400 transition">Galerija</a>
          <a href="#pricing" className="hover:text-emerald-400 transition">Treninzi</a>
          <a href="#contact" className="hover:text-emerald-400 transition">Kontakt</a>
        </nav>

        {/* Mobile dugme */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-zinc-200 hover:text-emerald-400 transition"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* FULLSCREEN GREEN MENU */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-emerald-600 text-white z-[99999] flex flex-col justify-between"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "#059669", // emerald-600
          }}
        >
          {/* Header */}
          <div className="flex justify-between items-center px-6 py-4 border-b border-emerald-400">
            <span className="text-lg font-semibold">Meni</span>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:text-emerald-200 transition"
            >
              <X size={24} />
            </button>
          </div>

          {/* Linkovi */}
          <nav className="flex flex-col items-center justify-center space-y-8 text-2xl font-semibold flex-grow">
            <a href="#hero" onClick={() => setIsOpen(false)} className="hover:text-emerald-200">
              Početna
            </a>
            <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-emerald-200">
              O nama
            </a>
            <a href="#gallery" onClick={() => setIsOpen(false)} className="hover:text-emerald-200">
              Galerija
            </a>
            <a href="#pricing" onClick={() => setIsOpen(false)} className="hover:text-emerald-200">
              Treninzi
            </a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-emerald-200">
              Kontakt
            </a>
          </nav>

          {/* Footer */}
          <div className="text-center border-t border-emerald-400 py-4 text-sm text-emerald-50/90">
            © 2025 Škola bilijara Pecelj
          </div>
        </div>
      )}
    </header>
  );
}
