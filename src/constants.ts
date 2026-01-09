import { 
  Code2, 
  Terminal, 
  Database, 
  Globe, 
  Cpu, 
  Layout, 
  Workflow, 
  Container,
  Server
} from 'lucide-react';

export const PROFILE = {
  name: "Felix A. Taveras",
  title: "Full Stack Developer & Automation Engineer",
  bio: "U.S. Army Veteran and engineer who translates ambiguous business requirements into reliable, code-driven workflows. Specialized in building TypeScript logic engines, self-hosted automation infrastructure (n8n/Docker), and scalable React systems.",
  availability: "Open to Work",
  email: "Felixataveras1@gmail.com",
  location: "Raleigh-Durham, NC", 
  resumeUrl: "/assets/FelixTResume.docx", 
};

export const SOCIALS = {
  github: "https://github.com/f-taveras",
  linkedin: "https://linkedin.com/in/f-taveras", 
   
};

// Mapped your specific tech stack to the Lucide icons
export const TECH_STACK = [
  { name: "TypeScript", icon: Terminal },
  { name: "React 19", icon: Code2 },
  { name: "SvelteKit", icon: Globe },
  { name: "n8n", icon: Workflow },
  { name: "Docker", icon: Container },
  { name: "SQL / Azure", icon: Database },
  { name: "Python", icon: Server },
  { name: "AWS", icon: Cpu },
  { name: "Tailwind CSS", icon: Layout },
];

export const PROJECTS = [
{
    id: 1,
    title: "A/V Sales Estimation Engine",
    description: "A comprehensive AV sales platform built with React 18 and Supabase. Features real-time estimate calculation, professional PDF generation, role-based access control (RBAC), and a drag-and-drop folder system for managing complex project proposals.",
    tags: ["React", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS", "PDF Gen"],
    github: "https://github.com/f-taveras/UTG_sales_demo", 
    demo: "https://appdemo1.milkyway.fit/", 
    featured: true,
  },
  {
    id: 2,
    title: "Enterprise Sync Pipeline",
    description: "Self-hosted n8n infrastructure on Docker. Orchestrates bi-directional data syncs between HubSpot CRM and Azure SQL Pools, handling nested JSON parsing via custom JavaScript nodes.",
    tags: ["n8n", "Docker", "Azure", "Webhooks"],
    // github: "#", // Private Enterprise Code
    demo: null, 
    featured: true,
  },
  {
    id: 3,
    title: "TAVRN Platform",
    description: "Contributing to a modern social platform using SvelteKit. Focused on component modularity, strict linting adherence, and responsive UI implementation.",
    tags: ["SvelteKit", "TypeScript", "AWS", "Frontend"],
    // github: "#",
    demo: "https://tavrn.quest",
    featured: true,
  },
  {
    id: 4,
    title: "Cindy's Bliss SEO",
    description: "E-commerce optimization project for a Shopify store. Improved SOA and SEO rankings through targeted keyword analysis and site performance tuning.",
    tags: ["Shopify", "SEO", "Analytics", "E-commerce"],
    // github: "#",
    demo: "https://cindysbliss.com",
    featured: false,
    status: "In Progress",
  },
  {
    id: 5,
    title: "Azure Cloud Lab",
    description: "Personal infrastructure lab managing virtual networks and AD administration, demonstrating cloud competency beyond just code.",
    tags: ["Azure", "Cloud Admin", "Networking"],
    // github: "#",
    demo: null,
    featured: false,
  }
];

export const EXPERIENCE = [
  {
    id: 1,
    company: "Ultimate Technologies Group",
    position: "AV/IT Systems & Automation Specialist",
    period: "Apr 2021 – Dec 2025",
    description: "Bridged the gap between hardware and software, creating internal tools to automate sales and support workflows.",
    highlights: [
      "Designed a TypeScript logic engine to replace manual sales calculations.",
      "Deployed self-hosted n8n pipelines via Docker to sync Azure & HubSpot.",
      "Wrote custom SQL procedures to validate data integrity across pipelines."
    ],
  },
  {
    id: 2,
    company: "TAVRN",
    position: "Junior Full Stack Developer",
    period: "Jan 2024 – Present",
    description: "Frontend development in a strictly version-controlled environment.",
    highlights: [
      "Built responsive SvelteKit UI components matching design specs.",
      "Conducted code reviews to maintain repository health.",
      "Collaborated in a distributed team environment."
    ],
  },
  {
    id: 3,
    company: "United States Army",
    position: "Section Leader / Veteran",
    period: "Previous",
    description: "Operational leadership in high-stress environments.",
    highlights: [
      "Broke down large logistical missions into manageable tasks.",
      "Managed inventory and workflow efficiency under pressure.",
      "Developed adaptability and disciplined problem-solving skills."
    ],
  },
];

export const CONTACT_INFO = {
  title: "Let's Work Together",
  description: "I am currently looking for roles where I can leverage my background in automation and full-stack development. Reach out if you need a problem solver.",
  successMessage: "Thanks for reaching out! I'll get back to you soon.",
  errorMessage: "Oops! Something went wrong. Please try again.",
};