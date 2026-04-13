import { motion } from "framer-motion";

interface StatCardProps {
  label: string;
  value: string;
  color: string;
  bg: string;
  border: string;
  delay?: number;
}

export default function StatCard({ label, value, color, bg, border, delay = 0 }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay }}
      whileHover={{ scale: 1.02, x: -2 }}
      className={`flex justify-between p-3 ${bg} rounded-lg border ${border} hover:border-opacity-50 transition-all`}
    >
      <span className="text-sm text-slate-400">{label}</span>
      <span className={`text-sm font-semibold ${color}`}>{value}</span>
    </motion.div>
  );
}
