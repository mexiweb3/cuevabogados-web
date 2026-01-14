"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Nosotros", href: "/nosotros" },
  { name: "Servicios", href: "/servicios" },
  { name: "Equipo", href: "/equipo" },
  { name: "Contacto", href: "/contacto" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-navy-500 rounded-lg flex items-center justify-center">
              <span className="text-gold-500 font-serif font-bold text-xl">
                CA
              </span>
            </div>
            <div className="hidden sm:block">
              <span className="font-serif text-xl font-semibold text-navy-500">
                CuevAbogados
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-charcoal hover:text-navy-500 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA & Phone */}
          <div className="hidden lg:flex lg:items-center lg:gap-4">
            <a
              href="tel:+528183547998"
              className="flex items-center gap-2 text-sm text-charcoal hover:text-navy-500"
            >
              <Phone className="h-4 w-4" />
              <span>81 8354 7998</span>
            </a>
            <Button asChild variant="gold" size="lg">
              <Link href="/analisis-gratuito">Análisis Gratuito</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Abrir menú</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-navy-500" />
            ) : (
              <Menu className="h-6 w-6 text-navy-500" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300",
            mobileMenuOpen ? "max-h-96 pb-4" : "max-h-0"
          )}
        >
          <div className="flex flex-col gap-2 pt-4 border-t border-gray-100">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="py-3 px-4 text-base font-medium text-charcoal hover:bg-navy-50 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 mt-2 border-t border-gray-100">
              <Button asChild variant="gold" size="lg" className="w-full">
                <Link href="/analisis-gratuito">Análisis Gratuito</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
