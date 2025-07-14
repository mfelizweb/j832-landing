'use client';

import { motion } from 'framer-motion';
 
import { Twitter, Github, MessageCircle, Send } from 'lucide-react';

export default function CommunityCta() {
  return (
    <section className="py-14 md:py-20 bg-black text-white flex flex-col items-center scroll-mt-20 md:scroll-mt-24">
      <motion.h3
        className="text-2xl md:text-4xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        Join the J832 Community
      </motion.h3>
      <p className="text-base md:text-lg text-white/70 text-center mb-10 max-w-xl px-2">
        Connect with builders, contributors, and other innovators.<br />
        Follow our updates, join the conversation, and help shape transparent systems for everyone.
      </p>
      <div className="flex flex-wrap justify-center items-center gap-3 md:gap-5 w-full max-w-2xl">
        <a
          href="https://x.com/j832protocol?t=aeq-q4qU3iPcFr7lbxX7pA&s=09"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-[#00FF90] hover:bg-[#00cc72] text-black font-semibold px-5 md:px-6 py-3 rounded-xl text-base md:text-lg shadow-lg transition-all w-full sm:w-auto"
        >
          <Twitter className="w-5 h-5" /> Follow on X
        </a>
        <a
          href="https://discord.gg/tCZCpGnC"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-[#5865F2] hover:bg-[#4954c1] text-white font-semibold px-5 md:px-6 py-3 rounded-xl text-base md:text-lg shadow-lg transition-all w-full sm:w-auto"
        >
          <MessageCircle className="w-5 h-5" /> Join Discord
        </a>
        <a
          href="https://t.me/j832P"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-[#0088CC] hover:bg-[#007ab8] text-white font-semibold px-5 md:px-6 py-3 rounded-xl text-base md:text-lg shadow-lg transition-all w-full sm:w-auto"
        >
          <Send className="w-5 h-5" /> Telegram
        </a>
        <a
          href="https://github.com/mfelizweb/j832Protocol"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-black border border-[#00FF90] hover:bg-[#00FF90] hover:text-black text-[#00FF90] font-semibold px-5 md:px-6 py-3 rounded-xl text-base md:text-lg shadow-lg transition-all w-full sm:w-auto"
        >
          <Github className="w-5 h-5" /> View on GitHub
        </a>
      </div>
    </section>
  );
}
