"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Using a separate component for the arrow icon for clarity.
const ArrowIcon = () => {
  // This component recreates the visual of the three-part arrow icon
  // based on the original design's structure and computed styles.
  // The hover effect is controlled by the parent element with the 'group' class.
  return (
    <div className="relative h-[20px] w-[20px] sm:h-[22px] sm:w-[22px] md:h-[25px] md:w-[25px] text-primary-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
      <div
        style={{ height: '33px' }}
        className="absolute left-[11.5px] top-[-4px] w-[2px] -rotate-45 bg-current"
      />
      <div className="absolute right-0 top-[1px] h-[2px] w-[17.5px] bg-current" />
      <div className="absolute bottom-0 right-0 h-[17.5px] w-[2px] bg-current" />
    </div>
  );
};

interface NavigationProps {
  onToggleSidebar?: () => void;
}

// The main Navigation component, representing the fixed side navigation bar.
const Navigation: React.FC<NavigationProps> = ({ onToggleSidebar }) => {
    const navLinks = [
        { name: "About", href: "#About" },
        { name: "Events", href: "#Schedule" },
        { name: "Testimonial", href: "#Testimonial" },
        { name: "Contact", href: "#CTA" },
    ];

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const contentPanel = document.querySelector('.content-panel');
        const targetId = href.replace('#', '');
        const targetElement = document.getElementById(targetId);
        
        if (contentPanel && targetElement) {
            const contentPanelRect = contentPanel.getBoundingClientRect();
            const targetRect = targetElement.getBoundingClientRect();
            const scrollTop = contentPanel.scrollTop;
            const offset = targetRect.top - contentPanelRect.top + scrollTop;
            
            contentPanel.scrollTo({
                top: offset - 20,
                behavior: 'smooth'
            });

            // Close mobile sidebar after navigation
            if (onToggleSidebar && window.innerWidth < 1024) {
                setTimeout(() => onToggleSidebar(), 300);
            }
        }
    };

    return (
        <aside className="bg-secondary text-white font-display rounded-[16px] md:rounded-[20px]">
            <div className="flex h-full min-h-[400px] sm:min-h-[450px] md:min-h-[514px] flex-col p-6 sm:p-7 md:p-[30px]">
                {/* Top part: Logo and Hamburger for mobile */}
                <div className="flex items-start justify-between">
                    <Link href="/" className="block h-20 w-20 sm:h-22 sm:w-22 md:h-24 md:w-24">
                        <Image
                            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f7e57522-fe3b-4c10-ba17-50f5e95f3ca3-nextconference-site-webflow-io/assets/images/686475450d59d5c9048eb90f_logo-1.png"
                            alt="Nextconf Logo"
                            width={96}
                            height={96}
                            className="transition-transform duration-300 hover:scale-105"
                        />
                    </Link>
                    <button 
                        onClick={onToggleSidebar}
                        aria-label="Toggle menu" 
                        className="flex h-4 w-6 sm:h-5 sm:w-[30px] cursor-pointer flex-col justify-between lg:hidden"
                    >
                        <span className="h-[2px] w-full bg-white"></span>
                        <span className="h-[2px] w-full bg-white"></span>
                        <span className="h-[2px] w-full bg-white"></span>
                    </button>
                </div>

                {/* Bottom part: Nav links and CTA Button, spaced vertically */}
                <div className="mt-8 sm:mt-10 flex flex-grow flex-col justify-between">
                    <nav className="flex flex-col">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className="pt-[5px] pb-[10px] text-[18px] sm:text-[20px] uppercase tracking-wider hover:underline transition-all cursor-pointer"
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    <a
                        href="#Schedule"
                        onClick={(e) => handleNavClick(e, '#Schedule')}
                        className="group flex items-center justify-between rounded-lg bg-primary px-6 sm:px-[30px] py-4 sm:py-[20px] text-primary-foreground transition-transform duration-300 hover:scale-105 cursor-pointer"
                    >
                        <span className="text-sm sm:text-base uppercase tracking-wider">
                            Join Next Meetup
                        </span>
                        <ArrowIcon />
                    </a>
                </div>
            </div>
        </aside>
    );
};

export default Navigation;