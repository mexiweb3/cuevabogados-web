"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

interface ContactFormProps {
  variant?: "default" | "dark";
  showCompanyField?: boolean;
}

export function ContactForm({
  variant = "default",
  showCompanyField = true,
}: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      // Simulating API call - replace with actual endpoint
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Form data:", data);
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses =
    variant === "dark"
      ? "bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:ring-gold-400"
      : "";

  const labelClasses =
    variant === "dark" ? "text-white" : "text-charcoal";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="name"
            className={`block text-sm font-medium mb-2 ${labelClasses}`}
          >
            Nombre completo *
          </label>
          <Input
            id="name"
            name="name"
            required
            placeholder="Su nombre"
            className={inputClasses}
          />
        </div>

        {showCompanyField && (
          <div>
            <label
              htmlFor="company"
              className={`block text-sm font-medium mb-2 ${labelClasses}`}
            >
              Empresa *
            </label>
            <Input
              id="company"
              name="company"
              required
              placeholder="Nombre de su empresa"
              className={inputClasses}
            />
          </div>
        )}
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="email"
            className={`block text-sm font-medium mb-2 ${labelClasses}`}
          >
            Email corporativo *
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="email@empresa.com"
            className={inputClasses}
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className={`block text-sm font-medium mb-2 ${labelClasses}`}
          >
            Teléfono
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="81 1234 5678"
            className={inputClasses}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="subject"
          className={`block text-sm font-medium mb-2 ${labelClasses}`}
        >
          Asunto *
        </label>
        <select
          id="subject"
          name="subject"
          required
          className={`flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent ${
            variant === "dark"
              ? "bg-white/10 border-white/20 text-white"
              : ""
          }`}
        >
          <option value="">Seleccione un asunto</option>
          <option value="consultoria">Consultoría Laboral</option>
          <option value="litigio">Litigio Laboral</option>
          <option value="liquidacion">Liquidaciones</option>
          <option value="repse">Cumplimiento REPSE</option>
          <option value="analisis">Análisis de Vulnerabilidad</option>
          <option value="otro">Otro</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className={`block text-sm font-medium mb-2 ${labelClasses}`}
        >
          Mensaje *
        </label>
        <Textarea
          id="message"
          name="message"
          required
          placeholder="Describa brevemente su situación o consulta..."
          rows={4}
          className={inputClasses}
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="privacy"
          name="privacy"
          required
          className="mt-1 h-4 w-4 rounded border-gray-300 text-gold-500 focus:ring-gold-500"
        />
        <label
          htmlFor="privacy"
          className={`text-sm ${
            variant === "dark" ? "text-white/70" : "text-gray-500"
          }`}
        >
          Acepto el tratamiento de mis datos personales conforme al aviso de
          privacidad.
        </label>
      </div>

      <Button
        type="submit"
        variant={variant === "dark" ? "gold" : "default"}
        size="lg"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          "Enviando..."
        ) : (
          <>
            Enviar Mensaje
            <Send className="ml-2 h-4 w-4" />
          </>
        )}
      </Button>

      {status === "success" && (
        <div className="flex items-center gap-2 text-green-600 bg-green-50 p-4 rounded-lg">
          <CheckCircle className="h-5 w-5" />
          <span>
            ¡Mensaje enviado! Nos pondremos en contacto en menos de 24 horas.
          </span>
        </div>
      )}

      {status === "error" && (
        <div className="flex items-center gap-2 text-red-600 bg-red-50 p-4 rounded-lg">
          <AlertCircle className="h-5 w-5" />
          <span>
            Error al enviar. Por favor intente de nuevo o llámenos directamente.
          </span>
        </div>
      )}
    </form>
  );
}
