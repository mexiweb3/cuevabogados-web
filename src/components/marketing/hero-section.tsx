import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-navy-500 via-navy-600 to-navy-700 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Gold Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400" />

      <div className="container mx-auto px-4 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
              <Shield className="h-4 w-4 text-gold-400" />
              <span className="text-white/90 text-sm font-medium">
                80 años de experiencia
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Protegemos su empresa{" "}
              <span className="text-gold-400">desde 1946</span>
            </h1>

            <p className="text-lg sm:text-xl text-navy-100 mb-8 max-w-xl leading-relaxed">
              Líderes en derecho laboral patronal en Monterrey. Tres
              generaciones dedicadas a defender los intereses de empresas
              nacionales e internacionales.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild variant="gold" size="xl">
                <Link href="/analisis-gratuito" className="group">
                  Análisis Gratuito
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl" className="border-white/30 text-white hover:bg-white/10 hover:text-white">
                <Link href="/servicios">Nuestros Servicios</Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-navy-200 text-sm mb-4">
                Confían en nosotros:
              </p>
              <div className="flex flex-wrap gap-6 items-center opacity-60">
                <span className="text-white font-medium">Walmart</span>
                <span className="text-white font-medium">Home Depot</span>
                <span className="text-white font-medium">Mars</span>
                <span className="text-white font-medium">Osram</span>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative hidden lg:flex justify-center items-center">
            <div className="relative">
              {/* Main Circle */}
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-gold-400/20 to-gold-500/10 flex items-center justify-center">
                <div className="w-64 h-64 rounded-full bg-gradient-to-br from-gold-400/30 to-gold-500/20 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                    <div className="text-center">
                      <span className="block font-serif text-6xl font-bold text-gold-400">
                        80
                      </span>
                      <span className="block text-white text-lg mt-2">
                        años
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-xl p-4">
                <span className="block font-serif text-2xl font-bold text-navy-500">
                  3
                </span>
                <span className="block text-sm text-gray-600">
                  Generaciones
                </span>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-gold-500 rounded-lg shadow-xl p-4">
                <span className="block font-serif text-2xl font-bold text-white">
                  100%
                </span>
                <span className="block text-sm text-gold-100">Patronal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
