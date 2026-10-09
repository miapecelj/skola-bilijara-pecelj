import Header from "../components/Header";
import BookingSection from "../components/BookingSection";
import ContactSection from "../components/ContactSection";
import SiteFooter from "../components/SiteFooter";

export function PageSection({ title, children }) {
  return (
    <section className="py-12 px-4 border-t border-zinc-800">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-green-400 mb-5">{title}</h2>
        <div className="space-y-4 text-zinc-300 leading-relaxed">{children}</div>
      </div>
    </section>
  );
}

export function TextLink({ href, children }) {
  return (
    <a href={href} className="text-green-400 hover:text-green-300 underline underline-offset-4">
      {children}
    </a>
  );
}

export default function PageLayout({ title, lead, children }) {
  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100 flex flex-col overflow-x-hidden">
      <Header base="/" />
      <main>
        <section className="pt-32 pb-14 px-4 bg-zinc-950">
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-5">
            <h1 className="text-3xl sm:text-5xl font-bold text-green-400">{title}</h1>
            <p className="text-base sm:text-lg text-zinc-300 max-w-2xl">{lead}</p>
            <a
              href="#booking"
              className="mt-2 px-8 py-3.5 rounded-xl bg-green-500 text-black font-bold text-base tracking-wide shadow-lg shadow-green-900/40 transition-all duration-200 hover:-translate-y-0.5 inline-block"
            >
              Zakaži čas
            </a>
          </div>
        </section>
        {children}
        <BookingSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
