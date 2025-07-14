'use client';

import { ReactNode } from 'react';
import clsx from 'clsx';

interface GlitchTextProps {
  children: ReactNode;
  className?: string;
}

export default function GlitchText({ children, className = "" }: GlitchTextProps) {
  return (
    <span className={clsx("relative inline-block font-mono font-bold glitch", className)}>
      <span
        className="absolute left-0 top-0 w-full h-full text-[#00FF90] opacity-80 blur-sm pointer-events-none"
        aria-hidden
        style={{ animation: 'glitchTop 0.42s infinite linear alternate' }}
      >
        {children}
      </span>
      <span
        className="absolute left-0 top-0 w-full h-full text-pink-500 opacity-60 blur-[1.5px] pointer-events-none"
        aria-hidden
        style={{ animation: 'glitchBot 0.4s infinite linear alternate' }}
      >
        {children}
      </span>
      <span className="relative">{children}</span>
      <style jsx>{`
        @keyframes glitchTop {
          0% { transform: translate(0, 0) skewX(0deg); }
          20% { transform: translate(-1.5px, -1.5px) skewX(-5deg);}
          40% { transform: translate(-2px, 1.5px) skewX(3deg);}
          60% { transform: translate(2px, -1.5px) skewX(-2deg);}
          80% { transform: translate(1.5px, 1.5px) skewX(2deg);}
          100% { transform: translate(0, 0) skewX(0deg);}
        }
        @keyframes glitchBot {
          0% { transform: translate(0, 0) skewX(0deg);}
          15% { transform: translate(2px, 1.5px) skewX(3deg);}
          35% { transform: translate(-1.5px, -2px) skewX(-2deg);}
          55% { transform: translate(1.5px, 2px) skewX(2deg);}
          75% { transform: translate(-2px, 1.5px) skewX(-5deg);}
          100% { transform: translate(0, 0) skewX(0deg);}
        }
      `}</style>
    </span>
  );
}
