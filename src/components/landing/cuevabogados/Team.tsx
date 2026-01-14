"use client";

import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const team = [
  {
    name: "Lic. Javier Cueva Ancira",
    role: "Director General",
    specialty: "Litigio laboral colectivo",
    experience: "+38 anos",
    initials: "JCA",
    linkedin: "https://www.linkedin.com/in/javier-cueva-ancira/",
  },
  {
    name: "Lic. Javier Cueva Rodriguez",
    role: "Director Juridico",
    specialty: "Defensa patronal especializada",
    experience: "+17 anos",
    initials: "JCR",
    linkedin: "https://www.linkedin.com/in/javier-cueva-rodriguez/",
  },
  {
    name: "Lic. Raul Mauricio Cueva",
    role: "Director Administrativo",
    specialty: "Gestion operativa legal",
    experience: "19 anos",
    initials: "RMC",
    linkedin: "https://www.linkedin.com/in/raul-mauricio-cueva/",
  },
  {
    name: "Lic. Ricardo Cueva Acosta",
    role: "COO",
    specialty: "Operaciones y estrategia",
    experience: "+16 anos",
    initials: "RCA",
    linkedin: "https://www.linkedin.com/in/ricardo-cueva-acosta/",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Team() {
  return (
    <section id="equipo" className="py-20 md:py-28 bg-navy-500">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-gold-400 font-semibold text-sm tracking-wider uppercase mb-3">
            Nuestro Equipo
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
            Tres generaciones de experiencia legal
          </h2>
          <p className="text-lg text-navy-200">
            Un equipo familiar dedicado exclusivamente a la defensa de los
            intereses empresariales desde 1946.
          </p>
        </motion.div>

        {/* Team grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {team.map((member) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              className="bg-navy-400/50 backdrop-blur-sm p-6 rounded-lg border border-navy-300/30 text-center hover:border-gold-500/50 transition-all group"
            >
              {/* Avatar */}
              <div className="relative w-20 h-20 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform">
                <span className="text-navy-900 font-serif font-bold text-lg">
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
                <p className="text-navy-300 text-xs mb-3">
                  {member.experience} de experiencia
                </p>

                {/* LinkedIn */}
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-navy-300 hover:text-gold-400 transition-colors text-xs"
                  aria-label={`Ver perfil de ${member.name} en LinkedIn`}
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center text-navy-300 text-sm mt-10"
        >
          Nuestro equipo incluye tambien abogados asociados y pasantes
          especializados en derecho laboral patronal.
        </motion.p>
      </div>
    </section>
  );
}
