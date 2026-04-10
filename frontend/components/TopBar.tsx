"use client";

import { motion } from "framer-motion";
import { Brain, Activity, Sparkles } from "lucide-react";

interface TopBarProps {
  isProcessing: boolean;
}

export default function TopBar({ isProcessing }: TopBarProps) {
  return (
    <motion.div 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="mx-4 mt-4 mb-0 rounded-2xl glass-ultra border border-white/5 flex items-center justify-between px-6 py-3 relative overflow-hidden shadow-2xl"
    >
      {/* Animated gradient line at bottom */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px]"
        style={{
          background: 'linear-gradient(90deg, transparent, #3B82F6, #8B5CF6, #22D3EE, transparent)',
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
        transition={{ delay: 0.2 }}
        className="flex items-center gap-3 relative z-10"
      >
        <div className="relative">
          {/* Rotating glow */}
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              rotate: { duration: 8, repeat: Infinity, ease: 'linear' },
              scale: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
            }}
            className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 blur-xl opacity-60"
          />
          
          {/* Icon container with animated border */}
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 p-[2px]">
            <div className="w-full h-full rounded-xl bg-[#0B0B12] flex items-center justify-center">
              <motion.div
                animate={{
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Brain className="w-5 h-5 text-white" />
              </motion.div>
            </div>
          </div>
        </div>
        
        <div>
          <h1 className="text-base font-bold text-gradient tracking-tight">
            AI Data Copilot
          </h1>
          <p className="text-[9px] text-muted-foreground font-semibold tracking-widest uppercase">
            Neural Engine
          </p>
        </div>
      </motion.div>

      {/* Status Indicators */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="flex items-center gap-3 relative z-10"
      >
        {/* Processing Status */}
        <motion.div
          animate={{
            scale: isProcessing ? [1, 1.02, 1] : 1,
          }}
          transition={{
            duration: 2,
            repeat: isProcessing ? Infinity : 0,
          }}
          className="flex items-center gap-2 px-4 py-2 rounded-full glass-ultra border border-white/5"
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
            className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 blur-md"
            animate={{
              opacity: [0.4, 0.8, 0.4],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
          <div className="relative flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 border border-blue-500/30">
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
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
      </motion.div>
    </motion.div>
  );
}
