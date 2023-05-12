import { motion, useScroll } from "framer-motion"
import { MutableRefObject, ReactNode } from "react";

export default function FadeInEffect({ children, className }: { children: ReactNode, className?: string }) {

  return (
    <motion.div
      className={className}
      animate={{
        opacity: [0, 50, 100],
        x: [-100, -50, 0],
      }}
      transition={{ duration: 0.5, delay: 0.3, }}
    >
      {children}
    </motion.div>
  );
}
