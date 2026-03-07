"use client";

import React, { useState } from "react";
import { Phone, MessageCircle, X } from "lucide-react";

const PHONE_NUMBER = "+94701884033";
const PHONE_DISPLAY = "+94 70 188 4033";
const WHATSAPP_URL = `https://wa.me/${PHONE_NUMBER.replace("+", "")}`;
const CALL_URL = `tel:${PHONE_NUMBER}`;

export const FloatingContact = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

            {/* Expanded panel */}
            {expanded && (
                <div className="flex flex-col gap-3 items-end animate-in slide-in-from-bottom-4 duration-300">
                    {/* Label */}
                    {/* <div className="bg-[#0d0e11] border border-white/10 rounded-full px-4 py-1.5 text-[11px] text-gray-400 font-semibold tracking-wide whitespace-nowrap">
                        📞 {PHONE_DISPLAY}
                    </div> */}

                    {/* Call button */}
                    <a
                        href={CALL_URL}
                        id="floating-call-btn"
                        className="flex items-center gap-2.5 px-5 py-3 bg-[#373D48] hover:bg-primary text-white text-sm font-black uppercase tracking-widest rounded-full shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
                    >
                        <Phone size={16} />
                        Call Us
                    </a>

                    {/* WhatsApp button */}
                    <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        id="floating-whatsapp-btn"
                        className="flex items-center gap-2.5 px-5 py-3 bg-[#25D366] hover:bg-[#128C7E] text-white text-sm font-black uppercase tracking-widest rounded-full shadow-xl shadow-[#25D366]/20 hover:shadow-[#25D366]/40 transition-all duration-300 hover:scale-105"
                    >
                        <MessageCircle size={16} />
                        WhatsApp
                    </a>
                </div>
            )}

            {/* Floating toggle button */}
            <button
                onClick={() => setExpanded(!expanded)}
                id="floating-contact-toggle"
                aria-label="Contact us"
                className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 ${expanded
                        ? "bg-[#373D48] rotate-0"
                        : "bg-primary shadow-primary/40 animate-pulse-slow"
                    }`}
                style={{
                    animation: expanded ? "none" : "pulse-glow 2.5s infinite",
                }}
            >
                {expanded ? (
                    <X size={22} className="text-white" />
                ) : (
                    <MessageCircle size={22} className="text-white" />
                )}
            </button>

            {/* Pulse ring animation */}
            {!expanded && (
                <style>{`
          @keyframes pulse-glow {
            0%, 100% { box-shadow: 0 0 0 0 rgba(255,74,43,0.6); }
            50%       { box-shadow: 0 0 0 12px rgba(255,74,43,0); }
          }
        `}</style>
            )}
        </div>
    );
};
