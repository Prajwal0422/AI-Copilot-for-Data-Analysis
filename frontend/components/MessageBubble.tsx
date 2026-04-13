import { motion } from "framer-motion";

interface MessageBubbleProps {
  content: string;
  role: "user" | "assistant";
  delay?: number;
}

export default function MessageBubble({ content, role, delay = 0 }: MessageBubbleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className={`flex ${role === "user" ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`p-4 rounded-xl max-w-[75%] ${
          role === "user"
            ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/20"
            : "bg-slate-800/80 border border-slate-700/50 backdrop-blur-sm"
        }`}
      >
        <p className="text-sm leading-relaxed">{content}</p>
      </div>
    </motion.div>
  );
}
