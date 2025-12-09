"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full max-w-full overflow-hidden">
      <div className="bg-primary text-text-dark rounded-[16px] md:rounded-[24px] p-6 sm:p-8 md:p-12 lg:p-16 relative overflow-hidden">
        <div className="text-xs font-bold uppercase tracking-[0.1em] mb-6 md:mb-8 text-text-dark">
          WELCOME TO NEXTCONF
        </div>

        <div className="relative">
          {/* These are placeholder divs for the text reveal animation */}
          <div className="blocking-text-anim _01" />
          <div className="blocking-text-anim _02" />
          <div className="blocking-text-anim _03" />
          <h1 className="font-display text-[40px] sm:text-[55px] md:text-[70px] lg:text-[90px] xl:text-[100px] font-black leading-[0.9] -tracking-[0.02em] uppercase break-words">
            Unlock Possibility
            <br />
            with No Code
          </h1>
        </div>

        <p className="text-text-mid text-base md:text-lg mt-6 md:mt-8 max-w-xl">
          a local hub for creators, entrepreneurs, and curious minds to explore, build, and grow without writing a single line of code.
        </p>

        <div className="mt-12 md:mt-16 lg:mt-24 flex flex-col lg:flex-row gap-6 md:gap-8 lg:items-end">
          <div className="lg:flex-[1.3] relative pt-3 pr-3 md:pt-4 md:pr-4">
            <div className="absolute top-0 left-0 w-5 h-5 md:w-6 md:h-6 border-t-[3px] border-l-[3px] md:border-t-4 md:border-l-4 border-text-dark" />
            <div className="absolute bottom-0 right-0 w-5 h-5 md:w-6 md:h-6 border-b-[3px] border-r-[3px] md:border-b-4 md:border-r-4 border-text-dark" />

            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 h-full">
              <div className="bg-secondary text-white rounded-[16px] md:rounded-[24px] p-6 md:p-8 flex-1 flex flex-col">
                <h4 className="text-xs font-bold uppercase tracking-[0.1em] mb-4 md:mb-6 text-accent/80">
                  WHAT YOU GET
                </h4>
                <ul className="space-y-2 md:space-y-3">
                  <li className="flex items-center gap-2 md:gap-3">
                    <div className="w-[8px] h-[8px] bg-primary rounded-full flex-shrink-0" />
                    <span className="font-body text-sm md:text-base">
                      {"Learn \u00A0practical skill"}
                    </span>
                  </li>
                  <li className="flex items-center gap-2 md:gap-3">
                    <div className="w-[8px] h-[8px] bg-primary rounded-full flex-shrink-0" />
                    <span className="font-body text-sm md:text-base">
                      Meet like-minded people
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-secondary text-white rounded-[16px] md:rounded-[24px] p-6 md:p-8 flex-1 flex flex-col">
                <h4 className="text-xs font-bold uppercase tracking-[0.1em] mb-4 md:mb-6 text-accent/80">
                  WHO CAN JOIN
                </h4>
                <ul className="space-y-2 md:space-y-3">
                  <li className="flex items-center gap-2 md:gap-3">
                    <div className="w-[8px] h-[8px] bg-primary rounded-full flex-shrink-0" />
                    <span className="font-body text-sm md:text-base">Creators</span>
                  </li>
                  <li className="flex items-center gap-2 md:gap-3">
                    <div className="w-[8px] h-[8px] bg-primary rounded-full flex-shrink-0" />
                    <span className="font-body text-sm md:text-base">Entrepreneurs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:flex-1 relative pt-3 pl-3 md:pt-4 md:pl-4">
            <div className="absolute top-0 left-0 w-5 h-5 md:w-6 md:h-6 border-t-[3px] border-l-[3px] md:border-t-4 md:border-l-4 border-text-dark" />
            <div className="absolute bottom-0 right-0 w-5 h-5 md:w-6 md:h-6 border-b-[3px] border-r-[3px] md:border-b-4 md:border-r-4 border-text-dark" />

            <div className="relative w-full aspect-[4/3] group rounded-[16px] md:rounded-[24px] overflow-hidden">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f7e57522-fe3b-4c10-ba17-50f5e95f3ca3-nextconference-site-webflow-io/assets/images/685cf1d4f3d741f27c335d07_Meetup_2001-3.jpg"
                alt="People collaborating at a meetup"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <a
                href="#"
                className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-[16px] md:rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f7e57522-fe3b-4c10-ba17-50f5e95f3ca3-nextconference-site-webflow-io/assets/icons/6864761cc99b915dfa975be1_play-1.png"
                  alt="Play button"
                  width={80}
                  height={80}
                  className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}