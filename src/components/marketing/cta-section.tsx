import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const benefits = [
  "Revisión de contratos de trabajo",
  "Evaluación de reglamento interno",
  "Identificación de contingencias",
  "Recomendaciones preventivas",
];

export function CTASection() {
  return (
    <section className="py-20 bg-navy-500 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gold-500 text-white rounded-full px-4 py-2 mb-8">
            <span className="text-sm font-medium">SIN COSTO NI COMPROMISO</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Descubra los riesgos laborales ocultos en su empresa
          </h2>

          <p className="text-xl text-navy-100 mb-8 max-w-2xl mx-auto">
            Solicite su análisis de vulnerabilidad laboral gratuito y reciba un
            diagnóstico completo de su situación actual.
          </p>

          {/* Benefits */}
          <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto mb-10">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-3 text-left text-white"
              >
                <CheckCircle className="h-5 w-5 text-gold-400 flex-shrink-0" />
                <span className="text-sm">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Button asChild variant="gold" size="xl">
            <Link href="/analisis-gratuito" className="group">
              Solicitar Análisis Gratuito
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>

          <p className="mt-6 text-navy-200 text-sm">
            Respuesta en menos de 24 horas hábiles
          </p>
        </div>
      </div>
    </section>
  );
}
