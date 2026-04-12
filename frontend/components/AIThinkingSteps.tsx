"use client";

import { motion } from "framer-motion";
import { MessageSquare, Brain, Wrench, Code, Sparkles, CheckCircle } from "lucide-react";

interface AIThinkingStepsProps {
  currentStep: number;
  isProcessing: boolean;
}

export default function AIThinkingSteps({ currentStep, isProcessing }: AIThinkingStepsProps) {
  const steps = [
    { id: 1, label: "Analyzing Query", icon: MessageSquare, color: "blue" },
    { id: 2, label: "Understanding Intent", icon: Brain, color: "purple" },
    { id: 3, label: "Selecting Tools", icon: Wrench, color: "cyan" },
    { id: 4, label: "Generating Code", icon: Code, color: "green" },
    { id: 5, label: "Executing", icon: Sparkles, color: "pink" },
  ];

  const getStepStatus = (stepId: number) => {
    if (!isProcessing) return "idle";
    if (stepId < currentStep) return "completed";
    if (stepId === currentStep) return "active";
    return "pending";
  };

  const colorClasses = {
    blue: "bg-blue-500/20 border-blue-500/50 text-blue-400",
    purple: "bg-purple-500/20 border-purple-500/50 text-purple-400",
    cyan: "bg-cyan-500/20 border-cyan-500/50 text-cyan-400",
    green: "bg-green-500/20 border-green-500/50 text-green-400",
    pink: "bg-pink-500/20 border-pink-500/50 text-pink-400",
  };

  return (
    <div className="p-4 space-y-3">
      {steps.map((step, index) => {
        const status = getStepStatus(step.id);
        const Icon = step.icon;
        const isActive = status === "active";
        const isCompleted = status === "completed";

        return (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative"
          >
            {/* Connecting Line */}
            {index < steps.length - 1 && (
              <div className="absolute left-5 top-12 w-0.5 h-8 bg-white/10">
                {isCompleted && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "100%" }}
                    transition={{ duration: 0.3 }}
                    className={`w-full bg-gradient-to-b from-${step.color}-400 to-${steps[index + 1].color}-400`}
                  />
                )}
              </div>
            )}

            {/* Step Card */}
            <div
              className={`flex items-center gap-3 p-3 rounded-xl border transition-all ${
                isActive
                  ? `${colorClasses[step.color as keyof typeof colorClasses]} shadow-lg`
                  : isCompleted
                  ? "bg-white/5 border-white/20"
                  : "bg-white/5 border-white/10 opacity-50"
              }`}
            >
              {/* Icon */}
              <div className="relative">
                {isCompleted ? (
                  <CheckCircle className="w-5 h-5 text-green-400" />
                ) : (
                  <motion.div
                    animate={{
                      rotate: isActive ? 360 : 0,
                      scale: isActive ? [1, 1.1, 1] : 1,
                    }}
                    transition={{
                      rotate: { duration: 2, repeat: isActive ? Infinity : 0, ease: "linear" },
                      scale: { duration: 1, repeat: isActive ? Infinity : 0 },
                    }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.div>
                )}

                {/* Pulsing Ring for Active */}
                {isActive && (
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-current"
                    animate={{
                      scale: [1, 1.5, 1.5],
                      opacity: [0.5, 0, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                    }}
                  />
                )}
              </div>

              {/* Label */}
              <div className="flex-1">
                <div className="text-sm font-bold">{step.label}</div>
                {isActive && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="h-1 bg-gradient-to-r from-current to-transparent rounded-full mt-1"
                  />
                )}
              </div>

              {/* Status Indicator */}
              {isActive && (
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                  className="w-2 h-2 rounded-full bg-current"
                />
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
