import { Waves, Thermometer, Mic, SprayCan } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Thermometer,
      title: "Thermographie",
      desc: "Caméras thermiques pour détecter pertes et fuites via signatures de chaleur."
    },
    {
      icon: Mic,
      title: "Acoustique",
      desc: "Écoute électronique haute sensibilité pour localiser les fuites sous pression."
    },
    {
      icon: SprayCan,
      title: "Gaz traceur",
      desc: "Injection d'hydrogène/azote pour déceler les micro-fuites invisibles."
    },
    {
      icon: Waves,
      title: "Humidité & endoscopie",
      desc: "Mesures d'humidité, inspection endoscopique et tests ciblés non destructifs."
    }
  ];

  return (
    <section id="services" className="relative bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.22em] text-slate-700">Prestations</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-950">Détection de fuites non destructive</h2>
          <p className="mt-3 text-slate-700">
            Méthodes complémentaires pour une localisation fiable, sans dégâts. Adaptées aux maisons, immeubles, commerces et régies.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <article key={title} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-slate-900 to-blue-800 text-white grid place-items-center">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
