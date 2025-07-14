'use client';

import { motion } from 'framer-motion';
import Particles from 'react-tsparticles';

export default function SdkDemo() {
  return (
    <section
      id="sdk-demo"
      className="relative min-h-[60vh] bg-black text-white flex flex-col items-center justify-center px-2 md:px-6 py-14 md:py-24 overflow-hidden scroll-mt-20 md:scroll-mt-24"
    >
       <Particles
        className="absolute inset-0 z-0 pointer-events-none"
        options={{
          background: { color: "transparent" },
          fpsLimit: 60,
          particles: {
            color: { value: "#00FF90" },
            number: { value: 12 },
            opacity: { value: 0.12 },
            size: { value: { min: 1, max: 3 } },
            move: { enable: true, speed: 0.5 },
          },
        }}
      />

       <div className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.025) 1.5px, transparent 1.5px), linear-gradient(90deg, rgba(255,255,255,0.02) 1.5px, transparent 1.5px)',
          backgroundSize: '3px 3px, 3px 3px',
          mixBlendMode: 'overlay'
        }}
      />

      <motion.h2
        className="text-2xl md:text-5xl font-bold mb-5 md:mb-8 text-center z-10"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.18 }}
      >
        J832 SDK Demo
      </motion.h2>
      <p className="text-base md:text-lg text-white/70 max-w-2xl mb-6 md:mb-8 text-center z-10 px-2">
        Soon you’ll be able to register critical actions—immutable, auditable, and verifiable—directly with ContestChain.
      </p>

      <motion.div
        className="relative flex flex-col items-center border border-white/10 p-5 md:p-8 rounded-2xl bg-white/10 backdrop-blur-md shadow-2xl z-20 mt-3 md:mt-4 w-full max-w-md md:max-w-lg"
        initial={{ opacity: 0, scale: 0.95, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
         <motion.div
          className="absolute left-1/2 top-10 w-[160px] md:w-[220px] h-[50px] md:h-[70px] -translate-x-1/2 -z-10"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{
            opacity: 0.5,
            scale: [0.92, 1.06, 0.98, 1],
            transition: { duration: 1.7, repeat: Infinity, repeatType: "reverse" }
          }}
        >
          <div className="w-full h-full bg-[#00FF90] blur-2xl opacity-60 rounded-3xl" />
        </motion.div>

         <div className="absolute inset-0 z-0 pointer-events-none rounded-2xl"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.05) 1.5px, transparent 1.5px), linear-gradient(90deg, rgba(255,255,255,0.04) 1.5px, transparent 1.5px)',
            backgroundSize: '3px 3px, 3px 3px',
            mixBlendMode: 'overlay'
          }}
        />

        <span className="text-xs uppercase mb-2 md:mb-4 text-[#00FF90]/80 tracking-wider z-10">
          Coming Soon
        </span>
        <motion.div
          className="z-10"
          initial={{ scale: 0.96 }}
          animate={{ scale: [0.96, 1.08, 1, 0.98, 1], transition: { duration: 2, repeat: Infinity, repeatType: "reverse" } }}
        >
          <span className="text-[#00FF90] text-xl md:text-3xl font-bold tracking-wide text-center block">
            SDK Integration with <span className="glow-text">ContestChain</span>
          </span>
        </motion.div>
        <div className="mt-4 md:mt-5 text-white/75 max-w-xs md:max-w-sm text-center z-10 text-sm md:text-base">
          Direct SDK/API actions, immutable logging, and verifiable proofs—all in one line of code.
          <br />
          <span className="font-semibold text-[#00FF90]">Stay tuned for the full experience.</span>
        </div>
      </motion.div>
    </section>
  );
}
