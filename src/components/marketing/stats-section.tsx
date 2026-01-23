import { Scale, Users, Building2, Award } from "lucide-react";

const stats = [
  {
    icon: Award,
    value: "80+",
    label: "Años de Experiencia",
    description: "Fundados en 1946",
  },
  {
    icon: Users,
    value: "3",
    label: "Generaciones",
    description: "De abogados especializados",
  },
  {
    icon: Building2,
    value: "100+",
    label: "Empresas Atendidas",
    description: "Nacionales e internacionales",
  },
  {
    icon: Scale,
    value: "100%",
    label: "Enfoque Patronal",
    description: "Exclusivamente empresas",
  },
];

export function StatsSection() {
  return (
    <section className="py-16 bg-cream">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-navy-500/10 mb-4">
                <stat.icon className="h-7 w-7 text-navy-500" />
              </div>
              <div className="font-serif text-4xl lg:text-5xl font-bold text-navy-500 mb-2">
                {stat.value}
              </div>
              <div className="font-medium text-charcoal mb-1">{stat.label}</div>
              <div className="text-sm text-gray-500">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
