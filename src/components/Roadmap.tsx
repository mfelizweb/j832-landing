'use client';

import StepCard from "./StepCard";
import { motion } from "framer-motion";
import { CheckCircle, Clock } from "lucide-react";

const roadmap = [
  {
    title: "Project Setup",
    desc: <>Hardhat, toolbox, Solidity 0.8.x, structure for contracts, artifacts, and cache files.<br />
      <b>Status:</b> Ready (<code>package.json</code>, <code>hardhat.config</code>, <code>artifacts/</code>, <code>cache/</code> OK)
    </>,
    done: true,
  },
  {
    title: "J832Protocol Contract Base",
    desc: <>Base contract with <code>registerChange</code>, <code>getHistory</code>, <code>getLatestChange</code>, <code>getVersionCount</code>, and events.<br />
      <b>Status:</b> Implemented (<code>contracts/J832Protocol.sol</code>)
    </>,
    done: true,
  },
  {
    title: "Security Audit & Solidity Best Practices (2025)",
    desc: <>Review contract for up-to-date Solidity security: access control, input validation, event emission, gas optimization, upgradability, etc.</>,
    done: true,
  },
  {
    title: "Unit & Integration Tests",
    desc: <>Write tests with Hardhat/Chai/Mocha for all functions (including edge cases and event emission). Integrate with Jest if needed.</>,
    done: false,
  },
  {
    title: "Deploy Scripts & Testnet Deploy",
    desc: <>Create deploy scripts for Mumbai or another testnet. Test deployments and update documentation accordingly.</>,
    done: true,
  },
  {
    title: "SDK/Integration Layer (npm package)",
    desc: <>Build a Node.js package to connect to the contract: simple <code>logChange()</code>, API Key/token handling, ready for middleware.</>,
    done: true,
  },
  {
    title: "Portal/Web Dashboard",
    desc: <>Web dashboard to query logs, validate hashes, and monitor usage. Ready for client access and auditing.</>,
    done: false,
  },
  {
    title: "Documentation & Real-World Use Cases",
    desc: <>Complete README and portal docs. Document integration examples for banks, universities, government, and companies.</>,
    done: false,
  },
  {
    title: "Production Audit & Launch",
    desc: <>Final contract audit, bug bounty, and mainnet deployment.</>,
    done: false,
  },
  {
    title: "API Key & Usage Limits System",
    desc: <>Implement API Key issuance, tracking, and plan limits (free/tiered). Optionally central service for usage metering.</>,
    done: false,
  }
];

const cardVariants = {
  left: {
    hidden: { opacity: 0, x: -60, scale: 0.96 },
    visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.7, type: "spring" as const, bounce: 0.36 } }
  },
  right: {
    hidden: { opacity: 0, x: 60, scale: 0.96 },
    visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.7, type: "spring" as const, bounce: 0.36 } }
  }
};

export default function Roadmap() {
  return (
    <section
      id="roadmap"
      className="relative py-16 md:py-24 bg-black text-white flex flex-col items-center px-2 md:px-0 scroll-mt-20 md:scroll-mt-24"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center">
        J832 Protocol Roadmap <span className="text-base md:text-lg align-middle opacity-60">(2025)</span>
      </h2>
      <div className="flex gap-5 items-center justify-center mb-7 md:mb-10 text-sm md:text-base">
        <span className="inline-flex items-center text-[#00FF90]">
          <CheckCircle size={16} className="mr-1" />Completed
        </span>
        <span className="inline-flex items-center text-gray-400">
          <Clock size={16} className="mr-1" />To Do
        </span>
      </div>

      <div className="relative w-full max-w-3xl flex flex-col items-center">
        <div className="absolute left-1/2 top-0 h-full w-[3px] bg-white/20 -translate-x-1/2 z-0"></div>
        {roadmap.map((step, i) => {
          const isDone = step.done;
          const isLeft = i % 2 === 0;

          return (
            <div
              key={i}
              className="relative w-full flex flex-col md:flex-row items-center min-h-[110px] mb-6 md:mb-10"
            >
              <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center z-10">
                <motion.div
                  initial={{ scale: 0.7, opacity: 0 }}
                  animate={{ scale: 1.1, opacity: 1 }}
                  transition={{ delay: 0.08 * i, type: "spring" }}
                  className={`
                    flex items-center justify-center w-6 h-6 md:w-7 md:h-7 rounded-full border-2 shadow
                    ${isDone ? "bg-[#00FF90] border-[#00FF90]" : "bg-black border-white/30"}
                  `}
                >
                  {isDone
                    ? <CheckCircle size={16} className="text-black" />
                    : <Clock size={13} className="text-gray-400" />}
                </motion.div>
                {i < roadmap.length - 1 && (
                  <div className="w-[3px] h-12 md:h-16 bg-gradient-to-b from-[#00FF90]/40 to-white/0" />
                )}
              </div>

              <StepCard
                variants={cardVariants[isLeft ? "left" : "right"]}
                className={`
                  mt-8 md:mt-0 
                  w-full md:w-[calc(50%-40px)] 
                  px-4 py-4 md:px-7 md:py-5
                  mx-auto
                  ${isLeft
                    ? "md:ml-0 md:mr-auto text-center md:text-right md:pr-12"
                    : "md:mr-0 md:ml-auto text-center md:text-left md:pl-12"}
                  ${isDone
                    ? "bg-white/5 border border-[#00FF90]/30"
                    : "bg-white/10 border border-white/10"}
                  rounded-xl shadow-lg backdrop-blur-md
                  transition-all duration-300
                `}
                style={{ minHeight: "90px" }}
              >
                <div className="text-base md:text-lg font-bold mb-1 md:mb-2 text-[#00FF90]">
                  {i + 1}. {step.title}
                </div>
                <div className="text-xs md:text-sm text-white/90 leading-relaxed">
                  {step.desc}
                </div>
              </StepCard>
            </div>
          );
        })}
      </div>

      <a
        href="https://t.me/j832P"
        target="_blank"
        rel="noopener"
        className="mt-8 inline-block bg-[#00FF90] text-black font-semibold px-5 py-2.5 md:px-6 md:py-3 rounded-xl shadow-lg hover:bg-[#00cc72] transition text-sm md:text-base"
      >
        Join our Community
      </a>
    </section>
  );
}
