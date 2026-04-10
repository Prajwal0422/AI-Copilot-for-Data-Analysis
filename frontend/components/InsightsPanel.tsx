"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  BarChart3,
  PieChart,
  Activity,
  ArrowRight,
} from "lucide-react";
import WorkflowVisualization from "./WorkflowVisualization";

interface InsightsPanelProps {
  isProcessing?: boolean;
  currentStep?: number;
}

export default function InsightsPanel({ 
  isProcessing = false,
  currentStep = 0 
}: InsightsPanelProps) {
  return (
    <div className="h-full flex flex-col bg-black/10">
      {/* Header */}
      <div className="p-6 border-b border-white/10">
        <h2 className="text-lg font-bold text-foreground flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
            <BarChart3 className="w-5 h-5 text-white" />
          </div>
          <span>Insights & Workflow</span>
        </h2>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {/* AI Workflow Visualization - ENHANCED */}
        <div className="card-premium rounded-2xl p-6 relative overflow-hidden">
          {/* Animated background gradient */}
          {isProcessing && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5"
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            />
          )}

          <h3 className="text-base font-bold text-foreground mb-4 flex items-center gap-3 relative z-10">
            <Activity className="w-5 h-5 text-blue-400" />
            <span>AI Pipeline Status</span>
            {isProcessing && (
              <motion.span
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-sm text-blue-400 ml-auto font-medium"
              >
                Processing...
              </motion.span>
            )}
          </h3>

          <div className="relative z-10">
            <WorkflowVisualization 
              isProcessing={isProcessing} 
              currentStep={currentStep}
            />
          </div>
        </div>

        {/* Quick Stats */}
        <div className="card-premium rounded-2xl p-6">
          <h3 className="text-base font-bold text-foreground mb-5">
            Quick Stats
          </h3>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/10">
              <span className="text-sm font-medium text-muted-foreground">Total Queries</span>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">24</span>
            </div>

            <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-white/10">
              <span className="text-sm font-medium text-muted-foreground">Avg Response</span>
              <span className="text-2xl font-bold text-green-400">2.3s</span>
            </div>

            <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-white/10">
              <span className="text-sm font-medium text-muted-foreground">Success Rate</span>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">98%</span>
            </div>
          </div>
        </div>

        {/* Suggested Actions */}
        <div className="card-premium rounded-2xl p-6">
          <h3 className="text-base font-bold text-foreground mb-5">
            Suggested Actions
          </h3>

          <div className="space-y-3">
            {[
              "Show data summary",
              "Detect missing values",
              "Generate correlation matrix",
              "Create visualization",
            ].map((action, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
                className="w-full text-left p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500/30 transition-all group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground group-hover:text-blue-400 transition-colors">
                    {action}
                  </span>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-blue-400 transition-colors" />
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Placeholder for Charts */}
        <div className="card-premium rounded-2xl p-6">
          <h3 className="text-base font-bold text-foreground mb-5 flex items-center gap-3">
            <PieChart className="w-5 h-5 text-blue-400" />
            <span>Visualizations</span>
          </h3>

          <div className="h-56 rounded-xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 border border-white/10 flex items-center justify-center">
            <div className="text-center">
              <BarChart3 className="w-16 h-16 text-muted-foreground mx-auto mb-3 opacity-50" />
              <p className="text-sm text-muted-foreground font-medium">
                Charts will appear here
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
