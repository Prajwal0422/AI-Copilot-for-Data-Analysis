"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Upload, Database, Send, Activity, Zap, CheckCircle, TrendingUp } from "lucide-react";

export default function Home() {
  const [messages, setMessages] = useState([
    { id: 1, role: "assistant", content: "Hello! Upload a dataset to get started." }
  ]);
  const [input, setInput] = useState("");
  const [selectedDataset, setSelectedDataset] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  const workflowSteps = [
    { name: "Query", icon: Activity, color: "text-cyan-400" },
    { name: "LLM", icon: Sparkles, color: "text-purple-400" },
    { name: "Tool", icon: Zap, color: "text-blue-400" },
    { name: "Execute", icon: CheckCircle, color: "text-green-400" }
  ];

  const handleSend = () => {
    if (!input.trim() || !selectedDataset) return;
    
    setMessages([...messages, { id: Date.now(), role: "user", content: input }]);
    setInput("");
    setCurrentStep(1);
    setIsTyping(true);

    setTimeout(() => setCurrentStep(2), 800);
    setTimeout(() => setCurrentStep(3), 1600);
    setTimeout(() => {
      setCurrentStep(4);
      setTimeout(() => {
        setIsTyping(false);
        setMessages(prev => [...prev, {
          id: Date.now(),
          role: "assistant",
          content: "Analysis complete! Your data shows a 23% increase in Q4 revenue with strong performance in December."
        }]);
        setTimeout(() => setCurrentStep(0), 1000);
      }, 400);
    }, 2400);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-hidden relative">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 100, 0],
            y: [0, -50, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[600px] h-[600px] bg-blue-500/30 rounded-full blur-[120px] -top-48 -left-48"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -80, 0],
            y: [0, 80, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 5 }}
          className="absolute w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-[120px] top-1/2 right-0"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.25, 0.45, 0.25],
            x: [0, 50, 0],
            y: [0, -80, 0]
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 10 }}
          className="absolute w-[550px] h-[550px] bg-pink-500/20 rounded-full blur-[120px] bottom-0 left-1/3"
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Top Navigation */}
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="border-b border-white/10 bg-black/20 backdrop-blur-xl"
        >
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-blue-500/50"
              >
                <Sparkles className="w-6 h-6 text-white" />
              </motion.div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  AI Copilot
                </h1>
                <p className="text-xs text-slate-400">Data Analysis Assistant</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full backdrop-blur-sm"
              >
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-lg shadow-green-400/50" />
                <span className="text-sm text-green-400 font-medium">Live</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full backdrop-blur-sm"
              >
                <span className="text-sm text-purple-400 font-medium">GPT-4 Turbo</span>
              </motion.div>
            </div>
          </div>
        </motion.nav>

        {/* Main Content - Placeholder */}
        <div className="max-w-7xl mx-auto p-6">
          <div className="text-center py-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            >
              Beautiful UI Loading...
            </motion.h2>
          </div>
        </div>
      </div>
    </div>
  );
}
