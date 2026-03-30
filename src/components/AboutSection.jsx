import { Trophy, Target, Brain, Shield, BarChart2, Layers, Users, Video } from "lucide-react";
import aleksaImg from "../images/aleksa.jpeg";
import aleksaImg1 from "../images/aleksa1.jpeg";
import djordjeImg from "../images/galerija.jpeg";
import nikolaImg from "../images/nikola.jpeg";
import logoImg from "../images/logo.jpeg";
import trenerImg from "../images/trener.jpeg";


/* ── Data ─────────────────────────────────────────────────── */

const djordjePlayerTrophies = [
    "Višestruki vicešampion Srbije",
    "Višestruki osvajač međunarodnih turnira u regionu",
    "3. mesto na listi Balkan Pool Tour-a 2019.",
];

const selectorResults = [
    {
        athlete: "Aleksa Pecelj",
        medals: [
            "EP do 19 god — dve bronze i srebro",
            "EP do 23 god — Evropski šampion",
        ],
    },
    {
        athlete: "Bojana Šarac",
        medals: ["Evropsko juniorsko za devojčice — Srebro"],
    },
    {
        athlete: "Lazar Kostić",
        medals: ["EP do 17 god — šampion", "EP do 19 god — srebro"],
    },
    {
        athlete: "Luka Bugarski",
        medals: ["EP do 17 god — dve bronze", "EP do 19 god — bronza"],
    },
    {
        athlete: "Haris Trtovac",
        medals: ["EP do 23 god — bronza"],
    },
];

const aleksaTrophies = [
    "Višestruki državni šampion — juniorska i seniorska konkurencija",
    "Višestruki osvajač medalja sa Evropskih juniorskih šampionata",
    "Evropski šampion do 23 god.",
    "Više puta u završnicama najvećih svetskih turnira",
    "1/2 finale US Open-a",
];

const programLevels = ["Početnici", "Rekreativci", "Napredni igrači", "Profesionalci"];

const programTopics = [
    { icon: <Shield size={20} />, label: "Pravilne osnove" },
    { icon: <Target size={20} />, label: "Tehnike udarca" },
    { icon: <Layers size={20} />, label: "Filozofija bilijara" },
    { icon: <BarChart2 size={20} />, label: "Taktika" },
    { icon: <Brain size={20} />, label: "Mentalni pristup" },
    { icon: <BarChart2 size={20} />, label: "Analitika" },
];

/* ── Sub-components ───────────────────────────────────────── */

function SectionTitle({ children }) {
    return (
        <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
            <span className="block w-1 h-5 bg-green-500 rounded-full" />
            {children}
        </h3>
    );
}

function TrophyList({ items }) {
    return (
        <ul className="space-y-2">
            {items.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-zinc-300 text-sm leading-relaxed">
                    <Trophy size={14} className="text-green-400 mt-0.5 shrink-0" />
                    {item}
                </li>
            ))}
        </ul>
    );
}

/* ── Main component ───────────────────────────────────────── */

