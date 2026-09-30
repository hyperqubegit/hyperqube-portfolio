import { SpectrumGlow } from "@/components/spectrum-glow";

export function Footer() {
  return (
    <footer className="bg-[#000] border-t border-[rgba(255,255,255,0.08)] pt-[100px] pb-[32px] relative overflow-hidden">
      {/* Background glow spilling from contact */}
      <div className="absolute top-[-250px] left-1/2 -translate-x-1/2 w-[1100px] lg:w-[1400px] h-[800px] pointer-events-none z-0">
        <SpectrumGlow 
          variant="contact"
          className="w-full h-full"
          opacity={0.3}
        />
      </div>

      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-7 h-7 bg-white rounded-[4px] flex items-center justify-center shrink-0">
                <span className="text-black text-[9px] font-normal tracking-tight leading-none">
                  HQ
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[14px] font-normal tracking-[-0.01em] text-white leading-none">
                  HyperQube
                </span>
                <span className="text-[7px] font-normal tracking-[0.18em] text-[#8A8A8A] uppercase leading-none mt-[2px]">
                  Software &bull; Data &bull; Intelligence
                </span>
              </div>
            </div>
            <a
              href="mailto:hyperqube.ff@gmail.com"
              className="text-[13px] text-[#8A8A8A] hover:text-[var(--color-brand-accent)] transition-colors"
            >
              hyperqube.ff@gmail.com
            </a>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap gap-x-7 gap-y-3">
            {[
              { label: "Services", href: "#services" },
              { label: "Solutions", href: "#what-we-build" },
              { label: "Process", href: "#process" },
              { label: "Contact", href: "#contact" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[13px] font-normal tracking-[0.04em] uppercase text-[#8A8A8A] hover:text-[var(--color-brand-accent)] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="pt-6 border-t border-[rgba(255,255,255,0.08)] flex justify-between items-center">
          <p className="text-[12px] text-[#8A8A8A]">
            &copy; {new Date().getFullYear()} HyperQube. All rights reserved.
          </p>
          <p className="text-[12px] text-[#8A8A8A] hidden md:block">
            Engineering Studio
          </p>
        </div>
      </div>
    </footer>
  );
}
