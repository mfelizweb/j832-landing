'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Particles from 'react-tsparticles';
import { ChevronDown, ChevronUp, Expand } from 'lucide-react';

const steps = [
  {
    title: 'Contest Created',
    desc: 'A contest is created and logged on-chain with title, prize, and deadlines.',
    img: '/img/step1.jpg'
  },
  {
    title: 'Dashboard Snapshot',
    desc: 'Visible and auditable in the system. Admin cannot silently modify data.',
    img: '/img/step2.jpg'
  },
  {
    title: 'Blockchain Logging',
    desc: 'Every key property is hashed and saved immutably.',
    img: '/img/step3.jpg'
  },
  {
    title: 'On-chain Proof',
    desc: 'View the transaction on a public explorer like PolygonScan.',
    img: '/img/step4.jpg'
  },
  {
    title: 'Edit Tracked',
    desc: 'When the contest is updated, the changes are also logged.',
    img: '/img/step5.jpg'
  },
  {
    title: 'Audit Trail Complete',
    desc: 'Immutable proof of all actions—verifiable, private, transparent.',
    img: '/img/step6.jpg'
  }
];

export default function HowJ832Works() {
  const [open, setOpen] = useState(false);
  const [modalImg, setModalImg] = useState<string | null>(null);

  return (
    <section
      id="how-j832-works"
      className="relative bg-black text-white py-24 px-4 md:px-10 overflow-hidden scroll-mt-20"
    >
      <Particles
        className="absolute inset-0 z-0 pointer-events-none"
        options={{
          background: { color: 'transparent' },
          particles: {
            color: { value: '#00FF90' },
            number: { value: 20 },
            opacity: { value: 0.1 },
            size: { value: { min: 1, max: 3 } },
            move: { enable: true, speed: 0.4 }
          }
        }}
      />

      <motion.div
        className="z-10 relative text-center max-w-4xl mx-auto mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-[#00FF90] font-semibold text-sm uppercase tracking-wider mb-2">
          Protocol Integration
        </p>
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          J832 Protocol Integrated into ContestChain
        </h2>
        <p className="text-white/70 text-base md:text-lg">
          This demo shows how J832 secures critical actions in <span className="font-semibold text-white">ContestChain</span>, a contest management system.
          However, the protocol is designed to work with <span className="text-[#00FF90] font-semibold">any type of platform</span>—admin dashboards, financial systems, education tools, and beyond.
        </p>
      </motion.div>

      <div className="mt-10 max-w-7xl mx-auto z-10 relative">
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
            >
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  className="w-full max-w-sm bg-gradient-to-br from-[#00FF90]/10 via-white/5 to-white/0 border border-white/10 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl hover:scale-[1.02] transition group backdrop-blur"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <div className="relative h-52 md:h-64 overflow-hidden">
                    <Image
                      src={step.img}
                      alt={step.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out cursor-pointer"
                      onClick={() => setModalImg(step.img)}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />
                    <div className="absolute top-3 right-3 bg-black/60 p-1 rounded-full z-20">
                      <Expand size={18} className="text-white/80" />
                    </div>
                  </div>
                  <div className="relative z-20 px-5 pb-6 pt-4">
                    <h3 className="text-xl font-bold text-white mb-1 drop-shadow-md">{step.title}</h3>
                    <p className="text-sm text-white/70 leading-snug drop-shadow-sm">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setOpen(!open)}
          className="mt-12 mx-auto flex items-center gap-2 bg-[#00FF90]/10 text-[#00FF90] px-6 py-3 rounded-full hover:bg-[#00FF90]/20 transition-colors text-base"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          <span className="font-medium">{open ? 'Hide Flow' : 'See How J832 Works'}</span>
        </motion.button>
      </div>

      {modalImg && (
        <div className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center" onClick={() => setModalImg(null)}>
          <div className="relative w-full max-w-4xl mx-auto aspect-video">
            <Image
              src={modalImg}
              alt="Zoomed preview"
              fill
              className="object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
}
