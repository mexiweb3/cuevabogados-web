import { Phone, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-20 min-h-[90vh] flex items-center bg-navy-500 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A227' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gold-500" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-navy-400/50 border border-gold-500/30 rounded text-gold-300 text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-gold-500 rounded-full" />
            78 anos protegiendo empresas
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6">
            Defensa Laboral Patronal en{" "}
            <span className="text-gold-400">Monterrey</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-navy-100 max-w-2xl mb-8 leading-relaxed">
            Despacho especializado en derecho laboral patronal.
            Protegemos los intereses de su empresa ante demandas,
            auditorias y conflictos laborales.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mb-10">
            <div>
              <p className="text-3xl font-serif font-bold text-gold-400">+2,500</p>
              <p className="text-navy-200 text-sm">Casos ganados</p>
            </div>
            <div>
              <p className="text-3xl font-serif font-bold text-gold-400">78</p>
              <p className="text-navy-200 text-sm">Anos de experiencia</p>
            </div>
            <div>
              <p className="text-3xl font-serif font-bold text-gold-400">95%</p>
              <p className="text-navy-200 text-sm">Tasa de exito</p>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+528112345678"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-navy-900 bg-gold-500 rounded hover:bg-gold-400 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Consulta gratuita
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white border-2 border-white/30 rounded hover:bg-white/10 transition-colors"
            >
              Ver servicios
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
