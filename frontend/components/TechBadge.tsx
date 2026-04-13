import { motion } from "framer-motion";

interface TechBadgeProps {
  name: string;
  delay?: number;
}

export default function TechBadge({ name, delay = 0 }: TechBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay }}
      whileHover={{ scale: 1.02, x: 2 }}
      className="px-3 py-2 bg-slate-800/50 rounded-lg text-sm border border-slate-700 hover:border-slate-600 hover:bg-slate-800 transition-all cursor-default"
    >
      {name}
    </motion.div>
  );
}
