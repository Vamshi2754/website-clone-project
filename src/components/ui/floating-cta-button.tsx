import Image from 'next/image';

/**
 * A floating Call-to-Action button that is fixed to the bottom-right of the screen.
 * It features a pulsing animation for attention, a hover scale effect, and links to an external site.
 * The component is responsive, adjusting its size for different screen widths.
 */
const FloatingCtaButton = () => {
  return (
    <a
      href="http://8am.design"
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-4 right-4 z-50 sm:bottom-5 sm:right-5 lg:bottom-10 lg:right-10"
      aria-label="More Templates from 8am.design"
    >
      <div className="relative">
        {/* 
          The pulsing halo effect, acting as the circular accent element.
          Tailwind's `animate-ping` creates a ripple effect that expands and fades,
          drawing user attention to the button.
        */}
        <div className="absolute h-full w-full animate-ping rounded-full bg-secondary opacity-75"></div>

        {/* 
          The main button structure, containing the icon and text.
          It is set to relative to appear above the pulsing halo.
          The hover effect is triggered by the parent `<a>` tag's group class.
        */}
        <div className="relative flex items-center gap-1.5 sm:gap-2 rounded-full bg-secondary px-3 py-2 sm:px-4 sm:py-3 lg:px-6 lg:py-4 text-white shadow-lg transition-transform duration-300 ease-in-out group-hover:scale-105">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f7e57522-fe3b-4c10-ba17-50f5e95f3ca3-nextconference-site-webflow-io/assets/icons/6879bd133476a9e0908f7df6_Frame_206_20Tans-2.png"
            alt="Infinity icon"
            width={24}
            height={24}
            className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6"
          />
          <span className="font-display text-[10px] sm:text-xs lg:text-sm font-bold uppercase tracking-wider">
            More Template
          </span>
        </div>
      </div>
    </a>
  );
};

export default FloatingCtaButton;