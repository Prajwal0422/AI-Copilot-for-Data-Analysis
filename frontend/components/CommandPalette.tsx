"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Upload,
  BarChart3,
  FileText,
  Sparkles,
  Settings,
  Download,
  Trash2,
} from "lucide-react";

interface Command {
  id: string;
  label: string;
  icon: any;
  shortcut?: string;
  action: () => void;
}

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [search, setSearch] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const commands: Command[] = [
    {
      id: "upload",
      label: "Upload Dataset",
      icon: Upload,
      shortcut: "⌘U",
      action: () => console.log("Upload"),
    },
    {
      id: "analyze",
      label: "Analyze Data",
      icon: BarChart3,
      shortcut: "⌘A",
      action: () => console.log("Analyze"),
    },
    {
      id: "summary",
      label: "Show Data Summary",
      icon: FileText,
      action: () => console.log("Summary"),
    },
    {
      id: "insights",
      label: "Generate Insights",
      icon: Sparkles,
      shortcut: "⌘I",
      action: () => console.log("Insights"),
    },
    {
      id: "export",
      label: "Export Results",
      icon: Download,
      shortcut: "⌘E",
      action: () => console.log("Export"),
    },
    {
      id: "settings",
      label: "Settings",
      icon: Settings,
      action: () => console.log("Settings"),
    },
    {
      id: "clear",
      label: "Clear All Data",
      icon: Trash2,
      action: () => console.log("Clear"),
    },
  ];

  const filteredCommands = commands.filter((cmd) =>
    cmd.label.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev < filteredCommands.length - 1 ? prev + 1 : 0
        );
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev > 0 ? prev - 1 : filteredCommands.length - 1
        );
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          filteredCommands[selectedIndex].action();
          onClose();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, selectedIndex, filteredCommands, onClose]);

  useEffect(() => {
    if (isOpen) {
      setSearch("");
      setSelectedIndex(0);
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Command Palette */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: "spring", duration: 0.3 }}
            className="fixed top-1/4 left-1/2 -translate-x-1/2 w-full max-w-2xl z-50"
          >
            <div className="glass-strong rounded-2xl border-2 border-cyan-500/30 shadow-2xl overflow-hidden">
              {/* Search Input */}
              <div className="flex items-center gap-3 p-4 border-b border-cyan-500/20">
                <Search className="w-5 h-5 text-cyan-400" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Type a command or search..."
                  autoFocus
                  className="flex-1 bg-transparent text-slate-200 placeholder-slate-500 outline-none text-lg"
                />
                <kbd className="px-2 py-1 text-xs rounded bg-slate-800 text-slate-400 border border-slate-700">
                  ESC
                </kbd>
              </div>

              {/* Commands List */}
              <div className="max-h-96 overflow-y-auto p-2">
                {filteredCommands.length === 0 ? (
                  <div className="p-8 text-center text-slate-500">
                    No commands found
                  </div>
                ) : (
                  filteredCommands.map((command, index) => {
                    const Icon = command.icon;
                    const isSelected = index === selectedIndex;

                    return (
                      <motion.button
                        key={command.id}
                        onClick={() => {
                          command.action();
                          onClose();
                        }}
                        onMouseEnter={() => setSelectedIndex(index)}
                        whileHover={{ x: 4 }}
                        className={`
                          w-full flex items-center gap-3 p-3 rounded-xl
                          transition-all duration-200
                          ${
                            isSelected
                              ? "bg-cyan-500/20 border border-cyan-500/40"
                              : "hover:bg-slate-800/50"
                          }
                        `}
                      >
                        <div
                          className={`
                          w-10 h-10 rounded-lg flex items-center justify-center
                          ${
                            isSelected
                              ? "bg-cyan-500/20 text-cyan-400"
                              : "bg-slate-800/50 text-slate-400"
                          }
                        `}
                        >
                          <Icon className="w-5 h-5" />
                        </div>

                        <span
                          className={`flex-1 text-left font-medium ${
                            isSelected ? "text-cyan-400" : "text-slate-300"
                          }`}
                        >
                          {command.label}
                        </span>

                        {command.shortcut && (
                          <kbd className="px-2 py-1 text-xs rounded bg-slate-800 text-slate-400 border border-slate-700">
                            {command.shortcut}
                          </kbd>
                        )}
                      </motion.button>
                    );
                  })
                )}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between p-3 border-t border-cyan-500/20 text-xs text-slate-500">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700">
                      ↑↓
                    </kbd>
                    Navigate
                  </span>
                  <span className="flex items-center gap-1">
                    <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700">
                      ↵
                    </kbd>
                    Select
                  </span>
                </div>
                <span>Press ⌘K to open</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
