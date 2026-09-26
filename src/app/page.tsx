"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import {
  ArrowRight,
  Code2,
  Layout,
  Lightbulb,
  Settings,
  LineChart,
  Zap,
  Search,
  PenTool,
  Rocket,
  Box,
  Server,
  Send,
  Mail,
  Menu,
  X,
  Database,
  Cloud,
} from "lucide-react";

/* =============================================
   DATA
   ============================================= */

interface Capability {
  num: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  shortDesc: string;
  longDesc: string;
  solutions: string[];
  technologies: string[];
  builtFor: string[];
}

const CAPABILITIES: Capability[] = [
  {
    num: "01",
    title: "Web Applications",
    icon: Layout,
    shortDesc:
      "Modern, responsive and high-performance web applications built around your business.",
    longDesc:
      "We design and build fast, responsive web applications that turn complex business requirements into simple, intuitive user experiences.",
    solutions: [
      "Customer portals",
      "Internal dashboards",
      "Management systems",
      "Booking & scheduling platforms",
      "Business platforms",
      "E-commerce solutions",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js"],
    builtFor: ["Startups", "Businesses", "Organizations", "Growing teams"],
  },
  {
    num: "02",
    title: "Custom Software",
    icon: Code2,
    shortDesc:
      "Purpose-built software designed to solve specific operational and business problems.",
    longDesc:
      "Purpose-built software designed from the ground up to solve specific operational challenges that off-the-shelf solutions cannot address.",
    solutions: [
      "Internal tools & admin systems",
      "Workflow management platforms",
      "Business logic engines",
      "Integration layers",
      "Process management systems",
      "Custom CRMs",
    ],
    technologies: ["Node.js", "Python", "TypeScript", "PostgreSQL", "APIs"],
    builtFor: ["Businesses", "Organizations", "Teams with unique workflows"],
  },
  {
    num: "03",
    title: "SaaS Products",
    icon: Box,
    shortDesc:
      "Scalable SaaS platforms with thoughtful UX, reliable architecture and production-ready foundations.",
    longDesc:
      "We build scalable SaaS platforms from concept to launch with thoughtful user experience, reliable multi-tenant architecture and production-ready foundations.",
    solutions: [
      "Multi-tenant platforms",
      "Subscription & billing systems",
      "User management & authentication",
      "Analytics dashboards",
      "Admin panels",
      "API services",
    ],
    technologies: ["Next.js", "React", "Node.js", "PostgreSQL", "Stripe"],
    builtFor: ["Founders", "Startups", "Product teams"],
  },
  {
    num: "04",
    title: "AI & Intelligent Systems",
    icon: Zap,
    shortDesc:
      "Practical AI solutions, intelligent workflows and AI-powered features that create measurable value.",
    longDesc:
      "Practical AI solutions for products and business workflows that create measurable, real-world value rather than novelty.",
    solutions: [
      "AI-powered product features",
      "Intelligent document processing",
      "Recommendation systems",
      "AI assistants & chatbots",
      "Computer vision systems",
      "Workflow intelligence",
    ],
    technologies: ["Python", "AI/ML", "APIs", "LLMs", "Computer Vision"],
    builtFor: ["Businesses", "Product teams", "Organizations with data"],
  },
  {
    num: "05",
    title: "Data & Analytics",
    icon: LineChart,
    shortDesc:
      "Dashboards, analytics systems and data solutions that turn raw information into useful insights.",
    longDesc:
      "We build data systems that turn raw information into actionable insights through clear visual dashboards and reliable analytics pipelines.",
    solutions: [
      "Analytics dashboards",
      "Reporting systems",
      "Data pipelines",
      "Business intelligence tools",
      "Real-time monitoring",
      "Data visualization",
    ],
    technologies: ["PostgreSQL", "Python", "Firebase", "Supabase", "D3.js"],
    builtFor: ["Businesses", "Analysts", "Operations teams"],
  },
  {
    num: "06",
    title: "Automation",
    icon: Settings,
    shortDesc:
      "Workflow automation that reduces repetitive work, improves efficiency and connects business processes.",
    longDesc:
      "Workflow automation that eliminates repetitive manual work, improves operational efficiency and connects disconnected business processes.",
    solutions: [
      "Process automation",
      "Integration workflows",
      "Automated reporting",
      "Notification systems",
      "Data synchronization",
      "Task orchestration",
    ],
    technologies: [
      "Node.js",
      "Python",
      "APIs",
      "Webhooks",
      "Cloud Functions",
    ],
    builtFor: ["Businesses", "Operations teams", "Growing companies"],
  },
  {
    num: "07",
    title: "UI/UX Design",
    icon: PenTool,
    shortDesc:
      "Clean, modern and user-focused product interfaces designed around usability and conversion.",
    longDesc:
      "Clean, modern and user-focused product interfaces designed around usability, clarity and meaningful conversion.",
    solutions: [
      "Product interface design",
      "Design systems",
      "Prototyping & wireframing",
      "User flow optimization",
      "Responsive design",
      "Component libraries",
    ],
    technologies: ["Figma", "Design Systems", "CSS", "Prototyping"],
    builtFor: [
      "Startups",
      "Product teams",
      "Businesses launching digital products",
    ],
  },
  {
    num: "08",
    title: "Backend & APIs",
    icon: Server,
    shortDesc:
      "Secure, scalable backend systems, APIs, databases and integrations powering modern applications.",
    longDesc:
      "Secure, scalable backend systems that power modern applications with reliable data management, authentication and third-party integrations.",
    solutions: [
      "REST & GraphQL APIs",
      "Database architecture",
      "Authentication systems",
      "Third-party integrations",
      "Microservices",
      "Real-time systems",
    ],
    technologies: ["Node.js", "Python", "PostgreSQL", "Firebase", "GraphQL"],
    builtFor: [
      "Startups",
      "Product teams",
      "Businesses needing integrations",
    ],
  },
];

const PROCESS_STAGES = [
  {
    num: "01",
    name: "DISCOVER",
    desc: "Understand the problem, users, requirements and business goals.",
  },
  {
    num: "02",
    name: "DESIGN",
    desc: "Define the experience, architecture and product direction.",
  },
  {
    num: "03",
    name: "BUILD",
    desc: "Develop the product with modern engineering practices.",
  },
  {
    num: "04",
    name: "LAUNCH",
    desc: "Deploy, test and iterate toward a stable release.",
  },
  {
    num: "05",
    name: "EVOLVE",
    desc: "Improve the system as requirements and users grow.",
  },
];

const PRINCIPLES = [
  {
    num: "01",
    title: "Real Problems",
    desc: "We start with the problem, not the technology.",
  },
  {
    num: "02",
    title: "Technology With Purpose",
    desc: "Every technical decision should serve the product.",
  },
  {
    num: "03",
    title: "Engineering That Scales",
    desc: "Build foundations that can evolve with the business.",
  },
  {
    num: "04",
    title: "Designed for People",
    desc: "Good software should be powerful without being complicated.",
  },
];

const TECH_CATEGORIES = [
  { name: "FRONTEND", icon: Layout, items: ["Next.js", "React", "TypeScript"] },
  { name: "BACKEND", icon: Server, items: ["Node.js", "Python", "APIs"] },
  {
    name: "DATA",
    icon: Database,
    items: ["PostgreSQL", "Firebase", "Supabase"],
  },
  {
    name: "AI & INTELLIGENCE",
    icon: Zap,
    items: ["Python", "Machine Learning", "Computer Vision", "LLMs"],
  },
  {
    name: "INFRASTRUCTURE",
    icon: Cloud,
    items: ["Vercel", "Cloud", "CI/CD"],
  },
];

/* =============================================
   HOOKS
   ============================================= */

function useScrolled() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return scrolled;
}

