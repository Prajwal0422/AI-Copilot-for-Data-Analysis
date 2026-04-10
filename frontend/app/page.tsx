"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Sidebar from "@/components/Sidebar";
import ChatPanel from "@/components/ChatPanel";
import InsightsPanel from "@/components/InsightsPanel";
import TopBar from "@/components/TopBar";
import CommandPalette from "@/components/CommandPalette";

export default function Home() {
  const [selectedDataset, setSelectedDataset] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  // Command Palette keyboard shortcut (Cmd+K or Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleProcessingChange = (processing: boolean) => {
    setIsProcessing(processing);
    if (processing) {
      // Simulate workflow progression
      setCurrentStep(0);
      const steps = [0, 1, 2, 3, 4, 5];
      steps.forEach((step, index) => {
        setTimeout(() => {
          setCurrentStep(step);
        }, index * 400);
      });
    } else {
      setCurrentStep(0);
    }
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      {/* Command Palette */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
      />

      {/* Top Bar */}
      <TopBar isProcessing={isProcessing} />

      {/* Main Content - 3 Panel Layout */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar - Dataset Management */}
        <motion.div
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-72 border-r border-white/5"
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
          className="flex-1 border-r border-white/5"
        >
          <ChatPanel
            selectedDataset={selectedDataset}
            onProcessingChange={handleProcessingChange}
          />
        </motion.div>

        {/* Right Panel - Insights & Visualizations */}
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-80"
        >
          <InsightsPanel 
            isProcessing={isProcessing}
            currentStep={currentStep}
          />
        </motion.div>
      </div>
    </div>
  );
}
