"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  BarChart3,
  PieChart,
  Activity,
  ArrowRight,
  CheckCircle2,
  Loader2,
} from "lucide-react";

export default function InsightsPanel() {
  // Mock workflow steps
  const workflowSteps = [
    { id: 1, label: "User Query", status: "completed", icon: CheckCircle2 },
    { id: 2, label: "LLM Processing", status: "completed", icon: CheckCircle2 },
    { id: 3, label: "Tool Selection", status: "active", icon: Loader2 },
    { id: 4, label: "Code Execution", status: "pending", icon: Activity },
    { id: 5, label: "Generate Output", status: "pending", icon: TrendingUp },
  ];

  return (
    <div className="h-full flex flex-col bg-slate-950/50">
      {/* Header */}
      <div className="p-4 border-b border-cyan-500/20">
        <h2 className="text-lg font-semibold text-cyan-400 flex items-center gap-2">
          <BarChart3 className="w-5 h-5" />
          Insights & Workflow
        </h2>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* AI Workflow Visualization */}
        <div className="glass-strong rounded-xl p-4 border border-cyan-500/20">
          <h3 className="text-sm font-semibold text-slate-300 mb-4 flex items-center gap-2">
            <Activity className="w-4 h-4 text-cyan-400" />
            AI Pipeline Status
          </h3>

          <div className="space-y-3">
            {workflowSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Connector Line */}
                  {index < workflowSteps.length - 1 && (
                    <div className="absolute left-4 top-8 w-0.5 h-6 bg-cyan-500/30" />
                  )}

                  <div
                    className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
                      step.status === "active"
                        ? "bg-cyan-500/10 border border-cyan-500/30"
                        : step.status === "completed"
                        ? "bg-green-500/10 border border-green-500/30"
                        : "bg-slate-800/30 border border-slate-700/30"
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        step.status === "active"
                          ? "bg-cyan-500/20 text-cyan-400"
                          : step.status === "completed"
                          ? "bg-green-500/20 text-green-400"
                          : "bg-slate-700/50 text-slate-500"
                      }`}
                    >
                      <Icon
                        className={`w-4 h-4 ${
                          step.status === "active" ? "animate-spin" : ""
                        }`}
                      />
                    </div>

                    <div className="flex-1">
                      <p
                        className={`text-sm font-medium ${
                          step.status === "active"
                            ? "text-cyan-400"
                            : step.status === "completed"
                            ? "text-green-400"
                            : "text-slate-500"
                        }`}
                      >
                        {step.label}
                      </p>
                    </div>

                    {step.status === "active" && (
                      <motion.div
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-2 h-2 bg-cyan-400 rounded-full"
                      />
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="glass-strong rounded-xl p-4 border border-cyan-500/20">
          <h3 className="text-sm font-semibold text-slate-300 mb-4">
            Quick Stats
          </h3>

          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 rounded-lg bg-slate-800/30">
              <span className="text-sm text-slate-400">Total Queries</span>
              <span className="text-lg font-bold text-cyan-400">24</span>
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg bg-slate-800/30">
              <span className="text-sm text-slate-400">Avg Response</span>
              <span className="text-lg font-bold text-green-400">2.3s</span>
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg bg-slate-800/30">
              <span className="text-sm text-slate-400">Success Rate</span>
              <span className="text-lg font-bold text-purple-400">98%</span>
            </div>
          </div>
        </div>

        {/* Suggested Actions */}
        <div className="glass-strong rounded-xl p-4 border border-cyan-500/20">
          <h3 className="text-sm font-semibold text-slate-300 mb-4">
            Suggested Actions
          </h3>

          <div className="space-y-2">
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
                className="w-full text-left p-3 rounded-lg bg-slate-800/30 hover:bg-cyan-500/10 border border-transparent hover:border-cyan-500/30 transition-all group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-300 group-hover:text-cyan-400 transition-colors">
                    {action}
                  </span>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Placeholder for Charts */}
        <div className="glass-strong rounded-xl p-4 border border-cyan-500/20">
          <h3 className="text-sm font-semibold text-slate-300 mb-4 flex items-center gap-2">
            <PieChart className="w-4 h-4 text-cyan-400" />
            Visualizations
          </h3>

          <div className="h-48 rounded-lg bg-slate-800/30 border border-slate-700/50 flex items-center justify-center">
            <div className="text-center">
              <BarChart3 className="w-12 h-12 text-slate-600 mx-auto mb-2" />
              <p className="text-sm text-slate-500">
                Charts will appear here
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
