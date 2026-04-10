"use client";

import { motion, AnimatePresence } from "framer-motion";
import { 
  MessageSquare, 
  Brain, 
  Wrench, 
  Code, 
  Sparkles,
  CheckCircle,
  Loader2
} from "lucide-react";

interface WorkflowStep {
  id: number;
  label: string;
  sublabel: string;
  icon: any;
  status: "idle" | "active" | "completed";
  color: string;
}

interface WorkflowVisualizationProps {
  isProcessing: boolean;
  currentStep?: number;
}

export default function WorkflowVisualization({ 
  isProcessing, 
  currentStep = 0 
}: WorkflowVisualizationProps) {
  const steps: WorkflowStep[] = [
    {
      id: 1,
      label: "User Query",
      sublabel: "Receiving input",
      icon: MessageSquare,
      status: currentStep >= 1 ? "completed" : currentStep === 0 && isProcessing ? "active" : "idle",
      color: "cyan",
    },
    {
      id: 2,
      label: "LLM Processing",
      sublabel: "Understanding intent",
      icon: Brain,
      status: currentStep >= 2 ? "completed" : currentStep === 1 && isProcessing ? "active" : "idle",
      color: "purple",
    },
    {
      id: 3,
      label: "Tool Selection",
      sublabel: "Choosing strategy",
      icon: Wrench,
      status: currentStep >= 3 ? "completed" : currentStep === 2 && isProcessing ? "active" : "idle",
      color: "blue",
    },
    {
      id: 4,
      label: "Code Execution",
      sublabel: "Running analysis",
      icon: Code,
      status: currentStep >= 4 ? "completed" : currentStep === 3 && isProcessing ? "active" : "idle",
      color: "green",
    },
    {
      id: 5,
      label: "Generate Output",
      sublabel: "Creating response",
      icon: Sparkles,
      status: currentStep >= 5 ? "completed" : currentStep === 4 && isProcessing ? "active" : "idle",
      color: "pink",
    },
  ];

  const getColorClasses = (color: string, status: string) => {
    const colors = {
      cyan: {
        active: "bg-cyan-500/20 border-cyan-400 text-cyan-400",
        completed: "bg-cyan-500/10 border-cyan-500/50 text-cyan-400",
        idle: "bg-slate-800/30 border-slate-700/50 text-slate-600",
        glow: "shadow-cyan-500/50",
        line: "bg-gradient-to-b from-cyan-400 to-purple-400",
      },
      purple: {
        active: "bg-purple-500/20 border-purple-400 text-purple-400",
        completed: "bg-purple-500/10 border-purple-500/50 text-purple-400",
        idle: "bg-slate-800/30 border-slate-700/50 text-slate-600",
        glow: "shadow-purple-500/50",
        line: "bg-gradient-to-b from-purple-400 to-blue-400",
      },
      blue: {
        active: "bg-blue-500/20 border-blue-400 text-blue-400",
        completed: "bg-blue-500/10 border-blue-500/50 text-blue-400",
        idle: "bg-slate-800/30 border-slate-700/50 text-slate-600",
        glow: "shadow-blue-500/50",
        line: "bg-gradient-to-b from-blue-400 to-green-400",
      },
      green: {
        active: "bg-green-500/20 border-green-400 text-green-400",
        completed: "bg-green-500/10 border-green-500/50 text-green-400",
        idle: "bg-slate-800/30 border-slate-700/50 text-slate-600",
        glow: "shadow-green-500/50",
        line: "bg-gradient-to-b from-green-400 to-pink-400",
      },
      pink: {
        active: "bg-pink-500/20 border-pink-400 text-pink-400",
        completed: "bg-pink-500/10 border-pink-500/50 text-pink-400",
        idle: "bg-slate-800/30 border-slate-700/50 text-slate-600",
        glow: "shadow-pink-500/50",
        line: "bg-gradient-to-b from-pink-400 to-cyan-400",
      },
    };

    return colors[color as keyof typeof colors]?.[status as keyof typeof colors.cyan] || colors.cyan.idle;
  };

  return (
    <div className="relative py-4">
      {steps.map((step, index) => {
        const Icon = step.icon;
        const isActive = step.status === "active";
        const isCompleted = step.status === "completed";
        const isLast = index === steps.length - 1;

        return (
          <div key={step.id} className="relative">
            {/* Connecting Line */}
            {!isLast && (
              <div className="absolute left-6 top-16 w-0.5 h-16 overflow-hidden">
                <motion.div
                  className={`w-full h-full ${
                    isCompleted || (isActive && index < currentStep)
                      ? getColorClasses(step.color, "line")
                      : "bg-slate-700/30"
                  }`}
                  initial={{ scaleY: 0, originY: 0 }}
                  animate={{
                    scaleY: isCompleted || (isActive && index < currentStep) ? 1 : 0,
                  }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                />
                
                {/* Flowing particles on active line */}
                {isActive && (
                  <motion.div
                    className="absolute top-0 left-0 w-full h-2 bg-gradient-to-b from-white to-transparent opacity-70"
                    animate={{
                      y: [0, 64],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                )}
              </div>
            )}

            {/* Step Node */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative flex items-start gap-4 mb-4"
            >
              {/* Icon Circle */}
              <motion.div
                animate={{
                  scale: isActive ? [1, 1.1, 1] : 1,
                  rotate: isActive ? [0, 5, -5, 0] : 0,
                }}
                transition={{
                  duration: 2,
                  repeat: isActive ? Infinity : 0,
                }}
                className={`
                  relative w-12 h-12 rounded-full border-2 flex items-center justify-center
                  ${getColorClasses(step.color, step.status)}
                  ${isActive ? `shadow-lg ${getColorClasses(step.color, "glow")}` : ""}
                  transition-all duration-300
                `}
              >
                {/* Pulsing ring for active state */}
                {isActive && (
                  <motion.div
                    className={`absolute inset-0 rounded-full border-2 ${
                      step.status === "active" ? "border-" + step.color + "-400" : ""
                    }`}
                    animate={{
                      scale: [1, 1.5, 1.5],
                      opacity: [0.5, 0, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />
                )}

                {/* Icon */}
                {isCompleted ? (
                  <CheckCircle className="w-5 h-5" />
                ) : isActive ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <Loader2 className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <Icon className="w-5 h-5" />
                )}
              </motion.div>

              {/* Step Info */}
              <div className="flex-1 pt-1">
                <motion.h4
                  animate={{
                    color: isActive
                      ? "rgb(34, 211, 238)"
                      : isCompleted
                      ? "rgb(148, 163, 184)"
                      : "rgb(71, 85, 105)",
                  }}
                  className="text-sm font-semibold"
                >
                  {step.label}
                </motion.h4>
                <motion.p
                  animate={{
                    opacity: isActive ? [0.5, 1, 0.5] : 0.5,
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: isActive ? Infinity : 0,
                  }}
                  className="text-xs text-slate-500 mt-0.5"
                >
                  {step.sublabel}
                </motion.p>

                {/* Progress bar for active step */}
                {isActive && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 mt-2 rounded-full"
                  />
                )}
              </div>

              {/* Status indicator */}
              <div className="pt-2">
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
                    className="w-2 h-2 rounded-full bg-cyan-400"
                  />
                )}
                {isCompleted && (
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                )}
              </div>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
