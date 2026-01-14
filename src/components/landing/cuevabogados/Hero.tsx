"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, Clock, Quote } from "lucide-react";

// Animated counter hook
function useCountUp(end: number, duration: number = 2000, startOnView: boolean = true) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!startOnView) {
      setHasStarted(true);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [startOnView, hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration, hasStarted]);

  return { count, ref };
}

export default function Hero() {
  const stats = [
    { value: 2500, label: "Casos ganados", prefix: "+" },
    { value: 78, label: "Anos de experiencia", prefix: "" },
    { value: 95, label: "Tasa de exito", prefix: "", suffix: "%" },
  ];

  const casosCounter = useCountUp(2500, 2000);
  const anosCounter = useCountUp(78, 1500);
  const tasaCounter = useCountUp(95, 1800);

  return (
    <section className="relative pt-20 min-h-[90vh] flex items-center bg-navy-500 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A227' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gold-500" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          {/* Badge with urgency */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap gap-3 mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-navy-400/50 border border-gold-500/30 rounded text-gold-300 text-sm font-medium">
              <span className="w-2 h-2 bg-gold-500 rounded-full animate-pulse" />
              78 anos protegiendo empresas
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-400/30 rounded text-green-300 text-sm font-medium">
              <Clock className="w-4 h-4" />
              Respuesta en menos de 2 horas
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6"
          >
            Defensa Laboral Patronal en{" "}
            <span className="text-gold-400">Monterrey</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-navy-100 max-w-2xl mb-8 leading-relaxed"
          >
            Despacho especializado en derecho laboral patronal. Protegemos los
            intereses de su empresa ante demandas, auditorias y conflictos
            laborales.
          </motion.p>

          {/* Stats with animated counters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-8 mb-10"
          >
            <div ref={casosCounter.ref}>
              <p className="text-3xl font-serif font-bold text-gold-400">
                +{casosCounter.count.toLocaleString()}
              </p>
              <p className="text-navy-200 text-sm">Casos ganados</p>
            </div>
            <div ref={anosCounter.ref}>
              <p className="text-3xl font-serif font-bold text-gold-400">
                {anosCounter.count}
              </p>
              <p className="text-navy-200 text-sm">Anos de experiencia</p>
            </div>
            <div ref={tasaCounter.ref}>
              <p className="text-3xl font-serif font-bold text-gold-400">
                {tasaCounter.count}%
              </p>
              <p className="text-navy-200 text-sm">Tasa de exito</p>
            </div>
          </motion.div>

          {/* CTAs - WhatsApp primary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <a
              href="https://wa.me/528183456789?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20consulta%20gratuita"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-green-600 rounded hover:bg-green-500 transition-colors shadow-lg shadow-green-600/30"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp - Consulta Gratis
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white border-2 border-white/30 rounded hover:bg-white/10 transition-colors"
            >
              Ver servicios
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>

          {/* Testimonial inline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-navy-400/30 border border-navy-300/20 rounded-lg p-5 max-w-xl"
          >
            <Quote className="w-8 h-8 text-gold-500/50 mb-2" />
            <p className="text-navy-100 italic mb-3">
              &ldquo;Nos ayudaron a resolver una demanda colectiva de mas de $3M
              MXN. Su experiencia y profesionalismo fueron clave para proteger
              nuestra empresa.&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gold-500/20 rounded-full flex items-center justify-center">
                <span className="text-gold-400 font-semibold text-sm">RB</span>
              </div>
              <div>
                <p className="text-white font-medium text-sm">
                  Director de RH
                </p>
                <p className="text-navy-300 text-xs">
                  Empresa manufacturera en Monterrey
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
