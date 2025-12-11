'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const CtaSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 20;
    const y = (e.clientY - rect.top - rect.height / 2) / 20;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <section id="CTA" className="bg-foreground py-16 md:py-20 lg:py-[120px] overflow-hidden max-w-full relative">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl animate-[float_10s_ease-in-out_infinite_reverse]" />
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 xl:gap-20 items-center">
          
          {/* Left Block: The "Cube" */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="[perspective:1200px] flex items-center justify-center order-2 lg:order-1"
          >
            <motion.div 
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              animate={{
                rotateX: mousePosition.y,
                rotateY: mousePosition.x,
              }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="group bg-gradient-to-br from-primary via-primary to-[#0a4dd6] text-primary-foreground p-10 sm:p-12 md:p-16 lg:p-20 rounded-3xl md:rounded-[40px] w-full max-w-xl mx-auto aspect-square flex flex-col justify-center items-center text-center transition-all duration-700 ease-out shadow-2xl relative overflow-hidden
                         lg:[transform:rotateX(12deg)_rotateY(-15deg)_rotateZ(2deg)] 
                         hover:[transform:rotateX(0deg)_rotateY(0deg)_rotateZ(0deg)_scale(1.05)]
                         hover:shadow-[0_20px_60px_rgba(9,63,180,0.4)]"
            >
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Floating particles effect */}
              <div className="absolute top-10 left-10 w-2 h-2 bg-white rounded-full animate-[float_3s_ease-in-out_infinite]"></div>
              <div className="absolute top-20 right-20 w-3 h-3 bg-white/50 rounded-full animate-[float_4s_ease-in-out_infinite]"></div>
              <div className="absolute bottom-20 left-20 w-2 h-2 bg-white/70 rounded-full animate-[float_5s_ease-in-out_infinite]"></div>

              <motion.h2 
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="font-display uppercase font-black text-[clamp(2.5rem,7vw,4.5rem)] leading-[0.9] break-words mb-4 md:mb-6 relative z-10 drop-shadow-lg"
              >
                Build the Ecosystem
              </motion.h2>
              <motion.p 
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="font-display uppercase font-black text-[clamp(1.5rem,4vw,2.5rem)] leading-tight opacity-90 relative z-10"
              >
                Start Building Today!
              </motion.p>

              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
            </motion.div>
          </motion.div>
          
          {/* Right Block: The Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="w-full order-1 lg:order-2"
          >
            <motion.div 
              whileHover={{ scale: 1.03, rotate: 2 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative w-full aspect-square max-w-xl mx-auto lg:max-w-none rounded-3xl md:rounded-[40px] overflow-hidden shadow-2xl group"
            >
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f7e57522-fe3b-4c10-ba17-50f5e95f3ca3-nextconference-site-webflow-io/assets/images/6861fa40aa8539d3937cc0f1_MeetUp-9.png"
                alt="Diigoo developers building the future of AI and blockchain technology in India"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              {/* Overlay gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default CtaSection;