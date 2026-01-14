"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";

const navigation = [
  { name: "Servicios", href: "#servicios" },
  { name: "Experiencia", href: "#experiencia" },
  { name: "Equipo", href: "#equipo" },
  { name: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  // Scroll spy effect
  useEffect(() => {
    const handleScroll = () => {
      // Track if scrolled for shadow effect
      setScrolled(window.scrollY > 20);

      // Find active section
      const sections = navigation.map((nav) => nav.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-navy-100 transition-shadow duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-3">
              <Image
                src="/logo-cuevabogados.jpeg"
                alt="CuevAbogados Logo"
                width={44}
                height={44}
                className="rounded"
              />
              <div className="flex flex-col">
                <span className="text-xl font-montserrat font-bold text-navy-600 tracking-tight">
                  CuevAbogados
                </span>
                <span className="text-[10px] text-navy-400 tracking-[0.2em] uppercase">
                  Desde 1946
                </span>
              </div>
            </a>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex md:items-center md:gap-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors relative ${
                  activeSection === item.href.substring(1)
                    ? "text-gold-600"
                    : "text-navy-600 hover:text-gold-600"
                }`}
              >
                {item.name}
                {activeSection === item.href.substring(1) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold-500 rounded-full" />
                )}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex md:items-center md:gap-4">
            <a
              href="tel:+528183547998"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-navy-500 rounded hover:bg-navy-600 transition-colors"
            >
              <Phone className="w-4 h-4" />
              81 8354 7998
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 text-navy-600 hover:text-navy-900"
              aria-label={mobileMenuOpen ? "Cerrar menu" : "Abrir menu"}
            >
              <span className="sr-only">
                {mobileMenuOpen ? "Cerrar menu" : "Abrir menu"}
              </span>
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
          <div className="md:hidden py-4 border-t border-navy-100 animate-slide-down">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-medium transition-colors ${
                    activeSection === item.href.substring(1)
                      ? "text-gold-600"
                      : "text-navy-600 hover:text-gold-600"
                  }`}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="tel:+528183547998"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-base font-semibold text-white bg-navy-500 rounded hover:bg-navy-600 transition-colors"
              >
                <Phone className="w-4 h-4" />
                81 8354 7998
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
