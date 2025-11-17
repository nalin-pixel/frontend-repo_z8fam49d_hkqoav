import { ShieldCheck, Clock, FileCheck2, Scan } from "lucide-react";

export default function ValueProps() {
  const items = [
    {
      icon: Scan,
      title: "Détection précise",
      desc: "Technologies thermiques, acoustiques et gaz traceur pour localiser sans casser."
    },
    {
      icon: Clock,
      title: "Intervention rapide",
      desc: "Disponibilité prioritaire pour les urgences, délais courts et planning clair."
    },
    {
      icon: FileCheck2,
      title: "Rapports assurantiels",
      desc: "Compte-rendus structurés avec photos et recommandations pour assurances et gérances."
    },
    {
      icon: ShieldCheck,
      title: "Sans destruction",
      desc: "Méthodes non invasives, respect du bâti et du voisinage."
    }
  ];

  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-slate-200/70 bg-white p-6 shadow-sm hover:shadow-md transition-all">
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-slate-900 to-blue-800 text-white grid place-items-center group-hover:scale-105 transition-transform">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
