"use client";

import React, { useState, useEffect } from "react";
import { Logo } from "@/components/ui/Logo";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 60);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Collections", href: "#collections" },
        { name: "Innovation", href: "#innovation" },
        { name: "About", href: "#about" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                ? "bg-white/95 backdrop-blur-md shadow-lg shadow-black/10 py-3"
                : "bg-gradient-to-b from-black/60 to-transparent py-5"
                }`}
        >
            <div className="container mx-auto px-6 md:px-10 flex items-center justify-between">

                {/* Logo — always white on hero, dark when scrolled */}
                <LogoWithTheme scrolled={isScrolled} />

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`relative text-sm font-semibold tracking-wide transition-colors duration-200 group ${isScrolled
                                ? "text-[#373D48] hover:text-primary"
                                : "text-white hover:text-primary"
                                }`}
                        >
                            {link.name}
                            {/* Underline hover effect */}
                            <span className="absolute -bottom-0.5 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300" />
                        </a>
                    ))}

                    {/* CTA */}
                    <a
                        href="#contact"
                        className={`px-5 py-2.5 text-xs font-black tracking-widest uppercase transition-all duration-300 ${isScrolled
                            ? "bg-primary text-white hover:bg-primary/80"
                            : "border border-white/30 text-white hover:bg-primary hover:border-primary"
                            }`}
                    >
                        GET SAMPLES
                    </a>

                </div>

                <div className="md:hidden flex items-center gap-3">
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className={`p-2 ${isScrolled ? "text-[#373D48]" : "text-white"}`}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-md border-t border-gray-100 shadow-xl p-6 flex flex-col gap-5">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-base font-semibold text-[#373D48] border-b border-gray-100 pb-4 hover:text-primary transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="px-6 py-3 bg-primary text-white text-sm font-black uppercase tracking-widest text-center mt-2"
                    >
                        GET SAMPLES
                    </a>
                </div>
            )}
        </nav>
    );
};

/* Logo swaps colour based on scroll state */
function LogoWithTheme({ scrolled }: { scrolled: boolean }) {
    return (
        <div className="flex items-center gap-1">
            <span className={`text-2xl font-black tracking-tighter uppercase leading-none transition-colors duration-300 ${scrolled ? "text-[#373D48]" : "text-white"
                }`}>
                Loom
            </span>
            <svg
                width="30"
                height="30"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="translate-y-0.5"
            >
                <path d="M20 20L80 80" stroke="#FF4A2B" strokeWidth="12" strokeLinecap="round" />
                <path d="M80 20L20 80" stroke="#FF4A2B" strokeWidth="6" strokeDasharray="15 5" strokeLinecap="round" />
                <path d="M70 10L10 70" stroke="#FF4A2B" strokeWidth="4" strokeLinecap="round" opacity="0.6" />
            </svg>
        </div>
    );
}