function useReducedMotion() {
  const [reduced, setReduced] = useState(true);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduced;
}

/* =============================================
   ANIMATION WRAPPER
   ============================================= */

function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* =============================================
   NAVBAR
   ============================================= */

function Navbar() {
  const scrolled = useScrolled();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: "Services", href: "#services" },
    { label: "What We Build", href: "#what-we-build" },
    { label: "How We Work", href: "#process" },
    { label: "Contact", href: "#contact" },
  ];

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/92 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.04)] border-b border-slate-100"
          : "bg-white/60 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-[4.5rem] flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex flex-col" onClick={closeMobile}>
          <span className="text-lg font-bold tracking-tight text-[#0B132B]">
            HyperQube
          </span>
          <span className="text-[9px] font-semibold tracking-[0.2em] text-slate-400 uppercase leading-none mt-0.5">
            Software &bull; Data &bull; Intelligence
          </span>
        </a>

        {/* Desktop nav */}
        <nav
          className="hidden md:flex items-center gap-8"
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[13px] font-medium text-slate-500 hover:text-[#0066FF] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA + Mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden md:inline-flex items-center justify-center rounded-lg bg-[#0B132B] px-5 py-2 text-[13px] font-medium text-white hover:bg-[#0066FF] transition-colors"
          >
            Start a Project
          </a>
          <button
            className="md:hidden p-2 text-slate-600"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="md:hidden border-t border-slate-100 bg-white">
          <div className="flex flex-col px-6 py-4 gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMobile}
                className="py-3 text-sm font-medium text-slate-600 hover:text-[#0066FF] border-b border-slate-50 last:border-0"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={closeMobile}
              className="mt-2 flex items-center justify-center rounded-lg bg-[#0B132B] px-5 py-3 text-sm font-medium text-white"
            >
              Start a Project
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

/* =============================================
   SYSTEM VISUALIZATION (Hero graphic)
   ============================================= */

function SystemVisualization() {
  const [mounted, setMounted] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => setMounted(true), []);

  const showMotion = mounted && !reducedMotion;

  return (
    <div
      className="relative w-full aspect-square max-w-md mx-auto"
      aria-hidden="true"
    >
      <svg viewBox="0 0 400 400" className="w-full h-full" fill="none">
        {/* Grid */}
        <defs>
          <pattern
            id="viz-grid"
            width="32"
            height="32"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 32 0 L 0 0 0 32"
              fill="none"
              stroke="#0066FF"
              strokeWidth="0.3"
              opacity="0.12"
            />
          </pattern>

          {/* Paths for signal motion */}
          <path id="sig-top" d="M200,178 L200,92" />
          <path id="sig-right" d="M222,200 L308,200" />
          <path id="sig-bottom" d="M200,222 L200,308" />
          <path id="sig-left" d="M178,200 L92,200" />
        </defs>

        <rect
          width="400"
          height="400"
          fill="url(#viz-grid)"
          rx="12"
          opacity="0.6"
        />

        {/* Connection lines */}
        <line
          x1="200"
          y1="178"
          x2="200"
          y2="92"
          stroke="#0066FF"
          strokeWidth="1"
          opacity="0.12"
          strokeDasharray="4 4"
        />
        <line
          x1="222"
          y1="200"
          x2="308"
          y2="200"
          stroke="#0066FF"
          strokeWidth="1"
          opacity="0.12"
          strokeDasharray="4 4"
        />
        <line
          x1="200"
          y1="222"
          x2="200"
          y2="308"
          stroke="#0066FF"
          strokeWidth="1"
          opacity="0.12"
          strokeDasharray="4 4"
        />
        <line
          x1="178"
          y1="200"
          x2="92"
          y2="200"
          stroke="#0066FF"
          strokeWidth="1"
          opacity="0.12"
          strokeDasharray="4 4"
        />

        {/* Diagonal connections */}
        <line
          x1="215"
          y1="185"
          x2="265"
          y2="135"
          stroke="#0066FF"
          strokeWidth="0.5"
          opacity="0.06"
          strokeDasharray="3 6"
        />
        <line
          x1="185"
          y1="215"
          x2="135"
          y2="265"
          stroke="#0066FF"
          strokeWidth="0.5"
          opacity="0.06"
          strokeDasharray="3 6"
        />

        {/* Small decorative nodes */}
        <circle
          cx="265"
          cy="135"
          r="3"
          fill="none"
          stroke="#0066FF"
          strokeWidth="0.5"
          opacity="0.2"
        />
        <circle
          cx="135"
          cy="265"
          r="3"
          fill="none"
          stroke="#0066FF"
          strokeWidth="0.5"
          opacity="0.2"
        />
        <circle
          cx="280"
          cy="280"
          r="2"
          fill="none"
          stroke="#0066FF"
          strokeWidth="0.4"
          opacity="0.1"
        />
        <circle
          cx="120"
          cy="120"
          r="2"
          fill="none"
          stroke="#0066FF"
          strokeWidth="0.4"
          opacity="0.1"
        />

        {/* Animated signal dots */}
        {showMotion && (
          <>
            <circle r="2.5" fill="#0066FF">
              <animateMotion dur="3s" repeatCount="indefinite" begin="0s">
                <mpath href="#sig-top" />
              </animateMotion>
              <animate
                attributeName="opacity"
                values="0;0.9;0.9;0"
                dur="3s"
                repeatCount="indefinite"
              />
            </circle>
            <circle r="2.5" fill="#0066FF">
              <animateMotion dur="4s" repeatCount="indefinite" begin="0.8s">
                <mpath href="#sig-right" />
              </animateMotion>
              <animate
                attributeName="opacity"
                values="0;0.9;0.9;0"
                dur="4s"
                repeatCount="indefinite"
                begin="0.8s"
              />
            </circle>
            <circle r="2.5" fill="#0066FF">
              <animateMotion dur="3.5s" repeatCount="indefinite" begin="1.6s">
                <mpath href="#sig-bottom" />
              </animateMotion>
              <animate
                attributeName="opacity"
                values="0;0.9;0.9;0"
                dur="3.5s"
                repeatCount="indefinite"
                begin="1.6s"
              />
            </circle>
            <circle r="2.5" fill="#0066FF">
              <animateMotion dur="4.5s" repeatCount="indefinite" begin="2.4s">
                <mpath href="#sig-left" />
              </animateMotion>
              <animate
                attributeName="opacity"
                values="0;0.9;0.9;0"
                dur="4.5s"
                repeatCount="indefinite"
                begin="2.4s"
              />
            </circle>
          </>
        )}

        {/* Node pulse rings */}
        {showMotion && (
          <>
            <circle cx="200" cy="72" r="22" fill="none" stroke="#0066FF" strokeWidth="0.5">
              <animate attributeName="r" values="22;28;22" dur="4s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.2;0.05;0.2" dur="4s" repeatCount="indefinite" />
            </circle>
            <circle cx="72" cy="200" r="22" fill="none" stroke="#0066FF" strokeWidth="0.5">
              <animate attributeName="r" values="22;28;22" dur="5s" repeatCount="indefinite" begin="1s" />
              <animate attributeName="opacity" values="0.2;0.05;0.2" dur="5s" repeatCount="indefinite" begin="1s" />
            </circle>
          </>
        )}

        {/* Central HQ mark */}
        <rect
          x="178"
          y="178"
          width="44"
          height="44"
          rx="6"
          fill="#0B132B"
          stroke="#0066FF"
          strokeWidth="1"
        />
        <text
          x="200"
          y="205"
          textAnchor="middle"
          fill="white"
          fontSize="14"
          fontWeight="700"
          fontFamily="system-ui, sans-serif"
        >
          HQ
        </text>

        {/* Node: DATA (top) */}
        <circle
          cx="200"
          cy="72"
          r="22"
          fill="white"
          stroke="#0066FF"
          strokeWidth="1"
        />
        <text
          x="200"
          y="76"
          textAnchor="middle"
          fill="#0B132B"
          fontSize="8"
          fontWeight="600"
          letterSpacing="1.5"
          fontFamily="system-ui, sans-serif"
        >
          DATA
        </text>

        {/* Node: SOFTWARE (right) */}
        <rect
          x="288"
          y="183"
          width="60"
          height="34"
          rx="6"
          fill="white"
          stroke="#0066FF"
          strokeWidth="1"
        />
        <text
          x="318"
          y="204"
          textAnchor="middle"
          fill="#0B132B"
          fontSize="7"
          fontWeight="600"
          letterSpacing="0.5"
          fontFamily="system-ui, sans-serif"
        >
          SOFTWARE
        </text>

        {/* Node: AUTOMATION (bottom) */}
        <rect
          x="158"
          y="308"
          width="84"
          height="34"
          rx="6"
          fill="white"
          stroke="#0066FF"
          strokeWidth="1"
        />
        <text
          x="200"
          y="329"
          textAnchor="middle"
          fill="#0B132B"
          fontSize="6.5"
          fontWeight="600"
          letterSpacing="1"
          fontFamily="system-ui, sans-serif"
        >
          AUTOMATION
        </text>

        {/* Node: AI (left) */}
        <circle
          cx="72"
          cy="200"
          r="22"
          fill="white"
          stroke="#0066FF"
          strokeWidth="1"
        />
        <text
          x="72"
          y="204"
          textAnchor="middle"
          fill="#0B132B"
          fontSize="10"
          fontWeight="700"
          letterSpacing="1"
          fontFamily="system-ui, sans-serif"
        >
          AI
        </text>
      </svg>
    </div>
  );
}

