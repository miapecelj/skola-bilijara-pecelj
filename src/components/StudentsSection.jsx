import { useState } from "react";
import { X, MessageSquare, Play } from "lucide-react";
const imageModules = import.meta.glob("../images/polaznici/*.{jpg,jpeg,png}", { eager: true });


/* ── Student data ─────────────────────────────────────────── */
const polaznici = [
  {
    id: "sajo",
    name: "Sajo",
    review:
      "Veliko hvala @Djordje Pecelj... ti znaš znanje da preneses ❤️",
  },
  {
    id: "darko",
    name: "Darko",
    review:
      "Kakva god da su vam očekivanja — Đorđe je tu da ih nadmaši. Dugogodišnje iskustvo u bilijaru kombinovano sa sjajnim prezentacionim veštinama garantuje super ishod bez obzira na nivo igre.",
  },
  {
    id: "vulovic",
    name: "Vulović",
    review: "Od časova bilijara do jednog od najlepših prijateljstava.",
  },
  {
    id: "marko",
    name: "Marko",
    review:
      "Pozdrav svima. Moje ime je Marko Jovanović i član sam Škole bilijara Pecelj 4 i po godine. O Đoletu mogu da kažem samo reči hvale — pre svega bih rekao da je Đorđe kompletan kao osoba. Moj rad sa njim se nije svodio samo na bilijar, već i na mnoštvo drugih stvari. Kroz moju karijeru učio me je bitnim stvarima u životu, ponašanju, odlukama za stolom i van stola, određenim radnim navikama, raspoznavanju onoga što je dobro i onoga što nije. I najbitnije od svega — uvek se trudio da me nauči kako da pre svega budem gospodin za stolom, a i van njega.\n\nĐorđe kao trener ima sve predispozicije da od početnika napravi ozbiljnog igrača. Njegova posvećenost za vreme treninga je 101% — znanje, iskustvo, profesionalizam, detaljisanje su faktori koji ga čine kompletnim trenerom. Iz mog iskustva, za manje od godinu dana rada sa njim uspeo sam da osvojim drugo mesto na Regionalnom Državnom Prvenstvu, što je bio moj prvi veliki rezultat, a kasnije su došli i mnogo veći rezultati.\n\nSmatram da je Đorđe odličan za svaku dob igrača, bio početnik ili već oformljen igrač.",
  },
  {
    id: "radonja",
    name: "Radonja",
    review:
      "Đorđe Pecelj je velik poznavalac tehnike i strategije bilijara, ali je ujedno i izuzetan pedagog koji u svakom učeniku nastoji da ostvari njegov maksimalni potencijal. Moji časovi sa Đoletom su mi otvorili oči po pitanju složenosti same tehnike bilijara, ali i pristupu igri. Svakako vredi izdvojiti vreme za čas sa Đoletom, jer time poboljšavate vašu igru i samim tim povećavate uživanje u bilijaru.",
  },
  {
    id: "grada",
    name: "Grada",
    review:
      "Jedino mi je žao što nisam ranije krenuo sa časovima bilijara. Ma koliko čitao o tome, praktični trening je neuporedivo učinkovitiji. A malo je i do izbora trenera 😊",
  },
  {
    id: "aleksandar",
    name: "Aleksandar V.",
    review:
      "Saradnja sa Pecelj Đorđem je nešto što mi je omogućilo fundamentalno znanje u bilijaru i, još važnije, postalo je podloga za svaki moj dalji razvoj i napredak u igri. Prostim rečima rečeno, uz njegove instrukcije i usmeravanje savladao sam \u201ebilijarsku azbuku\u201c bez koje napredak u igri i samoj bilijarskoj logici jednostavno nije mogu\u0107.",
  },
  {
    id: "nikola",
    name: "Nikola",
    review:
      "Saradnja sa njim ima posebno mesto jer sam upravo tu napravio svoje prve ozbiljne poteze u bilijaru. Pravi pristup, strpljenje i dobra energija od samog početka.",
  },
  {
    id: "milijan",
    name: "Milijan",
    review:
      "Zahvaljujući Đorđu uspeo sam da svoju igru podignem na jedan viši nivo. Znanje koje poseduje uspeva da prenese veoma lako na učenika, tako da dajem sve preporuke za rad sa njim.",
  },
  {
    id: "trale",
    name: "Trale",
    review:
      "U svetu bilijara postoji mnogo ljudi koji znaju da ubace kuglu i to nije umetnost — prava umetnost je preneti znanje. Džordž je taj! Trener koji je meni bilijar razložio na atome, isecirao, analizirao i dočarao SVE rečima mnogo bolje nego što mnogi drugi ne mogu ni na stolu. Ustvari, šta da pričamo o čoveku koji je napravio Aleksu Pecelja, biološki gledano a i trenerski 😉",
  },
  {
    id: "vladislav",
    name: "Vladislav",
    review:
      "Искрено, ово је моје најбоље искуство. Иако се часови одржавају на страном језику за мене, Георг и даље може да пренесе своје мисли. Његова љубазност и професионализам је 10/10. Надам се да ћу са њим бити још бољи у игри. Веома саветујем сваког почетника.",
  },
  {
    id: "aca",
    name: "Aca Simović",
    review:
      "Profesionalna instruktaža prilagođena trenutnom nivou polaznika. Višegodišnje iskustvo se vidi već na prvom času, pogotovo za starije polaznike koji imaju dosta toga da koriguju u fundamentima igre. Za svaku preporuku!",
  },
  {
    id: "novak",
    name: "Novak",
    review:
      "U Đorđu se spajaju dve osobine koje se vrlo retko sreću na jednom mestu: velika strast za igrom i izražene pedagoške sposobnosti. Te dve stvari omogućuju svim polaznicima ove škole da vrlo brzo usvoje znanje koje im on prenosi. Zato budite sigurni da će i vaša tehnika i vaša igra napredovati od prvog časa koji budete imali s njim.",
  },
  {
    id: "ivan",
    name: "Ivan",
    review:
      "Od samog početka saradnje pa do danas, Đoletova posvećenost je bila apsolutna. Svakom igraču pristupa individualno, pažljivo analizira svaki pedalj tehnike i mindset-a, i na osnovu toga daje najefikasnija rešenja za direktan i kontinuiran napredak.\n\nZa mene nikad gledan kao trener, već učitelj i mentor. Svojim bogatim iskustvom pomogao mi je u mnogim aspektima igre — od sistematskog građenja znanja i pravilnog razvoja tehnike, razumevanja igre na dubljem nivou i mentalne pripreme, tako i uzajamnog prenosa lekcija između bilijara i života, gledajući na ovu igru kao nešto više od iste.\n\nIskrena preporuka svima koji žele da zakorače u svet bilijara ili pak unaprede bilo koji segment svoje igre, tehnike ili mindset-a.",
  },
  {
    id: "srdjan",
    name: "Srđan",
    review:
      "Đole je pravi profesionalac koji zna kako da motiviše i izvuče maksimum iz svakog igrača.",
  },
];

