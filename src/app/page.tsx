import {
  Navbar,
  Hero,
  ClientLogos,
  Services,
  Experience,
  Testimonials,
  Team,
  FAQ,
  Contact,
  Footer,
  WhatsAppButton,
} from "@/components/landing/cuevabogados";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ClientLogos />
      <Services />
      <Experience />
      <Testimonials />
      <Team />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
