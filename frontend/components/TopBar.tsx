"use client";

import { motion } from "framer-motion";
import { Brain, Activity, Sparkles, Zap } from "lucide-react";

interface TopBarProps {
  isProcessing: boolean;
}

export default function TopBar({ isProcessing }: TopBarProps) {
  return (
    <motion.div 
      initial={{ y: -100, opacity: 0, scale: 0.95 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="mx-6 mt-6 mb-0 rounded-3xl relative overflow-hidden group"
    >
      {/* INSANE GLASS EFFECT WITH MULTIPLE LAYERS */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-3xl" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-cyan-500/10" />
      
      {/* ANIMATED BORDER GRADIENT */}
      <div className="absolute inset-0 rounded-3xl p-[2px] bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-cyan-500/50 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-[2px] rounded-3xl bg-[#0B0B12]/80 backdrop-blur-3xl" />
      </div>
      
      {/* FLOWING GRADIENT LINE */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[3px] z-20"
        style={{
          background: 'linear-gradient(90deg, transparent, #3B82F6, #8B5CF6, #EC4899, #22D3EE, transparent)',
        }}
        animate={{
          x: ['-100%', '100%'],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      
      {/* TOP HIGHLIGHT */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent z-20" />
      
      {/* CONTENT */}
      <div className="relative z-10 flex items-center justify-between px-8 py-4">
        {/* LEFT: LOGO */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex items-center gap-4"
        >
          {/* INSANE LOGO WITH 3D EFFECT */}
          <div className="relative">
            {/* MASSIVE ROTATING GLOW */}
            <motion.div
              animate={{
                rotate: 360,
                scale: [1, 1.4, 1],
              }}
              transition={{
                rotate: { duration: 12, repeat: Infinity, ease: 'linear' },
                scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
              }}
              className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 blur-3xl opacity-80"
            />
            
            {/* PULSING RING */}
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="absolute inset-0 rounded-2xl border-2 border-blue-400"
            />
            
            {/* LOGO CONTAINER */}
            <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 p-[3px] shadow-2xl shadow-blue-500/50">
              <div className="w-full h-full rounded-2xl bg-[#0B0B12] flex items-center justify-center relative overflow-hidden">
                {/* INNER GRADIENT */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-purple-500/20 to-cyan-500/30" />
                
                {/* ANIMATED ICON */}
                <motion.div
                  animate={{
                    rotate: [0, 8, -8, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="relative z-10"
                >
                  <Brain className="w-7 h-7 text-white drop-shadow-[0_0_15px_rgba(59,130,246,1)]" />
                </motion.div>
                
                {/* SPARKLE EFFECT */}
                <motion.div
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="absolute top-1 right-1"
                >
                  <Sparkles className="w-3 h-3 text-cyan-400" />
                </motion.div>
              </div>
            </div>
          </div>
          
          {/* TITLE WITH INSANE GRADIENT */}
          <div>
            <motion.h1 
              className="text-xl font-black tracking-tight leading-none relative"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{
                background: 'linear-gradient(90deg, #60A5FA, #A78BFA, #F472B6, #22D3EE, #60A5FA)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.5))',
              }}
            >
              AI Data Copilot
            </motion.h1>
            <div className="flex items-center gap-2 mt-1">
              <motion.div
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-green-400 to-cyan-400 shadow-lg shadow-green-400/50"
              />
              <p className="text-[10px] text-muted-foreground font-bold tracking-widest uppercase">
                Neural Engine v3.0 • Live
              </p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT: STATUS INDICATORS */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex items-center gap-4"
        >
          {/* PROCESSING STATUS */}
          <motion.div
            animate={{
              scale: isProcessing ? [1, 1.05, 1] : 1,
            }}
            transition={{
              duration: 2,
              repeat: isProcessing ? Infinity : 0,
            }}
            className="relative"
          >
            <div className="flex items-center gap-3 px-5 py-3 rounded-2xl glass-ultra border border-white/10 backdrop-blur-2xl shadow-xl relative overflow-hidden">
              {/* BACKGROUND GLOW */}
              {isProcessing && (
                <motion.div
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20"
                />
              )}
              
              <motion.div
                animate={{
                  rotate: isProcessing ? 360 : 0,
                }}
                transition={{
                  duration: 2,
                  repeat: isProcessing ? Infinity : 0,
                  ease: 'linear',
                }}
                className="relative z-10"
              >
                <Activity className={`w-5 h-5 ${isProcessing ? 'text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,1)]' : 'text-muted-foreground'}`} />
              </motion.div>
              <span className={`text-sm font-bold relative z-10 ${isProcessing ? 'text-blue-400' : 'text-foreground'}`}>
                {isProcessing ? 'Processing' : 'Ready'}
              </span>
              {isProcessing && (
                <motion.div
                  className="w-2 h-2 rounded-full bg-blue-400 relative z-10"
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
            </div>
          </motion.div>

          {/* AI ACTIVE STATUS - INSANE VERSION */}
          <div className="relative">
            {/* MASSIVE PULSING GLOW */}
            <motion.div
              className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 blur-2xl"
              animate={{
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            />
            
            <div className="relative flex items-center gap-3 px-5 py-3 rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 border-2 border-blue-500/50 backdrop-blur-xl shadow-2xl shadow-blue-500/30">
              <motion.div
                animate={{
                  scale: [1, 1.5, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              >
                <Sparkles className="w-5 h-5 text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,1)]" />
              </motion.div>
              <span className="text-sm font-black text-gradient">
                AI Active
              </span>
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [1, 0.6, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                <Zap className="w-4 h-4 text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,1)]" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
