"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");

    // Simulate form submission - replace with actual Supabase integration
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setFormState("success");

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormState("idle");
      setFormData({ name: "", company: "", email: "", phone: "", message: "" });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  return (
    <section id="contacto" className="py-20 md:py-28 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-gold-600 font-semibold text-sm tracking-wider uppercase mb-3">
              Contacto
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-600 mb-4">
              Agende su consulta gratuita
            </h2>
            <p className="text-lg text-charcoal/70 mb-8">
              Primera consulta sin costo. Evaluamos su caso y le presentamos una
              estrategia de defensa personalizada.
            </p>

            {/* Contact info */}
            <div className="space-y-6 mb-8">
              <a
                href="tel:+528183547998"
                className="flex items-start gap-4 group"
              >
                <div className="w-12 h-12 bg-navy-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gold-100 transition-colors">
                  <Phone className="w-5 h-5 text-navy-500 group-hover:text-gold-600 transition-colors" />
                </div>
                <div>
                  <p className="font-semibold text-navy-600 mb-1">Telefono</p>
                  <p className="text-charcoal/70 group-hover:text-gold-600 transition-colors">
                    81 8354 7998
                  </p>
                </div>
              </a>

              <a
                href="https://wa.me/528183456789?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20consulta"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group"
              >
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-green-200 transition-colors">
                  <MessageCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-navy-600 mb-1">WhatsApp</p>
                  <p className="text-green-600 group-hover:text-green-700 transition-colors">
                    Enviar mensaje directo
                  </p>
                </div>
              </a>

              <a
                href="mailto:contacto@cuevabogados.mx"
                className="flex items-start gap-4 group"
              >
                <div className="w-12 h-12 bg-navy-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gold-100 transition-colors">
                  <Mail className="w-5 h-5 text-navy-500 group-hover:text-gold-600 transition-colors" />
                </div>
                <div>
                  <p className="font-semibold text-navy-600 mb-1">Email</p>
                  <p className="text-charcoal/70 group-hover:text-gold-600 transition-colors">
                    contacto@cuevabogados.mx
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-navy-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-navy-500" />
                </div>
                <div>
                  <p className="font-semibold text-navy-600 mb-1">Direccion</p>
                  <p className="text-charcoal/70">
                    Mirador 111 Sur
                    <br />
                    Col. Mirador, C.P. 64070
                    <br />
                    Monterrey, Nuevo Leon
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-navy-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-navy-500" />
                </div>
                <div>
                  <p className="font-semibold text-navy-600 mb-1">Horario</p>
                  <p className="text-charcoal/70">
                    Lunes a Viernes: 9:00 - 18:00
                    <br />
                    Sabados: Con cita previa
                  </p>
                </div>
              </div>
            </div>

            {/* Google Maps embed */}
            <div className="rounded-lg overflow-hidden border border-navy-100 shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.123!2d-100.3167!3d25.6866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMirador%20111%20Sur%2C%20Col.%20Mirador%2C%20Monterrey!5e0!3m2!1ses!2smx!4v1234567890"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicacion CuevAbogados"
              />
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-sm border border-navy-100"
          >
            <h3 className="text-xl font-serif font-semibold text-navy-600 mb-6">
              Solicite una consulta
            </h3>

            {formState === "success" ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-xl font-semibold text-navy-600 mb-2">
                  Mensaje enviado
                </h4>
                <p className="text-charcoal/70">
                  Nos pondremos en contacto en menos de 2 horas.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-navy-600 mb-2"
                  >
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-navy-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
                    placeholder="Su nombre"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-navy-600 mb-2"
                  >
                    Empresa *
                  </label>
                  <input
                    type="text"
                    id="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-navy-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
                    placeholder="Nombre de su empresa"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-navy-600 mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-navy-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
                      placeholder="email@empresa.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-navy-600 mb-2"
                    >
                      Telefono *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-navy-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
                      placeholder="81 1234 5678"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-navy-600 mb-2"
                  >
                    Describa brevemente su situacion
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-navy-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent resize-none transition-all"
                    placeholder="Cuentenos sobre su caso..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={formState === "submitting"}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-navy-500 text-white font-semibold rounded-lg hover:bg-navy-600 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {formState === "submitting" ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Solicitar consulta gratuita
                    </>
                  )}
                </button>

                <p className="text-xs text-center text-charcoal/50">
                  Al enviar este formulario acepta nuestra{" "}
                  <a href="#" className="underline hover:text-gold-600">
                    politica de privacidad
                  </a>
                  .
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
