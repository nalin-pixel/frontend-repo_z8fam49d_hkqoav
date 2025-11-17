import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValueProps from './components/ValueProps';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';

function Footer(){
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-6 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <div className="inline-flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-slate-900 to-blue-800 text-white grid place-items-center font-semibold">ED</div>
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-slate-700">EAU DETECT</p>
              <p className="text-[11px] text-slate-500 -mt-1">Détection de fuites d'eau</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-slate-600 max-w-sm">Spécialistes de la détection non destructive en Suisse romande. Interventions rapides, diagnostics précis et rapports détaillés.</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-900">Coordonnées</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>Suisse romande</li>
            <li>contact@eaudetect.ch</li>
            <li>+41 00 000 00 00</li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-900">Liens</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li><a href="#services" className="hover:text-slate-900">Prestations</a></li>
            <li><a href="#about" className="hover:text-slate-900">À propos</a></li>
            <li><a href="#cta" className="hover:text-slate-900">Devis / Urgence</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">© {new Date().getFullYear()} Eau Detect. Tous droits réservés.</p>
          <p className="text-xs text-slate-500">Détection non destructive – Rapports assurantiels.</p>
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <ValueProps />
      <Services />
      <About />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
