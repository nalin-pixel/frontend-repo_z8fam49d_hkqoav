import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[92vh] grid place-items-center overflow-hidden bg-neutral-50">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/90" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.22em] text-neutral-700">Artisans spécialisés</p>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900">
            FRB FRÈRES
          </h1>
          <p className="mt-5 text-neutral-700 text-lg leading-relaxed">
            Entreprise familiale suisse, nous réalisons des interventions soignées avec un sens du détail exemplaire. Qualité irréprochable, réactivité et relation de confiance.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#services" className="pointer-events-auto inline-flex items-center justify-center rounded-full bg-neutral-900 px-5 py-3 text-white text-sm font-semibold hover:bg-neutral-800 transition-colors">
              Découvrir nos prestations
            </a>
            <a href="#cta" className="pointer-events-auto inline-flex items-center justify-center rounded-full border border-neutral-300 px-5 py-3 text-neutral-900 text-sm font-semibold hover:bg-neutral-900 hover:text-white transition-colors">
              Obtenir un devis
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
