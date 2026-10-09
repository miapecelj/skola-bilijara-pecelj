import PageLayout, { TextLink } from "./PageLayout";
import { faq } from "./faq";

export default function FaqPage() {
  return (
    <PageLayout
      title="Česta pitanja o časovima bilijara"
      lead="Odgovori na pitanja koja nam polaznici najčešće postavljaju pre prvog časa."
    >
      <section className="py-12 px-4 border-t border-zinc-800">
        <div className="max-w-3xl mx-auto space-y-4">
          {faq.map(({ q, a }) => (
            <div key={q} className="bg-zinc-800/40 border border-zinc-800 rounded-2xl p-6">
              <h2 className="text-lg md:text-xl font-semibold text-green-400 mb-2">{q}</h2>
              <p className="text-zinc-300 leading-relaxed">{a}</p>
            </div>
          ))}
          <p className="text-zinc-400 pt-4">
            Više informacija: <TextLink href="/casovi-bilijara-beograd">časovi bilijara u Beogradu</TextLink>,{" "}
            <TextLink href="/casovi-bilijara-novi-sad">časovi bilijara u Novom Sadu</TextLink> i{" "}
            <TextLink href="/bilijar-za-pocetnike">bilijar za početnike</TextLink>.
          </p>
        </div>
      </section>
    </PageLayout>
  );
}
