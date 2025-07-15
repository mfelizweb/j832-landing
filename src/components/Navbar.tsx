'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import useScrollSpy from '@/hooks/useScrollSpy';   
 


const menuSections = [
  { id: "how-it-works", label: "How It Works" },
  { id: "sdk-demo", label: "SDK Demo" },
  { id: "roadmap", label: "Roadmap" },
  { id: "faq", label: "FAQ" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useScrollSpy(menuSections.map(m => m.id));

  
  const handleMenuClick = () => setMenuOpen(false);

  return (
<nav className="fixed top-0   z-[999] w-full bg-black text-white border-b border-white/10 px-4 sm:px-6 py-3 md:py-4 flex items-center justify-between overflow-x-hidden  ">
      
      <div className="flex items-center justify-between  ">
        <Link href="/" className="flex items-center space-x-2" onClick={handleMenuClick}>
          <Image src="/j832-logo.png" alt="J832 Logo" width={32} height={32} />
          <span className="text-xl font-bold">J832 Protocol</span>
        </Link>
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
        >
          {menuOpen ? (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          ) : (
            <span className="text-2xl">☰</span>
          )}
        </button>
      </div>

    
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[998] md:hidden transition-opacity duration-300"
          onClick={handleMenuClick}
        />
      )}

     
  <div
  className={`
    ${menuOpen ? 'flex' : 'hidden'}
    md:flex md:items-center
    flex-col md:flex-row
    absolute md:static top-[72px] left-0 w-full md:w-auto
    bg-black/95 md:bg-transparent
    p-8 md:p-0 z-[999]
    space-y-6 md:space-y-0 md:space-x-6
    transition-all duration-300
    max-h-[80vh] overflow-y-auto
  `}
>
        {menuSections.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={`transition font-semibold ${
              activeId === id
                ? "text-[#00FF90] underline underline-offset-4"
                : "hover:text-[#00FF90]"
            }`}
            onClick={handleMenuClick}
          >
            {label}
          </a>
        ))}
        <a
          href="https://github.com/mfelizweb/j832Protocol"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold hover:text-[#00FF90] transition"
          onClick={handleMenuClick}
        >
          GitHub
        </a>
      </div>
    </nav>
  );
}
