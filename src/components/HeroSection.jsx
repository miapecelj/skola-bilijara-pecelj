import heroImage from "../images/hero1.jpeg";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 text-center text-zinc-100 px-4 flex flex-col items-center gap-6">
        <h1 className="text-4xl md:text-6xl font-bold text-emerald-400 drop-shadow-lg">
          Škola bilijara Pecelj
        </h1>
        <p className="text-lg md:text-2xl text-zinc-200 max-w-2xl">
          Porodična tradicija. Strast. Preciznost. Ljubav prema bilijaru.
        </p>
        <a
          href="#booking"
          className="mt-2 px-8 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-base tracking-wide shadow-lg shadow-emerald-900/40 hover:shadow-emerald-900/60 transition-all duration-200 hover:-translate-y-0.5 inline-block"
        >
          Zakažite čas
        </a>
      </div>
    </section>
  );
}
