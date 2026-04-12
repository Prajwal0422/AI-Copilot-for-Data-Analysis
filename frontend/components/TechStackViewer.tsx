"use client";

import { motion } from "framer-motion";
import { Code, Server, Brain, Database, Layers } from "lucide-react";

export default function TechStackViewer() {
  const techStack = [
    { name: "Next.js", category: "Frontend", icon: Code, color: "blue" },
    { name: "FastAPI", category: "Backend", icon: Server, color: "green" },
    { name: "GPT-4", category: "AI Model", icon: Brain, color: "purple" },
    { name: "Pandas", category: "Data", icon: Database, color: "cyan" },
    { name: "Tailwind", category: "Styling", icon: Layers, color: "pink" },
  ];

  const colorClasses = {
    blue: "from-blue-500/20 to-blue-600/20 border-blue-500/30 text-blue-400",
    green: "from-green-500/20 to-green-600/20 border-green-500/30 text-green-400",
    purple: "from-purple-500/20 to-purple-600/20 border-purple-500/30 text-purple-400",
    cyan: "from-cyan-500/20 to-cyan-600/20 border-cyan-500/30 text-cyan-400",
    pink: "from-pink-500/20 to-pink-600/20 border-pink-500/30 text-pink-400",
  };

  return (
    <div className="p-4">
      <h3 className="text-xs font-bold text-gray-400 mb-3 uppercase tracking-wider">
        Tech Stack
      </h3>
      <div className="space-y-2">
        {techStack.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02, x: 4 }}
            className={`p-3 rounded-xl bg-gradient-to-r ${
              colorClasses[tech.color as keyof typeof colorClasses]
            } border backdrop-blur-xl cursor-pointer group`}
          >
            <div className="flex items-center gap-3">
              <tech.icon className="w-4 h-4" />
              <div className="flex-1">
                <div className="text-sm font-bold">{tech.name}</div>
                <div className="text-xs opacity-70">{tech.category}</div>
              </div>
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.3,
                }}
                className="w-2 h-2 rounded-full bg-current"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
