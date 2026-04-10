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
    <div className="h-full flex flex-col bg-black/20">
      {/* Header */}
      <div className="p-6 border-b border-white/10">
        <h2 className="text-lg font-bold text-foreground flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
            <Database className="w-5 h-5 text-white" />
          </div>
          <span>Datasets</span>
        </h2>
      </div>

      {/* Upload Zone */}
      <div className="p-6">
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`
            relative overflow-hidden rounded-2xl p-8 cursor-pointer
            transition-all duration-300
            ${
              isDragging
                ? "card-premium border-2 border-blue-500 glow-primary"
                : "card-premium hover:border-white/20"
            }
          `}
        >
          <div className="text-center relative z-10">
            <motion.div
              animate={{
                y: isDragging ? [0, -10, 0] : 0,
              }}
              transition={{
                duration: 0.6,
                repeat: isDragging ? Infinity : 0,
              }}
              className="mb-4"
            >
              <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center border border-white/10">
                <Upload className="w-8 h-8 text-blue-400" />
              </div>
            </motion.div>
            <p className="text-base font-semibold text-foreground mb-1">
              Upload Dataset
            </p>
            <p className="text-sm text-muted-foreground">
              Drag & drop or click to browse
            </p>
          </div>

          {/* Animated background effect */}
          {isDragging && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10"
            />
          )}
        </motion.div>
      </div>

      {/* Dataset List */}
      <div className="flex-1 overflow-y-auto px-6 pb-6">
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
                mb-4 p-5 rounded-2xl cursor-pointer
                transition-all duration-300
                ${
                  selectedDataset === dataset.id
                    ? "card-premium border-2 border-blue-500 glow-primary"
                    : "card-premium hover:border-white/20"
                }
              `}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center border border-white/10">
                    <FileText className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-foreground block">
                      {dataset.name}
                    </span>
                    <div className="flex gap-3 text-xs text-muted-foreground mt-1">
                      <span>{dataset.rows.toLocaleString()} rows</span>
                      <span>•</span>
                      <span>{dataset.columns} cols</span>
                    </div>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-red-400 hover:text-red-300 p-2 rounded-lg hover:bg-red-500/10 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </motion.button>
              </div>

              <div className="text-xs text-muted-foreground">
                {dataset.uploadedAt}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
