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
    <div className="h-full flex flex-col relative">
      {/* Header */}
      <div className="p-4 border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 p-[1px]">
            <div className="w-full h-full rounded-lg bg-[#0A0A0F] flex items-center justify-center">
              <BarChart3 className="w-4 h-4 text-blue-400" />
            </div>
          </div>
          <h2 className="text-sm font-bold text-foreground">Insights</h2>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {/* AI Workflow Visualization */}
        <div className="card-ultra rounded-2xl p-4 relative overflow-hidden">
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

          <h3 className="text-xs font-bold text-foreground mb-3 flex items-center gap-2 relative z-10">
            <Activity className="w-3.5 h-3.5 text-blue-400" />
            <span>AI Pipeline</span>
            {isProcessing && (
              <motion.span
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-[10px] text-blue-400 ml-auto font-semibold uppercase tracking-wide"
              >
                Processing
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
        <div className="card-ultra rounded-2xl p-4">
          <h3 className="text-xs font-bold text-foreground mb-3">
            Quick Stats
          </h3>

          <div className="space-y-2">
            <div className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/10">
              <span className="text-xs font-medium text-muted-foreground">Queries</span>
              <span className="text-lg font-bold text-gradient">24</span>
            </div>

            <div className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/10">
              <span className="text-xs font-medium text-muted-foreground">Response</span>
              <span className="text-lg font-bold text-green-400">2.3s</span>
            </div>

            <div className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/10">
              <span className="text-xs font-medium text-muted-foreground">Success</span>
              <span className="text-lg font-bold text-gradient">98%</span>
            </div>
          </div>
        </div>

        {/* Suggested Actions */}
        <div className="card-ultra rounded-2xl p-4">
          <h3 className="text-xs font-bold text-foreground mb-3">
            Quick Actions
          </h3>

          <div className="space-y-1.5">
            {[
              "Show data summary",
              "Detect missing values",
              "Generate correlation",
              "Create visualization",
            ].map((action, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.01, x: 2 }}
                whileTap={{ scale: 0.99 }}
                className="w-full text-left p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-blue-500/20 transition-all group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-foreground group-hover:text-blue-400 transition-colors">
                    {action}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-blue-400 transition-colors" />
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Placeholder for Charts */}
        <div className="card-ultra rounded-2xl p-4">
          <h3 className="text-xs font-bold text-foreground mb-3 flex items-center gap-2">
            <PieChart className="w-3.5 h-3.5 text-blue-400" />
            <span>Visualizations</span>
          </h3>

          <div className="h-40 rounded-xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 border border-white/5 flex items-center justify-center">
            <div className="text-center">
              <BarChart3 className="w-10 h-10 text-muted-foreground mx-auto mb-2 opacity-30" />
              <p className="text-xs text-muted-foreground font-medium">
                Charts appear here
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
