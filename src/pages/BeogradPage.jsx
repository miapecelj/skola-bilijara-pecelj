import PageLayout, { PageSection, TextLink } from "./PageLayout";

export default function BeogradPage() {
  return (
    <PageLayout
      title="Časovi bilijara u Beogradu"
      lead="Individualni časovi i treninzi u manjim grupama sa Đorđem Peceljom, selektorom reprezentacije Srbije, za početnike, rekreativce i takmičare."
    >
      <PageSection title="Kome su namenjeni časovi">
        <p>
          Škola bilijara Pecelj radi u Beogradu i prima polaznike svih nivoa. Program se uvek
          prilagođava vašem početnom znanju i onome što želite da postignete: da naučite osnove,
          da igrate bolje sa prijateljima ili da se spremite za turnire.
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>potpuni početnici, bez ikakvog predznanja</li>
          <li>rekreativci koji žele da poprave tehniku</li>
          <li>napredni igrači i takmičari</li>
        </ul>
        <p>
          Ako tek počinjete, pročitajte šta se uči na prvim časovima na stranici{" "}
          <TextLink href="/bilijar-za-pocetnike">Bilijar za početnike</TextLink>.
        </p>
      </PageSection>

      <PageSection title="Kako izgleda trening">
        <p>
          Treninzi se održavaju individualno ili u manjim grupama, uz stalno praćenje napretka.
          Kroz časove pool bilijara prolazimo kroz:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>pravilne osnove: stav, držanje štapa i most</li>
          <li>tehnike udarca i kontrolu bele kugle</li>
          <li>taktiku i planiranje igre</li>
          <li>mentalni pristup i ponašanje za stolom</li>
          <li>analizu igre i mečeva</li>
        </ul>
        <p>
          Škola radi i analizu mečeva: pošaljete snimak svoje igre i dobijete detaljnu analizu
          sa savetima šta da poboljšate.
        </p>
      </PageSection>

      <PageSection title="Ko vodi treninge">
        <p>
          Školu je osnovao Đorđe Pecelj, dugogodišnji selektor reprezentacije Srbije, sa više od
          30 godina iskustva u bilijaru, prvo kao igrač, a zatim kao trener. Bilijar je porodična
          tradicija: Aleksa Pecelj je evropski šampion do 23 godine i osvajač medalja na
          Evropskim prvenstvima.
        </p>
      </PageSection>

      <PageSection title="Kako da zakažete čas">
        <p>
          Popunite formular ispod ili nas pozovite na +381 69 2454 527. Javićemo vam se da
          dogovorimo termin i mesto treninga. Odgovore na najčešća pitanja o ceni, opremi i
          trajanju obuke naći ćete na stranici <TextLink href="/cesta-pitanja">Česta pitanja</TextLink>.
        </p>
        <p>
          Živite u Novom Sadu? Pogledajte{" "}
          <TextLink href="/casovi-bilijara-novi-sad">časove bilijara u Novom Sadu</TextLink>.
        </p>
      </PageSection>
    </PageLayout>
  );
}
