import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-gray-950">
      {/* Animated Glowing Gradient Orb 1 (Top Left - Cyan/Blue) */}
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -80, 60, 0],
          scale: [1, 1.25, 0.9, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-40 -left-40 w-[650px] h-[650px] bg-blue-600/30 rounded-full blur-[130px]"
      />

      {/* Animated Glowing Gradient Orb 2 (Middle Right - Indigo/Purple) */}
      <motion.div
        animate={{
          x: [0, -120, 60, 0],
          y: [0, 90, -60, 0],
          scale: [1, 1.2, 0.95, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/3 -right-40 w-[700px] h-[700px] bg-indigo-600/25 rounded-full blur-[150px]"
      />

      {/* Animated Glowing Gradient Orb 3 (Bottom Left - Sky/Emerald) */}
      <motion.div
        animate={{
          x: [0, 90, -80, 0],
          y: [0, -70, 80, 0],
          scale: [1, 1.3, 1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-10 left-1/4 w-[600px] h-[600px] bg-sky-500/20 rounded-full blur-[140px]"
      />

      {/* Sleek Square Grid Overlay Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f625_1px,transparent_1px),linear-gradient(to_bottom,#3b82f625_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-90 pointer-events-none" />
    </div>
  );
}

