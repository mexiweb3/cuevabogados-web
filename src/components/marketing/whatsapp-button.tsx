"use client";

import { MessageCircle } from "lucide-react";

const PHONE_NUMBER = "528183456789"; // Formato internacional sin +
const DEFAULT_MESSAGE = "Hola, me gustaría obtener información sobre sus servicios legales.";

export function WhatsAppButton() {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(DEFAULT_MESSAGE);
    const url = `https://wa.me/${PHONE_NUMBER}?text=${encodedMessage}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </button>
  );
}
