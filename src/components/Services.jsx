import { Hammer, Paintbrush, Building2, Wrench } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Hammer,
      title: "Rénovation & Finitions",
      desc: "Interventions précises sur mesure, finitions impeccables et respect des matériaux."
    },
    {
      icon: Paintbrush,
      title: "Peinture & Revêtements",
      desc: "Peintures haut de gamme, choix de teintes harmonieuses et application experte."
    },
    {
      icon: Building2,
      title: "Aménagement intérieur",
      desc: "Optimisation des espaces, menuiserie fine et intégration esthétique durable."
    },
    {
      icon: Wrench,
      title: "Maintenance & Dépannage",
      desc: "Interventions rapides, diagnostics fiables et suivi après réalisation."
    }
  ];

  return (
    <section id="services" className="relative bg-neutral-50">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.22em] text-neutral-700">Prestations</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-neutral-900">Des services taillés pour l'exigence</h2>
          <p className="mt-3 text-neutral-700">
            Nous accompagnons particuliers et professionnels sur des chantiers de toutes tailles, avec la même exigence de qualité.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <article key={title} className="group rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
              <div className="h-12 w-12 rounded-xl bg-neutral-900 text-white grid place-items-center">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-neutral-900">{title}</h3>
              <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
