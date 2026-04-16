"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Upload, Database, Send, Activity, Zap, CheckCircle, TrendingUp, BarChart3, PieChart, LineChart } from "lucide-react";

export default function Home() {
  const [messages, setMessages] = useState([
    { id: 1, role: "assistant", content: "Hello! Upload a dataset to get started." }
  ]);
  const [input, setInput] = useState("");
  const [selectedDataset, setSelectedDataset] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  const workflowSteps = [
    { name: "Query", icon: Activity, color: "from-cyan-400 to-blue-500" },
    { name: "LLM", icon: Sparkles, color: "from-purple-400 to-pink-500" },
    { name: "Tool", icon: Zap, color: "from-blue-400 to-cyan-500" },
    { name: "Execute", icon: CheckCircle, color: "from-green-400 to-emerald-500" }
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
          className="border-b border-white/10 bg-black/20 backdrop-blur-xl sticky top-0 z-50"
        >
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
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

        {/* Main Layout */}
        <div className="max-w-7xl mx-auto p-6 flex gap-6 h-[calc(100vh-88px)]">
          {/* Left Sidebar */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="w-80 space-y-6"
          >
            {/* Dataset Upload */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
              <h3 className="text-sm font-semibold mb-4 text-slate-300 flex items-center gap-2">
                <Database className="w-4 h-4" />
                Datasets
              </h3>
              
              <motion.div
                whileHover={{ scale: 1.02, borderColor: "rgba(59, 130, 246, 0.5)" }}
                className="border-2 border-dashed border-white/20 rounded-xl p-8 text-center hover:bg-white/5 transition-all cursor-pointer mb-4 group"
              >
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Upload className="w-8 h-8 mx-auto mb-3 text-slate-400 group-hover:text-blue-400 transition-colors" />
                </motion.div>
                <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">Drop CSV here</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedDataset("1")}
                className={`p-4 rounded-xl cursor-pointer transition-all ${
                  selectedDataset === "1"
                    ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-2 border-blue-500/50 shadow-lg shadow-blue-500/20"
                    : "bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20"
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <Database className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold">sales_data.csv</p>
                    <p className="text-xs text-slate-400">1,250 rows • 8 columns</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Tech Stack */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
              <h3 className="text-sm font-semibold mb-4 text-slate-300">Tech Stack</h3>
              <div className="space-y-3">
                {[
                  { name: "Next.js 14", color: "from-blue-400 to-cyan-400" },
                  { name: "FastAPI", color: "from-green-400 to-emerald-400" },
                  { name: "GPT-4", color: "from-purple-400 to-pink-400" }
                ].map((tech, i) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    whileHover={{ scale: 1.03, x: 4 }}
                    className={`px-4 py-3 rounded-xl bg-gradient-to-r ${tech.color} bg-opacity-10 border border-white/10 text-sm font-medium backdrop-blur-sm`}
                  >
                    {tech.name}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Center - Chat */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex-1 flex flex-col gap-4"
          >
            {/* Chat Container */}
            <div className="flex-1 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl flex flex-col">
              <div className="flex-1 overflow-y-auto mb-4 space-y-4 pr-2">
                <AnimatePresence>
                  {messages.map((msg, index) => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ delay: index * 0.05 }}
                      className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`p-4 rounded-2xl max-w-[85%] ${
                          msg.role === "user"
                            ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/30"
                            : "bg-white/10 border border-white/10 backdrop-blur-sm shadow-lg"
                        }`}
                      >
                        <p className="text-sm leading-relaxed">{msg.content}</p>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
                
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-start"
                  >
                    <div className="p-4 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-sm shadow-lg">
                      <div className="flex gap-2">
                        {[0, 1, 2].map((i) => (
                          <motion.div
                            key={i}
                            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                            className="w-2 h-2 bg-blue-400 rounded-full"
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              <div className="flex gap-3">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  placeholder={selectedDataset ? "Ask your data anything..." : "Select a dataset first"}
                  disabled={!selectedDataset}
                  className="flex-1 px-5 py-4 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 focus:bg-white/10 transition-all disabled:opacity-50 placeholder:text-slate-500 backdrop-blur-sm"
                />
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSend}
                  disabled={!input.trim() || !selectedDataset}
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 font-semibold hover:shadow-xl hover:shadow-blue-500/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send
                </motion.button>
              </div>
            </div>

            {/* Workflow */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl"
            >
              <div className="flex justify-between items-center">
                {workflowSteps.map((step, index) => {
                  const Icon = step.icon;
                  const isActive = currentStep === index + 1;
                  const isComplete = currentStep > index + 1;
                  
                  return (
                    <div key={step.name} className="flex items-center">
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        className="flex flex-col items-center"
                      >
                        <motion.div
                          animate={{
                            scale: isActive ? 1.2 : 1,
                          }}
                          className={`w-14 h-14 rounded-2xl flex items-center justify-center border-2 transition-all ${
                            isActive
                              ? `bg-gradient-to-br ${step.color} border-white/30 shadow-xl`
                              : isComplete
                              ? "bg-gradient-to-br from-green-400 to-emerald-500 border-white/30 shadow-lg"
                              : "bg-white/5 border-white/10"
                          }`}
                        >
                          <Icon className={`w-6 h-6 ${isActive || isComplete ? "text-white" : "text-slate-500"}`} />
                        </motion.div>
                        <span className={`text-xs mt-2 font-medium ${
                          isActive ? "text-blue-400" : isComplete ? "text-green-400" : "text-slate-500"
                        }`}>
                          {step.name}
                        </span>
                      </motion.div>
                      {index < workflowSteps.length - 1 && (
                        <div className="w-20 h-0.5 mx-3 mb-6 bg-white/10 relative overflow-hidden rounded-full">
                          {currentStep > index + 1 && (
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: "100%" }}
                              transition={{ duration: 0.5 }}
                              className="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-400"
                            />
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Sidebar */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="w-96 space-y-6"
          >
            {/* Insights */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
              <h3 className="text-sm font-semibold mb-4 text-slate-300 flex items-center gap-2">
                <BarChart3 className="w-4 h-4" />
                Insights
              </h3>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="h-48 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-xl border border-white/10 flex items-center justify-center overflow-hidden relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10 text-center">
                  <LineChart className="w-12 h-12 mx-auto mb-2 text-slate-400" />
                  <p className="text-sm text-slate-400">Chart visualization</p>
                </div>
              </motion.div>
            </div>

            {/* Stats */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
              <h3 className="text-sm font-semibold mb-4 text-slate-300">Performance</h3>
              <div className="space-y-3">
                {[
                  { label: "Total Queries", value: "24", icon: Activity, gradient: "from-blue-400 to-cyan-400" },
                  { label: "Avg Response", value: "2.3s", icon: Zap, gradient: "from-green-400 to-emerald-400" },
                  { label: "Success Rate", value: "98%", icon: TrendingUp, gradient: "from-purple-400 to-pink-400" }
                ].map((stat, i) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + i * 0.1 }}
                      whileHover={{ scale: 1.03, x: -4 }}
                      className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all backdrop-blur-sm"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${stat.gradient} flex items-center justify-center`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-sm text-slate-300">{stat.label}</span>
                      </div>
                      <span className={`text-lg font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                        {stat.value}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
