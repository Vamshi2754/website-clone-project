'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const SideCtaCard = () => {
  return (
    <Link
      href="#Schedule"
      className="group block overflow-hidden rounded-[16px] md:rounded-[20px] transition-all duration-300 ease-out hover:scale-[1.03] shadow-xl hover:shadow-2xl"
    >
      <div className="relative overflow-hidden">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f7e57522-fe3b-4c10-ba17-50f5e95f3ca3-nextconference-site-webflow-io/assets/images/684a7c095f79af2865095cc0_image-2.png"
          alt="Diigoo community members collaborating on blockchain and AI projects"
          width={448}
          height={313}
          priority
          sizes="(max-width: 1024px) 0px, 280px"
          className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent group-hover:from-black/70 transition-colors duration-300" />

        {/* Animated overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
      </div>
      <div className="bg-secondary p-10 sm:p-12 md:p-[60px] relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-2xl"></div>
        </div>

        <div className="flex items-center justify-between relative z-10">
          <span className="font-display text-xl sm:text-2xl uppercase text-white tracking-wider group-hover:tracking-widest transition-all duration-300">
            EXPLORE PRODUCTS
          </span>
          <motion.div
            whileHover={{ scale: 1.2, rotate: 45 }}
            transition={{ type: "spring", stiffness: 400 }}
            className="transform transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-1"
          >
            <ArrowUpRight className="h-[22px] w-[22px] sm:h-[25px] sm:w-[25px] text-white drop-shadow-lg" strokeWidth={2.5} />
          </motion.div>
        </div>
      </div>
    </Link>
  );
};

export default SideCtaCard;