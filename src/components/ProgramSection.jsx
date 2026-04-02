import { Target, Brain, Shield, BarChart2, Layers, Users, Video } from "lucide-react";

const programLevels = ["Početnici", "Rekreativci", "Napredni igrači", "Profesionalci"];

const programTopics = [
    { icon: <Shield size={20} />, label: "Pravilne osnove" },
    { icon: <Target size={20} />, label: "Tehnike udarca" },
    { icon: <Layers size={20} />, label: "Filozofija bilijara" },
    { icon: <BarChart2 size={20} />, label: "Taktika" },
    { icon: <Brain size={20} />, label: "Mentalni pristup" },
    { icon: <BarChart2 size={20} />, label: "Analitika" },
];

function SectionTitle({ children }) {
    return (
        <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
            <span className="block w-1 h-5 bg-green-500 rounded-full" />
            {children}
        </h3>
    );
}

export default function ProgramSection() {
    return (
        <section id="program-rada" className="bg-zinc-900 py-20 px-4 border-t border-zinc-800 scroll-mt-20">
            <div className="max-w-5xl mx-auto" data-aos="fade-up">
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
                                <div key={label} className="flex items-center gap-2 text-zinc-300 text-sm">
                                    <span className="text-green-400">{icon}</span>
                                    {label}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Format */}
                    <div className="bg-zinc-800/40 border border-zinc-800 rounded-2xl p-6">
                        <SectionTitle>Format rada</SectionTitle>
                        <div className="flex items-start gap-3">
                            <Users size={18} className="text-green-400 mt-0.5 shrink-0" />
                            <p className="text-zinc-300 text-sm leading-relaxed">
                                Rad se odvija <span className="text-zinc-100 font-medium">individualno ili u manjim grupama</span>,
                                uz stalno praćenje napretka. Organizuju se i grupni kursevi na više nivoa kada
                                se steknu uslovi.
                            </p>
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
        </section>
    );
}
