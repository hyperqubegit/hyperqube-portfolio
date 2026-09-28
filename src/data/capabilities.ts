import {
  Layout,
  Code2,
  Box,
  Zap,
  LineChart,
  Settings,
  PenTool,
  Server,
} from "lucide-react";
import type { ComponentType } from "react";

export interface Capability {
  num: string;
  title: string;
  icon: ComponentType<{ className?: string }>;
  shortDesc: string;
  longDesc: string;
  solutions: string[];
  technologies: string[];
  builtFor: string[];
  size: "lg" | "md";
}

export const CAPABILITIES: Capability[] = [
  {
    num: "01",
    title: "Web Applications",
    icon: Layout,
    size: "lg",
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
    size: "md",
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
    size: "md",
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
    title: "Data & Analytics",
    icon: LineChart,
    size: "md",
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
    num: "05",
    title: "AI & Intelligent Systems",
    icon: Zap,
    size: "lg",
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
    num: "06",
    title: "Automation",
    icon: Settings,
    size: "md",
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
    size: "lg",
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
    size: "lg",
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
