import { motion } from "framer-motion";
import { Briefcase, CheckCircle2 } from "lucide-react";
import { EXPERIENCE } from "../constants";

export default function Experience() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 text-gray-400 mb-4">
            <Briefcase className="w-5 h-5" />
            <span className="text-sm uppercase tracking-wider">Career</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Work Experience
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gray-700 via-gray-600 to-gray-700" />

          <div className="space-y-12">
            {EXPERIENCE.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="hidden md:block w-1/2" />

                  <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-emerald-500 rounded-full border-4 border-black -ml-[7px] md:-ml-[7px]" />

                  <div
                    className={`w-full md:w-1/2 ml-8 md:ml-0 ${
                      isEven ? "md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 hover:bg-gray-800 transition-all duration-300">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-bold text-white">
                          {exp.position}
                        </h3>
                        <span className="text-sm text-emerald-500 font-medium whitespace-nowrap ml-4">
                          {exp.period}
                        </span>
                      </div>

                      <h4 className="text-gray-400 font-medium mb-3">
                        {exp.company}
                      </h4>

                      <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      <div className="space-y-2">
                        {exp.highlights.map((highlight, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-400">
                              {highlight}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
