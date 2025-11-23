export default function PricingSection() {
  const plans = [
    {
      title: "Osnovni plan",
      price: "40€ / mesec",
      description: "Idealno za početnike koji žele da nauče osnove bilijara.",
      features: [
        "2 individualna časa nedeljno",
        "Korišćenje opreme u školi",
        "Analiza tehnike",
      ],
    },
    {
      title: "Napredni plan",
      price: "70€ / mesec",
      description: "Za igrače koji žele da usavrše igru i učestvuju na turnirima.",
      features: [
        "3 individualna časa nedeljno",
        "Video analiza i strategija igre",
        "Priprema za turnire",
      ],
    },
    {
      title: "Profesionalni plan",
      price: "120€ / mesec",
      description: "Za takmičare i ozbiljne igrače koji ciljaju vrhunske rezultate.",
      features: [
        "5 individualnih treninga nedeljno",
        "Mentorski rad sa trenerom",
        "Plan ishrane i fokus trening",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-zinc-950 border-t border-zinc-800">
      <h2 className="text-4xl font-bold text-center text-emerald-400 mb-10">
        Planovi i cene
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-lg hover:shadow-emerald-500/20 transition"
          >
            <h3 className="text-2xl font-semibold text-emerald-400 mb-2">
              {plan.title}
            </h3>
            <p className="text-zinc-400 mb-4">{plan.description}</p>
            <p className="text-3xl font-bold text-white mb-6">{plan.price}</p>

            <ul className="space-y-2 text-zinc-300">
              {plan.features.map((feature, i) => (
                <li key={i}>• {feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
