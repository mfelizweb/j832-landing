'use client';

import { ShieldCheck, ServerCog, AlertCircle } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: 'Immutable Audit Trails',
    description:
      'Every action recorded through J832 is hashed and stored immutably on-chain, ensuring verifiable integrity across any system or process.',
  },
  {
    icon: ServerCog,
    title: 'Plug-and-Play SDK',
    description:
      'Integrate J832 into your application or backend with minimal setup. Designed to work alongside your logic without replacing it.',
  },
  {
    icon: AlertCircle,
    title: 'Tamper Prevention',
    description:
      'J832 prevents manipulation such as repeated draws, unauthorized changes, or hidden deletions. Each attempt leaves a cryptographic fingerprint.',
  },
];

export default function AboutSection() {
  return (
    <section className="py-12 md:py-20 px-2 md:px-6 bg-black text-white scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-5xl font-bold mb-6 md:mb-10 tracking-tight">
          What is J832?
        </h2>
        <p className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto mb-8 md:mb-14 px-2 md:px-0">
          J832 is a blockchain protocol focused on data integrity, auditability, and verifiable transparency.
          It empowers developers to build trust into any system—from contests and governance to backend operations—by
          making every action traceable, immutable, and tamper-proof.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-white/5 p-6 md:p-7 rounded-2xl border border-white/10 shadow-lg hover:shadow-2xl hover:-translate-y-1 hover:border-[#00FF90]/30 transition-all duration-300 flex flex-col items-center text-center"
            >
              <Icon className="w-10 h-10 text-[#00FF90] mb-4" />
              <h3 className="text-base md:text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-300 text-sm md:text-base">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
