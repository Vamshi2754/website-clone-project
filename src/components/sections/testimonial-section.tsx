'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote: "I launched my MVP after one session — the energy here is incredible!",
    author: "-Youtubers of YoYo! Channel",
  },
  {
    quote: "I launched my MVP after one session — the energy here is incredible!",
    author: "~Youtubers of YoYo! Channel",
  },
  {
    quote: "I launched my MVP after one session — the energy here is incredible!",
    author: "~Youtubers of YoYo! Channel",
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
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
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
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const goToIndex = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section id="Testimonial" className="bg-background py-16 md:py-20 lg:py-[120px] overflow-hidden max-w-full">
      <div className="container mx-auto px-4 md:px-5 lg:px-[60px]">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-10 justify-center">
          
          <div className="lg:w-[768px] flex-shrink-0">
            <div className="bg-card rounded-[20px] md:rounded-[24px] overflow-hidden flex flex-col lg:flex-row h-full">
              <div className="relative w-full lg:w-1/2 h-64 sm:h-80 lg:h-auto">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f7e57522-fe3b-4c10-ba17-50f5e95f3ca3-nextconference-site-webflow-io/assets/images/685d12028bdd5b2c920f78b0_Meetup_20001-8.jpg"
                  alt="A smiling man with a beard and glasses, presumably a member of the conference"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="w-full lg:w-1/2 p-6 sm:p-8 md:p-12 flex flex-col">
                <p className="text-xs font-bold uppercase tracking-[0.1em] text-text-dark mb-3 md:mb-4">
                  TESTIMONIAL
                </p>
                <h3 className="font-display text-[32px] sm:text-[40px] md:text-[48px] text-secondary uppercase mb-4 md:mb-6 leading-none break-words">
                  What Members Love
                </h3>
                <div className="w-[60px] md:w-[80px] h-[3px] md:h-[4px] bg-primary mb-6 md:mb-8" />
                
                <div className="flex-grow flex flex-col justify-between">
                  <div className="relative overflow-hidden min-h-[180px] sm:min-h-[200px] md:min-h-[220px]">
                    <div
                      className="flex transition-transform duration-500 ease-out"
                      style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                    >
                      {testimonials.map((testimonial, index) => (
                        <div key={index} className="w-full flex-shrink-0 pr-4">
                          <blockquote className="space-y-3 md:space-y-4">
                            <p className="font-display text-[24px] sm:text-[28px] md:text-[32px] leading-[1.2] text-text-dark break-words">
                              {testimonial.quote}
                            </p>
                            <footer className="font-body text-sm md:text-base italic text-text-dark">
                              {testimonial.author}
                            </footer>
                          </blockquote>
                        </div>
                      ))}
                    </div>
                  </div>
      
                  <div className="flex items-center justify-between mt-auto pt-4">
                    <div className="flex gap-2">
                      {testimonials.map((_, index) => (
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

          <div className="lg:w-[592px] lg:max-w-[592px] flex-shrink-0">
            <div className="grid grid-cols-2 gap-6 sm:gap-8 md:gap-10 h-full">
              <div className="bg-card text-card-foreground rounded-[20px] md:rounded-[24px] p-6 md:p-8 flex flex-col items-center justify-center text-center aspect-square sm:aspect-auto">
                  <span className="font-display text-[48px] sm:text-[60px] md:text-[70px] lg:text-[80px] font-black text-secondary leading-none">100+</span>
                  <span className="text-[10px] sm:text-xs font-bold mt-2 uppercase tracking-[0.1em]">ACTIVE MEMBERS</span>
              </div>
              <div className="bg-card text-card-foreground rounded-[20px] md:rounded-[24px] p-6 md:p-8 flex flex-col items-center justify-center text-center aspect-square sm:aspect-auto">
                  <div className="flex flex-col items-center">
                      <span className="font-display text-[32px] sm:text-[38px] md:text-[44px] lg:text-[48px] font-black text-secondary leading-none">Beginner</span>
                      <span className="font-display text-[32px] sm:text-[38px] md:text-[44px] lg:text-[48px] font-black text-secondary leading-none">Pro</span>
                  </div>
                  <span className="text-[10px] sm:text-xs font-bold mt-2 uppercase tracking-[0.1em]">SKILL LEVELS</span>
              </div>
              <div className="bg-secondary text-secondary-foreground rounded-[20px] md:rounded-[24px] p-6 md:p-8 flex items-center justify-center text-center aspect-square sm:aspect-auto min-h-[160px] sm:min-h-[180px] md:min-h-[200px] lg:min-h-0">
                  <h4 className="font-display text-lg sm:text-xl md:text-2xl uppercase leading-tight break-words">REAL-TIME DEMOS &amp; CHALLENGE</h4>
              </div>
              <div className="bg-primary text-primary-foreground rounded-[20px] md:rounded-[24px] p-6 md:p-8 flex flex-col items-center justify-center text-center aspect-square sm:aspect-auto min-h-[160px] sm:min-h-[180px] md:min-h-[200px] lg:min-h-0">
                  <h4 className="font-display text-lg sm:text-xl md:text-2xl uppercase break-words">ACCESS TO</h4>
                  <h4 className="font-display text-lg sm:text-xl md:text-2xl uppercase break-words">EXE-RESOURCES</h4>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;