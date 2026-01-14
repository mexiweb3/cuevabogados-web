import type { Metadata } from "next";
import { CheckCircle, Shield, Clock, FileSearch } from "lucide-react";
import { ContactForm } from "@/components/marketing/contact-form";

export const metadata: Metadata = {
  title: "Análisis de Vulnerabilidad Gratuito | CuevAbogados",
  description:
    "Solicite su análisis de vulnerabilidad laboral sin costo. Identifique riesgos ocultos en su empresa antes de que se conviertan en demandas.",
};

const benefits = [
  {
    icon: FileSearch,
    title: "Revisión Integral",
    description:
      "Analizamos sus contratos de trabajo, reglamento interno y políticas de recursos humanos.",
  },
  {
    icon: Shield,
    title: "Identificación de Riesgos",
    description:
      "Detectamos contingencias laborales antes de que se conviertan en demandas costosas.",
  },
  {
    icon: CheckCircle,
    title: "Recomendaciones Concretas",
    description:
      "Reciba un plan de acción con medidas preventivas específicas para su empresa.",
  },
  {
    icon: Clock,
    title: "Respuesta Rápida",
    description:
      "Nos comunicamos con usted en menos de 24 horas hábiles para agendar el análisis.",
  },
];

const includes = [
  "Revisión de contratos individuales de trabajo",
  "Evaluación del reglamento interior de trabajo",
  "Análisis de políticas de recursos humanos",
  "Identificación de contingencias laborales",
  "Revisión de cumplimiento REPSE",
  "Diagnóstico de relaciones colectivas",
  "Informe ejecutivo con hallazgos",
  "Recomendaciones preventivas priorizadas",
];

export default function AnalisisGratuitoPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-navy-500 to-navy-600 relative overflow-hidden">
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
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-gold-500 text-white rounded-full px-4 py-2 mb-8">
              <span className="text-sm font-medium">SIN COSTO NI COMPROMISO</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6">
              Análisis de Vulnerabilidad Laboral Gratuito
            </h1>

            <p className="text-xl text-navy-100 leading-relaxed">
              Descubra los riesgos laborales ocultos en su empresa antes de que
              se conviertan en demandas costosas. Nuestros expertos analizarán
              su situación actual sin ningún compromiso.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold-500/10 mb-4">
                  <benefit.icon className="h-7 w-7 text-gold-500" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-navy-500 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form & Details */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* What's Included */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-navy-500 mb-6">
                ¿Qué incluye el análisis?
              </h2>

              <div className="bg-cream rounded-xl p-8 mb-8">
                <ul className="space-y-4">
                  {includes.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-gold-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-navy-500 rounded-xl p-8 text-white">
                <h3 className="font-serif text-xl font-semibold mb-4">
                  ¿Por qué es gratuito?
                </h3>
                <p className="text-navy-100 leading-relaxed">
                  Creemos que toda empresa merece conocer su situación laboral
                  real. Este análisis nos permite entender sus necesidades y
                  demostrar el valor que podemos aportar. Sin presiones, sin
                  compromisos. Si decide no continuar, se queda con información
                  valiosa para su empresa.
                </p>
              </div>
            </div>

            {/* Form */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-navy-500 mb-6">
                Solicite su análisis gratuito
              </h2>

              <div className="bg-cream rounded-xl p-8">
                <ContactForm showCompanyField={true} />
              </div>

              <p className="text-center text-gray-500 text-sm mt-6">
                Nos pondremos en contacto en menos de 24 horas hábiles
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-2xl font-bold text-navy-500 mb-4">
              Confían en nosotros
            </h2>
            <p className="text-gray-600 mb-8">
              Empresas nacionales e internacionales que han confiado en nuestro
              equipo
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-gray-400">
              <span className="text-lg font-medium">Walmart</span>
              <span className="text-lg font-medium">Home Depot</span>
              <span className="text-lg font-medium">Mars</span>
              <span className="text-lg font-medium">Osram</span>
              <span className="text-lg font-medium">Regal-Beloit</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
