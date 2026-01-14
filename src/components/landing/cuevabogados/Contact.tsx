import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section id="contacto" className="py-20 md:py-28 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Info */}
          <div>
            <p className="text-gold-600 font-semibold text-sm tracking-wider uppercase mb-3">
              Contacto
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-600 mb-4">
              Agende su consulta gratuita
            </h2>
            <p className="text-lg text-charcoal/70 mb-8">
              Primera consulta sin costo. Evaluamos su caso y le
              presentamos una estrategia de defensa personalizada.
            </p>

            {/* Contact info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-navy-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-navy-500" />
                </div>
                <div>
                  <p className="font-semibold text-navy-600 mb-1">Telefono</p>
                  <a
                    href="tel:+528112345678"
                    className="text-charcoal/70 hover:text-gold-600"
                  >
                    +52 (81) 1234-5678
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-navy-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-navy-500" />
                </div>
                <div>
                  <p className="font-semibold text-navy-600 mb-1">Email</p>
                  <a
                    href="mailto:contacto@cuevabogados.mx"
                    className="text-charcoal/70 hover:text-gold-600"
                  >
                    contacto@cuevabogados.mx
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-navy-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-navy-500" />
                </div>
                <div>
                  <p className="font-semibold text-navy-600 mb-1">Direccion</p>
                  <p className="text-charcoal/70">
                    Av. Vasconcelos 345, Piso 12<br />
                    Col. Del Valle, San Pedro Garza Garcia<br />
                    Nuevo Leon, 66220
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
                    Lunes a Viernes: 9:00 - 18:00<br />
                    Sabados: 9:00 - 13:00
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-navy-100">
            <h3 className="text-xl font-serif font-semibold text-navy-600 mb-6">
              Solicite una consulta
            </h3>
            <form className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-navy-600 mb-2"
                >
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-navy-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                  placeholder="Su nombre"
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-navy-600 mb-2"
                >
                  Empresa
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-4 py-3 border border-navy-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                  placeholder="Nombre de su empresa"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-navy-600 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-navy-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    placeholder="email@empresa.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-navy-600 mb-2"
                  >
                    Telefono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-navy-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    placeholder="+52 81 ..."
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
                  className="w-full px-4 py-3 border border-navy-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent resize-none"
                  placeholder="Cuentenos sobre su caso..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3.5 bg-navy-500 text-white font-semibold rounded-lg hover:bg-navy-600 transition-colors"
              >
                Solicitar consulta gratuita
              </button>

              <p className="text-xs text-center text-charcoal/50">
                Al enviar este formulario acepta nuestra politica de privacidad.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
