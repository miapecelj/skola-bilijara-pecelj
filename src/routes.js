import App from "./App";
import BeogradPage from "./pages/BeogradPage";
import NoviSadPage from "./pages/NoviSadPage";
import PocetniciPage from "./pages/PocetniciPage";
import FaqPage from "./pages/FaqPage";
import { faq } from "./pages/faq";

// Every page the site serves. scripts/prerender.mjs writes one HTML file per route,
// using title and description for the <head>; the sitemap lists the same paths.
export const routes = [
  { path: "/", Component: App },
  {
    path: "/casovi-bilijara-beograd",
    Component: BeogradPage,
    title: "Časovi bilijara Beograd | Škola bilijara Pecelj",
    description:
      "Časovi bilijara u Beogradu za početnike, rekreativce i takmičare. Individualni treninzi i rad u manjim grupama sa Đorđem Peceljom, selektorom reprezentacije Srbije.",
  },
  {
    path: "/casovi-bilijara-novi-sad",
    Component: NoviSadPage,
    title: "Časovi bilijara Novi Sad | Škola bilijara Pecelj",
    description:
      "Časovi bilijara u Novom Sadu za početnike i napredne igrače. Treninzi po dogovoru sa Đorđem Peceljom, selektorom reprezentacije Srbije, i analiza igre na daljinu.",
  },
  {
    path: "/bilijar-za-pocetnike",
    Component: PocetniciPage,
    title: "Bilijar za početnike | Škola bilijara Pecelj",
    description:
      "Naučite bilijar od nule: stav, držanje štapa, most, ciljanje i kontrola bele kugle. Časovi bilijara za početnike u Beogradu i Novom Sadu.",
  },
  {
    path: "/cesta-pitanja",
    Component: FaqPage,
    title: "Česta pitanja o časovima bilijara | Škola bilijara Pecelj",
    description:
      "Koliko košta čas bilijara, gde se održavaju treninzi, da li mogu da počnem bez iskustva i da li mi treba štap. Odgovori na najčešća pitanja.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    },
  },
];

export function findRoute(pathname) {
  const path = pathname.replace(/\/+$/, "") || "/";
  return routes.find((r) => r.path === path) ?? routes[0];
}
