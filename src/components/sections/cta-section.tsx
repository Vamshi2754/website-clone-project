import React from 'react';
import Image from 'next/image';

const CtaSection = () => {
  return (
    <section id="CTA" className="bg-foreground py-16 md:py-20 lg:py-[120px] overflow-hidden max-w-full">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 xl:gap-20 items-center">
          
          {/* Left Block: The "Cube" */}
          <div className="[perspective:1200px] flex items-center justify-center order-2 lg:order-1">
            <div 
              className="group bg-primary text-primary-foreground p-10 sm:p-12 md:p-16 lg:p-20 rounded-3xl md:rounded-[40px] w-full max-w-xl mx-auto aspect-square flex flex-col justify-center items-center text-center transition-all duration-700 ease-out shadow-2xl
                         lg:[transform:rotateX(12deg)_rotateY(-15deg)_rotateZ(2deg)] 
                         hover:[transform:rotateX(0deg)_rotateY(0deg)_rotateZ(0deg)_scale(1.03)]"
            >
              <h2 className="font-display uppercase font-black text-[clamp(2.5rem,7vw,4.5rem)] leading-[0.9] break-words mb-4 md:mb-6">
                Join the Movement
              </h2>
              <p className="font-display uppercase font-black text-[clamp(1.5rem,4vw,2.5rem)] leading-tight opacity-90">
                It's Free to Start!
              </p>
            </div>
          </div>
          
          {/* Right Block: The Image */}
          <div className="w-full order-1 lg:order-2">
            <div className="relative w-full aspect-square max-w-xl mx-auto lg:max-w-none rounded-3xl md:rounded-[40px] overflow-hidden shadow-2xl">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f7e57522-fe3b-4c10-ba17-50f5e95f3ca3-nextconference-site-webflow-io/assets/images/6861fa40aa8539d3937cc0f1_MeetUp-9.png"
                alt="A group of people collaborating in a modern workspace during a meetup."
                fill
                className="object-cover transition-transform duration-500 ease-out hover:scale-105"
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default CtaSection;