export default function Testimonials() {
  const quotes = [
    {
      text: "Un accompagnement impeccable du début à la fin. Travail propre, équipe ponctuelle et très professionnelle.",
      author: "S. Martin",
    },
    {
      text: "Des finitions impeccables, des conseils avisés et un rendu au-delà de nos attentes.",
      author: "A. Dupont",
    },
    {
      text: "Réactifs et fiables. Nous recommandons sans réserve pour des travaux de qualité.",
      author: "Entreprise locale",
    },
  ];

  return (
    <section id="testimonials" className="relative bg-neutral-50">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.22em] text-neutral-700">Témoignages</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-neutral-900">La confiance de nos clients</h2>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {quotes.map((q) => (
            <figure key={q.author} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <blockquote className="text-neutral-700 leading-relaxed">{q.text}</blockquote>
              <figcaption className="mt-4 text-sm text-neutral-500">{q.author}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
