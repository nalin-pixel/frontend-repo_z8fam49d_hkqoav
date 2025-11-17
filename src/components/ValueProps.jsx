import { ShieldCheck, Clock, Wrench, BadgeCheck } from "lucide-react";

export default function ValueProps() {
  const items = [
    {
      icon: ShieldCheck,
      title: "Qualité irréprochable",
      desc: "Des finitions soignées, des matériaux durables et un contrôle qualité exigeant."
    },
    {
      icon: Clock,
      title: "Intervention rapide",
      desc: "Planification réactive et respect strict des délais annoncés."
    },
    {
      icon: Wrench,
      title: "Savoir-faire polyvalent",
      desc: "Compétences transverses pour des chantiers complets, sans compromis."
    },
    {
      icon: BadgeCheck,
      title: "Entreprise familiale suisse",
      desc: "Fiabilité, respect et relation de confiance sur le long terme."
    }
  ];

  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-neutral-200/70 bg-white p-6 shadow-sm hover:shadow-md transition-all">
              <div className="h-11 w-11 rounded-xl bg-neutral-900 text-white grid place-items-center group-hover:scale-105 transition-transform">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-neutral-900">{title}</h3>
              <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
