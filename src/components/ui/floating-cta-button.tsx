'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

/**
 * A floating Call-to-Action button that is fixed to the bottom-right of the screen.
 * It features a pulsing animation for attention, a hover scale effect, and links to an external site.
 * The component is responsive, adjusting its size for different screen widths.
 */
const FloatingCtaButton = () => {
  return (
    <motion.a
      href="/developers"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="group fixed bottom-4 right-4 z-50 sm:bottom-5 sm:right-5 lg:bottom-10 lg:right-10"
      aria-label="Start Building with Diigoo"
    >
      <div className="relative">
        {/* Multiple pulsing rings for enhanced effect */}
        <div className="absolute h-full w-full animate-ping rounded-full bg-secondary opacity-75"></div>
        <div className="absolute h-full w-full animate-ping rounded-full bg-secondary opacity-50 animation-delay-150"></div>

        {/* Main button with gradient */}
        <motion.div 
          className="relative flex items-center gap-1.5 sm:gap-2 rounded-full bg-gradient-to-r from-secondary to-[#ff4500] px-3 py-2 sm:px-4 sm:py-3 lg:px-6 lg:py-4 text-white shadow-2xl transition-all duration-300 ease-in-out group-hover:shadow-[0_0_30px_rgba(237,53,0,0.6)] overflow-hidden"
        >
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
          
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f7e57522-fe3b-4c10-ba17-50f5e95f3ca3-nextconference-site-webflow-io/assets/icons/6879bd133476a9e0908f7df6_Frame_206_20Tans-2.png"
              alt="Infinity icon"
              width={24}
              height={24}
              className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 relative z-10"
            />
          </motion.div>
          <span className="font-display text-[10px] sm:text-xs lg:text-sm font-bold uppercase tracking-wider relative z-10 group-hover:text-white transition-colors">
            Start Building
          </span>
        </motion.div>
      </div>
    </motion.a>
  );
};

export default FloatingCtaButton;