import type { Metadata } from "next";
import Link from "next/link";
import {
  FileText,
  Scale,
  Calculator,
  MessageSquare,
  Users,
  ClipboardCheck,
  Search,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Servicios | CuevAbogados - Derecho Laboral Patronal",
  description:
    "Servicios especializados en derecho laboral patronal: consultoría, litigio, liquidaciones, REPSE y más. Protegemos a su empresa.",
};

const services = [
  {
    icon: FileText,
    title: "Consultoría Laboral Preventiva",
    description:
      "Identificamos riesgos antes de que se conviertan en demandas. Nuestro enfoque preventivo le ahorra tiempo, dinero y preocupaciones.",
    features: [
      "Revisión integral de contratos de trabajo",
      "Evaluación de reglamento interior de trabajo",
      "Auditoría de políticas de recursos humanos",
      "Capacitación a personal de RH",
      "Actualización ante cambios legislativos",
    ],
  },
  {
    icon: Scale,
    title: "Litigio Laboral Patronal",
    description:
      "Defensa estratégica ante demandas de trabajadores. Representamos a su empresa en tribunales laborales federales y locales.",
    features: [
      "Contestación de demandas",
      "Ofrecimiento de pruebas",
      "Audiencias y alegatos",
      "Recursos y amparos",
      "Ejecución de laudos favorables",
    ],
  },
  {
    icon: Calculator,
    title: "Liquidaciones y Finiquitos",
    description:
      "Cálculo preciso y negociación de terminaciones laborales para minimizar riesgos legales y optimizar costos.",
    features: [
      "Cálculo de liquidaciones conforme a ley",
      "Negociación de convenios",
      "Ratificación ante autoridades",
      "Asesoría en despidos justificados",
      "Estrategias de terminación de relaciones",
    ],
  },
  {
    icon: MessageSquare,
    title: "Contestación de Demandas",
    description:
      "Respuesta legal sólida y técnica dentro de los plazos procesales establecidos por la ley.",
    features: [
      "Análisis de la demanda",
      "Estrategia de defensa",
      "Excepciones y defensas",
      "Preparación de pruebas",
      "Seguimiento procesal",
    ],
  },
  {
    icon: Users,
    title: "Relaciones Laborales Colectivas",
    description:
      "Asesoría en negociaciones sindicales, contratos colectivos y prevención de conflictos colectivos.",
    features: [
      "Negociación de contratos colectivos",
      "Revisión salarial y contractual",
      "Emplazamientos a huelga",
      "Relación con sindicatos",
      "Prevención de conflictos",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Cumplimiento REPSE",
    description:
      "Asesoría completa para cumplir con la reforma de subcontratación (outsourcing) y evitar sanciones.",
    features: [
      "Registro ante REPSE",
      "Reestructura de operaciones",
      "Contratos de servicios especializados",
      "Responsabilidad solidaria",
      "Actualización de registros",
    ],
  },
  {
    icon: Search,
    title: "Análisis de Vulnerabilidad",
    description:
      "Auditoría laboral completa para identificar áreas de riesgo en su empresa. Sin costo ni compromiso.",
    features: [
      "Revisión de documentación laboral",
      "Identificación de contingencias",
      "Evaluación de prácticas de RH",
      "Recomendaciones preventivas",
      "Plan de acción sugerido",
    ],
    highlighted: true,
  },
];

export default function ServiciosPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-navy-500 to-navy-600">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6">
              Nuestros Servicios
            </h1>
            <p className="text-xl text-navy-100 leading-relaxed">
              Soluciones legales integrales para proteger a su empresa en
              materia laboral. Más de 80 años de experiencia nos respaldan.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                id={service.title.toLowerCase().replace(/\s+/g, "-")}
                className={`scroll-mt-24 ${
                  service.highlighted
                    ? "bg-gold-50 border-2 border-gold-500 rounded-2xl p-8"
                    : ""
                }`}
              >
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  {/* Content */}
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className={`p-3 rounded-lg ${
                          service.highlighted
                            ? "bg-gold-500 text-white"
                            : "bg-navy-500/10 text-navy-500"
                        }`}
                      >
                        <service.icon className="h-6 w-6" />
                      </div>
                      {service.highlighted && (
                        <span className="bg-gold-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                          SIN COSTO
                        </span>
                      )}
                    </div>

                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy-500 mb-4">
                      {service.title}
                    </h2>

                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {service.highlighted && (
                      <Button asChild variant="gold" size="lg">
                        <Link href="/analisis-gratuito" className="group">
                          Solicitar análisis gratuito
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    )}
                  </div>

                  {/* Features */}
                  <div className="bg-cream rounded-xl p-6">
                    <h3 className="font-medium text-navy-500 mb-4">
                      ¿Qué incluye?
                    </h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-gold-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {index < services.length - 1 && !service.highlighted && (
                  <div className="border-b border-gray-100 mt-16" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-500">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4">
            ¿Tiene alguna duda sobre nuestros servicios?
          </h2>
          <p className="text-navy-100 mb-8">
            Contáctenos para una consulta inicial sin compromiso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="gold" size="lg">
              <Link href="/contacto">Contactar ahora</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 hover:text-white"
            >
              <a href="tel:+528183547998">Llamar: 81 8354 7998</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
