import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[92vh] grid place-items-center overflow-hidden bg-slate-50">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white/95" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.22em] text-slate-700">Détection de fuites non destructive</p>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950">
            Eau Detect
          </h1>
          <p className="mt-5 text-slate-700 text-lg leading-relaxed">
            Localisation précise des fuites d'eau, sans casse. Intervention rapide en Suisse romande, rapports techniques pour assurances et régies.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#services" className="pointer-events-auto inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-white text-sm font-semibold hover:bg-slate-800 transition-colors">
              Prestations
            </a>
            <a href="#cta" className="pointer-events-auto inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-3 text-slate-900 text-sm font-semibold hover:bg-slate-900 hover:text-white transition-colors">
              Urgence / Devis
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
