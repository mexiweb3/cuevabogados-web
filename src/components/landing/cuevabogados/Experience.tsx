"use client";

import { motion } from "framer-motion";
import { Award, Building2, Users, Clock } from "lucide-react";

const stats = [
  {
    icon: Clock,
    value: "78",
    label: "Anos de trayectoria",
    description: "Fundado en 1946",
  },
  {
    icon: Award,
    value: "+2,500",
    label: "Casos exitosos",
    description: "En tribunales laborales",
  },
  {
    icon: Building2,
    value: "+500",
    label: "Empresas atendidas",
    description: "En Nuevo Leon",
  },
  {
    icon: Users,
    value: "5",
    label: "Abogados especialistas",
    description: "En derecho laboral",
  },
];

const milestones = [
  { year: "1946", event: "Fundacion del despacho por Lic. Javier Cueva" },
  { year: "1975", event: "Expansion a derecho laboral patronal exclusivo" },
  { year: "1998", event: "Primera defensa colectiva ante JLCA de NL" },
  { year: "2015", event: "Integracion de tecnologia legal moderna" },
  { year: "2024", event: "78 anos de servicio ininterrumpido a empresas" },
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

export default function Experience() {
  return (
    <section id="experiencia" className="py-20 md:py-28 bg-white">
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
            Nuestra Trayectoria
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-600 mb-4">
            Casi 8 decadas defendiendo empresas
          </h2>
          <p className="text-lg text-charcoal/70">
            Una tradicion familiar de excelencia legal al servicio del sector
            empresarial de Monterrey.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="text-center p-6 bg-navy-50 rounded-lg hover:bg-navy-100 transition-colors"
            >
              <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-gold-600" />
              </div>
              <p className="text-3xl font-serif font-bold text-navy-600 mb-1">
                {stat.value}
              </p>
              <p className="text-sm font-semibold text-navy-500 mb-1">
                {stat.label}
              </p>
              <p className="text-xs text-navy-400">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-xl font-serif font-semibold text-navy-600 text-center mb-8"
          >
            Historia del despacho
          </motion.h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gold-200 -translate-x-1/2" />

            {/* Milestones */}
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center gap-6 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gold-500 rounded-full -translate-x-1/2 border-4 border-white z-10" />

                  {/* Content */}
                  <div
                    className={`ml-12 md:ml-0 md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                    }`}
                  >
                    <span className="inline-block px-3 py-1 bg-navy-100 text-navy-600 text-sm font-semibold rounded mb-2">
                      {milestone.year}
                    </span>
                    <p className="text-charcoal/80">{milestone.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
