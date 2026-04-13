import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface WorkflowStepProps {
  name: string;
  icon: LucideIcon;
  color: string;
  isActive: boolean;
  isComplete: boolean;
  showConnector?: boolean;
  connectorComplete?: boolean;
}

export default function WorkflowStep({
  name,
  icon: Icon,
  color,
  isActive,
  isComplete,
  showConnector = false,
  connectorComplete = false
}: WorkflowStepProps) {
  return (
    <div className="flex items-center">
      <div className="flex flex-col items-center">
        <motion.div
          animate={{
            scale: isActive ? 1.1 : 1,
            backgroundColor: isComplete
              ? "rgb(34, 197, 94)"
              : isActive
              ? "rgb(59, 130, 246)"
              : "rgb(30, 41, 59)"
          }}
          transition={{ duration: 0.3 }}
          className={`w-12 h-12 rounded-full flex items-center justify-center border-2 ${
            isActive
              ? "border-blue-400 shadow-lg shadow-blue-500/30"
              : isComplete
              ? "border-green-400 shadow-lg shadow-green-500/30"
              : "border-slate-700"
          }`}
        >
          <Icon className={`w-5 h-5 ${isActive || isComplete ? "text-white" : "text-slate-500"}`} />
        </motion.div>
        <span className={`text-xs mt-2 font-medium transition-colors ${
          isActive ? color : isComplete ? "text-green-400" : "text-slate-500"
        }`}>
          {name}
        </span>
      </div>
      {showConnector && (
        <div className="w-16 h-0.5 mx-2 mb-6 bg-slate-700 relative overflow-hidden">
          {connectorComplete && (
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500"
            />
          )}
        </div>
      )}
    </div>
  );
}
