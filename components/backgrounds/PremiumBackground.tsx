"use client";

import { motion } from "framer-motion";

export default function LuxuryBackground() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-black">
      {/* Base */}
      <div className="absolute inset-0 bg-[#030303]" />

      {/* Animated Mesh */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 h-[1200px] w-[1200px] -translate-x-1/2 -translate-y-1/2"
      >
        <div className="absolute left-0 top-0 h-[700px] w-[700px] rounded-full bg-violet-600/25 blur-[180px]" />
        <div className="absolute right-0 top-20 h-[650px] w-[650px] rounded-full bg-cyan-500/20 blur-[180px]" />
        <div className="absolute bottom-0 left-1/3 h-[800px] w-[800px] rounded-full bg-fuchsia-500/15 blur-[220px]" />
      </motion.div>

      {/* Aurora Beam */}
      <motion.div
        animate={{
          x: [-300, 300, -300],
          rotate: [12, -12, 12],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-0 h-[140vh] w-[400px] -translate-x-1/2"
      >
        <div className="h-full w-full bg-gradient-to-b from-cyan-400/20 via-violet-500/10 to-transparent blur-[120px]" />
      </motion.div>

      {/* Spotlight */}
      <motion.div
        animate={{
          x: [-200, 200, -200],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-[10%] h-[500px] w-[500px] -translate-x-1/2 rounded-full"
      >
        <div className="h-full w-full rounded-full bg-white/[0.05] blur-[120px]" />
      </motion.div>

      {/* Premium Grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          maskImage:
            "radial-gradient(circle at center, white, transparent 90%)",
        }}
      />

      {/* Radial Highlight */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]" />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,black_100%)]" />

      {/* Noise */}
      <div
        className="absolute inset-0 opacity-[0.025] mix-blend-screen"
        style={{
          backgroundImage:
            "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22 viewBox=%220 0 200 200%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22/%3E%3C/filter%3E%3Crect width=%22200%22 height=%22200%22 filter=%22url(%23n)%22 opacity=%220.5%22/%3E%3C/svg%3E')",
        }}
      />

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-1/2 h-[350px] w-[1200px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[150px]" />
    </div>
  );
}