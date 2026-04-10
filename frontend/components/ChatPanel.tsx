"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Sparkles, User, Bot } from "lucide-react";

interface ChatPanelProps {
  selectedDataset: string | null;
  onProcessingChange: (processing: boolean) => void;
}

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export default function ChatPanel({
  selectedDataset,
  onProcessingChange,
}: ChatPanelProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content:
        "👋 Hello! I'm your AI Data Copilot. Upload a dataset and ask me anything about your data. I can analyze, visualize, and provide insights!",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);
    onProcessingChange(true);

    // Simulate AI response (will connect to backend later)
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content:
          "I'm analyzing your request. This will be connected to the AI backend soon!",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
      onProcessingChange(false);
    }, 2000);
  };

  return (
    <div className="h-full flex flex-col bg-slate-950/30">
      {/* Chat Header */}
      <div className="p-4 border-b border-cyan-500/20 glass">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-cyan-400" />
          <h2 className="text-lg font-semibold text-slate-200">
            AI Assistant
          </h2>
          {selectedDataset && (
            <span className="ml-auto text-xs px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
              Dataset Active
            </span>
          )}
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        <AnimatePresence>
          {messages.map((message, index) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: index * 0.1 }}
              className={`flex gap-3 ${
                message.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {message.role === "assistant" && (
                <div className="w-8 h-8 rounded-full glass-strong flex items-center justify-center border border-cyan-500/30 flex-shrink-0">
                  <Bot className="w-4 h-4 text-cyan-400" />
                </div>
              )}

              <div
                className={`max-w-[70%] rounded-2xl p-4 ${
                  message.role === "user"
                    ? "bg-gradient-to-br from-cyan-500 to-cyan-600 text-white"
                    : "glass-strong border border-cyan-500/20"
                }`}
              >
                <p className="text-sm leading-relaxed">{message.content}</p>
                <span className="text-xs opacity-60 mt-2 block">
                  {message.timestamp.toLocaleTimeString()}
                </span>
              </div>

              {message.role === "user" && (
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                  <User className="w-4 h-4 text-white" />
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Typing Indicator */}
        {isTyping && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex gap-3"
          >
            <div className="w-8 h-8 rounded-full glass-strong flex items-center justify-center border border-cyan-500/30">
              <Bot className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="glass-strong border border-cyan-500/20 rounded-2xl p-4">
              <div className="flex gap-1">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.6, repeat: Infinity }}
                  className="w-2 h-2 bg-cyan-400 rounded-full"
                />
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                  className="w-2 h-2 bg-cyan-400 rounded-full"
                />
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                  className="w-2 h-2 bg-cyan-400 rounded-full"
                />
              </div>
            </div>
          </motion.div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-cyan-500/20 glass">
        <div className="flex gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            placeholder={
              selectedDataset
                ? "Ask anything about your data..."
                : "Upload a dataset to start..."
            }
            disabled={!selectedDataset}
            className="flex-1 bg-slate-900/50 border border-cyan-500/30 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 disabled:opacity-50 disabled:cursor-not-allowed"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSend}
            disabled={!input.trim() || !selectedDataset}
            className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-xl text-white font-medium flex items-center gap-2 hover:from-cyan-600 hover:to-cyan-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all glow-cyan"
          >
            <Send className="w-4 h-4" />
            Send
          </motion.button>
        </div>
      </div>
    </div>
  );
}
