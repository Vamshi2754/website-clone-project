'use client';

import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const toolsData = [
  {
    icon: "📚",
    title: "SDKs & APIs",
    href: "/developers",
    type: "Development Tools",
    description: "Complete toolkit",
    features: "Multi-language support",
    availability: "GitHub & NPM",
  },
  {
    icon: "⚡",
    title: "Quick Integration",
    href: "/developers/quickstart",
    type: "Getting Started",
    description: "Low friction setup",
    features: "Wallets, Identity, Storage",
    availability: "Ready to deploy",
  },
  {
    icon: "🛠️",
    title: "Developer Docs",
    href: "/developers/docs",
    type: "Documentation",
    description: "Build, test, deploy",
    features: "Tutorials & Examples",
    availability: "Always updated",
  },
];

const ScheduleSection = () => {
  return (
    <section id="Schedule" className="bg-foreground text-background py-16 md:py-20 lg:py-[120px] overflow-hidden max-w-full relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-primary/60 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-12 lg:mb-16"
        >
          <div className="font-body font-bold text-xs uppercase tracking-[0.1em] text-primary inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
            FOR DEVELOPERS
          </div>
          <h2 className="mt-3 md:mt-4 font-display text-3xl md:text-4xl lg:text-[48px] leading-none uppercase text-background break-words">
            Tools for Creators{' '}&amp;{' '}Engineers
          </h2>
        </motion.div>

        <div className="grid gap-4 md:gap-6 max-w-full">
          {toolsData.map((tool, index) => (
            <motion.a
              key={index}
              href={tool.href}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.01, y: -3 }}
              className="group grid grid-cols-[auto,1fr] overflow-hidden rounded-2xl md:rounded-3xl transition-all duration-300 ease-in-out shadow-xl hover:shadow-2xl w-full"
            >
              <div className="flex w-[70px] sm:w-[80px] md:w-[90px] flex-shrink-0 items-center justify-center bg-primary p-3 md:p-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                <div className="text-2xl sm:text-3xl md:text-4xl relative z-10">
                  {tool.icon}
                </div>
              </div>

              <div className="flex flex-1 flex-col justify-between bg-primary/90 p-4 sm:p-6 md:p-8 text-primary-foreground relative overflow-hidden min-w-0">
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300"></div>

                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-3 mb-3 md:mb-4">
                    <h3 className="font-display text-lg sm:text-xl md:text-2xl font-black uppercase leading-tight break-words group-hover:text-white transition-colors flex-1 min-w-0">
                      {tool.title}
                    </h3>
                    <ArrowUpRight className="h-5 w-5 md:h-6 md:w-6 flex-shrink-0 text-primary-foreground transition-all duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:scale-110" />
                  </div>
                  <div className="flex flex-col gap-2 font-body text-xs md:text-sm uppercase tracking-wider">
                    <p className="font-bold opacity-90 px-2 py-1 bg-white/10 rounded-full inline-block w-fit">{tool.type}</p>
                    <p className="font-bold opacity-90 px-2 py-1 bg-white/10 rounded-full inline-block w-fit">{tool.description}</p>
                  </div>
                </div>

                <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-primary-foreground/30 relative z-10">
                  <div className="flex flex-col gap-2 font-body text-xs uppercase tracking-wider">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-bold opacity-70 text-xs">FEATURES:</span>
                      <span className="font-bold bg-white/10 px-2 py-1 rounded-full text-xs">{tool.features}</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-bold opacity-70 text-xs">AVAILABLE:</span>
                      <span className="font-bold bg-white/10 px-2 py-1 rounded-full text-xs">{tool.availability}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 md:mt-16 text-center"
        >
          <a
            href="/developers"
            className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-2xl font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            See Developer Docs
            <ArrowUpRight className="h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ScheduleSection;