"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Terminal, CheckCircle, AlertCircle, Info } from "lucide-react";
import { useEffect, useState } from "react";

interface LogEntry {
  id: string;
  type: "info" | "success" | "warning";
  message: string;
  timestamp: string;
}

interface LiveDevLogProps {
  logs: LogEntry[];
}

export default function LiveDevLog({ logs }: LiveDevLogProps) {
  const iconMap = {
    info: Info,
    success: CheckCircle,
    warning: AlertCircle,
  };

  const colorMap = {
    info: "text-blue-400",
    success: "text-green-400",
    warning: "text-yellow-400",
  };

  return (
    <div className="h-full flex flex-col">
      <div className="p-4 border-b border-white/10">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-green-400" />
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
            Live Activity Log
          </h3>
          <motion.div
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
            className="ml-auto w-2 h-2 rounded-full bg-green-400"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-2 font-mono text-xs">
        <AnimatePresence>
          {logs.map((log, index) => {
            const Icon = iconMap[log.type];
            return (
              <motion.div
                key={log.id}
                initial={{ opacity: 0, x: -20, height: 0 }}
                animate={{ opacity: 1, x: 0, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="flex items-start gap-2 p-2 rounded-lg bg-white/5 border border-white/5"
              >
                <Icon className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${colorMap[log.type]}`} />
                <div className="flex-1 min-w-0">
                  <div className="text-gray-300">{log.message}</div>
                  <div className="text-gray-600 text-[10px] mt-1">{log.timestamp}</div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
