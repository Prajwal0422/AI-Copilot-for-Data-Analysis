import { motion } from "framer-motion";
import { Database } from "lucide-react";

interface DatasetCardProps {
  name: string;
  rows: number;
  columns: number;
  isSelected: boolean;
  onClick: () => void;
}

export default function DatasetCard({ name, rows, columns, isSelected, onClick }: DatasetCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      onClick={onClick}
      className={`p-3 rounded-lg cursor-pointer transition-all ${
        isSelected
          ? "bg-blue-500/20 border-2 border-blue-500 shadow-lg shadow-blue-500/20"
          : "bg-slate-800/50 border border-slate-700 hover:bg-slate-800 hover:border-slate-600"
      }`}
    >
      <div className="flex items-center gap-2 mb-1">
        <Database className="w-4 h-4 text-blue-400" />
        <span className="text-sm font-medium">{name}</span>
      </div>
      <p className="text-xs text-slate-500">{rows.toLocaleString()} rows • {columns} cols</p>
    </motion.div>
  );
}
