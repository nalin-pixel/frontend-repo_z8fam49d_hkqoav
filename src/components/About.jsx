export default function About() {
  return (
    <section id="about" className="relative bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-2 gap-12">
        <div>
          <p className="text-sm uppercase tracking-[0.22em] text-slate-700">À propos</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-950">Expertise terrain, approche rigoureuse</h2>
          <p className="mt-5 text-slate-700 leading-relaxed">
            Eau Detect intervient rapidement pour localiser l'origine de vos fuites d'eau, avec des méthodes non destructives. Chaque intervention est documentée et accompagnée d'un rapport clair destiné aux assurances et gérances.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Nous privilégions la précision, la transparence et le respect du bâti. Notre équipe intervient sur tous types de bâtiments, en coordination avec les régies, propriétaires et entreprises partenaires.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-2xl h-48 bg-gradient-to-br from-slate-100 to-slate-200" />
          <div className="rounded-2xl h-48 bg-gradient-to-br from-slate-100 to-slate-200" />
          <div className="rounded-2xl h-48 bg-gradient-to-br from-slate-100 to-slate-200" />
          <div className="rounded-2xl h-48 bg-gradient-to-br from-slate-100 to-slate-200" />
        </div>
      </div>
    </section>
  );
}
