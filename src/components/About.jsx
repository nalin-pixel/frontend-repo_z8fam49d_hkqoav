export default function About() {
  return (
    <section id="about" className="relative bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-2 gap-12">
        <div>
          <p className="text-sm uppercase tracking-[0.22em] text-neutral-700">À propos</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-neutral-900">Une histoire de rigueur et d'engagement</h2>
          <p className="mt-5 text-neutral-700 leading-relaxed">
            FRB Frères est une entreprise familiale suisse. Nous intervenons avec précision et discrétion, toujours guidés par l'exigence du travail bien fait. Chaque projet bénéficie d'un interlocuteur dédié et d'un suivi transparent.
          </p>
          <p className="mt-4 text-neutral-700 leading-relaxed">
            Notre approche repose sur des matériaux de qualité, des finitions irréprochables et un respect des délais. Nous sommes fiers d'entretenir des relations durables avec nos clients, fondées sur la confiance et la satisfaction.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-2xl h-48 bg-gradient-to-br from-neutral-100 to-neutral-200" />
          <div className="rounded-2xl h-48 bg-gradient-to-br from-neutral-100 to-neutral-200" />
          <div className="rounded-2xl h-48 bg-gradient-to-br from-neutral-100 to-neutral-200" />
          <div className="rounded-2xl h-48 bg-gradient-to-br from-neutral-100 to-neutral-200" />
        </div>
      </div>
    </section>
  );
}
