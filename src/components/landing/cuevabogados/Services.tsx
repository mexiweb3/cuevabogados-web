"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Scale,
  FileCheck,
  Users,
  AlertTriangle,
  Handshake,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Defensa ante demandas",
    description:
      "Representacion legal completa en juicios laborales. Protegemos sus intereses desde la demanda hasta la ejecucion.",
    featured: true,
    stats: "+800 demandas defendidas",
  },
  {
    icon: Scale,
    title: "Litigio laboral",
    description:
      "Estrategia de defensa ante el TFJFA y tribunales locales. Experiencia en casos complejos y de alto impacto.",
    featured: true,
    stats: "95% tasa de exito",
  },
  {
    icon: FileCheck,
    title: "Consultoria preventiva",
    description:
      "Auditoria de contratos, reglamentos internos y politicas laborales para prevenir conflictos futuros.",
    featured: false,
    stats: null,
  },
  {
    icon: Users,
    title: "Relaciones laborales",
    description:
      "Asesoria en negociaciones sindicales, convenios colectivos y revision de condiciones de trabajo.",
    featured: false,
    stats: null,
  },
  {
    icon: AlertTriangle,
    title: "Gestion de crisis",
    description:
      "Atencion inmediata en inspecciones de STPS, huelgas y conflictos colectivos urgentes.",
    featured: false,
    stats: null,
  },
  {
    icon: Handshake,
    title: "Terminaciones laborales",
    description:
      "Finiquitos, liquidaciones y rescisiones con minimo riesgo legal para su empresa.",
    featured: false,
    stats: null,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Services() {
  return (
    <section id="servicios" className="py-20 md:py-28 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-gold-600 font-semibold text-sm tracking-wider uppercase mb-3">
            Nuestros Servicios
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-600 mb-4">
            Proteccion legal integral para su empresa
          </h2>
          <p className="text-lg text-charcoal/70">
            Especializados en derecho laboral patronal con un enfoque preventivo
            y estrategico.
          </p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className={`relative bg-white p-8 rounded-lg shadow-sm border transition-all group cursor-pointer ${
                service.featured
                  ? "border-gold-300 ring-2 ring-gold-100 hover:shadow-lg hover:ring-gold-200"
                  : "border-navy-100 hover:shadow-md hover:border-gold-200"
              }`}
            >
              {/* Featured badge */}
              {service.featured && (
                <div className="absolute -top-3 left-6">
                  <span className="inline-flex items-center px-3 py-1 bg-gold-500 text-white text-xs font-semibold rounded-full">
                    Mas solicitado
                  </span>
                </div>
              )}

              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-lg flex items-center justify-center mb-5 transition-colors ${
                  service.featured
                    ? "bg-gold-100 group-hover:bg-gold-200"
                    : "bg-navy-50 group-hover:bg-gold-50"
                }`}
              >
                <service.icon
                  className={`w-7 h-7 transition-colors ${
                    service.featured
                      ? "text-gold-600"
                      : "text-navy-500 group-hover:text-gold-600"
                  }`}
                />
              </div>

              {/* Content */}
              <h3 className="text-xl font-serif font-semibold text-navy-600 mb-3">
                {service.title}
              </h3>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Stats badge for featured */}
              {service.stats && (
                <div className="mb-4">
                  <span className="inline-flex items-center px-3 py-1 bg-navy-50 text-navy-600 text-xs font-medium rounded-full">
                    {service.stats}
                  </span>
                </div>
              )}

              {/* CTA */}
              <a
                href="#contacto"
                className="inline-flex items-center gap-1 text-sm font-medium text-gold-600 hover:text-gold-700 transition-colors group/link"
              >
                Consultar
                <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-charcoal/60 mb-4">
            ¿No encuentra el servicio que busca?
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-6 py-3 bg-navy-500 text-white font-semibold rounded-lg hover:bg-navy-600 transition-colors"
          >
            Contactenos para una consulta personalizada
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
