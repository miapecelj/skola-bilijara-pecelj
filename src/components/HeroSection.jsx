import heroImage from "../images/hero1.jpeg";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* tekst */}
      <div className="relative z-10 text-center text-zinc-100 px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-emerald-400 mb-4 drop-shadow-lg">
          Škola bilijara Pecelj
        </h1>
        <p className="text-lg md:text-2xl text-zinc-200 max-w-2xl mx-auto">
          Porodična tradicija. Strast. Preciznost. Ljubav prema bilijaru.
        </p>
      </div>
    </section>
  );
}