/* ── Video testimonials ───────────────────────────────────── */
// Add YouTube video IDs here when available (the part after ?v= in the URL)
const videos = [
  // { id: "video1", title: "Utisak polaznika", youtubeId: "dQw4w9WgXcQ" },
];

/* ── Avatar fallback ──────────────────────────────────────── */
function Avatar({ id, name }) {
  const initial = name.charAt(0).toUpperCase();
  const src = imageModules[`../images/polaznici/${id}.jpg`]?.default
           ?? imageModules[`../images/polaznici/${id}.jpeg`]?.default
           ?? imageModules[`../images/polaznici/${id}.png`]?.default
           ?? imageModules[`../images/polaznici/${id}.webp`]?.default;

  if (!src) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-zinc-800 text-4xl font-bold text-emerald-400 select-none">
        {initial}
      </div>
    );
  }

  return <img src={src} alt={name} className="w-full h-full object-cover" />;
}

/* ── Student card ─────────────────────────────────────────── */
function StudentCard({ student, onClick }) {
  return (
    <button
      onClick={() => onClick(student)}
      className="group relative w-full aspect-square rounded-2xl overflow-hidden border border-zinc-800 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-900/30 hover:-translate-y-1 focus:outline-none"
      aria-label={`Pročitaj utisak — ${student.name}`}
    >
      {/* Photo / Avatar */}
      <Avatar id={student.id} name={student.name} />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Name */}
      <div className="absolute bottom-0 left-0 right-0 p-3">
        <p className="text-white font-semibold text-sm truncate">{student.name}</p>
      </div>

      {/* Click hint badge */}
      <div className="absolute top-2 right-2 flex items-center gap-1 bg-emerald-500 text-black text-[10px] font-bold px-2 py-1 rounded-full opacity-80 group-hover:opacity-100 transition-opacity">
        <MessageSquare size={10} />
        <span>Utisak</span>
      </div>
    </button>
  );
}

/* ── Testimonial modal ────────────────────────────────────── */
function TestimonialModal({ student, onClose }) {
  if (!student) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" />

      <div
        className="relative w-full max-w-lg bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center gap-4 p-5 border-b border-zinc-800">
          <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-emerald-500 shrink-0">
            <Avatar id={student.id} name={student.name} />
          </div>
          <div>
            <p className="text-zinc-100 font-bold">{student.name}</p>
            <p className="text-emerald-400 text-xs font-medium">Polaznik škole</p>
          </div>
          <button
            onClick={onClose}
            className="ml-auto flex items-center justify-center w-8 h-8 rounded-full text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition-all"
          >
            <X size={18} />
          </button>
        </div>

        {/* Review text */}
        <div className="p-5 max-h-[60vh] overflow-y-auto">
          {student.review.split("\n\n").map((para, i) => (
            <p key={i} className="text-zinc-300 text-sm leading-relaxed mb-3 last:mb-0">
              {para}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Main section ─────────────────────────────────────────── */
export default function StudentsSection() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <section id="polaznici" className="bg-zinc-950 py-20 px-4 border-t border-zinc-800">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-3xl md:text-4xl font-bold text-emerald-400 text-center mb-3">
            Polaznici
          </h2>
          <p className="text-zinc-400 text-center text-sm mb-10">
            Kliknite na fotografiju da pročitate utisak
          </p>

          {/* Student grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {polaznici.map((p) => (
              <StudentCard key={p.id} student={p} onClick={setSelected} />
            ))}
          </div>

          {/* Video testimonials */}
          {videos.length > 0 && (
            <div className="mt-16">
              <h3 className="text-xl font-bold text-emerald-400 mb-6 flex items-center gap-2">
                <span className="block w-1 h-5 bg-emerald-500 rounded-full" />
                Video utisci
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {videos.map((v) => (
                  <div key={v.id} className="rounded-xl overflow-hidden border border-zinc-800 aspect-video">
                    <iframe
                      src={`https://www.youtube.com/embed/${v.youtubeId}`}
                      title={v.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

      {/* Modal */}
      <TestimonialModal student={selected} onClose={() => setSelected(null)} />
    </>
  );
}
