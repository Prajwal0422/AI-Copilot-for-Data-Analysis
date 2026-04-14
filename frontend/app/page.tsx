"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Upload, Database, Send, Activity, Zap, CheckCircle } from "lucide-react";

export default function Home() {
  const [messages, setMessages] = useState([
    { id: 1, role: "assistant", content: "Hello! Upload a dataset to get started." }
  ]);
  const [input, setInput] = useState("");
  const [selectedDataset, setSelectedDataset] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState(0);

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

    // Simulate workflow
    setTimeout(() => setCurrentStep(2), 800);
    setTimeout(() => setCurrentStep(3), 1600);
    setTimeout(() => {
      setCurrentStep(4);
      setMessages(prev => [...prev, {
        id: Date.now(),
        role: "assistant",
        content: "Analysis complete! Your data shows a 23% increase in Q4 revenue."
      }]);
      setTimeout(() => setCurrentStep(0), 1000);
    }, 2400);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Top Navigation */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-semibold">AI Copilot</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm text-slate-400">Live</span>
            </div>
            <span className="text-sm text-slate-500">GPT-4</span>
          </div>
        </div>
      </motion.nav>

      {/* Main Layout - 3 Panels */}
      <div className="max-w-7xl mx-auto p-6 flex gap-6 h-[calc(100vh-80px)]">
        {/* Left Panel - Datasets */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="w-64 flex flex-col gap-4"
        >
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-4 hover:border-slate-700 transition-all shadow-lg hover:shadow-xl">
            <h3 className="text-sm font-semibold mb-4 text-slate-300">Datasets</h3>
            
            <motion.div
              whileHover={{ scale: 1.02, borderColor: "rgba(59, 130, 246, 0.5)" }}
              className="border-2 border-dashed border-slate-700 rounded-lg p-6 text-center hover:bg-slate-800/30 transition-all cursor-pointer mb-4"
            >
              <Upload className="w-6 h-6 mx-auto mb-2 text-slate-500" />
              <p className="text-xs text-slate-500">Drop CSV here</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedDataset("1")}
              className={`p-3 rounded-lg cursor-pointer transition-all ${
                selectedDataset === "1"
                  ? "bg-blue-500/20 border-2 border-blue-500 shadow-lg shadow-blue-500/30"
                  : "bg-slate-800/50 border border-slate-700 hover:bg-slate-800 hover:border-slate-600"
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <Database className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-medium">sales_data.csv</span>
              </div>
              <p className="text-xs text-slate-500">1,250 rows • 8 cols</p>
            </motion.div>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-4 hover:border-slate-700 transition-all shadow-lg hover:shadow-xl">
            <h3 className="text-sm font-semibold mb-3 text-slate-300">Tech Stack</h3>
            <div className="space-y-2">
              {["Next.js", "FastAPI", "GPT-4"].map((tech, i) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  whileHover={{ scale: 1.03, x: 4 }}
                  className="px-3 py-2 bg-slate-800/50 rounded-lg text-sm border border-slate-700 hover:border-slate-600 hover:bg-slate-800 transition-all"
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Center - Chat + Workflow */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex-1 flex flex-col gap-4"
        >
          {/* Chat */}
          <div className="flex-1 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 flex flex-col shadow-lg hover:shadow-xl transition-all">
            <div className="flex-1 overflow-y-auto mb-4 space-y-3">
              {messages.map((msg, index) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`p-4 rounded-xl max-w-[80%] ${
                    msg.role === "user"
                      ? "ml-auto bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/30"
                      : "bg-slate-800/80 border border-slate-700/50 shadow-md"
                  }`}
                >
                  <p className="text-sm leading-relaxed">{msg.content}</p>
                </motion.div>
              ))}
            </div>

            <div className="flex gap-3">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder={selectedDataset ? "Ask your data anything..." : "Select a dataset first"}
                disabled={!selectedDataset}
                className="flex-1 px-5 py-3.5 bg-slate-800/50 border border-slate-700 rounded-xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 focus:bg-slate-800 transition-all disabled:opacity-50 placeholder:text-slate-500"
              />
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleSend}
                disabled={!input.trim() || !selectedDataset}
                className="px-7 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-medium hover:from-blue-500 hover:to-purple-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40"
              >
                <Send className="w-4 h-4" />
                Send
              </motion.button>
            </div>
          </div>

          {/* Workflow Steps */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-4 shadow-lg"
          >
            <div className="flex justify-center gap-8">
              {workflowSteps.map((step, index) => {
                const Icon = step.icon;
                const isActive = currentStep === index + 1;
                const isComplete = currentStep > index + 1;
                
                return (
                  <motion.div
                    key={step.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex flex-col items-center"
                  >
                    <motion.div
                      animate={{
                        scale: isActive ? 1.15 : 1,
                        backgroundColor: isComplete
                          ? "rgb(34, 197, 94)"
                          : isActive
                          ? "rgb(59, 130, 246)"
                          : "rgb(30, 41, 59)"
                      }}
                      transition={{ duration: 0.3 }}
                      className={`w-12 h-12 rounded-full flex items-center justify-center border-2 ${
                        isActive
                          ? "border-blue-400 shadow-lg shadow-blue-500/50"
                          : isComplete
                          ? "border-green-400 shadow-lg shadow-green-500/50"
                          : "border-slate-700"
                      }`}
                    >
                      <Icon className={`w-5 h-5 ${isActive || isComplete ? "text-white" : "text-slate-500"}`} />
                    </motion.div>
                    <span className={`text-xs mt-2 font-medium transition-colors ${
                      isActive ? step.color : isComplete ? "text-green-400" : "text-slate-500"
                    }`}>
                      {step.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>

        {/* Right Panel - Output */}
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="w-96 flex flex-col gap-4"
        >
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-4 hover:border-slate-700 transition-all shadow-lg hover:shadow-xl">
            <h3 className="text-sm font-semibold mb-4 text-slate-300">Insights</h3>
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="h-48 bg-gradient-to-br from-slate-800/50 to-slate-800/30 rounded-lg border border-slate-700 flex items-center justify-center overflow-hidden relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <p className="text-sm text-slate-500 relative z-10">Chart visualization</p>
            </motion.div>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-4 hover:border-slate-700 transition-all shadow-lg hover:shadow-xl">
            <h3 className="text-sm font-semibold mb-3 text-slate-300">Stats</h3>
            <div className="space-y-2">
              {[
                { label: "Queries", value: "24", color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/30" },
                { label: "Avg Time", value: "2.3s", color: "text-green-400", bg: "bg-green-500/10", border: "border-green-500/30" },
                { label: "Success", value: "98%", color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/30" }
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  whileHover={{ scale: 1.03, x: -4 }}
                  className={`flex justify-between p-3 ${stat.bg} rounded-lg border ${stat.border} hover:border-opacity-70 transition-all shadow-sm`}
                >
                  <span className="text-sm text-slate-400">{stat.label}</span>
                  <span className={`text-sm font-semibold ${stat.color}`}>{stat.value}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
