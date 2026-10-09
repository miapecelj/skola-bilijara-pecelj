import PageLayout, { PageSection, TextLink } from "./PageLayout";

export default function PocetniciPage() {
  return (
    <PageLayout
      title="Bilijar za početnike"
      lead="Nikada niste igrali ili tek počinjete? Naučite bilijar pravilno od prvog časa, uz trenera sa više od 30 godina iskustva."
    >
      <PageSection title="Da li mogu da počnem bez predznanja?">
        <p>
          Da. Većina polaznika dolazi bez ikakvog iskustva. Upravo na početku je najvažnije
          naučiti pravilne osnove, jer je loše navike kasnije mnogo teže ispraviti nego
          naučiti stvari kako treba od prvog dana.
        </p>
      </PageSection>

      <PageSection title="Šta se uči na prvim časovima">
        <ul className="list-disc pl-6 space-y-1">
          <li>pravilan stav za stolom</li>
          <li>držanje štapa i pravljenje mosta</li>
          <li>pravolinijski udarac i ciljanje</li>
          <li>osnovna kontrola bele kugle</li>
          <li>pravila igre i ponašanje za stolom</li>
        </ul>
        <p>
          Kada savladate osnove, prelazimo na tehnike udarca, taktiku i mentalni pristup igri.
        </p>
      </PageSection>

      <PageSection title="Kako izgleda napredak">
        <p>
          Tempo zavisi od toga koliko često trenirate i šta želite da postignete. Neki polaznici
          igraju rekreativno, a neki su kroz školu stigli do takmičenja.
        </p>
        <blockquote className="border-l-4 border-green-500 pl-4 italic text-zinc-400">
          „Đorđe kao trener ima sve predispozicije da od početnika napravi ozbiljnog igrača.”
          <span className="block not-italic text-sm mt-2">Marko Jovanović, polaznik škole</span>
        </blockquote>
      </PageSection>

      <PageSection title="Gde se održavaju časovi">
        <p>
          Treninzi se održavaju u Beogradu, a po dogovoru i u Novom Sadu. Pogledajte{" "}
          <TextLink href="/casovi-bilijara-beograd">časove bilijara u Beogradu</TextLink> ili{" "}
          <TextLink href="/casovi-bilijara-novi-sad">časove bilijara u Novom Sadu</TextLink>, a
          odgovore na pitanja o ceni i opremi naći ćete na stranici{" "}
          <TextLink href="/cesta-pitanja">Česta pitanja</TextLink>.
        </p>
      </PageSection>
    </PageLayout>
  );
}
