import type { Metadata } from "next";
import Link from "next/link";
import { Linkedin, GraduationCap, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Nuestro Equipo | CuevAbogados",
  description:
    "Conozca al equipo de abogados de CuevAbogados. Tres generaciones de profesionales especializados en derecho laboral patronal.",
};

const team = [
  {
    name: "Javier Cueva Ancira",
    role: "Director General",
    experience: "+38 años de experiencia",
    initials: "JCA",
    bio: "Lidera el despacho desde 1986. Experto en estrategia legal corporativa y relaciones laborales de alto nivel.",
    education: [
      "Licenciatura en Derecho - UANL",
      "Administración de Empresas - ITESM",
      "LL.M. Derecho Corporativo - NYU",
    ],
    specialties: [
      "Estrategia Legal Corporativa",
      "Negociaciones de Alto Nivel",
      "Relaciones Laborales Ejecutivas",
    ],
    linkedin: null,
  },
  {
    name: "Javier Cueva Rodríguez",
    role: "Director Jurídico",
    experience: "+17 años de experiencia",
    initials: "JCR",
    bio: "Especialista en relaciones laborales individuales y colectivas. Ponente en foros académicos y empresariales.",
    education: ["Licenciatura en Derecho - Universidad Regiomontana"],
    specialties: [
      "Litigio Laboral",
      "Relaciones Colectivas",
      "Negociación Sindical",
    ],
    linkedin: "https://www.linkedin.com/in/javier-cueva-rodriguez-b52543a1/",
  },
  {
    name: "Raúl Mauricio Cueva Rodríguez",
    role: "Director Administrativo",
    experience: "19 años de experiencia",
    initials: "RMC",
    bio: "Combina la visión legal con la perspectiva de negocios. Responsable de la estrategia operativa del despacho.",
    education: [
      "Licenciatura en Derecho - Universidad Regiomontana",
      "MBA - IPADE Business School",
    ],
    specialties: [
      "Derecho Empresarial",
      "Gestión de Operaciones",
      "Consultoría Estratégica",
    ],
    linkedin: null,
  },
  {
    name: "Rodrigo Llanes Ortiz",
    role: "Abogado Laboralista",
    experience: "Desde 2019",
    initials: "RLO",
    bio: "Especialista en litigio laboral y contestación de demandas. Apoyo en casos de alta complejidad.",
    education: ["Licenciatura en Derecho"],
    specialties: [
      "Litigio Laboral",
      "Contestación de Demandas",
      "Investigación Jurídica",
    ],
    linkedin: null,
  },
];

export default function EquipoPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-navy-500 to-navy-600">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6">
              Nuestro Equipo
            </h1>
            <p className="text-xl text-navy-100 leading-relaxed">
              Tres generaciones de abogados especializados, formados en las
              mejores instituciones de México y el mundo.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-cream rounded-xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col sm:flex-row gap-6">
                  {/* Avatar */}
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-navy-400 to-navy-600 flex items-center justify-center">
                      <span className="text-2xl font-serif font-bold text-white">
                        {member.initials}
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h2 className="font-serif text-xl font-semibold text-navy-500">
                          {member.name}
                        </h2>
                        <p className="text-gold-600 font-medium">
                          {member.role}
                        </p>
                      </div>
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-navy-500/10 text-navy-500 hover:bg-navy-500 hover:text-white transition-colors"
                        >
                          <Linkedin className="h-4 w-4" />
                        </a>
                      )}
                    </div>

                    <p className="text-sm text-gray-500 mb-4">
                      {member.experience}
                    </p>

                    <p className="text-gray-600 text-sm mb-4">{member.bio}</p>

                    {/* Education */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 text-sm font-medium text-navy-500 mb-2">
                        <GraduationCap className="h-4 w-4" />
                        Formación
                      </div>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {member.education.map((edu, i) => (
                          <li key={i}>{edu}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Specialties */}
                    <div>
                      <div className="flex items-center gap-2 text-sm font-medium text-navy-500 mb-2">
                        <Briefcase className="h-4 w-4" />
                        Especialidades
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {member.specialties.map((specialty, i) => (
                          <span
                            key={i}
                            className="text-xs bg-navy-500/10 text-navy-600 px-2 py-1 rounded-full"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-serif text-2xl font-bold text-navy-500 mb-4">
            ¿Listo para trabajar con nosotros?
          </h2>
          <p className="text-gray-600 mb-8">
            Contáctenos para una consulta inicial sin compromiso.
          </p>
          <Button asChild variant="gold" size="lg">
            <Link href="/contacto">Contactar al equipo</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
