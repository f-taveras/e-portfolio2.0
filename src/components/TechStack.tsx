import { motion } from "framer-motion";
import {
  Code2,
  Database,
  GitBranch,
  Github,
  Cloud,
  Workflow,
  Zap,
  Terminal,
  Braces,
} from "lucide-react";
import { TECH_STACK } from "../constants";

function TechIcon({ icon }: { icon: string }) {
  switch (icon) {
    case "typescript":
      return <span className="text-2xl font-bold text-blue-500">TS</span>;
    case "javascript":
      return <span className="text-2xl font-bold text-yellow-500">JS</span>;
    case "python":
      return <span className="text-2xl">🐍</span>;
    case "sql":
      return <Database className="w-6 h-6 text-blue-400" />;
    case "bash":
      return <Terminal className="w-6 h-6 text-green-400" />;
    case "powershell":
      return <Terminal className="w-6 h-6 text-blue-400" />;
    case "nextjs":
      return <span className="text-2xl">▲</span>;
    case "react":
      return <span className="text-2xl">⚛️</span>;
    case "svelte":
      return <span className="text-2xl">🔥</span>;
    case "nodejs":
      return <span className="text-2xl text-green-500">⬢</span>;
    case "html":
      return <span className="text-2xl">🌐</span>;
    case "css":
      return <span className="text-2xl">🎨</span>;
    case "n8n":
      return <Workflow className="w-6 h-6 text-pink-400" />;
    case "powerautomate":
      return <Workflow className="w-6 h-6 text-blue-400" />;
    case "azure":
      return <Cloud className="w-6 h-6 text-blue-500" />;
    case "zapier":
      return <Zap className="w-6 h-6 text-orange-400" />;
    case "api":
      return <Braces className="w-6 h-6 text-green-400" />;
    case "graphql":
      return <span className="text-2xl text-pink-500 font-bold">GQL</span>;
    case "docker":
      return <span className="text-2xl">🐳</span>;
    case "aws":
      return <Cloud className="w-6 h-6 text-orange-400" />;
    case "vercel":
      return <span className="text-2xl">▲</span>;
    case "supabase":
      return <Database className="w-6 h-6 text-emerald-400" />;
    case "git":
      return <GitBranch className="w-6 h-6 text-orange-400" />;
    case "github":
      return <Github className="w-6 h-6 text-gray-400" />;
    case "linux":
      return <span className="text-2xl">🐧</span>;
    case "database":
      return <Database className="w-6 h-6 text-gray-400" />;
    case "hubspot":
      return <span className="text-2xl">🟠</span>;
    case "google":
      return <span className="text-2xl">📧</span>;
    default:
      return <Code2 className="w-6 h-6 text-gray-400" />;
  }
}

export default function TechStack() {
  const duplicatedStack = [...TECH_STACK, ...TECH_STACK];

  return (
    <section className="py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 text-gray-400 mb-4">
            <Code2 className="w-5 h-5" />
            <span className="text-sm uppercase tracking-wider">Tech Stack</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Technologies I Work With
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10" />

          <motion.div
            className="flex gap-6"
            animate={{
              x: [0, -2400],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 60,
                ease: "linear",
              },
            }}
          >
            {duplicatedStack.map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="flex-shrink-0 flex items-center gap-3 px-6 py-4 bg-gray-800/50 border border-gray-700/50 rounded-xl backdrop-blur-sm"
              >
                <TechIcon icon={tech.icon} />
                <span className="text-gray-300 font-medium whitespace-nowrap">
                  {tech.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
