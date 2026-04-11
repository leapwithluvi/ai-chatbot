"use client";

import React from "react";

interface LogoProps {
  className?: string;
  size?: number;
}

const Logo: React.FC<LogoProps> = ({ className, size = 32 }) => {
  return (
    <div className={`inline-flex items-center gap-3 group ${className}`}>
      {/* The NX Icon */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-500 group-hover:rotate-90"
      >
        {/* Outer Frame */}
        <rect
          x="5"
          y="5"
          width="90"
          height="90"
          stroke="currentColor"
          strokeWidth="8"
        />
        
        {/* Corner Accents */}
        <rect x="0" y="0" width="20" height="20" fill="currentColor" />
        <rect x="80" y="80" width="20" height="20" fill="currentColor" />

        {/* NX Lettering - Stylized */}
        <path
          d="M25 30V70M25 30L45 70V30"
          stroke="currentColor"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M55 30L75 70M75 30L55 70"
          stroke="currentColor"
          strokeWidth="8"
          strokeLinecap="square"
        />
      </svg>
      
      {/* Branding Text */}
      <span className="text-2xl font-black tracking-tighter italic uppercase group-hover:italic transition-all duration-300">
        Nexus
      </span>
    </div>
  );
};

export default Logo;
