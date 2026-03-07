import React from "react";

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <span className="text-2xl font-black tracking-tighter text-[#373D48] dark:text-white uppercase leading-none">
        Loom
      </span>
      <svg
        width="32"
        height="32"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="translate-y-0.5"
      >
        <path
          d="M20 20L80 80"
          stroke="#FF4A2B"
          strokeWidth="12"
          strokeLinecap="round"
        />
        <path
          d="M80 20L20 80"
          stroke="#FF4A2B"
          strokeWidth="6"
          strokeDasharray="15 5"
          strokeLinecap="round"
        />
        <path
          d="M70 10L10 70"
          stroke="#FF4A2B"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.6"
        />
      </svg>
    </div>
  );
};
