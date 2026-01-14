"use client";

import { motion } from "framer-motion";

// Placeholder logos - in production, these would be actual client logos
const clients = [
  { name: "Walmart", industry: "Retail" },
  { name: "Home Depot", industry: "Retail" },
  { name: "Osram", industry: "Manufactura" },
  { name: "Mars", industry: "Alimentos" },
  { name: "Regal-Beloit", industry: "Industrial" },
  { name: "Empresa 6", industry: "Logistica" },
];

export default function ClientLogos() {
  return (
    <section className="py-16 bg-white border-y border-navy-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-sm font-medium text-charcoal/50 uppercase tracking-wider">
            Empresas que confian en nosotros
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center"
        >
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center p-4 grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100"
            >
              {/* Placeholder logo box */}
              <div className="w-24 h-12 bg-navy-100 rounded flex items-center justify-center mb-2">
                <span className="text-navy-400 font-semibold text-sm">
                  {client.name.substring(0, 2).toUpperCase()}
                </span>
              </div>
              <span className="text-xs text-charcoal/40">{client.industry}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-xs text-charcoal/40 mt-8"
        >
          +500 empresas atendidas en Monterrey y area metropolitana
        </motion.p>
      </div>
    </section>
  );
}
