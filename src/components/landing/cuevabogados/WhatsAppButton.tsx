"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show button after scrolling down a bit
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    // Show tooltip after 5 seconds if user hasn't interacted
    const tooltipTimer = setTimeout(() => {
      setShowTooltip(true);
    }, 5000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(tooltipTimer);
    };
  }, []);

  const handleClick = () => {
    setShowTooltip(false);
    window.open(
      "https://wa.me/528183456789?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20consulta%20gratuita",
      "_blank"
    );
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          className="fixed bottom-6 right-6 z-50"
        >
          {/* Tooltip */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="absolute bottom-full right-0 mb-3 w-64"
              >
                <div className="relative bg-white rounded-lg shadow-lg border border-gray-200 p-4">
                  <button
                    onClick={() => setShowTooltip(false)}
                    className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
                    aria-label="Cerrar"
                  >
                    <X className="w-4 h-4" />
                  </button>
                  <p className="text-sm text-gray-700 pr-4">
                    <span className="font-semibold text-navy-600">¿Tiene una demanda laboral?</span>
                    <br />
                    Escribanos por WhatsApp para una consulta gratuita.
                  </p>
                  {/* Arrow */}
                  <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-r border-b border-gray-200 transform rotate-45" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Button */}
          <motion.button
            onClick={handleClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="relative flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg shadow-green-500/30 transition-colors"
            aria-label="Contactar por WhatsApp"
          >
            <MessageCircle className="w-6 h-6" />

            {/* Pulse animation */}
            <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-30" />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
