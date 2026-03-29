import { useState } from "react";
import emailjs from "@emailjs/browser";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Instagram, Facebook, CheckCircle, AlertCircle } from "lucide-react";
import { format } from "date-fns";

const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function TikTokIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
    </svg>
  );
}

const nivoOptions = [
  { value: "", label: "Izaberi nivo..." },
  { value: "Početnik", label: "Početnik" },
  { value: "Srednji nivo", label: "Srednji nivo" },
  { value: "Napredni", label: "Napredni" },
];

const lokacijaOptions = [
  { value: "", label: "Izaberi lokaciju..." },
  { value: "Beograd", label: "Beograd" },
  { value: "Novi Sad", label: "Novi Sad" },
  { value: "Online", label: "Online" },
];

const initialForm = {
  ime: "",
  kontakt: "",
  nivo: "",
  lokacija: "",
  poruka: "",
};

const initialErrors = { ime: "", kontakt: "", termin: "" };

export default function BookingSection() {
  const [form, setForm]       = useState(initialForm);
  const [termin, setTermin]   = useState(null);
  const [status, setStatus]   = useState("idle");
  const [errors, setErrors]   = useState(initialErrors);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const validate = () => {
    const newErrors = { ime: "", kontakt: "", termin: "" };
    if (!form.ime.trim())     newErrors.ime     = "Unesite ime i prezime.";
    if (!form.kontakt.trim()) newErrors.kontakt = "Unesite email ili telefon.";
    if (!termin)              newErrors.termin  = "Izaberite datum i vreme.";
    setErrors(newErrors);
    return !newErrors.ime && !newErrors.kontakt && !newErrors.termin;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          to_email:  "skolabilijarapecelj@gmail.com",
          from_name: form.ime,
          kontakt:   form.kontakt,
          nivo:      form.nivo,
          lokacija:  form.lokacija,
          termin:    termin ? format(termin, "dd.MM.yyyy HH:mm") : "—",
          poruka:    form.poruka,
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setForm(initialForm);
      setTermin(null);
      setErrors(initialErrors);
    } catch {
      setStatus("error");
    }
  };

  const inputClass = (hasError) =>
    `w-full bg-zinc-800 border ${hasError ? "border-red-500" : "border-zinc-700"} rounded-lg px-4 py-3 text-zinc-100 text-sm placeholder-zinc-500 focus:outline-none focus:border-emerald-500 transition-colors`;

  const now = new Date();

  return (
    <section id="booking" className="bg-zinc-900 py-20 px-4">
      <div className="max-w-2xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-bold text-emerald-400 text-center mb-10">
          Zakažite Čas
        </h2>

        <div className="bg-zinc-900/80 rounded-2xl border border-zinc-800 p-6 md:p-8">
          {status === "success" ? (
            <div className="flex flex-col items-center gap-4 py-16 text-center">
              <CheckCircle size={56} className="text-emerald-400" />
              <p className="text-zinc-100 font-semibold text-xl">Zahtev je poslat!</p>
              <p className="text-zinc-400">Kontaktiraćemo vas u najkraćem mogućem roku.</p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-4 px-6 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-sm transition-colors"
              >
                Pošaljite novi zahtev
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>

              {/* Row 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-zinc-300 text-sm mb-1.5">
                    Ime i prezime <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="ime"
                    value={form.ime}
                    onChange={handleChange}
                    className={inputClass(!!errors.ime)}
                  />
                  {errors.ime && (
                    <p className="flex items-center gap-1 text-red-400 text-xs mt-1">
                      <AlertCircle size={12} />{errors.ime}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-zinc-300 text-sm mb-1.5">
                    Email ili telefon <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="kontakt"
                    value={form.kontakt}
                    onChange={handleChange}
                    className={inputClass(!!errors.kontakt)}
                  />
                  {errors.kontakt && (
                    <p className="flex items-center gap-1 text-red-400 text-xs mt-1">
                      <AlertCircle size={12} />{errors.kontakt}
                    </p>
                  )}
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-zinc-300 text-sm mb-1.5">Nivo znanja</label>
                  <div className="relative">
                    <select
                      name="nivo"
                      value={form.nivo}
                      onChange={handleChange}
                      className={inputClass(false) + " appearance-none pr-8"}
                    >
                      {nivoOptions.map((o) => (
                        <option key={o.value} value={o.value}>{o.label}</option>
                      ))}
                    </select>
                    <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 text-xs">▾</span>
                  </div>
                </div>
                <div>
                  <label className="block text-zinc-300 text-sm mb-1.5">Lokacija</label>
                  <div className="relative">
                    <select
                      name="lokacija"
                      value={form.lokacija}
                      onChange={handleChange}
                      className={inputClass(false) + " appearance-none pr-8"}
                    >
                      {lokacijaOptions.map((o) => (
                        <option key={o.value} value={o.value}>{o.label}</option>
                      ))}
                    </select>
                    <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 text-xs">▾</span>
                  </div>
                </div>
              </div>

              {/* Date & Time picker */}
              <div className="mb-4">
                <label className="block text-zinc-300 text-sm mb-1.5">
                  Željeni datum i sat <span className="text-red-400">*</span>
                </label>
                <DatePicker
                  selected={termin}
                  onChange={(date) => { setTermin(date); if (errors.termin) setErrors((prev) => ({ ...prev, termin: "" })); }}
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={60}
                  dateFormat="dd.MM.yyyy HH:mm"
                  minDate={now}
                  placeholderText="Izaberite datum i vreme..."
                  popperPlacement="bottom-start"
                  wrapperClassName="w-full"
                  className={inputClass(!!errors.termin)}
                />
                {errors.termin && (
                  <p className="flex items-center gap-1 text-red-400 text-xs mt-1">
                    <AlertCircle size={12} />{errors.termin}
                  </p>
                )}
              </div>

              {/* Poruka */}
              <div className="mb-6">
                <label className="block text-zinc-300 text-sm mb-1.5">Dodatna poruka (opciono)</label>
                <textarea
                  name="poruka"
                  value={form.poruka}
                  onChange={handleChange}
                  rows={4}
                  className={inputClass(false) + " resize-y"}
                />
              </div>

              {/* Error */}
              {status === "error" && (
                <div className="flex items-center gap-2 text-red-400 text-sm mb-4">
                  <AlertCircle size={16} />
                  <span>Greška pri slanju. Pokušajte ponovo ili nas kontaktirajte direktno.</span>
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-3.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 disabled:opacity-60 disabled:cursor-not-allowed text-black font-bold text-sm tracking-wide transition-colors"
              >
                {status === "sending" ? "Slanje..." : "Pošaljite Zahtev"}
              </button>
            </form>
          )}

          {/* Social */}
          <div className="mt-8 pt-6 border-t border-zinc-800">
            <p className="text-zinc-300 text-sm font-medium text-center mb-4">Pratite nas</p>
            <div className="flex items-center justify-center gap-4">
              {[
                { href: "https://www.instagram.com/skolabilijara_pecelj?igsh=MWpibnR2YTN4cHVvaA%3D%3D&utm_source=qr", icon: <Instagram size={20} />, label: "Instagram" },
                { href: "https://www.facebook.com/share/19wxFZGaoQ/?mibextid=wwXIfr",  icon: <Facebook size={20} />,  label: "Facebook"  },
                { href: "https://tiktok.com",    icon: <TikTokIcon size={20} />, label: "TikTok"   },
              ].map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center justify-center w-11 h-11 rounded-full bg-zinc-800 text-zinc-300 hover:bg-emerald-500/20 hover:text-emerald-400 transition-all"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
