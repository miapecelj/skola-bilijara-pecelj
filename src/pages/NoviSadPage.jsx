import PageLayout, { PageSection, TextLink } from "./PageLayout";

export default function NoviSadPage() {
  return (
    <PageLayout
      title="Časovi bilijara u Novom Sadu"
      lead="Treninzi pool bilijara u Novom Sadu sa Đorđem Peceljom, selektorom reprezentacije Srbije, za početnike i napredne igrače."
    >
      <PageSection title="Treninzi u Novom Sadu">
        <p>
          Škola bilijara Pecelj je stacionirana u Beogradu, ali organizuje treninge i radionice
          i u Novom Sadu. Termin i mesto treninga dogovaramo sa vama, pa samo naznačite u
          formularu da želite časove u Novom Sadu.
        </p>
        <p>
          Časovi su individualni ili u manjim grupama, a program se prilagođava vašem nivou:
          od prvih udaraca do pripreme za turnire.
        </p>
      </PageSection>

      <PageSection title="Šta se uči">
        <ul className="list-disc pl-6 space-y-1">
          <li>pravilne osnove: stav, držanje štapa i most</li>
          <li>tehnike udarca i kontrolu bele kugle</li>
          <li>taktiku i planiranje igre</li>
          <li>mentalni pristup i ponašanje za stolom</li>
        </ul>
        <p>
          Ako ste početnik, više o prvim časovima pročitajte na stranici{" "}
          <TextLink href="/bilijar-za-pocetnike">Bilijar za početnike</TextLink>.
        </p>
      </PageSection>

      <PageSection title="Analiza igre na daljinu">
        <p>
          Između treninga ili ako ne možete da dođete, možete poslati snimak svoje igre ili
          meča i dobiti detaljnu analizu sa savetima.
        </p>
      </PageSection>

      <PageSection title="Ko vodi treninge">
        <p>
          Đorđe Pecelj, osnivač škole i dugogodišnji selektor reprezentacije Srbije, ima više od
          30 godina iskustva u bilijaru. Više o školi pročitajte na{" "}
          <TextLink href="/">početnoj stranici</TextLink>, a odgovore na česta pitanja na stranici{" "}
          <TextLink href="/cesta-pitanja">Česta pitanja</TextLink>.
        </p>
      </PageSection>
    </PageLayout>
  );
}
