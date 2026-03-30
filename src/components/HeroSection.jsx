import heroImage from "../images/hero1.jpeg";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "contain",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 text-center px-6 flex flex-col items-center gap-5 py-24">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-green-400 drop-shadow-lg">
          Škola bilijara Pecelj
        </h1>
        <p className="text-base sm:text-lg md:text-2xl text-zinc-200 max-w-2xl">
          Porodična tradicija. Strast. Preciznost. Ljubav prema bilijaru.
        </p>
        <a
          href="#booking"
          className="mt-2 px-8 py-3.5 rounded-xl bg-green-500 hover:bg-green-500 text-black font-bold text-base tracking-wide shadow-lg shadow-green-900/40 hover:shadow-green-900/60 transition-all duration-200 hover:-translate-y-0.5 inline-block"
        >
          Zakažite čas
        </a>
      </div>
    </section>
  );
}
