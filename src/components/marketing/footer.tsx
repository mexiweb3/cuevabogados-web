import Link from "next/link";
import { MapPin, Phone, Mail, Linkedin } from "lucide-react";

const navigation = {
  servicios: [
    { name: "Consultoría Laboral", href: "/servicios" },
    { name: "Litigio Laboral", href: "/servicios" },
    { name: "Liquidaciones", href: "/servicios" },
    { name: "Cumplimiento REPSE", href: "/servicios" },
  ],
  empresa: [
    { name: "Nosotros", href: "/nosotros" },
    { name: "Equipo", href: "/equipo" },
    { name: "Contacto", href: "/contacto" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-navy-500 text-white">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <span className="text-navy-500 font-serif font-bold text-xl">
                  CA
                </span>
              </div>
              <span className="font-serif text-xl font-semibold">
                CuevAbogados
              </span>
            </Link>
            <p className="text-navy-200 text-sm leading-relaxed">
              Más de 78 años protegiendo los intereses de empresas en Monterrey.
              Especialistas en derecho laboral patronal.
            </p>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-gold-400">
              Servicios
            </h3>
            <ul className="space-y-3">
              {navigation.servicios.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-navy-200 hover:text-white text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-gold-400">
              Empresa
            </h3>
            <ul className="space-y-3">
              {navigation.empresa.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-navy-200 hover:text-white text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-gold-400">
              Contacto
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-gold-400 flex-shrink-0 mt-0.5" />
                <span className="text-navy-200 text-sm">
                  Mirador 111 Sur, Col. Mirador
                  <br />
                  C.P. 64070, Monterrey, N.L.
                </span>
              </li>
              <li>
                <a
                  href="tel:+528183547998"
                  className="flex items-center gap-3 text-navy-200 hover:text-white text-sm transition-colors"
                >
                  <Phone className="h-5 w-5 text-gold-400 flex-shrink-0" />
                  81 8354 7998
                </a>
              </li>
              <li>
                <a
                  href="mailto:contacto@cuevabogados.mx"
                  className="flex items-center gap-3 text-navy-200 hover:text-white text-sm transition-colors"
                >
                  <Mail className="h-5 w-5 text-gold-400 flex-shrink-0" />
                  contacto@cuevabogados.mx
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/cuevabogados"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-navy-200 hover:text-white text-sm transition-colors"
                >
                  <Linkedin className="h-5 w-5 text-gold-400 flex-shrink-0" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-navy-400">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-navy-300 text-sm">
              &copy; {new Date().getFullYear()} Javier Cueva Ancira y Asociados,
              S.C. Todos los derechos reservados.
            </p>
            <p className="text-navy-300 text-sm">Desde 1946</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
