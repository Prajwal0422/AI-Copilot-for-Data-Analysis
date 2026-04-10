"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { LucideIcon } from "lucide-react";

interface FloatingActionButtonProps {
  icon: LucideIcon;
  label: string;
  onClick: () => void;
  color?: "cyan" | "purple" | "pink" | "green";
  position?: "bottom-right" | "bottom-left";
}

export default function FloatingActionButton({
  icon: Icon,
  label,
  onClick,
  color = "cyan",
  position = "bottom-right",
}: FloatingActionButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const colorClasses = {
    cyan: "from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 shadow-cyan-500/50",
    purple: "from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 shadow-purple-500/50",
    pink: "from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 shadow-pink-500/50",
    green: "from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-green-500/50",
  };

  const positionClasses = {
    "bottom-right": "bottom-6 right-6",
    "bottom-left": "bottom-6 left-6",
  };

  return (
    <motion.div
      className={`fixed ${positionClasses[position]} z-50`}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
    >
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`
          relative w-14 h-14 rounded-full
          bg-gradient-to-br ${colorClasses[color]}
          flex items-center justify-center
          shadow-lg transition-all duration-300
        `}
      >
        {/* Pulsing ring */}
        <motion.div
          className={`absolute inset-0 rounded-full bg-gradient-to-br ${colorClasses[color]}`}
          animate={{
            scale: [1, 1.3, 1.3],
            opacity: [0.5, 0, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />

        {/* Icon */}
        <Icon className="w-6 h-6 text-white relative z-10" />

        {/* Tooltip */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, x: position === "bottom-right" ? 10 : -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: position === "bottom-right" ? 10 : -10 }}
              className={`
                absolute ${position === "bottom-right" ? "right-full mr-3" : "left-full ml-3"}
                top-1/2 -translate-y-1/2
                px-3 py-2 rounded-lg
                glass-strong border border-cyan-500/30
                whitespace-nowrap text-sm text-slate-200
                pointer-events-none
              `}
            >
              {label}
              {/* Arrow */}
              <div
                className={`
                  absolute top-1/2 -translate-y-1/2
                  ${position === "bottom-right" ? "right-0 translate-x-full" : "left-0 -translate-x-full"}
                  w-0 h-0 border-4 border-transparent
                  ${position === "bottom-right" ? "border-l-slate-800" : "border-r-slate-800"}
                `}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </motion.div>
  );
}
