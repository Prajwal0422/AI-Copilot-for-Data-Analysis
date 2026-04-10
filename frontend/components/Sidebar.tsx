"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, Database, FileText, Trash2, Plus } from "lucide-react";

interface SidebarProps {
  selectedDataset: string | null;
  onSelectDataset: (id: string | null) => void;
}

interface Dataset {
  id: string;
  name: string;
  rows: number;
  columns: number;
  uploadedAt: string;
}

export default function Sidebar({ selectedDataset, onSelectDataset }: SidebarProps) {
  const [datasets, setDatasets] = useState<Dataset[]>([
    {
      id: "1",
      name: "sales_data.csv",
      rows: 1250,
      columns: 8,
      uploadedAt: "2 hours ago",
    },
  ]);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    // File upload logic will be added later
  };

  return (
    <div className="h-full flex flex-col bg-slate-950/50">
      {/* Header */}
      <div className="p-4 border-b border-cyan-500/20">
        <h2 className="text-lg font-semibold text-cyan-400 flex items-center gap-2">
          <Database className="w-5 h-5" />
          Datasets
        </h2>
      </div>

      {/* Upload Zone */}
      <div className="p-4">
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`
            relative overflow-hidden rounded-xl p-6 cursor-pointer
            transition-all duration-300
            ${
              isDragging
                ? "glass-strong border-2 border-cyan-400 glow-cyan"
                : "glass border border-cyan-500/30 hover:border-cyan-400/50"
            }
          `}
        >
          <div className="text-center">
            <motion.div
              animate={{
                y: isDragging ? [0, -10, 0] : 0,
              }}
              transition={{
                duration: 0.5,
                repeat: isDragging ? Infinity : 0,
              }}
            >
              <Upload className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
            </motion.div>
            <p className="text-sm text-slate-300 font-medium">Upload Dataset</p>
            <p className="text-xs text-slate-500 mt-1">
              Drag & drop or click
            </p>
          </div>

          {/* Animated background effect */}
          {isDragging && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10"
            />
          )}
        </motion.div>
      </div>

      {/* Dataset List */}
      <div className="flex-1 overflow-y-auto px-4 pb-4">
        <AnimatePresence>
          {datasets.map((dataset, index) => (
            <motion.div
              key={dataset.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => onSelectDataset(dataset.id)}
              className={`
                mb-3 p-4 rounded-xl cursor-pointer
                transition-all duration-300
                ${
                  selectedDataset === dataset.id
                    ? "glass-strong border-2 border-cyan-400 glow-cyan"
                    : "glass border border-cyan-500/20 hover:border-cyan-400/40"
                }
              `}
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm font-medium text-slate-200">
                    {dataset.name}
                  </span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-red-400 hover:text-red-300"
                >
                  <Trash2 className="w-4 h-4" />
                </motion.button>
              </div>

              <div className="flex gap-4 text-xs text-slate-400">
                <span>{dataset.rows.toLocaleString()} rows</span>
                <span>{dataset.columns} cols</span>
              </div>

              <div className="mt-2 text-xs text-slate-500">
                {dataset.uploadedAt}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
