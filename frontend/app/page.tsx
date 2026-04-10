"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Sidebar from "@/components/Sidebar";
import ChatPanel from "@/components/ChatPanel";
import InsightsPanel from "@/components/InsightsPanel";
import TopBar from "@/components/TopBar";

export default function Home() {
  const [selectedDataset, setSelectedDataset] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      {/* Top Bar */}
      <TopBar isProcessing={isProcessing} />

      {/* Main Content - 3 Panel Layout */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar - Dataset Management */}
        <motion.div
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-80 border-r border-cyan-500/20"
        >
          <Sidebar
            selectedDataset={selectedDataset}
            onSelectDataset={setSelectedDataset}
          />
        </motion.div>

        {/* Center Panel - Chat Interface */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-1 border-r border-cyan-500/20"
        >
          <ChatPanel
            selectedDataset={selectedDataset}
            onProcessingChange={setIsProcessing}
          />
        </motion.div>

        {/* Right Panel - Insights & Visualizations */}
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-96"
        >
          <InsightsPanel />
        </motion.div>
      </div>
    </div>
  );
}
