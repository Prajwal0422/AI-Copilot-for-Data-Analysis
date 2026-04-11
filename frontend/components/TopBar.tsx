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
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="mx-4 mt-4 mb-0 rounded-2xl glass-ultra border border-white/10 flex items-center justify-between px-6 py-3.5 relative overflow-hidden shadow-2xl backdrop-blur-3xl"
    >
      {/* Animated gradient line at bottom */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px]"
        style={{
          background: 'linear-gradient(90deg, transparent, #3B82F6, #8B5CF6, #EC4899, #22D3EE, transparent)',
        }}
        animate={{
          x: ['-100%', '100%'],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      
      {/* Subtle top highlight */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      
      {/* Logo & Title */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="flex items-center gap-3 relative z-10"
      >
        <div className="relative">
          {/* Rotating glow */}
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.3, 1],
            }}
            transition={{
              rotate: { duration: 10, repeat: Infinity, ease: 'linear' },
              scale: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
            }}
            className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 blur-2xl opacity-70"
          />
          
          {/* Icon container with animated border */}
          <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 p-[2px] shadow-lg shadow-blue-500/50">
            <div className="w-full h-full rounded-xl bg-[#0B0B12] flex items-center justify-center relative overflow-hidden">
              {/* Inner glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
              <motion.div
                animate={{
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="relative z-10"
              >
                <Brain className="w-5 h-5 text-white drop-shadow-lg" />
              </motion.div>
            </div>
          </div>
        </div>
        
        <div>
          <h1 className="text-base font-bold text-gradient tracking-tight leading-none">
            AI Data Copilot
          </h1>
          <p className="text-[9px] text-muted-foreground font-semibold tracking-widest uppercase mt-0.5">
            Neural Engine v2.0
          </p>
        </div>
      </motion.div>

      {/* Status Indicators */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="flex items-center gap-3 relative z-10"
      >
        {/* Processing Status */}
        <motion.div
          animate={{
            scale: isProcessing ? [1, 1.03, 1] : 1,
          }}
          transition={{
            duration: 2,
            repeat: isProcessing ? Infinity : 0,
          }}
          className="flex items-center gap-2.5 px-4 py-2.5 rounded-full glass-ultra border border-white/10 backdrop-blur-2xl shadow-lg"
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
            <Activity className={`w-4 h-4 ${isProcessing ? 'text-blue-400 drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]' : 'text-muted-foreground'}`} />
          </motion.div>
          <span className={`text-xs font-semibold ${isProcessing ? 'text-blue-400' : 'text-foreground'}`}>
            {isProcessing ? 'Processing' : 'Ready'}
          </span>
          {isProcessing && (
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-blue-400"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [1, 0.5, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            />
          )}
        </motion.div>

        {/* AI Status with animated border */}
        <div className="relative">
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 blur-lg"
            animate={{
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          />
          <div className="relative flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-gradient-to-r from-blue-500/15 via-purple-500/15 to-cyan-500/15 border border-blue-500/40 backdrop-blur-xl shadow-lg shadow-blue-500/20">
            <motion.div
              animate={{
                scale: [1, 1.4, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            >
              <Sparkles className="w-4 h-4 text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,1)]" />
            </motion.div>
            <span className="text-xs font-bold text-gradient">
              AI Active
            </span>
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [1, 0.6, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