export default function AboutSection() {
    return (
        <section id="about" className="bg-zinc-900 py-20 px-4 border-t border-zinc-800">
            <div className="max-w-5xl mx-auto space-y-20">

                {/* ── O školi ─────────────────────────────────────── */}
                <div data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl font-bold text-green-500 text-center mb-10">
                        O školi
                    </h2>
                    <div className="bg-zinc-800/40 border border-zinc-800 rounded-2xl p-6 md:p-8">

                        <p className="text-zinc-300 leading-relaxed text-[15px]">
                            Škola je zasnovana na porodičnoj tradiciji i dugogodišnjem iskustvu u svetu bilijara.
                            Đorđe Pecelj, osnivač škole, je dugogodišnji selektor reprezentacije Srbije, sa kojom
                            je postigao dosta uspeha i vratio Srbiju na mapu Evrope i Sveta. Više od 3 decenije
                            iskustva je aktivno prisutan u ovom sportu - u početku kao igrač, a kasnije i kao neko
                            ko želi da podeli znanja i iskustva koje je sticao tokom godina.
                        </p>

                        <div className="mt-5 relative w-full h-[700px] rounded-xl overflow-hidden">
                            <img
                                src={trenerImg}
                                alt="Đorđe Pecelj - trener"
                                className="w-full h-full object-cover object-top"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                            <p className="absolute bottom-3 left-3 text-white font-semibold text-sm">Đorđe Pecelj</p>
                        </div>

                        <p className="text-zinc-300 leading-relaxed text-[15px] mt-5">
                            Bilijar je sastavni deo porodice Pecelj - sinovi Aleksa i Nikola su uz oca stekli
                            ljubav prema bilijaru. Aleksa se već proslavio na svetskom nivou, dok Nikola kreće tim
                            putem i na nacionalnom i regionalnom nivou postiže zapažene rezultate. Upravo ta
                            kombinacija iskustva, strasti, savremenog pristupa i razumevanja ovog sporta iz
                            različitih perspektiva čini osnov rada škole i odvaja je od drugih.
                        </p>

                        <div className="mt-6 flex flex-col sm:flex-row gap-4">
                            <div className="relative flex-1 h-72 rounded-xl overflow-hidden">
                                <img
                                    src={aleksaImg1}
                                    alt="Aleksa Pecelj"
                                    className="w-full h-full object-cover object-top"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                                <p className="absolute bottom-3 left-3 text-white font-semibold text-sm">Aleksa Pecelj</p>
                            </div>
                            <div className="relative flex-1 h-72 rounded-xl overflow-hidden">
                                <img
                                    src={nikolaImg}
                                    alt="Nikola Pecelj"
                                    className="w-full h-full object-cover object-top"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                                <p className="absolute bottom-3 left-3 text-white font-semibold text-sm">Nikola Pecelj</p>
                            </div>
                        </div>
                        <p className="text-zinc-300 leading-relaxed text-[15px] mt-4">
                            U školi se uči pristup, odnos prema sportu, disciplina, osnove i tehnika, ali takođe
                            i filozofija igre, taktika, psihologija.
                        </p>
                    </div>
                </div>
                {/* ── Filozofija ──────────────────────────────────── */}
                <div data-aos="fade-up">
                    <div className="relative bg-zinc-950 border border-green-900/50 rounded-2xl p-6 md:p-8 overflow-hidden">
                        {/* accent bar */}
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-500 rounded-l-2xl" />
                        <h2 className="text-2xl md:text-3xl font-bold text-green-500 mb-5">Filozofija</h2>
                        <p className="text-zinc-300 leading-relaxed text-[15px]">
                            Pre svega, u školi se gaji ideja da je bilijar džentlmenski sport. Ozbiljno se
                            pristupa čoveku sa njegovim predispozicijama, kvalitetima, ali i ograničenjima. Na
                            osnovu toga je građen sistem koji obuhvata ne samo osnove i tehnike, već se dosta
                            obraća pažnja i na mentalni i psihološki pristup — metodološki, korak po korak.
                        </p>
                        <p className="text-zinc-300 leading-relaxed text-[15px] mt-4">
                            Insistira se na disciplini i radu, bez kojih nema velikih rezultata i uspeha. Svakako
                            da nismo okrenuti samo profesionalnom bavljenju bilijarom — znamo kako i početnicima
                            da približimo ovaj sport i pre svega da im "skratimo vreme". Godine igranja bez
                            stručne pomoći se mogu svesti na par meseci, te tako i početnik relativno brzo počinje
                            da razume i više uživa u bilijaru.
                        </p>
                        <div className="mt-6 flex justify-center">
                            <img
                                src={logoImg}
                                alt="Škola bilijara Pecelj"
                                className="max-h-40 w-auto object-contain opacity-90"
                            />
                        </div>
                    </div>
                </div>

                {/* ── Postignuća ──────────────────────────────────── */}
                <div data-aos="fade-up">
                    <h2 className="text-2xl md:text-3xl font-bold text-green-500 text-center mb-10">
                        Postignuća
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Đorđe Pecelj */}
                        <div className="bg-zinc-800/40 border border-zinc-800 rounded-2xl overflow-hidden space-y-6">
                            <div className="relative h-56 w-full">
                                <img
                                    src={djordjeImg}
                                    alt="Đorđe Pecelj"
                                    className="w-full h-full object-cover object-top"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 to-transparent" />
                                <div className="absolute bottom-0 left-0 p-4">
                                    <h3 className="text-lg font-bold text-zinc-100 mb-0.5">Đorđe Pecelj</h3>
                                    <p className="text-green-400 text-sm font-medium">Osnivač · Trener · Selektor</p>
                                </div>
                            </div>
                            <div className="px-6 pb-6 space-y-6">

                                <div>
                                    <SectionTitle>Igrački uspesi</SectionTitle>
                                    <TrophyList items={djordjePlayerTrophies} />
                                </div>

                                <div>
                                    <SectionTitle>Kao selektor reprezentacije Srbije</SectionTitle>
                                    <div className="space-y-4">
                                        {selectorResults.map(({ athlete, medals }) => (
                                            <div key={athlete}>
                                                <p className="text-zinc-200 text-sm font-semibold mb-1">{athlete}</p>
                                                <TrophyList items={medals} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Aleksa Pecelj */}
                        <div className="bg-zinc-800/40 border border-zinc-800 rounded-2xl overflow-hidden space-y-6">
                            <div className="relative h-56 w-full">
                                <img
                                    src={aleksaImg}
                                    alt="Aleksa Pecelj"
                                    className="w-full h-full object-cover object-top"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 to-transparent" />
                                <div className="absolute bottom-0 left-0 p-4">
                                    <h3 className="text-lg font-bold text-zinc-100 mb-0.5">Aleksa Pecelj</h3>
                                    <p className="text-green-400 text-sm font-medium">Evropski šampion · Trener</p>
                                </div>
                            </div>
                            <div className="px-6 pb-6">

                                <div>
                                    <SectionTitle>Uspesi</SectionTitle>
                                    <TrophyList items={aleksaTrophies} />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* ── Program rada ────────────────────────────────── */}
                <div data-aos="fade-up">
                    <h2 className="text-2xl md:text-3xl font-bold text-green-400 text-center mb-10">
                        Program rada
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Levels */}
                        <div className="bg-zinc-800/40 border border-zinc-800 rounded-2xl p-6">
                            <SectionTitle>Prilagođen svima</SectionTitle>
                            <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
                                Uvek se uzme u obzir početni nivo polaznika, kao i to šta polaznik želi.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {programLevels.map((l) => (
                                    <span
                                        key={l}
                                        className="px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/25 text-green-300 text-sm font-medium"
                                    >
                                        {l}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Topics */}
                        <div className="bg-zinc-800/40 border border-zinc-800 rounded-2xl p-6">
                            <SectionTitle>Glavne teme</SectionTitle>
                            <div className="grid grid-cols-2 gap-3">
                                {programTopics.map(({ icon, label }) => (
                                    <div
                                        key={label}
                                        className="flex items-center gap-2 text-zinc-300 text-sm"
                                    >
                                        <span className="text-green-400">{icon}</span>
                                        {label}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Format */}
                        <div className="bg-zinc-800/40 border border-zinc-800 rounded-2xl p-6">
                            <SectionTitle>Format rada</SectionTitle>
                            <div className="space-y-3">
                                <div className="flex items-start gap-3">
                                    <Users size={18} className="text-green-400 mt-0.5 shrink-0" />
                                    <p className="text-zinc-300 text-sm leading-relaxed">
                                        Rad se odvija <span className="text-zinc-100 font-medium">individualno ili u manjim grupama</span>,
                                        uz stalno praćenje napretka. Organizuju se i grupni kursevi na više nivoa kada
                                        se steknu uslovi.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Video analysis */}
                        <div className="bg-zinc-800/40 border border-zinc-800 rounded-2xl p-6">
                            <SectionTitle>Analiza mečeva</SectionTitle>
                            <div className="flex items-start gap-3">
                                <Video size={18} className="text-green-400 mt-0.5 shrink-0" />
                                <p className="text-zinc-300 text-sm leading-relaxed">
                                    Škola bilijara se bavi i <span className="text-zinc-100 font-medium">analizom mečeva</span>.
                                    Pošaljete snimak i dobijete detaljnu analizu.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}
