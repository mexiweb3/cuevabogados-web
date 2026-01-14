const team = [
  {
    name: "Lic. Roberto Cueva Trevino",
    role: "Socio Director",
    specialty: "Litigio laboral colectivo",
    experience: "35 anos",
    initials: "RC",
  },
  {
    name: "Lic. Maria Elena Garza",
    role: "Socia Senior",
    specialty: "Consultoria preventiva",
    experience: "28 anos",
    initials: "MG",
  },
  {
    name: "Lic. Carlos Martinez Leal",
    role: "Socio",
    specialty: "Defensa patronal",
    experience: "20 anos",
    initials: "CM",
  },
  {
    name: "Lic. Ana Patricia Reyes",
    role: "Asociada Senior",
    specialty: "Terminaciones laborales",
    experience: "15 anos",
    initials: "AR",
  },
];

export default function Team() {
  return (
    <section id="equipo" className="py-20 md:py-28 bg-navy-500">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-gold-400 font-semibold text-sm tracking-wider uppercase mb-3">
            Nuestro Equipo
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
            Abogados con vocacion patronal
          </h2>
          <p className="text-lg text-navy-200">
            Un equipo dedicado exclusivamente a la defensa de los
            intereses empresariales.
          </p>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-navy-400/50 backdrop-blur-sm p-6 rounded-lg border border-navy-300/30 text-center hover:border-gold-500/50 transition-colors"
            >
              {/* Avatar */}
              <div className="w-20 h-20 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-navy-900 font-serif font-bold text-xl">
                  {member.initials}
                </span>
              </div>

              {/* Info */}
              <h3 className="text-lg font-serif font-semibold text-white mb-1">
                {member.name}
              </h3>
              <p className="text-gold-400 text-sm font-medium mb-3">
                {member.role}
              </p>
              <div className="pt-3 border-t border-navy-300/30">
                <p className="text-navy-200 text-sm mb-1">{member.specialty}</p>
                <p className="text-navy-300 text-xs">{member.experience} de experiencia</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
