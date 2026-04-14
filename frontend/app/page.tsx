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
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-4">
            <h3 className="text-sm font-semibold mb-4 text-slate-300">Datasets</h3>
            
            <div className="border-2 border-dashed border-slate-700 rounded-lg p-6 text-center hover:border-blue-500/50 transition-colors cursor-pointer mb-4">
              <Upload className="w-6 h-6 mx-auto mb-2 text-slate-500" />
              <p className="text-xs text-slate-500">Drop CSV here</p>
            </div>

            <div
              onClick={() => setSelectedDataset("1")}
              className={`p-3 rounded-lg cursor-pointer transition-all ${
                selectedDataset === "1"
                  ? "bg-blue-500/20 border-2 border-blue-500"
                  : "bg-slate-800/50 border border-slate-700 hover:bg-slate-800"
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <Database className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-medium">sales_data.csv</span>
              </div>
              <p className="text-xs text-slate-500">1,250 rows • 8 cols</p>
            </div>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-4">
            <h3 className="text-sm font-semibold mb-3 text-slate-300">Tech Stack</h3>
            <div className="space-y-2">
              {["Next.js", "FastAPI", "GPT-4"].map((tech) => (
                <div key={tech} className="px-3 py-2 bg-slate-800/50 rounded-lg text-sm border border-slate-700">
                  {tech}
                </div>
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
          <div className="flex-1 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 flex flex-col">
            <div className="flex-1 overflow-y-auto mb-4 space-y-3">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-xl max-w-[80%] ${
                    msg.role === "user"
                      ? "ml-auto bg-blue-600 text-white"
                      : "bg-slate-800 border border-slate-700"
                  }`}
                >
                  {msg.content}
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
                className="flex-1 px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all disabled:opacity-50"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || !selectedDataset}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-medium hover:from-blue-500 hover:to-purple-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
                Send
              </button>
            </div>
          </div>

          {/* Workflow Steps */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-4"
          >
            <div className="flex justify-center gap-8">
              {workflowSteps.map((step, index) => {
                const Icon = step.icon;
                const isActive = currentStep === index + 1;
                const isComplete = currentStep > index + 1;
                
                return (
                  <div key={step.name} className="flex flex-col items-center">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                        isActive
                          ? "bg-blue-600 scale-110"
                          : isComplete
                          ? "bg-green-600"
                          : "bg-slate-800 border border-slate-700"
                      }`}
                    >
                      <Icon className={`w-5 h-5 ${isActive || isComplete ? "text-white" : "text-slate-500"}`} />
                    </div>
                    <span className={`text-xs mt-2 ${isActive ? step.color : "text-slate-500"}`}>
                      {step.name}
                    </span>
                  </div>
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
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-4">
            <h3 className="text-sm font-semibold mb-4 text-slate-300">Insights</h3>
            <div className="h-48 bg-slate-800/50 rounded-lg border border-slate-700 flex items-center justify-center">
              <p className="text-sm text-slate-500">Chart visualization</p>
            </div>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-4">
            <h3 className="text-sm font-semibold mb-3 text-slate-300">Stats</h3>
            <div className="space-y-2">
              <div className="flex justify-between p-3 bg-slate-800/50 rounded-lg border border-slate-700">
                <span className="text-sm text-slate-400">Queries</span>
                <span className="text-sm font-semibold text-blue-400">24</span>
              </div>
              <div className="flex justify-between p-3 bg-slate-800/50 rounded-lg border border-slate-700">
                <span className="text-sm text-slate-400">Avg Time</span>
                <span className="text-sm font-semibold text-green-400">2.3s</span>
              </div>
              <div className="flex justify-between p-3 bg-slate-800/50 rounded-lg border border-slate-700">
                <span className="text-sm text-slate-400">Success</span>
                <span className="text-sm font-semibold text-purple-400">98%</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
