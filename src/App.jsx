import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValueProps from './components/ValueProps';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';

function Footer(){
  return (
    <footer className="bg-white border-t border-neutral-200">
      <div className="mx-auto max-w-7xl px-6 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <div className="inline-flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-neutral-900 text-white grid place-items-center font-semibold">FR</div>
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-neutral-700">FRB FRÈRES</p>
              <p className="text-[11px] text-neutral-500 -mt-1">Artisans d'excellence</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-neutral-600 max-w-sm">Entreprise familiale suisse. Interventions soignées, finitions impeccables et accompagnement sérieux.</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-neutral-900">Coordonnées</p>
          <ul className="mt-3 space-y-2 text-sm text-neutral-600">
            <li>Genève & région</li>
            <li>contact@frb-freres.ch</li>
            <li>+41 00 000 00 00</li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-neutral-900">Liens</p>
          <ul className="mt-3 space-y-2 text-sm text-neutral-600">
            <li><a href="#services" className="hover:text-neutral-900">Prestations</a></li>
            <li><a href="#about" className="hover:text-neutral-900">À propos</a></li>
            <li><a href="#cta" className="hover:text-neutral-900">Devis</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-neutral-500">© {new Date().getFullYear()} FRB Frères. Tous droits réservés.</p>
          <p className="text-xs text-neutral-500">Site conçu pour une expérience premium.</p>
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
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
