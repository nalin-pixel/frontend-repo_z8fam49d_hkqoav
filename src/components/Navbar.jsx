import { Menu, Phone } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Accueil", href: "#top" },
    { label: "Prestations", href: "#services" },
    { label: "A propos", href: "#about" },
    { label: "Témoignages", href: "#testimonials" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-white/60 backdrop-blur-xl border-b border-neutral-200/60">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#top" className="inline-flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-neutral-900 to-neutral-700 text-white grid place-items-center font-semibold tracking-tight">FR</div>
          <div className="text-left">
            <p className="text-sm uppercase tracking-[0.18em] text-neutral-700">FRB FRÈRES</p>
            <p className="text-[11px] text-neutral-500 -mt-1">Artisans d'excellence</p>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="#cta" className="inline-flex items-center gap-2 rounded-full bg-neutral-900 text-white px-4 py-2 text-sm font-medium hover:bg-neutral-800 transition-colors">
            <Phone className="h-4 w-4" /> Demander un devis
          </a>
        </div>

        <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200" onClick={() => setOpen(!open)} aria-label="Menu">
          <Menu className="h-5 w-5 text-neutral-700" />
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-6">
          <div className="rounded-xl border border-neutral-200 bg-white p-4 shadow-xl">
            <div className="flex flex-col">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} onClick={() => setOpen(false)} className="py-3 text-neutral-700 hover:text-neutral-900">
                  {item.label}
                </a>
              ))}
              <a href="#cta" className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-neutral-900 text-white px-4 py-2 text-sm font-medium hover:bg-neutral-800">
                <Phone className="h-4 w-4" /> Demander un devis
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
