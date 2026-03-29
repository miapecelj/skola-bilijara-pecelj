import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { X, Instagram, Facebook, CheckCircle, AlertCircle } from "lucide-react";

const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// Simple TikTok icon (not in lucide-react)
function TikTokIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
    </svg>
  );
}

const nivoOptions = [
  { value: "", label: "Izaberi nivo..." },
  { value: "pocetnik", label: "Početnik" },
  { value: "srednji", label: "Srednji nivo" },
  { value: "napredni", label: "Napredni" },
];

const lokacijaOptions = [
  { value: "", label: "Izaberi lokaciju..." },
  { value: "beograd", label: "Beograd" },
  { value: "novi-sad", label: "Novi Sad" },
  { value: "online", label: "Online" },
];

const initialForm = {
  ime: "",
  kontakt: "",
  nivo: "",
  lokacija: "",
  termin: "",
  poruka: "",
};

export default function BookingModal({ isOpen, onClose }) {
  const [form, setForm]       = useState(initialForm);
  const [status, setStatus]   = useState("idle"); // idle | sending | success | error
  const overlayRef            = useRef(null);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  // Reset form when reopened
  useEffect(() => {
    if (isOpen) { setForm(initialForm); setStatus("idle"); }
  }, [isOpen]);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.ime,
          kontakt:   form.kontakt,
          nivo:      form.nivo,
          lokacija:  form.lokacija,
          termin:    form.termin,
          poruka:    form.poruka,
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      onClick={(e) => e.target === overlayRef.current && onClose()}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" />

      {/* Modal */}
      <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-zinc-900 rounded-2xl border border-zinc-800 shadow-2xl">

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 flex items-center justify-center w-8 h-8 rounded-full text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition-all"
          aria-label="Zatvori"
        >
          <X size={18} />
        </button>

        <div className="px-6 pt-8 pb-6">
          {/* Title */}
          <h2 className="text-2xl font-bold text-emerald-400 text-center mb-6">
            Zakažite Čas
          </h2>

          {status === "success" ? (
            <div className="flex flex-col items-center gap-4 py-10 text-center">
              <CheckCircle size={52} className="text-emerald-400" />
              <p className="text-zinc-100 font-semibold text-lg">Zahtev je poslat!</p>
              <p className="text-zinc-400 text-sm">Kontaktiraćemo vas u najkraćem mogućem roku.</p>
              <button
                onClick={onClose}
                className="mt-4 px-6 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-sm transition-colors"
              >
                Zatvori
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              {/* Row 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-zinc-300 text-sm mb-1">Ime i prezime</label>
                  <input
                    type="text"
                    name="ime"
                    value={form.ime}
                    onChange={handleChange}
                    required
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2.5 text-zinc-100 text-sm placeholder-zinc-500 focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-zinc-300 text-sm mb-1">Email ili telefon</label>
                  <input
                    type="text"
                    name="kontakt"
                    value={form.kontakt}
                    onChange={handleChange}
                    required
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2.5 text-zinc-100 text-sm placeholder-zinc-500 focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-zinc-300 text-sm mb-1">Nivo znanja</label>
                  <div className="relative">
                    <select
                      name="nivo"
                      value={form.nivo}
                      onChange={handleChange}
                      className="w-full appearance-none bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2.5 text-zinc-100 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                    >
                      {nivoOptions.map((o) => (
                        <option key={o.value} value={o.value}>{o.label}</option>
                      ))}
                    </select>
                    <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400">▾</span>
                  </div>
                </div>
                <div>
                  <label className="block text-zinc-300 text-sm mb-1">Lokacija</label>
                  <div className="relative">
                    <select
                      name="lokacija"
                      value={form.lokacija}
                      onChange={handleChange}
                      className="w-full appearance-none bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2.5 text-zinc-100 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                    >
                      {lokacijaOptions.map((o) => (
                        <option key={o.value} value={o.value}>{o.label}</option>
                      ))}
                    </select>
                    <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400">▾</span>
                  </div>
                </div>
              </div>

              {/* Termin */}
              <div className="mb-4">
                <label className="block text-zinc-300 text-sm mb-1">
                  Poželjan termin <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="termin"
                  value={form.termin}
                  onChange={handleChange}
                  required
                  placeholder="e.g., Weekday evenings / Vikend popodne"
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2.5 text-zinc-100 text-sm placeholder-zinc-500 focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>

              {/* Poruka */}
              <div className="mb-6">
                <label className="block text-zinc-300 text-sm mb-1">Dodatna poruka (opciono)</label>
                <textarea
                  name="poruka"
                  value={form.poruka}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2.5 text-zinc-100 text-sm placeholder-zinc-500 focus:outline-none focus:border-emerald-500 transition-colors resize-y"
                />
              </div>

              {/* Error */}
              {status === "error" && (
                <div className="flex items-center gap-2 text-red-400 text-sm mb-4">
                  <AlertCircle size={16} />
                  <span>Greška pri slanju. Pokušajte ponovo.</span>
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 disabled:opacity-60 disabled:cursor-not-allowed text-black font-semibold text-sm transition-colors"
              >
                {status === "sending" ? "Slanje..." : "Pošaljite Zahtev"}
              </button>
            </form>
          )}

          {/* Social */}
          <div className="mt-6 pt-5 border-t border-zinc-800">
            <p className="text-zinc-300 text-sm font-medium text-center mb-4">Pratite nas</p>
            <div className="flex items-center justify-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-11 h-11 rounded-full bg-zinc-800 text-zinc-300 hover:bg-emerald-500/20 hover:text-emerald-400 transition-all"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-11 h-11 rounded-full bg-zinc-800 text-zinc-300 hover:bg-emerald-500/20 hover:text-emerald-400 transition-all"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-11 h-11 rounded-full bg-zinc-800 text-zinc-300 hover:bg-emerald-500/20 hover:text-emerald-400 transition-all"
                aria-label="TikTok"
              >
                <TikTokIcon size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
