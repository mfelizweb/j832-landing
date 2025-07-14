'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'What is J832 and why is it different?',
    a: 'J832 is a protocol that logs every critical action (like deletions, edits, or permission changes) directly on-chain, making tampering and invisible admin actions impossible. Unlike traditional logs, these records cannot be deleted or modified—even by top-level admins.',
  },
  {
    q: 'Does J832 store any private data on the blockchain?',
    a: 'No. J832 records only cryptographic hashes and metadata, never raw user data. This protects privacy while guaranteeing auditability.',
  },
  {
    q: 'Can J832 be integrated into existing systems?',
    a: 'Yes. J832 is designed as an SDK that can be integrated into most admin panels or platforms with minimal code, regardless of language or framework.',
  },
  {
    q: 'What problems does J832 solve?',
    a: 'It prevents admin abuse, covers compliance and audit needs, and guarantees transparency—especially in contests, sensitive SaaS tools, and platforms where trust is critical.',
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-black text-white flex flex-col items-center scroll-mt-20 md:scroll-mt-24">
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.18 }}
      >
        Frequently Asked Questions
      </motion.h2>
      <div className="w-full max-w-2xl flex flex-col gap-6">
        {faqs.map((f, i) => (
          <motion.div
            key={f.q}
            className="bg-white/5 border border-white/10 p-6 rounded-2xl shadow-lg backdrop-blur-md cursor-pointer group"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            onClick={() => setOpen(open === i ? null : i)}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-[#00FF90]">{f.q}</h3>
              <ChevronDown
                size={22}
                className={`ml-2 transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`}
              />
            </div>
            <AnimatePresence initial={false}>
              {open === i && (
                <motion.p
                  className="text-base text-white/80 mt-4"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.36 }}
                >
                  {f.a}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
