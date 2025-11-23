import trener from "../images/aleksa.jpeg";
import nikola from "../images/aleksa.jpeg";
import marko from "../images/aleksa.jpeg";
import ana from "../images/aleksa.jpeg";

export default function AboutSection() {
    const members = [
        {
            name: "Djordje Pecelj",
            image: trener,
            role: "Osnivač i glavni trener",
            description:
                "Više od 30 godina iskustva u bilijaru. Trener i mentor brojnim šampionima Srbije i Evrope. Poznat po preciznosti, strpljenju i posvećenosti svakom polazniku.",
        },
        {
            name: "Nikola Pecelj",
            image: nikola,
            role: "Evropski prvak",
            description:
                "Evropski juniorski prvak i višestruki državni šampion. Poznat po tehničkoj igri i smirenosti pod pritiskom.",
        },
        {
            name: "Aleksa Pecelj",
            image: marko,
            role: "Viceprvak Srbije",
            description:
                "Jedan od najperspektivnijih mladih igrača u regionu. Njegov fokus i disciplina čine ga uzorom mlađim generacijama.",
        },
        {
            name: "Ana Petrović",
            image: ana,
            role: "Polaznica škole",
            description:
                "Talentovana igračica i višestruka osvajačica amaterskih turnira. Primer da upornost i strast vode do vrha.",
        },
    ];

    return (
        <section id="about" className="py-20 bg-zinc-900 border-t border-zinc-800">
            <h2 className="text-4xl font-bold text-center text-emerald-400 mb-10">
                O školi
            </h2>

            <p className="max-w-3xl mx-auto text-center text-zinc-300 mb-16 px-6">
                Škola bilijara Pecelj osnovana je iz ljubavi prema igri i želje da se znanje i
                iskustvo prenese novim generacijama. Porodična tradicija, profesionalni pristup
                i iskrena posvećenost svakom učeniku čine ovu školu jedinstvenom.
            </p>

            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 px-6">
                {members.map((m, index) => (
                    <div
                        key={index}
                        className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 text-center shadow-md hover:shadow-emerald-600/30 transition-all"
                    >
                        <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-emerald-500 shadow-lg">
                            <img
                                src={m.image}
                                alt={m.name}
                                className="object-cover w-full h-full hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                        <h3 className="text-xl font-semibold text-emerald-400">{m.name}</h3>
                        <p className="text-sm text-zinc-400 italic mb-2">{m.role}</p>
                        <p className="text-zinc-300 text-sm leading-relaxed">{m.description}</p>
                    </div>
                ))}
            </div>
             <div className="max-w-4xl mx-auto mt-20 text-center px-6" data-aos="fade-up">
        <h3 className="text-2xl font-semibold text-emerald-400 mb-4">Naša filozofija</h3>
        <p className="text-zinc-300 leading-relaxed">
            U školi bilijara Pecelj verujemo da je bilijar više od igre — to je disciplina, preciznost i mentalna ravnoteža.
            Naši treneri ne uče samo tehniku, već i koncentraciju, sportski duh i samopouzdanje.
            Svaki polaznik ima svoj tempo, a naš cilj je da prepozna svoj maksimum.
        </p>

        <h3 className="text-2xl font-semibold text-emerald-400 mt-12 mb-4">Postignuća naših igrača</h3>
        <ul className="text-zinc-300 leading-relaxed space-y-2">
            <li>🏆 Više od 20 državnih titula u protekloj deceniji</li>
            <li>🌍 Evropski šampion iz redova naše škole</li>
            <li>🎯 Brojni osvajači regionalnih i amaterskih turnira</li>
            <li>💫 Stotine zadovoljnih učenika svih uzrasta</li>
        </ul>
    </div>

        </section>
    );
}
