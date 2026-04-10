"use client";

import { motion } from "framer-motion";
import { Brain, Activity, Zap } from "lucide-react";

interface TopBarProps {
  isProcessing: boolean;
}

export default function TopBar({ isProcessing }: TopBarProps) {
  return (
    <div className="h-20 glass-strong border-b border-white/10 flex items-center justify-between px-8 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-50" />
      
      {/* Logo & Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-4 relative z-10"
      >
        <div className="relative">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 blur-2xl opacity-40"
          />
          <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-lg">
            <Brain className="w-7 h-7 text-white" />
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold gradient-text tracking-tight">
            AI Data Copilot
          </h1>
          <p className="text-xs text-muted-foreground font-medium">
            Intelligent Analysis Engine
          </p>
        </div>
      </motion.div>

      {/* Status Indicators */}
      <div className="flex items-center gap-4 relative z-10">
        {/* Processing Status */}
        <motion.div
          animate={{
            scale: isProcessing ? [1, 1.02, 1] : 1,
          }}
          transition={{
            duration: 1.5,
            repeat: isProcessing ? Infinity : 0,
          }}
          className="flex items-center gap-3 px-5 py-2.5 rounded-full glass border border-white/10"
        >
          <Activity
            className={`w-4 h-4 ${
              isProcessing ? "text-blue-400 animate-pulse" : "text-muted-foreground"
            }`}
          />
          <span className="text-sm font-medium text-foreground">
            {isProcessing ? "Processing..." : "Ready"}
          </span>
        </motion.div>

        {/* AI Status */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 glow-primary"
        >
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            <Zap className="w-4 h-4 text-blue-400" />
          </motion.div>
          <span className="text-sm font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            AI Active
          </span>
        </motion.div>
      </div>
    </div>
  );
}
