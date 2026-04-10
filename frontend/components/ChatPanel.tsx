"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Sparkles, User, Bot } from "lucide-react";
import TypewriterText from "./TypewriterText";
import ParticleEffect from "./ParticleEffect";

interface ChatPanelProps {
  selectedDataset: string | null;
  onProcessingChange: (processing: boolean) => void;
}

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
  isTyping?: boolean;
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
      isTyping: false,
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showParticles, setShowParticles] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    // Trigger particle effect
    setShowParticles(true);
    setTimeout(() => setShowParticles(false), 100);

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date(),
      isTyping: false,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);
    onProcessingChange(true);

    // Simulate AI response with typewriter effect
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content:
          "I'm analyzing your data using advanced AI algorithms. Based on the patterns I've detected, here are some key insights: Your dataset shows interesting correlations that could be valuable for decision-making.",
        timestamp: new Date(),
        isTyping: true,
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
      
      // Mark typing as complete after animation
      setTimeout(() => {
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === aiMessage.id ? { ...msg, isTyping: false } : msg
          )
        );
        onProcessingChange(false);
      }, aiMessage.content.length * 30 + 500);
    }, 2000);
  };

  return (
    <div className="h-full flex flex-col relative">
      {/* Chat Header */}
      <div className="p-4 border-b border-white/5 glass-ultra">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 p-[1px]">
            <div className="w-full h-full rounded-lg bg-[#0A0A0F] flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-blue-400" />
            </div>
          </div>
          <h2 className="text-sm font-bold text-foreground">
            AI Assistant
          </h2>
          {selectedDataset && (
            <span className="ml-auto text-[10px] px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 border border-blue-500/20 font-semibold uppercase tracking-wide">
              Active
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
                <div className="w-8 h-8 rounded-xl glass-ultra flex items-center justify-center border border-blue-500/20 flex-shrink-0">
                  <Bot className="w-4 h-4 text-blue-400" />
                </div>
              )}

              <div
                className={`max-w-[70%] rounded-2xl p-4 relative ${
                  message.role === "user"
                    ? "bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/20"
                    : "card-ultra"
                }`}
              >
                <p className="text-sm leading-relaxed">
                  {message.isTyping ? (
                    <TypewriterText text={message.content} speed={30} />
                  ) : (
                    message.content
                  )}
                </p>
                <span className="text-[10px] opacity-60 mt-2 block font-medium">
                  {message.timestamp.toLocaleTimeString('en-US', { 
                    hour: '2-digit', 
                    minute: '2-digit',
                    hour12: false 
                  })}
                </span>

                {/* Particle effect on send */}
                {message.role === "user" && showParticles && (
                  <ParticleEffect trigger={true} color="cyan" />
                )}
              </div>

              {message.role === "user" && (
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-pink-500/20">
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
            <div className="w-10 h-10 rounded-xl glass-strong flex items-center justify-center border border-white/10">
              <Bot className="w-5 h-5 text-blue-400" />
            </div>
            <div className="card-premium rounded-2xl p-5">
              <div className="flex gap-2">
                <motion.div
                  animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="w-2.5 h-2.5 bg-blue-400 rounded-full"
                />
                <motion.div
                  animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 0.8, repeat: Infinity, delay: 0.2 }}
                  className="w-2.5 h-2.5 bg-purple-400 rounded-full"
                />
                <motion.div
                  animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 0.8, repeat: Infinity, delay: 0.4 }}
                  className="w-2.5 h-2.5 bg-pink-400 rounded-full"
                />
              </div>
            </div>
          </motion.div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-white/5 glass-ultra relative">
        <div className="flex gap-3">
          <div className="flex-1 relative">
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
              className="w-full input-ultra px-4 py-3 text-sm text-foreground placeholder-muted-foreground disabled:opacity-50 disabled:cursor-not-allowed font-medium"
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleSend}
            disabled={!input.trim() || !selectedDataset}
            className="relative px-6 py-3 btn-premium rounded-xl text-white text-sm font-bold flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all overflow-hidden"
          >
            <Send className="w-4 h-4 relative z-10" />
            <span className="relative z-10">Send</span>
          </motion.button>
        </div>
      </div>
    </div>
  );
}
