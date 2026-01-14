import Link from "next/link";
import { Linkedin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const team = [
  {
    name: "Javier Cueva Ancira",
    role: "Director General",
    experience: "+38 años",
    education: "UANL, ITESM, NYU",
    initials: "JCA",
    linkedin: null,
  },
  {
    name: "Javier Cueva Rodríguez",
    role: "Director Jurídico",
    experience: "+17 años",
    education: "U. Regiomontana",
    initials: "JCR",
    linkedin: "https://www.linkedin.com/in/javier-cueva-rodriguez-b52543a1/",
  },
  {
    name: "Raúl Mauricio Cueva",
    role: "Director Administrativo",
    experience: "19 años",
    education: "MBA IPADE",
    initials: "RMC",
    linkedin: null,
  },
  {
    name: "Ricardo Cueva Acosta",
    role: "COO",
    experience: "+16 años",
    education: "MBA IPADE",
    initials: "RCA",
    linkedin: null,
  },
];

export function TeamSection() {
  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-500 mb-4">
            Nuestro Equipo
          </h2>
          <p className="text-lg text-gray-600">
            Tres generaciones de abogados especializados, formados en las
            mejores instituciones de México y el mundo.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Avatar Placeholder */}
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-navy-400 to-navy-600 flex items-center justify-center">
                <span className="text-2xl font-serif font-bold text-white">
                  {member.initials}
                </span>
              </div>

              <h3 className="font-serif text-lg font-semibold text-navy-500 mb-1">
                {member.name}
              </h3>
              <p className="text-gold-600 font-medium text-sm mb-3">
                {member.role}
              </p>

              <div className="space-y-1 text-sm text-gray-500 mb-4">
                <p>{member.experience} de experiencia</p>
                <p>{member.education}</p>
              </div>

              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-navy-500/10 text-navy-500 hover:bg-navy-500 hover:text-white transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/equipo" className="group">
              Conocer al equipo completo
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
