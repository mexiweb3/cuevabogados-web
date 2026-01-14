import type { Metadata } from "next";
import { playfair, inter } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "CuevAbogados | Abogados Laborales Patronales en Monterrey",
  description:
    "Despacho de abogados especializado en derecho laboral patronal con 78 años de experiencia en Monterrey. Defensa de empresas, consultoría preventiva y litigio laboral.",
  keywords: [
    "abogados laborales monterrey",
    "derecho laboral patronal",
    "defensa empresarial",
    "litigio laboral nuevo leon",
    "abogados patronales",
  ],
  authors: [{ name: "CuevAbogados" }],
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Legal App",
  },
  openGraph: {
    title: "CuevAbogados | Defensa Laboral Patronal",
    description: "78 años protegiendo empresas en Monterrey",
    type: "website",
    locale: "es_MX",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <meta name="theme-color" content="#18181b" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
