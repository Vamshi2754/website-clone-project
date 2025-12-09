"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

const cardData = [
  {
    iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f7e57522-fe3b-4c10-ba17-50f5e95f3ca3-nextconference-site-webflow-io/assets/images/6864719ede03173394ad62df_Frame_2016-4.png",
    title: "Learn by Doing",
    description: "This value encourages action, experimentation, and learning from real-world practice rather than relying solely on theory.",
  },
  {
    iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f7e57522-fe3b-4c10-ba17-50f5e95f3ca3-nextconference-site-webflow-io/assets/images/6864719e607124f04c0dea19_Frame_2013-6.png",
    title: "Sharing Knowledge",
    description: "This value encourages action, experimentation, and learning from real-world practice rather than relying solely on theory.",
  },
  {
    iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f7e57522-fe3b-4c10-ba17-50f5e95f3ca3-nextconference-site-webflow-io/assets/images/6864719ebe5f9b72fe4279bc_Frame_2014-5.png",
    title: "Build with Others",
    description: "This value encourages action, experimentation, and learning from real-world practice rather than relying solely on theory.",
  },
  {
    iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f7e57522-fe3b-4c10-ba17-50f5e95f3ca3-nextconference-site-webflow-io/assets/images/6864719e7b55dab3114d5ba3_Frame_2015-7.png",
    title: "Celebrate progress",
    description: "This value encourages action, experimentation, and learning from real-world practice rather than relying solely on theory.",
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
      type: 'spring',
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
            About Us
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-black text-background uppercase !leading-[1.05] mb-5 md:mb-7 break-words"
          >
            The No-Code Movement Local & Personal
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base md:text-lg lg:text-xl text-background/80 max-w-3xl mx-auto leading-relaxed"
          >
            No-code tools have opened doors to creators everywhere. But building is better together.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10"
        >
          {cardData.map((card, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { type: 'spring', stiffness: 400, damping: 15 } }}
              className="bg-card text-card-foreground rounded-3xl md:rounded-[32px] p-8 sm:p-10 md:p-12 lg:p-16 flex flex-col items-center text-center border-2 border-border shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="mb-8 md:mb-10 lg:mb-12">
                <Image
                  src={card.iconSrc}
                  alt={`${card.title} icon`}
                  width={100}
                  height={100}
                  className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28"
                />
              </div>
              <div className="flex flex-col items-center">
                <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-black text-card-foreground uppercase mb-4 md:mb-5 leading-tight">
                  {card.title}
                </h3>
                <p className="text-sm md:text-base lg:text-lg text-muted leading-relaxed max-w-md">
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