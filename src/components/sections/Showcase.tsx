"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const categories = [
    { title: "Commercial Grade", desc: "High-rub count textures for furniture and architectural installations.", accent: "bg-primary" },
    { title: "Premium Plush", desc: "Redefining luxury fashion with ultra-soft, high-pile precision.", accent: "bg-secondary" },
    { title: "Eco-Boa Fibers", desc: "Sustainable production utilizing recycled polymers for the conscious creator.", accent: "bg-green-600" },
    { title: "Technical Textures", desc: "Specialized backings for ease of tailoring and industrial application.", accent: "bg-blue-600" },
];

export const Showcase = () => {
    return (
        <section id="collections" className="py-16 sm:py-20 lg:py-24 bg-[#f8f9fa] dark:bg-[#0d0e11] relative overflow-hidden">
            {/* Soft glow bg */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative">

                {/* Header */}
                <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-10 sm:mb-14 gap-6 md:gap-10">
                    <div className="max-w-xl">
                        <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-3 block">Materials Library</span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-secondary dark:text-white leading-tight uppercase">
                            Engineered <br className="hidden sm:block" />
                            <span className="text-primary">Comfort</span>
                        </h2>
                    </div>
                    <p className="max-w-md text-sm sm:text-base text-gray-500 dark:text-gray-400 leading-relaxed md:pb-2">
                        Our specialized weaving technology allows us to create the deepest, most consistent Play Boa matrices in the market.
                    </p>
                </div>

                {/* Category cards: 1 col → 2 col (sm) → 4 col (lg) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 mb-8 sm:mb-12 lg:mb-16">
                    {categories.map((cat, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -8 }}
                            className="group relative p-6 sm:p-7 bg-white/80 dark:bg-white/5 border border-black/5 dark:border-white/5
                         rounded-2xl flex flex-col gap-4 min-h-[200px] sm:h-60 hover:border-primary/30
                         transition-all duration-300 cursor-pointer shadow-sm hover:shadow-lg dark:hover:shadow-primary/5"
                        >
                            <div className={`w-10 h-[3px] ${cat.accent} transition-all duration-500 group-hover:w-full rounded-full`} />
                            <h3 className="text-lg sm:text-xl font-black text-secondary dark:text-white uppercase">{cat.title}</h3>
                            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed flex-1">{cat.desc}</p>
                            <div className="flex items-center gap-1.5 text-primary font-bold text-xs uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                View Collection <ArrowUpRight size={13} />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* ── Texture Series (New Section) ── */}
                <div id="texture-series" className="mb-12 sm:mb-16">
                    <div className="flex items-center gap-4 mb-8 sm:mb-10">
                        <div className="h-px bg-black/10 dark:bg-white/10 flex-1"></div>
                        <h3 className="text-secondary dark:text-white/60 text-[10px] sm:text-xs font-black uppercase tracking-[0.4em]">
                            TEXTURE SERIES 01 / SIGNATURE HIGH-PILE
                        </h3>
                        <div className="h-px bg-black/10 dark:bg-white/10 flex-1"></div>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                        {[
                            { name: "Crimson Silk-Fur", img: "fabric_collection_1.png", tag: "NEW" },
                            { name: "Pearl Cloud", img: "fabric_collection_2.png", tag: "PREVIEW" },
                            { name: "Saffron Shag", img: "fabric_collection_3.png", tag: "" },
                            { name: "Vanilla Plush", img: "fabric_collection_4.png", tag: "" },
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="group relative aspect-[4/5] rounded-xl overflow-hidden cursor-pointer"
                            >
                                <Image
                                    src={`/assets/images/${item.img}`}
                                    alt={item.name}
                                    fill
                                    className="object-cover transition-all duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-4">
                                    {item.tag && (
                                        <span className="absolute top-3 right-3 bg-primary text-white text-[9px] font-black px-1.5 py-0.5 rounded-sm">
                                            {item.tag}
                                        </span>
                                    )}
                                    <p className="text-white text-[10px] sm:text-xs font-black uppercase tracking-widest translate-y-0 transition-transform duration-300">
                                        {item.name}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Two-panel image grid: stacked on mobile, side-by-side on md+ */}
                {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">

               
                    <div className="relative group h-[300px] sm:h-[380px] lg:h-[420px] rounded-2xl overflow-hidden shadow-xl">
                        <Image
                            src="/assets/images/fabric_swatches.jpg"
                            alt="Fabric Swatches"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-6 sm:p-8">
                            <div>
                                <h4 className="text-xl sm:text-2xl font-black text-white mb-2 uppercase tracking-tight">
                                    Colour Collection
                                </h4>
                                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5 max-w-xs">
                                    An extensive palette of premium swatch samples for every industry.
                                </p>
                                <button className="px-5 sm:px-6 py-2.5 bg-primary text-white font-bold uppercase text-xs hover:scale-105 transition-all shadow-xl shadow-primary/20">
                                    Browse Swatches
                                </button>
                            </div>
                        </div>
                    </div>

             
                    <div className="relative group h-[300px] sm:h-[380px] lg:h-[420px] rounded-2xl overflow-hidden shadow-xl">
                        <Image
                            src="/assets/images/fabric_stack.jpg"
                            alt="Stacked Fabric Bolts"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-6 sm:p-8">
                            <div>
                                <h4 className="text-xl sm:text-2xl font-black text-white mb-2 uppercase tracking-tight">
                                    The LoomX Foundry
                                </h4>
                                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5 max-w-xs">
                                    Every thread tested in our high-stress labs — built for runways and industrial environments alike.
                                </p>
                                <button className="px-5 sm:px-6 py-2.5 bg-white text-black font-bold uppercase text-xs hover:bg-primary hover:text-white transition-colors shadow-xl">
                                    Request Raw Samples
                                </button>
                            </div>
                        </div>
              
                        <div className="absolute top-5 right-5 sm:top-6 sm:right-6 w-16 h-16 sm:w-20 sm:h-20 bg-primary text-white p-2 rounded-full flex flex-col items-center justify-center text-center shadow-2xl">
                            <span className="text-[8px] sm:text-[9px] uppercase font-bold tracking-tighter leading-none">PREMIUM</span>
                            <span className="text-sm sm:text-base font-black leading-none mt-0.5">TESTED</span>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    );
};
