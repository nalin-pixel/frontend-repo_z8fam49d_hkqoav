export default function Testimonials() {
  const quotes = [
    {
      text: "Intervention rapide et rapport très clair pour l'assurance. Problème résolu sans démolir.",
      author: "M. Lenoir",
    },
    {
      text: "Détection précise par gaz traceur. Équipe professionnelle et ponctuelle.",
      author: "Régie immobilière",
    },
    {
      text: "Diagnostic fiable, photos et recommandations utiles. Je recommande.",
      author: "Propriétaire à Lausanne",
    },
  ];

  return (
    <section id="testimonials" className="relative bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.22em] text-slate-700">Témoignages</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-950">La confiance de nos clients</h2>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {quotes.map((q) => (
            <figure key={q.author} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <blockquote className="text-slate-700 leading-relaxed">{q.text}</blockquote>
              <figcaption className="mt-4 text-sm text-slate-500">{q.author}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
