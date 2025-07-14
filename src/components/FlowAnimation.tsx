'use client';

import { motion } from 'framer-motion';
import { CheckCircle, UploadCloud, LockKeyhole, Activity } from 'lucide-react';

const steps = [
  {
    icon: Activity,
    title: 'User Action',
    description: 'The user or system triggers an important action.',
  },
  {
    icon: UploadCloud,
    title: 'Hash Generation',
    description: 'J832 generates a unique hash of the event.',
  },
  {
    icon: LockKeyhole,
    title: 'Immutable Storage',
    description: 'The hash is stored on-chain and becomes tamper-proof.',
  },
  {
    icon: CheckCircle,
    title: 'Verification',
    description: 'Any participant can verify the action’s authenticity.',
  },
];

export default function FlowAnimation() {
  return (
    <section className="py-20 px-6 bg-black text-white scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-16">How J832 Works</h2>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map(({ icon: Icon, title, description }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/5 p-6 rounded-xl border border-white/10 shadow-md"
            >
              <Icon className="w-10 h-10 text-[#00FF90] mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-sm text-gray-300">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