/* =============================================
   CAPABILITY MODAL
   ============================================= */

function CapabilityModal({
  capability,
  onClose,
}: {
  capability: Capability;
  onClose: () => void;
}) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  const Icon = capability.icon;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#0B132B]/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel */}
      <div
        className="relative bg-white rounded-xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-slate-100 px-8 py-5 flex items-center justify-between rounded-t-xl z-10">
          <div className="flex items-center gap-3">
            <Icon className="w-5 h-5 text-[#0066FF]" />
            <h3
              id="modal-title"
              className="text-lg font-semibold text-[#0B132B]"
            >
              {capability.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-slate-100 transition-colors text-slate-400 hover:text-slate-600"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="px-8 py-6 space-y-8">
          <p className="text-slate-600 leading-relaxed">{capability.longDesc}</p>

          <div>
            <h4 className="text-[10px] font-semibold tracking-[0.15em] text-slate-400 uppercase mb-4">
              What we can build
            </h4>
            <ul className="space-y-2">
              {capability.solutions.map((s) => (
                <li
                  key={s}
                  className="flex items-start gap-2.5 text-sm text-slate-600"
                >
                  <span className="mt-2 w-1 h-1 rounded-full bg-[#0066FF] shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-semibold tracking-[0.15em] text-slate-400 uppercase mb-4">
              Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {capability.technologies.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 text-xs font-medium text-slate-500 bg-slate-50 border border-slate-100 rounded-md"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-semibold tracking-[0.15em] text-slate-400 uppercase mb-4">
              Built for
            </h4>
            <div className="flex flex-wrap gap-2">
              {capability.builtFor.map((b) => (
                <span
                  key={b}
                  className="px-3 py-1 text-xs font-medium text-[#0066FF] bg-blue-50 border border-blue-100 rounded-md"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="px-8 py-5 border-t border-slate-100 bg-slate-50/50 rounded-b-xl">
          <a
            href="#contact"
            onClick={onClose}
            className="inline-flex items-center justify-center rounded-lg bg-[#0B132B] px-6 py-2.5 text-sm font-medium text-white hover:bg-[#0066FF] transition-colors"
          >
            Discuss this capability
            <ArrowRight className="ml-2 w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}

/* =============================================
   PAGE SECTIONS
   ============================================= */

function Hero() {
  return (
    <section className="relative pt-20 pb-24 lg:pt-28 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        {/* Left */}
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-[#0066FF]/30" />
            <span className="text-[10px] font-semibold tracking-[0.2em] text-[#0066FF] uppercase">
              Turn your ideas into reality
            </span>
          </div>

          <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold tracking-tight text-[#0B132B] leading-[1.08] mb-6">
            Have an Idea?
            <br />
            <span className="text-gradient">We&apos;ll Build It.</span>
          </h1>

          <p className="text-lg text-slate-500 mb-10 max-w-lg leading-relaxed">
            Custom software, intelligent systems and digital solutions built
            around real business needs.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center rounded-lg bg-[#0B132B] px-6 py-3 text-sm font-medium text-white hover:bg-[#0066FF] transition-colors shadow-lg shadow-slate-900/10"
            >
              Start a Project
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#what-we-build"
              className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-600 hover:border-slate-300 hover:text-slate-900 transition-colors"
            >
              Explore What We Build
            </a>
          </div>
        </AnimatedSection>

        {/* Right */}
        <AnimatedSection
          className="hidden lg:block"
          delay={200}
        >
          <div className="relative rounded-2xl border border-slate-100 bg-white shadow-xl shadow-slate-900/[0.03] overflow-hidden">
            <SystemVisualization />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function CapabilityStrip() {
  return (
    <div id="services" className="border-y border-slate-100 bg-slate-50/60 py-5">
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between items-center gap-y-3 gap-x-6">
        {[
          { icon: Code2, label: "Build" },
          { icon: Lightbulb, label: "Innovate" },
          { icon: Settings, label: "Automate" },
          { icon: Search, label: "Analyze" },
          { icon: Rocket, label: "Grow" },
        ].map((item, i) => (
          <span
            key={item.label}
            className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.15em] text-slate-400 uppercase"
          >
            <item.icon className="w-3.5 h-3.5 text-[#0066FF]/60" />
            {item.label}
          </span>
        ))}
      </div>
    </div>
  );
}

function WhatWeBuild() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <section id="what-we-build" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#0066FF]/30" />
              <span className="text-[10px] font-mono tracking-[0.15em] text-slate-400 uppercase">
                02 — Capabilities
              </span>
            </div>
            <div className="max-w-2xl mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0B132B] mb-4">
                What We Build
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed">
                From modern websites to intelligent software systems, we design
                and build digital solutions around real business needs.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {CAPABILITIES.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <AnimatedSection key={cap.num} delay={idx * 60}>
                  <button
                    onClick={() => setActiveIndex(idx)}
                    className="group relative w-full text-left p-7 rounded-xl border border-slate-150 bg-white
                      hover:border-[#0066FF]/40 hover:shadow-[0_4px_24px_-4px_rgba(0,102,255,0.12)]
                      hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex justify-between items-start mb-5">
                      <span className="text-[11px] font-mono font-semibold text-slate-300 tracking-wider">
                        {cap.num}
                      </span>
                      <Icon className="w-[18px] h-[18px] text-slate-300 group-hover:text-[#0066FF] transition-colors duration-300" />
                    </div>
                    <h3 className="text-[15px] font-semibold text-[#0B132B] mb-2">
                      {cap.title}
                    </h3>
                    <p className="text-sm text-slate-400 group-hover:text-slate-500 leading-relaxed transition-colors duration-300">
                      {cap.shortDesc}
                    </p>
                    <div className="mt-4 flex items-center text-xs font-medium text-[#0066FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Explore
                      <ArrowRight className="ml-1 w-3 h-3" />
                    </div>
                  </button>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {activeIndex !== null && (
        <CapabilityModal
          capability={CAPABILITIES[activeIndex]}
          onClose={() => setActiveIndex(null)}
        />
      )}
    </>
  );
}

function PrinciplesSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="py-24 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#0066FF]/30" />
              <span className="text-[10px] font-mono tracking-[0.15em] text-slate-400 uppercase">
                03 — Principles
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0B132B] mb-6">
              Built Around
              <br />
              Your Goals
            </h2>
            <p className="text-slate-500 leading-relaxed max-w-sm">
              We believe good engineering starts with understanding what matters
              to the people using the software.
            </p>
          </AnimatedSection>

          {/* Right */}
          <AnimatedSection delay={150}>
            <div className="space-y-0 border-t border-slate-100">
              {PRINCIPLES.map((p, i) => (
                <div
                  key={p.num}
                  className={`py-6 border-b border-slate-100 transition-all duration-300 cursor-default ${
                    hovered === i ? "bg-blue-50/40 px-5 -mx-5 rounded-lg border-blue-100" : ""
                  }`}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div className="flex items-start gap-5">
                    <span
                      className={`text-xs font-mono font-semibold tracking-wider mt-0.5 transition-colors duration-300 ${
                        hovered === i ? "text-[#0066FF]" : "text-slate-300"
                      }`}
                    >
                      {p.num}
                    </span>
                    <div>
                      <h3
                        className={`text-base font-semibold mb-1 transition-colors duration-300 ${
                          hovered === i ? "text-[#0B132B]" : "text-slate-700"
                        }`}
                      >
                        {p.title}
                      </h3>
                      <p className="text-sm text-slate-500 leading-relaxed">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section id="process" className="py-24 bg-slate-50/60 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#0066FF]/30" />
            <span className="text-[10px] font-mono tracking-[0.15em] text-slate-400 uppercase">
              04 — Process
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0B132B] mb-16">
            From Idea to Impact
          </h2>
        </AnimatedSection>

        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="absolute top-[18px] left-0 right-0 h-px bg-slate-200 hidden lg:block" />

          <div className="grid lg:grid-cols-5 gap-10 lg:gap-6">
            {PROCESS_STAGES.map((stage, idx) => (
              <AnimatedSection key={stage.num} delay={idx * 100}>
                <div className="relative">
                  {/* Indicator */}
                  <div className="flex items-center gap-3 mb-4 lg:mb-6">
                    <div className="relative z-10 w-[9px] h-[9px] rounded-full bg-[#0066FF] ring-4 ring-white shadow-sm" />
                    <span className="text-[10px] font-mono font-semibold tracking-[0.15em] text-[#0066FF] uppercase lg:hidden">
                      {stage.num}
                    </span>
                  </div>

                  <h3 className="text-xs font-bold tracking-[0.15em] text-[#0B132B] uppercase mb-2">
                    {stage.name}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {stage.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TechnologySection() {
  return (
    <section className="py-24 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#0066FF]/30" />
            <span className="text-[10px] font-mono tracking-[0.15em] text-slate-400 uppercase">
              05 — Stack
            </span>
          </div>
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0B132B] mb-4">
              Built With Modern Technology
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed">
              We choose technologies based on the problem, not trends.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {TECH_CATEGORIES.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <AnimatedSection key={cat.name} delay={idx * 80}>
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Icon className="w-3.5 h-3.5 text-[#0066FF]/50" />
                    <h3 className="text-[10px] font-semibold tracking-[0.15em] text-slate-400 uppercase">
                      {cat.name}
                    </h3>
                  </div>
                  <div className="space-y-2">
                    {cat.items.map((item) => (
                      <div
                        key={item}
                        className="text-sm font-medium text-slate-600"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WhoWeBuildFor() {
  const groups = [
    "Startups",
    "Businesses",
    "Growing Teams",
    "Founders",
    "Organizations",
    "Entrepreneurs",
  ];

  return (
    <section className="py-24 bg-slate-50/60 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-[#0066FF]/30" />
                <span className="text-[10px] font-mono tracking-[0.15em] text-slate-400 uppercase">
                  06 — Clients
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0B132B] mb-4">
                Who We Build For
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed max-w-md">
                Whether you&apos;re validating an idea, improving an existing
                workflow, or building a new digital product — HyperQube helps
                turn the concept into something usable and real.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {groups.map((g) => (
                <span
                  key={g}
                  className="px-4 py-2 rounded-lg bg-white border border-slate-150 text-sm font-medium text-slate-600 shadow-sm"
                >
                  {g}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function ContactCTA() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#0066FF]/30" />
              <span className="text-[10px] font-semibold tracking-[0.2em] text-[#0066FF] uppercase">
                Let&apos;s Build Together
              </span>
              <div className="h-px w-8 bg-[#0066FF]/30" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#0B132B] mb-4">
              Need something built?
              <br />
              Let&apos;s talk.
            </h2>
            <p className="text-lg text-slate-500 max-w-lg mx-auto leading-relaxed">
              Tell us what you&apos;re trying to build, what problem you&apos;re
              solving, or where you&apos;re stuck.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Email card */}
            <div className="p-8 rounded-xl border border-slate-100 bg-white">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-5">
                <Mail className="w-4.5 h-4.5 text-[#0066FF]" />
              </div>
              <h3 className="text-[10px] font-semibold tracking-[0.15em] text-slate-400 uppercase mb-3">
                Email
              </h3>
              <a
                href="mailto:hyperqube.ff@gmail.com"
                className="text-lg font-semibold text-[#0B132B] hover:text-[#0066FF] transition-colors block mb-5"
              >
                hyperqube.ff@gmail.com
              </a>
              <a
                href="mailto:hyperqube.ff@gmail.com"
                className="inline-flex items-center justify-center rounded-lg bg-[#0B132B] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#0066FF] transition-colors"
              >
                Email HyperQube
                <Send className="ml-2 w-3.5 h-3.5" />
              </a>
            </div>

            {/* Social card */}
            <div className="p-8 rounded-xl border border-slate-100 bg-white">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-5">
                <ArrowRight className="w-4.5 h-4.5 text-[#0066FF]" />
              </div>
              <h3 className="text-[10px] font-semibold tracking-[0.15em] text-slate-400 uppercase mb-3">
                Connect
              </h3>
              <p className="text-sm text-slate-500 mb-5 leading-relaxed">
                Follow HyperQube for updates, insights and behind-the-scenes.
              </p>
              <div className="flex flex-wrap gap-3">
                {["LinkedIn", "X", "Discord", "Instagram"].map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1.5 text-xs font-medium text-slate-400 border border-slate-100 rounded-md cursor-default"
                    title="Coming soon"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function Footer() {
  const footerCols = [
    {
      title: "BUILD",
      links: [
        { label: "Web Applications", href: "#what-we-build" },
        { label: "Custom Software", href: "#what-we-build" },
        { label: "SaaS Products", href: "#what-we-build" },
        { label: "AI Systems", href: "#what-we-build" },
      ],
    },
    {
      title: "SOLUTIONS",
      links: [
        { label: "Data & Analytics", href: "#what-we-build" },
        { label: "Automation", href: "#what-we-build" },
        { label: "UI/UX Design", href: "#what-we-build" },
        { label: "Backend & APIs", href: "#what-we-build" },
      ],
    },
    {
      title: "COMPANY",
      links: [
        { label: "About", href: "#" },
        { label: "How We Work", href: "#process" },
        { label: "Contact", href: "#contact" },
      ],
    },
    {
      title: "SOCIAL",
      links: [
        { label: "LinkedIn", href: "#" },
        { label: "X", href: "#" },
        { label: "Discord", href: "#" },
        { label: "Instagram", href: "#" },
        { label: "YouTube", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-[#0B132B] text-slate-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top */}
        <div className="grid md:grid-cols-6 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <span className="text-xl font-bold tracking-tight text-white block">
              HyperQube
            </span>
            <span className="text-[9px] font-semibold tracking-[0.2em] text-blue-400 uppercase block mt-1 mb-5">
              Software &bull; Data &bull; Intelligence
            </span>
            <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
              Turning ideas into software, systems and intelligent digital
              solutions.
            </p>
          </div>

          {/* Nav columns */}
          {footerCols.map((col) => (
            <div key={col.title}>
              <h4 className="text-[10px] font-semibold tracking-[0.15em] text-slate-500 uppercase mb-4">
                {col.title}
              </h4>
              <div className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm text-slate-500 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-slate-800 text-xs text-slate-600">
          &copy; 2026 HyperQube. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

/* =============================================
   MAIN PAGE
   ============================================= */

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <CapabilityStrip />
      <WhatWeBuild />
      <PrinciplesSection />
      <ProcessSection />
      <TechnologySection />
      <WhoWeBuildFor />
      <ContactCTA />
      <Footer />
    </main>
  );
}
