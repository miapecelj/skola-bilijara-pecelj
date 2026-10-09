const footerLinks = [
  { href: "/", label: "Početna" },
  { href: "/casovi-bilijara-beograd", label: "Časovi bilijara Beograd" },
  { href: "/casovi-bilijara-novi-sad", label: "Časovi bilijara Novi Sad" },
  { href: "/bilijar-za-pocetnike", label: "Bilijar za početnike" },
  { href: "/cesta-pitanja", label: "Česta pitanja" },
];

export default function SiteFooter() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 py-10 px-4">
      <nav className="max-w-5xl mx-auto flex flex-wrap justify-center gap-x-6 gap-y-3 mb-6">
        {footerLinks.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className="text-sm text-zinc-400 hover:text-green-400 transition-colors"
          >
            {label}
          </a>
        ))}
      </nav>
      <p className="text-zinc-600 text-xs text-center">© 2025 Škola bilijara Pecelj</p>
    </footer>
  );
}
