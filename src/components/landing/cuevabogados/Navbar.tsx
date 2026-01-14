"use client";

import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const navigation = [
  { name: "Servicios", href: "#servicios" },
  { name: "Experiencia", href: "#experiencia" },
  { name: "Equipo", href: "#equipo" },
  { name: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-navy-100">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-navy-500 rounded flex items-center justify-center">
                <span className="text-gold-400 font-serif font-bold text-xl">C</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-serif font-bold text-navy-600">CuevAbogados</span>
                <span className="text-xs text-navy-400 tracking-wider">DESDE 1946</span>
              </div>
            </a>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex md:items-center md:gap-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-navy-600 hover:text-gold-600 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex md:items-center md:gap-4">
            <a
              href="tel:+528112345678"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-navy-500 rounded hover:bg-navy-600 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Agendar consulta
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 text-navy-600 hover:text-navy-900"
            >
              <span className="sr-only">Abrir menu</span>
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-navy-100">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-navy-600 hover:text-gold-600 transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="tel:+528112345678"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-base font-semibold text-white bg-navy-500 rounded hover:bg-navy-600 transition-colors"
              >
                <Phone className="w-4 h-4" />
                Agendar consulta
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
