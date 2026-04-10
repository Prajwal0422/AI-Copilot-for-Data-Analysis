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
    <div className="h-full flex flex-col relative">
      {/* Header */}
      <div className="p-5">
        <div className="flex items-center gap-3">
          <motion.div 
            className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 p-[1px] relative"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <div className="w-full h-full rounded-xl bg-[#0B0B12] flex items-center justify-center">
              <Database className="w-4 h-4 text-blue-400" />
            </div>
          </motion.div>
          <h2 className="text-sm font-bold text-foreground tracking-tight">Datasets</h2>
        </div>
      </div>

      {/* Upload Zone */}
      <div className="px-5 pb-4">
        <motion.div
          whileHover={{ scale: 1.01, y: -2 }}
          whileTap={{ scale: 0.99 }}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`
            relative overflow-hidden rounded-2xl p-6 cursor-pointer
            transition-all duration-500
            ${
              isDragging
                ? "card-ultra border-2 border-blue-500 glow-blue"
                : "card-ultra hover:border-blue-500/30 shimmer"
            }
          `}
        >
          <div className="text-center relative z-10">
            <motion.div
              animate={{
                y: isDragging ? [0, -8, 0] : 0,
              }}
              transition={{
                duration: 0.8,
                repeat: isDragging ? Infinity : 0,
              }}
              className="mb-3"
            >
              <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center border border-blue-500/20">
                <Upload className="w-6 h-6 text-blue-400" />
              </div>
            </motion.div>
            <p className="text-sm font-semibold text-foreground mb-1">
              Upload Dataset
            </p>
            <p className="text-xs text-muted-foreground">
              Drop files or click to browse
            </p>
          </div>

          {/* Animated background */}
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
      <div className="flex-1 overflow-y-auto px-5 pb-5 space-y-2.5">
        <AnimatePresence>
          {datasets.map((dataset, index) => (
            <motion.div
              key={dataset.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.01, x: 4 }}
              onClick={() => onSelectDataset(dataset.id)}
              className={`
                p-4 rounded-xl cursor-pointer group
                transition-all duration-300
                ${
                  selectedDataset === dataset.id
                    ? "card-ultra border-2 border-blue-500 glow-blue"
                    : "card-ultra hover:border-blue-500/20"
                }
              `}
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2 flex-1">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center border border-blue-500/20 flex-shrink-0">
                    <FileText className="w-4 h-4 text-blue-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs font-semibold text-foreground block truncate">
                      {dataset.name}
                    </span>
                    <div className="flex gap-2 text-[10px] text-muted-foreground mt-0.5">
                      <span>{dataset.rows.toLocaleString()} rows</span>
                      <span>•</span>
                      <span>{dataset.columns} cols</span>
                    </div>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  className="text-red-400/60 hover:text-red-400 p-1.5 rounded-lg hover:bg-red-500/10 transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </motion.button>
              </div>

              <div className="text-[10px] text-muted-foreground">
                {dataset.uploadedAt}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
