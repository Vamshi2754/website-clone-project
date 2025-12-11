'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const useCases = [
  {
    quote: "From NFT marketplaces to payments rails — our products work in real markets, not just demos.",
    author: "Real-world Integration",
  },
  {
    quote: "AI helpers that actually help. Content personalization that drives engagement.",
    author: "Practical AI Solutions",
  },
  {
    quote: "Scalable dApps without the complexity. Built for messy, real-world deployment.",
    author: "Production Ready",
  },
];

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % useCases.length);
    }, 3000);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const handleInteraction = (action: () => void) => {
    action();
    resetTimer();
  };

  const goToPrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + useCases.length) % useCases.length);
  };

  const goToNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % useCases.length);
  };

  const goToIndex = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section id="Testimonial" className="bg-background py-16 md:py-20 lg:py-[120px] w-full">
      <div className="w-full max-w-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col xl:flex-row gap-8 md:gap-10">
          
          <div className="flex-1 max-w-none">
            <div className="bg-card rounded-[20px] md:rounded-[24px] overflow-hidden flex flex-col lg:flex-row h-full">
              <div className="relative w-full lg:w-1/2 h-64 sm:h-80 lg:h-auto">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f7e57522-fe3b-4c10-ba17-50f5e95f3ca3-nextconference-site-webflow-io/assets/images/685d12028bdd5b2c920f78b0_Meetup_20001-8.jpg"
                  alt="Diigoo team members collaborating on blockchain and AI solutions"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top"
                />
              </div>
              <div className="w-full lg:w-1/2 p-6 sm:p-8 md:p-12 flex flex-col">
                <p className="text-xs font-bold uppercase tracking-[0.1em] text-text-dark mb-3 md:mb-4">
                  REAL-WORLD USE
                </p>
                <h3 className="font-display text-[28px] sm:text-[36px] md:text-[42px] text-secondary uppercase mb-4 md:mb-6 leading-none break-words">
                  Practical by Default
                </h3>
                <div className="w-[60px] md:w-[80px] h-[3px] md:h-[4px] bg-primary mb-6 md:mb-8" />
                
                <div className="flex-grow flex flex-col justify-between">
                  <div className="relative overflow-hidden min-h-[180px] sm:min-h-[200px] md:min-h-[220px]">
                    <div
                      className="flex transition-transform duration-500 ease-out"
                      style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                    >
                      {useCases.map((useCase, index) => (
                        <div key={index} className="w-full flex-shrink-0 pr-4">
                          <blockquote className="space-y-3 md:space-y-4">
                            <p className="font-display text-[20px] sm:text-[24px] md:text-[28px] leading-[1.2] text-text-dark break-words">
                              {useCase.quote}
                            </p>
                            <footer className="font-body text-sm md:text-base italic text-text-dark">
                              {useCase.author}
                            </footer>
                          </blockquote>
                        </div>
                      ))}
                    </div>
                  </div>
      
                  <div className="flex items-center justify-between mt-auto pt-4">
                    <div className="flex gap-2">
                      {useCases.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => handleInteraction(() => goToIndex(index))}
                          className={`w-2.5 h-2.5 rounded-full transition-colors ${
                            activeIndex === index ? 'bg-primary' : 'bg-primary/40'
                          }`}
                          aria-label={`Go to slide ${index + 1}`}
                        />
                      ))}
                    </div>
                    <div className="flex gap-1" >
                      <button onClick={() => handleInteraction(goToPrev)} aria-label="Previous testimonial" className="p-2 text-text-dark/50 hover:text-text-dark">
                        <ChevronLeft size={20} className="md:w-6 md:h-6" />
                      </button>
                      <button onClick={() => handleInteraction(goToNext)} aria-label="Next testimonial" className="p-2 text-text-dark/50 hover:text-text-dark">
                        <ChevronRight size={20} className="md:w-6 md:h-6" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 max-w-none xl:max-w-md">
            <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 h-full">
              <div className="bg-card text-card-foreground rounded-[20px] md:rounded-[24px] p-4 md:p-6 flex flex-col items-center justify-center text-center aspect-square">
                  <span className="font-display text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-black text-secondary leading-none">NFT</span>
                  <span className="text-[10px] sm:text-xs font-bold mt-2 uppercase tracking-[0.1em]">MARKETPLACES</span>
              </div>
              <div className="bg-card text-card-foreground rounded-[20px] md:rounded-[24px] p-4 md:p-6 flex flex-col items-center justify-center text-center aspect-square">
                  <div className="flex flex-col items-center">
                      <span className="font-display text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-black text-secondary leading-none">Payment</span>
                      <span className="font-display text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-black text-secondary leading-none">Rails</span>
                  </div>
                  <span className="text-[10px] sm:text-xs font-bold mt-2 uppercase tracking-[0.1em]">INFRASTRUCTURE</span>
              </div>
              <div className="bg-secondary text-secondary-foreground rounded-[20px] md:rounded-[24px] p-4 md:p-6 flex items-center justify-center text-center aspect-square">
                  <h4 className="font-display text-sm sm:text-base md:text-lg lg:text-xl uppercase leading-tight break-words">AI HELPERS &amp; PERSONALIZATION</h4>
              </div>
              <div className="bg-primary text-primary-foreground rounded-[20px] md:rounded-[24px] p-4 md:p-6 flex flex-col items-center justify-center text-center aspect-square">
                  <h4 className="font-display text-sm sm:text-base md:text-lg lg:text-xl uppercase break-words">SCALABLE</h4>
                  <h4 className="font-display text-sm sm:text-base md:text-lg lg:text-xl uppercase break-words">dAPPS</h4>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;