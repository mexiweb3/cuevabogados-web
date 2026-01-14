import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, Linkedin } from "lucide-react";
import { ContactForm } from "@/components/marketing/contact-form";

export const metadata: Metadata = {
  title: "Contacto | CuevAbogados",
  description:
    "Contáctenos para una consulta sobre derecho laboral patronal. Ubicados en Monterrey, N.L. Respuesta en menos de 24 horas.",
};

const contactInfo = [
  {
    icon: MapPin,
    title: "Dirección",
    content: "Mirador 111 Sur, Col. Mirador\nC.P. 64070, Monterrey, N.L.",
    link: "https://maps.google.com/?q=Mirador+111+Sur+Monterrey",
  },
  {
    icon: Phone,
    title: "Teléfono",
    content: "81 8354 7998",
    link: "tel:+528183547998",
  },
  {
    icon: Mail,
    title: "Email",
    content: "contacto@cuevabogados.mx",
    link: "mailto:contacto@cuevabogados.mx",
  },
  {
    icon: Clock,
    title: "Horario",
    content: "Lunes a Viernes: 9:00 - 18:00\nSábados: Con cita previa",
    link: null,
  },
];

export default function ContactoPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-navy-500 to-navy-600">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6">
              Contáctenos
            </h1>
            <p className="text-xl text-navy-100 leading-relaxed">
              Estamos listos para atender sus consultas sobre derecho laboral
              patronal. Respuesta garantizada en menos de 24 horas hábiles.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-navy-500 mb-6">
                Envíenos un mensaje
              </h2>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-navy-500 mb-6">
                Información de Contacto
              </h2>

              <div className="space-y-6 mb-10">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gold-500/10 flex items-center justify-center">
                      <item.icon className="h-5 w-5 text-gold-500" />
                    </div>
                    <div>
                      <h3 className="font-medium text-navy-500 mb-1">
                        {item.title}
                      </h3>
                      {item.link ? (
                        <a
                          href={item.link}
                          target={
                            item.link.startsWith("http") ? "_blank" : undefined
                          }
                          rel={
                            item.link.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="text-gray-600 hover:text-gold-500 transition-colors whitespace-pre-line"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-gray-600 whitespace-pre-line">
                          {item.content}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social */}
              <div className="mb-10">
                <h3 className="font-medium text-navy-500 mb-4">Síguenos</h3>
                <a
                  href="https://www.linkedin.com/company/cuevabogados"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-600 hover:text-gold-500 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  LinkedIn
                </a>
              </div>

              {/* Map */}
              <div className="rounded-xl overflow-hidden h-64 bg-gray-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.0!2d-100.3!3d25.67!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDQwJzEyLjAiTiAxMDDCsDE4JzAwLjAiVw!5e0!3m2!1sen!2smx!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de CuevAbogados"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
