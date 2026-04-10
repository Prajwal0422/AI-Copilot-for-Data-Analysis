"use client";

import { motion } from "framer-motion";
import { Brain, Activity, Zap, Sparkles } from "lucide-react";

interface TopBarProps {
  isProcessing: boolean;
}

export default function TopBar({ isProcessing }: TopBarProps) {
  return (
    <div className="h-16 glass-ultra border-b border-white/5 flex items-center justify-between px-6 relative overflow-hidden">
      {/* Animated gradient line at bottom */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[1px]"
        style={{
          background: 'linear-gradient(90deg, transparent, #3B82F6, #8B5CF6, #EC4899, transparent)',
        }}
        animate={{
          x: ['-100%', '100%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      
      {/* Logo & Title */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-3 relative z-10"
      >
        <div className="relative">
          {/* Rotating glow */}
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-xl opacity-50"
          />
          
          {/* Icon container */}
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-[1px]">
            <div className="w-full h-full rounded-xl bg-[#0A0A0F] flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
        
        <div>
          <h1 className="text-lg font-bold text-gradient tracking-tight">
            AI Data Copilot
          </h1>
          <p className="text-[10px] text-muted-foreground font-medium tracking-wide uppercase">
            Neural Analysis Engine
          </p>
        </div>
      </motion.div>

      {/* Status Indicators */}
      <div className="flex items-center gap-3 relative z-10">
        {/* Processing Status */}
        <motion.div
          animate={{
            scale: isProcessing ? [1, 1.02, 1] : 1,
          }}
          transition={{
            duration: 2,
            repeat: isProcessing ? Infinity : 0,
          }}
          className="flex items-center gap-2 px-4 py-2 rounded-full glass-ultra"
        >
          <motion.div
            animate={{
              rotate: isProcessing ? 360 : 0,
            }}
            transition={{
              duration: 2,
              repeat: isProcessing ? Infinity : 0,
              ease: 'linear',
            }}
          >
            <Activity className={`w-3.5 h-3.5 ${isProcessing ? 'text-blue-400' : 'text-muted-foreground'}`} />
          </motion.div>
          <span className="text-xs font-semibold text-foreground">
            {isProcessing ? 'Processing' : 'Ready'}
          </span>
        </motion.div>

        {/* AI Status with animated border */}
        <div className="relative">
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-md"
            animate={{
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
          <div className="relative flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-blue-500/20">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            </motion.div>
            <span className="text-xs font-bold text-gradient">
              AI Active
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
