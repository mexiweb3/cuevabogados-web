import {
  Shield,
  Scale,
  FileCheck,
  Users,
  AlertTriangle,
  Handshake,
} from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Defensa ante demandas",
    description:
      "Representacion legal completa en juicios laborales. Protegemos sus intereses desde la demanda hasta la ejecucion.",
  },
  {
    icon: Scale,
    title: "Litigio laboral",
    description:
      "Estrategia de defensa ante el TFJFA y tribunales locales. Experiencia en casos complejos y de alto impacto.",
  },
  {
    icon: FileCheck,
    title: "Consultoria preventiva",
    description:
      "Auditoria de contratos, reglamentos internos y politicas laborales para prevenir conflictos futuros.",
  },
  {
    icon: Users,
    title: "Relaciones laborales",
    description:
      "Asesoria en negociaciones sindicales, convenios colectivos y revision de condiciones de trabajo.",
  },
  {
    icon: AlertTriangle,
    title: "Gestion de crisis",
    description:
      "Atencion inmediata en inspecciones de STPS, huelgas y conflictos colectivos urgentes.",
  },
  {
    icon: Handshake,
    title: "Terminaciones laborales",
    description:
      "Finiquitos, liquidaciones y rescisiones con minimo riesgo legal para su empresa.",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-20 md:py-28 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-gold-600 font-semibold text-sm tracking-wider uppercase mb-3">
            Nuestros Servicios
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-600 mb-4">
            Proteccion legal integral para su empresa
          </h2>
          <p className="text-lg text-charcoal/70">
            Especializados en derecho laboral patronal con un enfoque
            preventivo y estrategico.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white p-8 rounded-lg shadow-sm border border-navy-100 hover:shadow-md hover:border-gold-200 transition-all group"
            >
              <div className="w-14 h-14 bg-navy-50 rounded-lg flex items-center justify-center mb-5 group-hover:bg-gold-50 transition-colors">
                <service.icon className="w-7 h-7 text-navy-500 group-hover:text-gold-600 transition-colors" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-navy-600 mb-3">
                {service.title}
              </h3>
              <p className="text-charcoal/70 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
