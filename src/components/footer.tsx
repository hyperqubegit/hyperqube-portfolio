export function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 py-14">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-7 h-7 bg-[#0B132B] rounded-[4px] flex items-center justify-center shrink-0">
                <span className="text-white text-[9px] font-bold tracking-tight leading-none">
                  HQ
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[14px] font-bold tracking-[-0.01em] text-[#0B132B] leading-none">
                  HyperQube
                </span>
                <span className="text-[7px] font-semibold tracking-[0.18em] text-slate-400 uppercase leading-none mt-[2px]">
                  Software &bull; Data &bull; Intelligence
                </span>
              </div>
            </div>
            <a
              href="mailto:hyperqube.ff@gmail.com"
              className="text-[13px] text-slate-500 hover:text-[#0066FF] transition-colors"
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
                className="text-[13px] font-semibold tracking-[0.04em] uppercase text-slate-500 hover:text-[#0066FF] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="pt-6 border-t border-slate-100">
          <p className="text-[12px] text-slate-400">
            &copy; {new Date().getFullYear()} HyperQube. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
