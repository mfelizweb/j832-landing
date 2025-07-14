'use client';

 import { motion,  } from "framer-motion";
import { UserCheck, LockKeyhole, FileLock, Eye } from "lucide-react";
import StepCard from "./StepCard";

const steps = [
  {
    icon: <UserCheck size={32} />,
    title: 'A critical action happens',
    desc: 'An admin or user performs a sensitive operation: deleting, editing, or changing permissions.',
  },
  {
    icon: <LockKeyhole size={32} />,
    title: 'J832 captures the event',
    desc: 'J832 automatically records a hash of the action, including who did it and when, without exposing private data.',
  },
  {
    icon: <FileLock size={32} />,
    title: 'Blockchain log is created',
    desc: 'The event is permanently stored on the blockchain—immutable, timestamped, and impossible to delete or edit.',
  },
  {
    icon: <Eye size={32} />,
    title: 'Anyone can verify',
    desc: 'Auditors, users, or even regulators can independently verify every action—instantly and transparently.',
  },
];

const cardVariants = {
  left: {
    hidden: { opacity: 0, x: -80, scale: 0.94 },
    visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.7, type: "spring" as const, bounce: 0.36 } }
  },
  right: {
    hidden: { opacity: 0, x: 80, scale: 0.94 },
    visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.7, type: "spring" as const, bounce: 0.36 } }
  }
};

export default function HowItWorksTimeline() {
   const SECTION_HEIGHT = 170 + 128;  
 return (
    <section id="how-it-works" className="relative py-16 md:py-24 bg-black text-white flex flex-col items-center overflow-x-clip scroll-mt-20 md:scroll-mt-24">
      <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-10 text-center"
        style={{ scrollMarginTop: "120px" }} >
        How J832 Works
      </h2>
      <p className="text-base md:text-lg text-white/70 max-w-2xl mb-10 md:mb-16 text-center">
        From action to audit-proof history: see how J832 makes every sensitive event transparent and tamper-proof.
      </p>

      <div className="relative w-full flex flex-col items-center">
         <div className="absolute left-1/2 top-0 h-full w-1.5 bg-[#00FF90] opacity-30 z-0 -translate-x-1/2 rounded"></div>
          
<div className="absolute left-1/2 top-0 w-5 z-10 -translate-x-1/2 pointer-events-none">

          {steps.map((_, i) => (
            <motion.div
              key={i}
              className="absolute left-1/2 -translate-x-1/2"
              style={{
                top: `calc(${i} * ${SECTION_HEIGHT}px)`
              }}
              initial={false}
              animate={{
                scale: 1,
                boxShadow: "none",
                backgroundColor: "#222",
                borderColor: "#00FF90"
              }}
              transition={{ duration: 0.4 }}
            >
              <div className="w-4 h-4 border-4 rounded-full"></div>
            </motion.div>
          ))}
        </div>

        <div className="relative w-full flex flex-col gap-16 md:gap-32 z-10">
          {steps.map((step, i) => {
            const isLeft = i % 2 === 0;
            const cardAlignMobile = "justify-center";
            const cardAlignDesktop = isLeft
              ? "md:justify-end md:pr-16"
              : "md:justify-start md:pl-16";
            const cardSideMobile = "items-center text-center";
            const cardSideDesktop = isLeft
              ? "md:items-end md:text-right"
              : "md:items-start md:text-left";
            const offsetMobile = "left-1/2 -translate-x-1/2";
            const offsetDesktop = isLeft
              ? "md:left-1/2 md:-translate-x-[120%]"
              : "md:left-1/2 md:translate-x-[20%]";
            const cardWidthMobile = "w-full px-2";
            const cardWidthDesktop = "md:w-[42vw]";

            return (
              <div
                key={step.title}
                className="relative w-full flex items-center min-h-[180px]"
                style={{
                  minHeight: `${SECTION_HEIGHT}px`
                }}
              >
                <StepCard
                  variants={cardVariants[isLeft ? "left" : "right"]}
                  className={`
                    absolute top-0
                    ${offsetMobile} ${offsetDesktop}
                    flex ${cardAlignMobile} ${cardAlignDesktop}
                    ${cardWidthMobile} ${cardWidthDesktop}
                  `}
                  style={{ zIndex: 20 }}
                >
                  <div className={`
                    flex flex-col gap-3
                    ${cardSideMobile} ${cardSideDesktop}
                  `}>
                    <span className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#00FF90] text-black text-2xl md:text-3xl shadow-lg border-4 border-[#00FF90]">
                      {step.icon}
                    </span>
                    <div className="
                      bg-white/10 backdrop-blur-xl rounded-2xl px-5 py-5 md:px-8 md:py-6 shadow-xl border border-[#00FF90]/20
                      max-w-xl
                    ">
                      <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2 text-[#00FF90]">{step.title}</h3>
                      <p className="text-white/80 text-sm md:text-base">{step.desc}</p>
                    </div>
                  </div>
                </StepCard>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}