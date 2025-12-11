"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Using a separate component for the arrow icon for clarity.
const ArrowIcon = () => {
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

const Navigation: React.FC<NavigationProps> = ({ onToggleSidebar }) => {
    const navLinks = [
        { name: "About", href: "#About" },
        { name: "Products", href: "#Products" },
        { name: "Developers", href: "#Schedule" },
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

            if (onToggleSidebar && window.innerWidth < 1024) {
                setTimeout(() => onToggleSidebar(), 300);
            }
        }
    };

    return (
        <aside className="bg-primary text-white font-display rounded-[16px] md:rounded-[20px] shadow-xl border border-white/10">
            <div className="flex h-full min-h-[400px] sm:min-h-[450px] md:min-h-[514px] flex-col p-6 sm:p-7 md:p-[30px]">
                {/* Top part: Logo and Hamburger for mobile */}
                <div className="flex items-start justify-between">
                    <Link href="/" className="block h-20 w-20 sm:h-22 sm:w-22 md:h-24 md:w-24 group">
                        <div className="w-full h-full bg-white rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 drop-shadow-lg">
                            <span className="text-primary font-bold text-2xl">D</span>
                        </div>
                    </Link>
                    {onToggleSidebar && (
                        <button
                            onClick={onToggleSidebar}
                            aria-label="Toggle menu"
                            className="flex h-4 w-6 sm:h-5 sm:w-[30px] cursor-pointer flex-col justify-between lg:hidden group"
                        >
                            <span className="h-[2px] w-full bg-white transition-transform duration-300 group-hover:translate-x-1"></span>
                            <span className="h-[2px] w-full bg-white transition-opacity duration-300 group-hover:opacity-50"></span>
                            <span className="h-[2px] w-full bg-white transition-transform duration-300 group-hover:-translate-x-1"></span>
                        </button>
                    )}
                </div>

                {/* Bottom part: Nav links and CTA Button, spaced vertically */}
                <div className="mt-8 sm:mt-10 flex flex-grow flex-col justify-between">
                    <nav className="flex flex-col space-y-1">
                        {navLinks.map((link, index) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                style={{ animationDelay: `${index * 0.1}s` }}
                                className="pt-[5px] pb-[10px] text-[18px] sm:text-[20px] uppercase tracking-wider hover:underline hover:translate-x-2 transition-all cursor-pointer relative group animate-[slide-up_0.5s_ease-out_both]"
                            >
                                <span className="relative z-10">{link.name}</span>
                                <span className="absolute left-0 bottom-2 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        ))}
                    </nav>

                    <a
                        href="#Schedule"
                        onClick={(e) => handleNavClick(e, '#Schedule')}
                        className="group flex items-center justify-between rounded-lg bg-secondary px-6 sm:px-[30px] py-4 sm:py-[20px] text-secondary-foreground transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer relative overflow-hidden"
                    >
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></span>
                        <span className="text-sm sm:text-base uppercase tracking-wider font-bold relative z-10">
                            Explore Products
                        </span>
                        <ArrowIcon />
                    </a>
                </div>
            </div>
        </aside>
    );
};

export default Navigation;