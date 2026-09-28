import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { CapabilityStrip } from "@/components/capability-strip";
import { CapabilityGrid } from "@/components/capability-grid";
import { Principles } from "@/components/principles";
import { ProblemSolving } from "@/components/problem-solving";
import { HowWeWork } from "@/components/how-we-work";
import { BuiltTogether } from "@/components/built-together";
import { Technology } from "@/components/technology";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        <Hero />
        <CapabilityStrip />
        <CapabilityGrid />
        <ProblemSolving />
        <Principles />
        <HowWeWork />
        <BuiltTogether />
        <Technology />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
