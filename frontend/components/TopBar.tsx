"use client";

import { motion } from "framer-motion";
import { Brain, Activity, Sparkles } from "lucide-react";

interface TopBarProps {
  isProcessing: boolean;
}

export default function TopBar({ isProcessing }: TopBarProps) {
  return (
    <motion.div 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="mx-4 mt-4 mb-0"
    >
      <div className="rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 p-0.5">
            <div className="w-full h-full rounded-xl bg-[#0A0A0F] flex items-center justify-center">
              <Brain className="w-5 h-5 text-blue-400" />
            </div>
          </div>
          <div>
            <h1 className="text-base font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              AI Data Copilot
            </h1>
            <p className="text-[10px] text-gray-500 font-medium">Neural Engine v2.0</p>
          </div>
        </div>

        {/* Status */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10">
            <Activity className={`w-4 h-4 ${isProcessing ? 'text-blue-400' : 'text-gray-400'}`} />
            <span className="text-sm font-medium text-gray-300">
              {isProcessing ? 'Processing' : 'Ready'}
            </span>
          </div>
          
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-bold text-blue-400">AI Active</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
