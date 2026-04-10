"use client";

import { motion } from "framer-motion";
import { Brain, Activity, Zap } from "lucide-react";

interface TopBarProps {
  isProcessing: boolean;
}

export default function TopBar({ isProcessing }: TopBarProps) {
  return (
    <div className="h-16 glass-strong border-b border-cyan-500/20 flex items-center justify-between px-6">
      {/* Logo & Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-3"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-cyan-500 blur-xl opacity-50 animate-pulse-slow" />
          <Brain className="w-8 h-8 text-cyan-400 relative z-10" />
        </div>
        <div>
          <h1 className="text-xl font-bold gradient-text">AI Data Copilot</h1>
          <p className="text-xs text-cyan-400/60">Intelligent Analysis Engine</p>
        </div>
      </motion.div>

      {/* Status Indicators */}
      <div className="flex items-center gap-6">
        {/* Processing Status */}
        <motion.div
          animate={{
            scale: isProcessing ? [1, 1.05, 1] : 1,
          }}
          transition={{
            duration: 1,
            repeat: isProcessing ? Infinity : 0,
          }}
          className="flex items-center gap-2 px-4 py-2 rounded-full glass"
        >
          <Activity
            className={`w-4 h-4 ${
              isProcessing ? "text-cyan-400 animate-pulse" : "text-slate-500"
            }`}
          />
          <span className="text-sm text-slate-300">
            {isProcessing ? "Processing..." : "Ready"}
          </span>
        </motion.div>

        {/* AI Status */}
        <div className="flex items-center gap-2 px-4 py-2 rounded-full glass glow-cyan">
          <Zap className="w-4 h-4 text-cyan-400" />
          <span className="text-sm text-cyan-400 font-medium">AI Active</span>
        </div>
      </div>
    </div>
  );
}
