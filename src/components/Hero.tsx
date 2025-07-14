'use client';

import GlitchText from '@/components/GlitchText';
import { motion } from 'framer-motion';
import Particles from 'react-tsparticles';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[85vh] flex items-center justify-center bg-black overflow-hidden scroll-mt-20 md:scroll-mt-24">
 
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-60 pointer-events-none"
        src="/hero-bg3.mp4"
      />

       
      <div className="absolute left-1/2 top-1/2 w-[350px] h-[180px] md:w-[480px] md:h-[280px] -translate-x-1/2 -translate-y-1/2 bg-[#00FF90] opacity-30 blur-3xl rounded-full animate-pulse pointer-events-none" />

      
      <div className="absolute inset-0 z-20 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.045) 1.5px, transparent 1.5px), linear-gradient(90deg, rgba(255,255,255,0.03) 1.5px, transparent 1.5px)',
          backgroundSize: '3px 3px, 3px 3px',
          mixBlendMode: 'overlay'
        }}
      />

 
      <Particles
        className="absolute inset-0 z-10 pointer-events-none"
        options={{
          background: { color: "transparent" },
          fpsLimit: 60,
          particles: {
            color: { value: "#00FF90" },
            number: { value: 18 },
            opacity: { value: 0.18 },
            size: { value: { min: 1, max: 4 } },
            move: { enable: true, speed: 0.5 },
          },
        }}
      />

 
      <div className="relative z-30 flex flex-col items-center justify-center w-full px-4">
        <GlitchText className="text-2xl md:text-6xl font-black text-center mb-6 md:mb-7 drop-shadow-[0_4px_24px_#00FF90aa]">
          What matters can’t be erased.
        </GlitchText>
        <motion.h2
          className="text-lg md:text-3xl text-[#00FF90] font-bold mb-4 md:mb-6 text-center drop-shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          Transparency, forever.
        </motion.h2>
        <motion.p
          className="text-base md:text-lg text-white/70 max-w-xl text-center mb-7 md:mb-10"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          J832 records, audits, and protects every critical action in your system—on-chain and tamper-proof.
          <br />
          Stop trusting the invisible. Start verifying the truth.
        </motion.p>

     
        <motion.div
          className="flex flex-col md:flex-row items-center gap-3 md:gap-4 mt-3 w-full max-w-xl"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <a
            href="http://github.com/mfelizweb/j832Protocol"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto text-[#00FF90] font-semibold px-8 py-4 rounded-xl text-lg shadow-lg hover:bg-[#00FF90]/10 transition-all flex items-center justify-center gap-2"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.186 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.157-1.11-1.466-1.11-1.466-.908-.621.069-.609.069-.609 1.004.07 1.532 1.031 1.532 1.031.893 1.53 2.341 1.089 2.91.833.091-.647.35-1.09.636-1.341-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844a9.54 9.54 0 012.504.336c1.91-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.31.679.924.679 1.863 0 1.345-.012 2.43-.012 2.76 0 .268.18.58.688.482C19.138 20.205 22 16.448 22 12.021 22 6.484 17.523 2 12 2z" fill="currentColor"/>
            </svg>
            View on GitHub
          </a>
          <a
            href="#sdk-demo"
            className="w-full md:w-auto bg-white hover:bg-[#00cc72] text-black font-semibold px-8 py-4 rounded-xl text-lg shadow-lg transition-all flex items-center justify-center gap-2"
          >
            View Demo
          </a>
        </motion.div>
      </div>
    </section>
  );
}
