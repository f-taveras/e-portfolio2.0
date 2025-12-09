import { motion } from "framer-motion";
import { Download, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import { PROFILE, SOCIALS } from "../constants";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-sm text-emerald-500 font-medium">
              {PROFILE.availability}
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white">
            {PROFILE.name}
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-400 font-light">
            {PROFILE.title}
          </h2>

          <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
            {PROFILE.bio}
          </p>

          <div className="flex items-center gap-2 text-gray-500">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">{PROFILE.location}</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <motion.a
              href={PROFILE.resumeUrl}
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-colors"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </motion.a>

            <div className="flex items-center gap-3">
              {[
                { icon: Github, href: SOCIALS.github },
                { icon: Linkedin, href: SOCIALS.linkedin },
                { icon: Twitter, href: SOCIALS.twitter },
              ].map(({ icon: Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <Icon className="w-5 h-5 text-gray-400" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
