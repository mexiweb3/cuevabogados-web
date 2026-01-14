"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircle } from "lucide-react";

const faqs = [
  {
    question: "¿Cuanto tiempo tengo para responder una demanda laboral?",
    answer:
      "En Mexico, una vez notificada la demanda laboral, la empresa tiene 15 dias habiles para presentar su contestacion. Es crucial actuar de inmediato para preparar una defensa solida y reunir la documentacion necesaria.",
  },
  {
    question: "¿Que hago si recibo una inspeccion de la STPS?",
    answer:
      "Mantenga la calma y contactenos inmediatamente. Tiene derecho a tener representacion legal durante la inspeccion. Mientras tanto, no firme nada y solicite identificacion oficial del inspector. Podemos asistirlo de manera remota o presencial.",
  },
  {
    question: "¿Cuanto cuesta la primera consulta?",
    answer:
      "La primera consulta es completamente gratuita y sin compromiso. Evaluamos su caso, le explicamos las opciones legales disponibles y le presentamos un presupuesto claro antes de cualquier compromiso.",
  },
  {
    question: "¿Atienden casos fuera de Monterrey?",
    answer:
      "Si, atendemos casos en todo Nuevo Leon y estados vecinos. Tenemos experiencia con tribunales federales y locales en la region noreste de Mexico.",
  },
  {
    question: "¿Como se calculan los honorarios?",
    answer:
      "Ofrecemos diferentes esquemas de honorarios segun el tipo de caso: honorarios fijos, por hora, o esquemas de exito. En la consulta gratuita le presentamos las opciones y el presupuesto detallado para su caso especifico.",
  },
  {
    question: "¿Que documentos necesito para mi primera consulta?",
    answer:
      "Para una evaluacion completa, le recomendamos traer: copia de la demanda (si ya la recibio), contrato de trabajo del empleado, nominas recientes, y cualquier documentacion relacionada con el caso. Si no tiene alguno, podemos iniciar la evaluacion con lo disponible.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-gold-600 font-semibold text-sm tracking-wider uppercase mb-3">
            Preguntas Frecuentes
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-600 mb-4">
            Resolvemos sus dudas
          </h2>
          <p className="text-lg text-charcoal/70">
            Las preguntas mas comunes sobre demandas laborales y nuestros
            servicios.
          </p>
        </motion.div>

        {/* FAQ accordion */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-cream rounded-lg border border-navy-100 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left"
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-navy-600 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-navy-400 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-5 pb-5">
                      <p className="text-charcoal/70 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12 p-8 bg-navy-50 rounded-lg"
        >
          <p className="text-navy-600 font-medium mb-4">
            ¿No encontro respuesta a su pregunta?
          </p>
          <a
            href="https://wa.me/528183456789?text=Hola%2C%20tengo%20una%20pregunta%20sobre%20mi%20caso"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-500 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            Preguntenos por WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
