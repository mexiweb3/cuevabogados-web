import {
  Navbar,
  Hero,
  Services,
  Experience,
  Team,
  Contact,
  Footer,
} from "@/components/landing/cuevabogados";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Experience />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}
