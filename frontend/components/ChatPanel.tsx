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
    <div className="h-full flex flex-col bg-black/10">
      {/* Chat Header */}
      <div className="p-6 border-b border-white/10 glass">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-lg font-bold text-foreground">
            AI Assistant
          </h2>
          {selectedDataset && (
            <span className="ml-auto text-xs px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 border border-blue-500/30 font-medium">
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
                <div className="w-10 h-10 rounded-xl glass-strong flex items-center justify-center border border-white/10 flex-shrink-0">
                  <Bot className="w-5 h-5 text-blue-400" />
                </div>
              )}

              <div
                className={`max-w-[70%] rounded-2xl p-5 relative ${
                  message.role === "user"
                    ? "bg-gradient-to-br from-blue-500 to-purple-500 text-white shadow-lg"
                    : "card-premium"
                }`}
              >
                <p className="text-sm leading-relaxed">
                  {message.isTyping ? (
                    <TypewriterText text={message.content} speed={30} />
                  ) : (
                    message.content
                  )}
                </p>
                <span className="text-xs opacity-70 mt-3 block font-medium">
                  {message.timestamp.toLocaleTimeString()}
                </span>

                {/* Particle effect on send */}
                {message.role === "user" && showParticles && (
                  <ParticleEffect trigger={true} color="cyan" />
                )}
              </div>

              {message.role === "user" && (
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <User className="w-5 h-5 text-white" />
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
      <div className="p-6 border-t border-white/10 glass relative">
        <div className="flex gap-4">
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
              className="w-full input-premium px-5 py-4 text-sm text-foreground placeholder-muted-foreground disabled:opacity-50 disabled:cursor-not-allowed font-medium"
            />
            {/* Animated border on focus */}
            <motion.div
              className="absolute inset-0 rounded-xl pointer-events-none"
              animate={{
                boxShadow: input
                  ? "0 0 0 2px hsl(var(--primary) / 0.3)"
                  : "0 0 0 0px hsl(var(--primary) / 0)",
              }}
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSend}
            disabled={!input.trim() || !selectedDataset}
            className="relative px-8 py-4 btn-primary rounded-xl text-white font-semibold flex items-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed transition-all overflow-hidden"
          >
            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 shimmer"
              animate={{
                x: ["-100%", "200%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1,
              }}
            />
            <Send className="w-5 h-5 relative z-10" />
            <span className="relative z-10">Send</span>
          </motion.button>
        </div>
      </div>
    </div>
  );
}
