'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, Calendar, MapPin } from 'lucide-react';

const HeroSection = () => {
    return (
        <section className="relative overflow-hidden rounded-[20px] md:rounded-[32px] bg-background">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6">

                {/* Main Hero Content (Left/Top) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="col-span-1 lg:col-span-8 bg-primary rounded-[20px] md:rounded-[32px] p-6 sm:p-8 md:p-12 lg:p-16 text-primary-foreground relative overflow-hidden flex flex-col justify-between min-h-[500px] md:min-h-[600px]"
                >
                    {/* Subtle background pattern - not overwhelming */}
                    <div className="absolute inset-0 opacity-5">
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white rounded-full blur-[120px] -translate-y-1/3 translate-x-1/3"></div>
                    </div>

                    <div className="relative z-10 flex flex-col h-full justify-between">
                        <div className="mb-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                                className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-sm rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-white/20"
                            >
                                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                                Next Conference 2025
                            </motion.div>

                            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[72px] xl:text-[80px] font-black uppercase leading-[0.9] tracking-tight mb-6">
                                <span className="block">Unlock</span>
                                <span className="block">Possibility</span>
                                <span className="block">With No Code</span>
                            </h1>

                            <p className="font-body text-lg md:text-xl opacity-90 max-w-xl leading-relaxed">
                                Join the local hub for creators, entrepreneurs, and curious minds to explore, build, and grow without writing a single line of code.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                            <Link
                                href="#Schedule"
                                className="group flex items-center justify-center gap-3 bg-secondary text-white px-8 py-4 rounded-xl font-display font-bold uppercase tracking-wide hover:bg-secondary/90 transition-all hover:scale-105 hover:shadow-lg shadow-secondary/20"
                            >
                                Get Tickets
                                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </Link>
                            <Link
                                href="#About"
                                className="group flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-xl font-display font-bold uppercase tracking-wide hover:bg-white/20 transition-all"
                            >
                                Learn More
                            </Link>
                        </div>
                    </div>
                </motion.div>

                {/* Side Panel (Right/Bottom) */}
                <div className="col-span-1 lg:col-span-4 flex flex-col gap-4 md:gap-6">

                    {/* Date & Location Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="bg-card text-card-foreground p-6 md:p-8 rounded-[20px] md:rounded-[32px] shadow-lg flex-1 flex flex-col justify-center border border-border/50"
                    >
                        <div className="flex flex-col gap-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-primary/10 p-3 rounded-2xl text-primary">
                                    <Calendar className="w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="font-display text-xl font-black uppercase mb-1">July 12-14, 2025</h3>
                                    <p className="text-muted-foreground text-sm font-medium">09:00 AM - 06:00 PM</p>
                                </div>
                            </div>
                            <div className="w-full h-px bg-border/50"></div>
                            <div className="flex items-start gap-4">
                                <div className="bg-secondary/10 p-3 rounded-2xl text-secondary">
                                    <MapPin className="w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="font-display text-xl font-black uppercase mb-1">San Francisco</h3>
                                    <p className="text-muted-foreground text-sm font-medium">Moscone Center, CA</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Image Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="relative h-[250px] lg:h-full min-h-[250px] rounded-[20px] md:rounded-[32px] overflow-hidden group shadow-lg"
                    >
                        <Image
                            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f7e57522-fe3b-4c10-ba17-50f5e95f3ca3-nextconference-site-webflow-io/assets/images/6861fa40aa8539d3937cc0f1_MeetUp-9.png"
                            alt="Conference attendees"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute bottom-6 left-6 right-6 text-white">
                            <div className="flex items-center justify-between">
                                <p className="font-display font-bold uppercase tracking-wider text-sm">Community</p>
                                <div className="bg-white/20 backdrop-blur-md p-2 rounded-full">
                                    <ArrowUpRight className="w-4 h-4" />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default HeroSection;
