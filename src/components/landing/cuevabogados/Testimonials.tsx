"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "CuevAbogados nos ayudo a resolver una demanda colectiva que amenazaba la operacion de nuestra planta. Su experiencia y estrategia fueron determinantes para proteger mas de 200 empleos.",
    author: "Director de Recursos Humanos",
    company: "Empresa manufacturera",
    location: "Santa Catarina, N.L.",
    rating: 5,
    initials: "DH",
  },
  {
    quote:
      "Llevamos 15 anos trabajando con el despacho. Su conocimiento del derecho laboral y su respuesta inmediata ante cualquier contingencia nos dan total tranquilidad.",
    author: "Gerente de Relaciones Laborales",
    company: "Cadena de retail",
    location: "Monterrey, N.L.",
    rating: 5,
    initials: "GR",
  },
  {
    quote:
      "Nos evitaron una huelga que hubiera paralizado nuestra operacion por semanas. Su capacidad de negociacion y conocimiento de la ley son excepcionales.",
    author: "Director General",
    company: "Empresa de logistica",
    location: "Apodaca, N.L.",
    rating: 5,
    initials: "DG",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-navy-50">
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
            Testimonios
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-600 mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-lg text-charcoal/70">
            80 anos construyendo relaciones de confianza con empresas de
            Monterrey y el area metropolitana.
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.author}
              variants={itemVariants}
              className="bg-white p-8 rounded-lg shadow-sm border border-navy-100 relative"
            >
              {/* Quote icon */}
              <Quote className="w-10 h-10 text-gold-200 mb-4" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-gold-400 text-gold-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-charcoal/80 leading-relaxed mb-6 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-navy-100">
                <div className="w-12 h-12 bg-navy-100 rounded-full flex items-center justify-center">
                  <span className="text-navy-600 font-semibold text-sm">
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-navy-600 text-sm">
                    {testimonial.author}
                  </p>
                  <p className="text-charcoal/50 text-xs">
                    {testimonial.company} · {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6 mt-12"
        >
          <div className="flex items-center gap-2 text-sm text-charcoal/60">
            <Star className="w-5 h-5 fill-gold-400 text-gold-400" />
            <span>4.9/5 en satisfaccion de clientes</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-charcoal/60">
            <span className="w-2 h-2 bg-green-500 rounded-full" />
            <span>95% de casos ganados</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-charcoal/60">
            <span className="w-2 h-2 bg-gold-500 rounded-full" />
            <span>+2,500 casos resueltos</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
