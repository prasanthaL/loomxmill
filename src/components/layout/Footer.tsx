"use client";

import React from "react";
import { Logo } from "@/components/ui/Logo";
import { Linkedin, Twitter, Instagram, ArrowRight, Phone, MessageCircle, Mail, MapPin } from "lucide-react";

const PHONE_NUMBER = "+94701884033";
const PHONE_DISPLAY = "+94 70 188 4033";
const WHATSAPP_URL = `https://wa.me/${PHONE_NUMBER.replace("+", "")}`;
const CALL_URL = `tel:${PHONE_NUMBER}`;

export const Footer = () => {
    return (
        <footer id="contact" className="bg-[#0d0e11] text-white pt-16 sm:pt-20 lg:pt-24 pb-10 border-t border-white/5">
            <div className="container mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 lg:gap-16 mb-14 sm:mb-20">

                {/* Brand Column */}
                <div className="flex flex-col gap-8">
                    <Logo className="mb-4" />
                    <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                        LoomX is at the forefront of industrial textile innovation. We engineered the fabrics of the future, today.
                    </p>
                    <div className="flex gap-4">
                        <button className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors hover:border-primary" aria-label="LinkedIn">
                            <Linkedin size={18} />
                        </button>
                        <button className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors hover:border-primary" aria-label="Twitter">
                            <Twitter size={18} />
                        </button>
                        <button className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors hover:border-primary" aria-label="Instagram">
                            <Instagram size={18} />
                        </button>
                    </div>
                </div>

                {/* Industries */}
                <div className="flex flex-col gap-6">
                    <h5 className="text-xs uppercase font-black tracking-widest text-primary">Industries</h5>
                    <ul className="flex flex-col gap-3 text-sm text-gray-400">
                        <li className="hover:text-white transition-colors cursor-pointer capitalize">Automotive</li>
                        <li className="hover:text-white transition-colors cursor-pointer capitalize">Aerospace</li>
                        <li className="hover:text-white transition-colors cursor-pointer capitalize">Fashion Technology</li>
                        <li className="hover:text-white transition-colors cursor-pointer capitalize">Civil Engineering</li>
                    </ul>
                </div>

                {/* Contact Us — with Phone/WhatsApp */}
                <div className="flex flex-col gap-6">
                    <h5 className="text-xs uppercase font-black tracking-widest text-primary">Contact Us</h5>
                    <ul className="flex flex-col gap-4 text-sm text-gray-400">
                        {/* Call */}
                        <li>
                            <a
                                href={CALL_URL}
                                className="flex items-center gap-3 group hover:text-white transition-colors"
                                id="footer-call-link"
                            >
                                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-colors">
                                    <Phone size={14} />
                                </span>
                                <div>
                                    <div className="text-[10px] uppercase tracking-widest text-gray-500 mb-0.5">Call Us</div>
                                    <div className="font-bold text-white">{PHONE_DISPLAY}</div>
                                </div>
                            </a>
                        </li>

                        {/* WhatsApp */}
                        <li>
                            <a
                                href={WHATSAPP_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 group hover:text-white transition-colors"
                                id="footer-whatsapp-link"
                            >
                                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#25D366] group-hover:border-[#25D366] transition-colors">
                                    <MessageCircle size={14} />
                                </span>
                                <div>
                                    <div className="text-[10px] uppercase tracking-widest text-gray-500 mb-0.5">WhatsApp</div>
                                    <div className="font-bold text-white">{PHONE_DISPLAY}</div>
                                </div>
                            </a>
                        </li>

                        {/* Email */}
                        <li>
                            <a href="mailto:info@loomx.com" className="flex items-center gap-3 group hover:text-white transition-colors">
                                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-colors">
                                    <Mail size={14} />
                                </span>
                                <div>
                                    <div className="text-[10px] uppercase tracking-widest text-gray-500 mb-0.5">Email</div>
                                    <div className="font-bold text-white">info@loomx.com</div>
                                </div>
                            </a>
                        </li>

                        {/* Location */}
                        <li className="flex items-center gap-3 text-gray-400">
                            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                                <MapPin size={14} />
                            </span>
                            <div>
                                <div className="text-[10px] uppercase tracking-widest text-gray-500 mb-0.5">Location</div>
                                <div className="font-bold text-white text-xs">Colombo, Sri Lanka</div>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div className="flex flex-col gap-6">
                    <h5 className="text-xs uppercase font-black tracking-widest text-primary">Newsletter</h5>
                    <p className="text-sm text-gray-400 leading-relaxed">
                        Get the latest on textile science and innovation.
                    </p>
                    <div className="relative">
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full bg-white/5 border border-white/10 p-3 pr-10 rounded-sm text-sm focus:outline-none focus:border-primary transition-colors"
                        />
                        <button className="absolute right-3 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors">
                            <ArrowRight size={18} />
                        </button>
                    </div>

                    {/* Quick contact CTA */}
                    {/* <div className="flex flex-col gap-3 pt-2">
                        <a
                            href={CALL_URL}
                            id="footer-call-cta"
                            className="flex items-center justify-center gap-2 py-3 bg-primary text-white text-xs font-black uppercase tracking-widest hover:bg-primary/80 transition-colors"
                        >
                            <Phone size={14} /> Call Now
                        </a>
                        <a
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            id="footer-whatsapp-cta"
                            className="flex items-center justify-center gap-2 py-3 bg-[#25D366] text-white text-xs font-black uppercase tracking-widest hover:bg-[#128C7E] transition-colors"
                        >
                            <MessageCircle size={14} /> WhatsApp Us
                        </a>
                    </div> */}
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-10 border-t border-white/5 pt-8 sm:pt-10 flex flex-col sm:flex-row justify-between items-center gap-5 sm:gap-6 text-center sm:text-left">
                <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">
                    &copy; 2026 LOOMX FABRICS INC. ALL RIGHTS RESERVED.
                </div>
                <div className="flex items-center gap-2 text-[11px] text-gray-500">
                    <Phone size={12} className="text-primary" />
                    <a href={CALL_URL} className="hover:text-white transition-colors font-bold">{PHONE_DISPLAY}</a>
                    <span className="w-px h-3 bg-white/10 mx-2" />
                    <MessageCircle size={12} className="text-[#25D366]" />
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors font-bold">WhatsApp</a>
                </div>
                <div className="flex gap-8 text-[10px] text-gray-500 uppercase tracking-widest font-bold">
                    <span className="hover:text-gray-300 cursor-pointer">Terms</span>
                    <span className="hover:text-gray-300 cursor-pointer">Sitemap</span>
                    <span className="hover:text-gray-300 cursor-pointer">Privacy</span>
                </div>
            </div>
        </footer>
    );
};
