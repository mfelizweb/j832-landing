import { useRef, ReactNode } from "react";
import { motion, useInView, Variants } from "framer-motion";

interface StepCardProps {
  children: ReactNode;
  variants?: Variants; 
  className?: string;
  style?: React.CSSProperties;
}

export default function StepCard({ children, variants, className, style }: StepCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
