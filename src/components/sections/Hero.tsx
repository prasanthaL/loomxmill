"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export const Hero = () => {
    return (
        <section className="relative h-screen w-full flex items-center overflow-hidden bg-black">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/images/hero_fabric.png"
                    alt="Premium Fabric Texture"
                    fill
                    className="object-cover opacity-60 scale-105"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between">
                <div className="max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-6">
                            Industrial Excellence
                        </div>
                        <h1 className="text-5xl md:text-8xl font-black text-white leading-none tracking-tight mb-6">
                            REDEFINING <span className="text-primary italic">TEXTURE</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-lg">
                            Engineered fibers for the next generation of performance fabrics.
                            Merging traditional craftsmanship with cutting-edge textile science.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="px-8 py-4 bg-primary text-white font-bold rounded-sm hover:translate-y-[-2px] hover:shadow-2xl hover:shadow-primary/30 transition-all flex items-center justify-center gap-2 group">
                                EXPLORE COLLECTIONS
                                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="px-8 py-4 border border-white/20 text-white font-bold rounded-sm hover:bg-white/5 transition-colors">
                                VIEW TECHNOLOGY
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* Floating Accent Text */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 0.4, x: 0 }}
                    transition={{ delay: 0.5, duration: 1.2 }}
                    className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 rotate-90 origin-right text-[120px] font-black text-white/10 pointer-events-none select-none tracking-widest"
                >
                    LOOMX
                </motion.div>
            </div>

            {/* Stats Overlay */}
            {/* <div className="absolute bottom-10 left-0 right-0 z-10 hidden md:block">
                <div className="container mx-auto px-6 flex items-center gap-12 text-white/60">
                    <div className="flex flex-col">
                        <span className="text-primary text-2xl font-black">1.2B+</span>
                        <span className="text-[10px] uppercase font-bold tracking-widest">METERS PRODUCED</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-primary text-2xl font-black">84</span>
                        <span className="text-[10px] uppercase font-bold tracking-widest">GLOBAL PATENTS</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-primary text-2xl font-black">2026</span>
                        <span className="text-[10px] uppercase font-bold tracking-widest">ECO-FIBER SERIES</span>
                    </div>
                </div>
            </div> */}
        </section>
    );
};
