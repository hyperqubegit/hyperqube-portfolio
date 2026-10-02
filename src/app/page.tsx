import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { HeroMedia } from "@/components/hero-media";
import { CapabilityStrip } from "@/components/capability-strip";
import { ServiceIndex } from "@/components/service-index";
import { StudioVideo } from "@/components/studio-video";
import { Principles } from "@/components/principles";
import { Process } from "@/components/process";
import { Faq } from "@/components/faq";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--color-brand-bg)] overflow-x-hidden">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:text-black focus:px-4 focus:py-2 focus:rounded">
        Skip to main content
      </a>

      <Navbar />
      
      <main id="main-content" aria-label="HyperQube — Software Engineering Studio">
        {/* 
          SEO-critical: visually hidden h1 with keyword-rich text. 
          Google sees this as the page's primary heading.
          The visual "Have an Idea? We'll Build It." in Hero is decorative.
        */}
        <h1 className="sr-only">
          HyperQube — Custom Software Development, Web Applications, SaaS Products, AI Solutions &amp; Digital Products Engineering Studio
        </h1>

        <Hero />
        <HeroMedia />
        <CapabilityStrip />
        <ServiceIndex />
        <StudioVideo />
        <Principles />
        <Process />
        <Faq />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
