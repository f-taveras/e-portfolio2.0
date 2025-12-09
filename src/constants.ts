import { 
  Code2, 
  Terminal, 
  Database, 
  Globe, 
  Cpu, 
  Layout, 
  Workflow, // Changed from Server to Workflow for n8n
  Container // For Docker
} from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Felix A. Taveras",
  title: "Full Stack Developer & Automation Engineer",
  bio: "U.S. Army Veteran and engineer who translates ambiguous business requirements into reliable, code-driven workflows. specialized in building TypeScript logic engines, self-hosted automation infrastructure (n8n/Docker), and scalable React systems.",
  email: "Felixataveras1@gmail.com",
  github: "https://github.com/f-taveras",
  linkedin: "https://linkedin.com/in/your-profile-link", // Update if you have one
  resumeUrl: "/assets/Felix_Taveras_Resume.pdf", 
  availability: "Open to Work",
};

export const TECH_STACK = [
  { name: "TypeScript", icon: Terminal, category: "Language" },
  { name: "React 19 / Next.js", icon: Code2, category: "Frontend" },
  { name: "SvelteKit", icon: Globe, category: "Framework" },
  { name: "n8n (Self-Hosted)", icon: Workflow, category: "Automation" },
  { name: "Docker", icon: Container, category: "Infrastructure" },
  { name: "Azure SQL Pools", icon: Database, category: "Backend" },
  { name: "Python", icon: Terminal, category: "Backend" },
  { name: "Tailwind CSS", icon: Layout, category: "Styling" },
];

export const EXPERIENCE = [
  {
    company: "Ultimate Technologies Group",
    role: "AV/IT Systems & Automation Specialist",
    period: "Apr 2021 – Dec 2025",
    description: "Designed a TypeScript logic engine to automate complex product bundling rules, replacing manual calculations. Deployed self-hosted n8n pipelines via Docker to sync data between Azure SQL Pools and HubSpot APIs."
  },
  {
    company: "TAVRN",
    role: "Junior Full Stack Developer",
    period: "Jan 2024 – Present",
    description: "Collaborating in a strict CI/CD environment. Building responsive SvelteKit UI components and conducting code reviews to maintain repository health in a distributed team."
  },
  {
    company: "United States Army",
    role: "Section Leader / Veteran",
    period: "Previous",
    description: "Managed high-stress logistical missions and operational workflows. Developed the ability to break down large, ambiguous objectives into manageable, executable tasks."
  }
];

export const PROJECTS = [
  {
    title: "Sales Logic Engine",
    description: "A centralized TypeScript & SQL engine that automates complex product bundling rules. Eliminates manual errors by programmatically validating sales quotes against inventory logic.",
    tags: ["TypeScript", "SQL", "Logic", "Automation"],
    link: "#", // If private, link to a detailed 'Case Study' page (see below)
    featured: true,
  },
  {
    title: "Enterprise Sync Pipeline",
    description: "Self-hosted n8n infrastructure on Docker. Orchestrates bi-directional data syncs between HubSpot CRM and Azure SQL Pools, handling nested JSON parsing via custom JavaScript nodes.",
    tags: ["n8n", "Docker", "Azure", "Webhooks"],
    link: "#", 
    featured: true,
  },
  {
    title: "TAVRN Platform",
    description: "Contributing to a modern social platform using SvelteKit. Focused on component modularity, strict linting adherence, and responsive UI implementation.",
    tags: ["SvelteKit", "TypeScript", "Frontend"],
    link: "https://tavrn.quest", 
    featured: false,
  },
  {
    title: "Azure Cloud Lab",
    description: "Personal infrastructure lab managing virtual networks and AD administration, demonstrating cloud competency beyond just code.",
    tags: ["Azure", "Cloud Admin", "Networking"],
    link: "#",
    featured: false,
  }
];