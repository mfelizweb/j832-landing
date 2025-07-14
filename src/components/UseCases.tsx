'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Users, FileSearch } from 'lucide-react';

const useCases = [
  {
    icon: <ShieldCheck size={38} className="text-[#00FF90] mb-3 drop-shadow-glow" />,
    title: 'Unbreakable Audit Trails',
    desc: `Top-level admins can sometimes erase or modify critical data, leaving no trace. With J832, every sensitive action is permanently recorded on the blockchain, making audit trails truly unbreakable and verifiable—forever.`,
  },
  {
    icon: <Users size={38} className="text-[#00FF90] mb-3 drop-shadow-glow" />,
    title: 'Tamper-Proof Contests',
    desc: `Contest organizers may alter results, remove entries, or rerun draws to manipulate outcomes. J832 logs every action—adding, removing, or editing participants—directly on-chain, so anyone can independently verify fairness.`,
  },
  {
    icon: <FileSearch size={38} className="text-[#00FF90] mb-3 drop-shadow-glow" />,
    title: 'Compliance Made Simple',
    desc: `Regulators and auditors demand immutable records. J832 provides a blockchain-backed, transparent history of every critical event, making compliance and independent auditing effortless.`,
  },
];

export default function UseCases() {
  return (
    <section className="relative py-24 bg-black text-white flex flex-col items-center overflow-x-clip scroll-mt-20 md:scroll-mt-24">
       <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[480px] h-[240px] bg-gradient-to-br from-[#00FF90] via-transparent to-transparent opacity-30 blur-3xl rounded-full animate-pulse"></div>
      </div>

      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-12 text-center relative z-10
          bg-gradient-to-r from-[#00FF90] via-white to-[#00FF90]
          bg-[length:200%_100%]
          bg-clip-text text-transparent
          animate-shine"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.16 }}
      >
        Why J832?
      </motion.h2>
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8 z-10">
        {useCases.map((uc, i) => (
          <motion.div
            key={uc.title}
            className="relative flex flex-col items-center bg-white/10 border border-[#00FF90]/30 p-8 rounded-3xl shadow-xl
              transition-all hover:scale-[1.045] hover:shadow-2xl cursor-pointer group
              backdrop-blur-xl hover:bg-white/20"
            initial={{ opacity: 0, y: 60, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15, type: 'spring' }}
            whileHover={{ scale: 1.07 }}
          >
            {/* Glow border */}
            <span className="absolute inset-0 z-0 rounded-3xl pointer-events-none border-2 border-[#00FF90] opacity-30 blur-md animate-glow" />
            <div className="relative z-10 flex flex-col items-center">
              {uc.icon}
              <h3 className="text-2xl font-semibold mb-3 text-[#00FF90] text-center group-hover:drop-shadow-lg">
                {uc.title}
              </h3>
              <p className="text-base text-white/80 text-center">
                {uc.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
