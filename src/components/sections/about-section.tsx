"use client";

import { motion } from 'framer-motion';

const cardData = [
  {
    icon: "🏗️",
    title: "Modular Infrastructure",
    description: "Design and ship modular blockchain and AI infrastructure that solves real problems — payments, identity, content personalization, and scalable dApps.",
  },
  {
    icon: "⚡",
    title: "Low Complexity",
    description: "Build without the typical complexity or cost. Our platforms are designed for fast deployment and real-world usage.",
  },
  {
    icon: "🇮🇳",
    title: "Built for India",
    description: "Products designed to work in messy, real markets — not just demo reels. Practical solutions for Indian developers and businesses.",
  },
  {
    icon: "🔗",
    title: "Real Integration",
    description: "From NFT marketplaces to payments rails and AI helpers, our products integrate seamlessly with existing systems.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 12,
    },
  },
};

export default function AboutSection() {
  return (
    <section id="About" className="bg-foreground text-background py-16 md:py-20 lg:py-[120px] overflow-hidden max-w-full">
      <div className="container">
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="text-primary text-xs font-bold uppercase tracking-[0.15em] mb-3 md:mb-4"
          >
            What We Do
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-black text-background uppercase !leading-[1.05] mb-5 md:mb-7 break-words"
          >
            Decentralized Platforms That Scale
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base md:text-lg lg:text-xl text-background/80 max-w-3xl mx-auto leading-relaxed"
          >
            We design and ship modular blockchain and AI infrastructure that solves real problems — payments, identity, content personalization, and scalable dApps — without the typical complexity or cost.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-full"
        >
          {cardData.map((card, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                scale: 1.01,
                transition: { type: "spring" as const, stiffness: 400, damping: 15 } 
              }}
              className="bg-gradient-to-br from-card to-card/95 text-card-foreground rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col items-center text-center border-2 border-border shadow-xl hover:shadow-2xl hover:border-primary/30 transition-all duration-300 relative overflow-hidden group w-full"
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>

              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="mb-6 md:mb-8 relative z-10"
              >
                <div className="text-4xl md:text-5xl lg:text-6xl drop-shadow-lg">
                  {card.icon}
                </div>
              </motion.div>
              <div className="flex flex-col items-center relative z-10">
                <h3 className="font-display text-lg sm:text-xl md:text-2xl font-black text-card-foreground uppercase mb-3 md:mb-4 leading-tight group-hover:text-primary transition-colors duration-300 break-words text-center">
                  {card.title}
                </h3>
                <p className="text-xs md:text-sm text-muted leading-relaxed group-hover:text-foreground transition-colors duration-300 break-words text-center">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}