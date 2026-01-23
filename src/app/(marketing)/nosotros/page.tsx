import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Nosotros | CuevAbogados - 80 Años de Historia",
  description:
    "Conoce la historia de CuevAbogados, tres generaciones dedicadas al derecho laboral patronal en Monterrey desde 1946.",
};

const timeline = [
  {
    year: "1946",
    title: "Fundación",
    description:
      "El Lic. Javier Cueva Zambrano funda el despacho para atender a las empresas pioneras del desarrollo industrial de Monterrey.",
  },
  {
    year: "1986",
    title: "Segunda Generación",
    description:
      "Tras el fallecimiento del fundador, Javier Cueva Ancira toma la dirección del despacho, continuando el legado familiar.",
  },
  {
    year: "2006",
    title: "Tercera Generación",
    description:
      "Se incorporan Javier Cueva Rodríguez y Raúl Mauricio Cueva Rodríguez, consolidando el despacho como referente en la región.",
  },
  {
    year: "Hoy",
    title: "80 Años de Excelencia",
    description:
      "Continuamos protegiendo a empresas nacionales e internacionales con la misma dedicación de siempre.",
  },
];

const values = [
  {
    title: "Integridad",
    description:
      "Actuamos con honestidad y transparencia en cada caso que manejamos.",
  },
  {
    title: "Confidencialidad",
    description:
      "La información de nuestros clientes se maneja con absoluta discreción.",
  },
  {
    title: "Excelencia Profesional",
    description:
      "Nos mantenemos actualizados en las últimas reformas y tendencias legales.",
  },
  {
    title: "Compromiso con el Cliente",
    description:
      "Su éxito es nuestro éxito. Trabajamos como parte de su equipo.",
  },
];

export default function NosotrosPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-navy-500 to-navy-600">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6">
              Nuestra Historia
            </h1>
            <p className="text-xl text-navy-100 leading-relaxed">
              Desde 1946, tres generaciones de abogados dedicados exclusivamente
              a proteger los intereses de las empresas en materia laboral.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-navy-500 mb-12 text-center">
              80 Años de Trayectoria
            </h2>

            <div className="relative">
              {/* Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gold-200 hidden md:block" />

              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div key={index} className="relative flex gap-8">
                    {/* Year Badge */}
                    <div className="hidden md:flex items-start">
                      <div className="w-16 h-16 rounded-full bg-gold-500 flex items-center justify-center text-white font-serif font-bold text-lg z-10">
                        {item.year.slice(0, 4)}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 bg-cream rounded-xl p-6">
                      <div className="md:hidden mb-2">
                        <span className="inline-block bg-gold-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {item.year}
                        </span>
                      </div>
                      <h3 className="font-serif text-xl font-semibold text-navy-500 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl font-bold text-navy-500 mb-4">
              Nuestros Valores
            </h2>
            <p className="text-lg text-gray-600">
              Los principios que han guiado nuestro trabajo durante más de siete
              décadas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="flex gap-4 bg-white rounded-xl p-6 shadow-sm"
              >
                <CheckCircle className="h-6 w-6 text-gold-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-serif text-lg font-semibold text-navy-500 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patronal Focus */}
      <section className="py-20 bg-navy-500">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-6">
              100% Enfoque Patronal
            </h2>
            <p className="text-xl text-navy-100 mb-8 leading-relaxed">
              A diferencia de otros despachos, nosotros{" "}
              <strong className="text-gold-400">
                exclusivamente defendemos empresas
              </strong>
              . No representamos trabajadores. Esta especialización nos permite
              conocer a fondo la perspectiva empresarial y ofrecer estrategias
              más efectivas.
            </p>
            <Button asChild variant="gold" size="lg">
              <Link href="/servicios" className="group">
                Conocer nuestros servicios
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
