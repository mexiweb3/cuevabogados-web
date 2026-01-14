import { Clock, UserCheck, Lock } from "lucide-react";

const reasons = [
  {
    icon: Clock,
    title: "78 Años de Experiencia Local",
    description:
      "Desde 1946 atendemos a las empresas más importantes de Monterrey y Nuevo León. Conocemos el tejido empresarial de la región como nadie.",
  },
  {
    icon: UserCheck,
    title: "Trato Personalizado",
    description:
      "Atención directa de socios, no de pasantes. Cada caso es manejado con la seriedad y dedicación que su empresa merece.",
  },
  {
    icon: Lock,
    title: "Confidencialidad Absoluta",
    description:
      "Manejamos información sensible de empresas Fortune 500. La discreción es nuestro compromiso más importante.",
  },
];

export function WhyUsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-500 mb-4">
            ¿Por qué elegirnos?
          </h2>
          <p className="text-lg text-gray-600">
            Lo que nos distingue de los grandes despachos y de la competencia
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold-500/10 mb-6">
                <reason.icon className="h-8 w-8 text-gold-500" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-navy-500 mb-4">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-16 max-w-3xl mx-auto">
          <blockquote className="text-center">
            <p className="font-serif text-2xl text-navy-500 italic mb-4">
              &ldquo;No somos el despacho más grande, pero sí el que más se
              preocupa por sus clientes.&rdquo;
            </p>
            <footer className="text-gray-500">
              — Javier Cueva Ancira, Director General
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
