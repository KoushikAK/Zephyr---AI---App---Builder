"use client";

import { motion } from "framer-motion";

export default function AuroraBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
      <motion.div
        animate={{
          x: [0, 100, -100, 0],
          y: [0, -100, 100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-purple-500/30 blur-[120px]"
      />

      <motion.div
        animate={{
          x: [0, -150, 100, 0],
          y: [0, 100, -100, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute right-1/4 top-1/3 h-[600px] w-[600px] rounded-full bg-cyan-500/20 blur-[140px]"
      />

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute bottom-0 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[100px]"
      />
    </div>
  );
}