import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { HeroMedia } from "@/components/hero-media";
import { CapabilityStrip } from "@/components/capability-strip";
import { ServiceIndex } from "@/components/service-index";
import { Principles } from "@/components/principles";
import { Process } from "@/components/process";
import { Faq } from "@/components/faq";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--color-brand-bg)] overflow-x-hidden">
      <Navbar />
      
      <main>
        <Hero />
        <HeroMedia />
        <CapabilityStrip />
        <ServiceIndex />
        <Principles />
        <Process />
        <Faq />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
