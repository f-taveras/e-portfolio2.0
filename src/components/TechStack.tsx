import { motion } from "framer-motion";
import { Code2, type LucideIcon } from "lucide-react";
import { TECH_STACK } from "../constants";

function TechIcon({ icon: Icon }: { icon: LucideIcon }) {
  return <Icon className="w-6 h-6 text-gray-400" />;
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
          <div className="absolute left-0 top-0 bottom-0 w-20   z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20  z-10" />

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
