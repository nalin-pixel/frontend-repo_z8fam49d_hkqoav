export default function CTA() {
  return (
    <section id="cta" className="relative bg-neutral-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="text-3xl sm:text-4xl font-bold">Parlons de votre projet</h3>
          <p className="mt-3 text-neutral-300">Expliquez-nous vos besoins. Nous revenons vers vous rapidement avec une proposition claire et un chiffrage transparent.</p>
        </div>
        <form onSubmit={(e)=>e.preventDefault()} className="bg-white text-neutral-900 rounded-2xl p-4 sm:p-6 border border-white/10 shadow-2xl">
          <div className="grid sm:grid-cols-2 gap-3">
            <input required placeholder="Nom" className="h-11 rounded-lg border border-neutral-200 px-3 outline-none focus:ring-2 ring-neutral-900/20"/>
            <input required type="email" placeholder="Email" className="h-11 rounded-lg border border-neutral-200 px-3 outline-none focus:ring-2 ring-neutral-900/20"/>
            <input placeholder="Téléphone" className="h-11 rounded-lg border border-neutral-200 px-3 outline-none focus:ring-2 ring-neutral-900/20 sm:col-span-2"/>
            <textarea required placeholder="Décrivez votre projet" rows={4} className="rounded-lg border border-neutral-200 px-3 py-2 outline-none focus:ring-2 ring-neutral-900/20 sm:col-span-2"/>
          </div>
          <button className="mt-4 inline-flex items-center justify-center rounded-lg bg-neutral-900 text-white px-4 py-3 text-sm font-semibold hover:bg-neutral-800 w-full">Envoyer ma demande</button>
        </form>
      </div>
    </section>
  );
}
