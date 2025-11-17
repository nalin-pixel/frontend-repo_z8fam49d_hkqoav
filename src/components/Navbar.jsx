import { Menu, Phone, Mail, Shield } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Accueil", href: "#top" },
    { label: "Prestations", href: "#services" },
    { label: "À propos", href: "#about" },
    { label: "Témoignages", href: "#testimonials" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-white/70 backdrop-blur-xl border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#top" className="inline-flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-slate-900 to-blue-800 text-white grid place-items-center font-semibold tracking-tight">ED</div>
          <div className="text-left">
            <p className="text-sm uppercase tracking-[0.18em] text-slate-700">EAU DETECT</p>
            <p className="text-[11px] text-slate-500 -mt-1">Détection de fuites d'eau</p>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="#cta" className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-4 py-2 text-sm font-medium hover:bg-slate-800 transition-colors">
            <Phone className="h-4 w-4" /> Urgence / Devis
          </a>
        </div>

        <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200" onClick={() => setOpen(!open)} aria-label="Menu">
          <Menu className="h-5 w-5 text-slate-700" />
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-6">
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-xl">
            <div className="flex flex-col">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} onClick={() => setOpen(false)} className="py-3 text-slate-700 hover:text-slate-900">
                  {item.label}
                </a>
              ))}
              <a href="#cta" className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 text-white px-4 py-2 text-sm font-medium hover:bg-slate-800">
                <Phone className="h-4 w-4" /> Urgence / Devis
              </a>
              <div className="mt-3 grid grid-cols-2 gap-2 text-xs text-slate-500">
                <div className="inline-flex items-center gap-1"><Shield className="h-3.5 w-3.5"/>Assurances</div>
                <div className="inline-flex items-center gap-1"><Mail className="h-3.5 w-3.5"/>Rapport PDF</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
