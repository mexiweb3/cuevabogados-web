import Link from "next/link";
import {
  FileText,
  Scale,
  Calculator,
  MessageSquare,
  Users,
  ClipboardCheck,
  Search,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: FileText,
    title: "Consultoría Laboral Preventiva",
    description:
      "Identificamos riesgos antes de que se conviertan en demandas. Revisamos contratos, reglamentos y políticas de RH.",
  },
  {
    icon: Scale,
    title: "Litigio Laboral Patronal",
    description:
      "Defensa estratégica ante demandas de trabajadores en tribunales laborales federales y locales.",
  },
  {
    icon: Calculator,
    title: "Liquidaciones y Finiquitos",
    description:
      "Cálculo preciso y negociación de finiquitos para minimizar riesgos legales y costos.",
  },
  {
    icon: MessageSquare,
    title: "Contestación de Demandas",
    description:
      "Respuesta legal sólida dentro de plazos procesales. Defensa técnica especializada.",
  },
  {
    icon: Users,
    title: "Relaciones Laborales Colectivas",
    description:
      "Negociación con sindicatos, revisión de contratos colectivos y prevención de conflictos.",
  },
  {
    icon: ClipboardCheck,
    title: "Cumplimiento REPSE",
    description:
      "Asesoría completa para cumplir con la reforma de subcontratación y evitar multas.",
  },
  {
    icon: Search,
    title: "Análisis de Vulnerabilidad",
    description:
      "Auditoría laboral para identificar áreas de riesgo en su empresa. Sin costo ni compromiso.",
    highlighted: true,
  },
];

export function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-500 mb-4">
            Servicios Especializados
          </h2>
          <p className="text-lg text-gray-600">
            Soluciones legales integrales para proteger a su empresa en materia
            laboral. Más de 80 años de experiencia nos respaldan.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`group hover:shadow-lg transition-all duration-300 ${
                service.highlighted
                  ? "border-2 border-gold-500 bg-gold-50/50"
                  : "hover:border-navy-200"
              }`}
            >
              <CardContent className="p-6">
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${
                    service.highlighted
                      ? "bg-gold-500 text-white"
                      : "bg-navy-500/10 text-navy-500 group-hover:bg-navy-500 group-hover:text-white"
                  } transition-colors`}
                >
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-navy-500 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
                {service.highlighted && (
                  <div className="mt-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-gold-500 text-white text-xs font-medium">
                      GRATIS
                    </span>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button asChild variant="default" size="lg">
            <Link href="/servicios" className="group">
              Ver todos los servicios
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
