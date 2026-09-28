import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { HeroMedia } from "@/components/hero-media";
import { CapabilityStrip } from "@/components/capability-strip";
import { ServiceIndex } from "@/components/service-index";
import { ProblemSolving } from "@/components/problem-solving";
import { HowWeWork } from "@/components/how-we-work";
import { Principles } from "@/components/principles";
import { Technology } from "@/components/technology";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      
      <main>
        <Hero />
        <HeroMedia />
        <CapabilityStrip />
        <ServiceIndex />
        <ProblemSolving />
        <HowWeWork />
        <Principles />
        <Technology />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
