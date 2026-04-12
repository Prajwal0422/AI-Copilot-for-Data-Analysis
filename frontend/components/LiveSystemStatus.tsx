"use client";

import { motion } from "framer-motion";
import { Brain, Activity, Cpu, Database } from "lucide-react";

interface LiveSystemStatusProps {
  aiStatus: "idle" | "thinking" | "processing" | "executing";
  currentTask: string;
  activeModel: string;
}

export default function LiveSystemStatus({ aiStatus, currentTask, activeModel }: LiveSystemStatusProps) {
  const statusColors = {
    idle: "text-gray-400",
    thinking: "text-blue-400",
    processing: "text-purple-400",
    executing: "text-green-400",
  };

  const statusLabels = {
    idle: "Idle",
    thinking: "Thinking",
    processing: "Processing",
    executing: "Executing",
  };

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="mx-4 mt-4 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 px-6 py-3 flex items-center justify-between shadow-2xl"
    >
      {/* Left: AI Status */}
      <div className="flex items-center gap-6">
        {/* Live Indicator */}
        <div className="flex items-center gap-2">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className={`w-2 h-2 rounded-full ${
              aiStatus === "idle" ? "bg-gray-400" : "bg-green-400"
            }`}
          />
          <span className="text-xs font-medium text-gray-400">LIVE</span>
        </div>

        {/* AI Status */}
        <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white/5 border border-white/10">
          <motion.div
            animate={{
              rotate: aiStatus !== "idle" ? 360 : 0,
            }}
            transition={{
              duration: 2,
              repeat: aiStatus !== "idle" ? Infinity : 0,
              ease: "linear",
            }}
          >
            <Brain className={`w-4 h-4 ${statusColors[aiStatus]}`} />
          </motion.div>
          <div>
            <div className="text-xs text-gray-500 font-medium">AI Status</div>
            <div className={`text-sm font-bold ${statusColors[aiStatus]}`}>
              {statusLabels[aiStatus]}
            </div>
          </div>
        </div>

        {/* Active Model */}
        <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white/5 border border-white/10">
          <Cpu className="w-4 h-4 text-purple-400" />
          <div>
            <div className="text-xs text-gray-500 font-medium">Model</div>
            <div className="text-sm font-bold text-purple-400">{activeModel}</div>
          </div>
        </div>

        {/* Current Task */}
        {currentTask && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20"
          >
            <Activity className="w-4 h-4 text-blue-400" />
            <div>
              <div className="text-xs text-gray-500 font-medium">Current Task</div>
              <div className="text-sm font-bold text-blue-400">{currentTask}</div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Right: System Info */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5">
          <Database className="w-3.5 h-3.5 text-cyan-400" />
          <span className="text-xs font-medium text-gray-400">Connected</span>
        </div>
      </div>
    </motion.div>
  );
}
