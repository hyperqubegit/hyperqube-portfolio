export function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 py-[80px]">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 mb-16">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-[30px] h-[30px] bg-[#0B132B] rounded-[5px] flex items-center justify-center shrink-0">
                <span className="text-white text-[10px] font-bold tracking-tight leading-none">
                  HQ
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[15px] font-bold tracking-[-0.01em] text-[#0B132B] leading-none">
                  HyperQube
                </span>
                <span className="text-[7.5px] font-semibold tracking-[0.18em] text-slate-400 uppercase leading-none mt-[3px]">
                  Software &bull; Data &bull; Intelligence
                </span>
              </div>
            </div>
            <p className="text-[14px] text-slate-500 max-w-[320px] leading-[1.6]">
              Turning ideas into software, systems and intelligent digital solutions.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-4">
            <a href="#services" className="text-[13px] font-bold tracking-[0.05em] uppercase text-[#0B132B] hover:text-[#0066FF] transition-colors">
              Services
            </a>
            <a href="#what-we-build" className="text-[13px] font-bold tracking-[0.05em] uppercase text-[#0B132B] hover:text-[#0066FF] transition-colors">
              Solutions
            </a>
            <a href="#process" className="text-[13px] font-bold tracking-[0.05em] uppercase text-[#0B132B] hover:text-[#0066FF] transition-colors">
              Process
            </a>
            <a href="#contact" className="text-[13px] font-bold tracking-[0.05em] uppercase text-[#0B132B] hover:text-[#0066FF] transition-colors">
              Contact
            </a>
          </nav>
        </div>

        <div className="pt-8 border-t border-slate-100">
          <p className="text-[12px] text-slate-400 font-medium">
            &copy; {new Date().getFullYear()} HyperQube. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
