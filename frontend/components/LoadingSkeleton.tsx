"use client";

import { motion } from "framer-motion";

interface LoadingSkeletonProps {
  variant?: "text" | "card" | "circle" | "chart";
  count?: number;
}

export default function LoadingSkeleton({ 
  variant = "text", 
  count = 1 
}: LoadingSkeletonProps) {
  const shimmer = {
    animate: {
      backgroundPosition: ["200% 0", "-200% 0"],
    },
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "linear",
    },
  };

  const renderSkeleton = () => {
    switch (variant) {
      case "text":
        return (
          <motion.div
            {...shimmer}
            className="h-4 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 rounded-lg"
            style={{
              backgroundSize: "200% 100%",
            }}
          />
        );

      case "card":
        return (
          <div className="glass-strong rounded-xl p-4 border border-cyan-500/20 space-y-3">
            <motion.div
              {...shimmer}
              className="h-6 w-3/4 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 rounded-lg"
              style={{
                backgroundSize: "200% 100%",
              }}
            />
            <motion.div
              {...shimmer}
              className="h-4 w-full bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 rounded-lg"
              style={{
                backgroundSize: "200% 100%",
              }}
            />
            <motion.div
              {...shimmer}
              className="h-4 w-5/6 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 rounded-lg"
              style={{
                backgroundSize: "200% 100%",
              }}
            />
          </div>
        );

      case "circle":
        return (
          <motion.div
            {...shimmer}
            className="w-12 h-12 rounded-full bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800"
            style={{
              backgroundSize: "200% 100%",
            }}
          />
        );

      case "chart":
        return (
          <div className="glass-strong rounded-xl p-4 border border-cyan-500/20">
            <motion.div
              {...shimmer}
              className="h-48 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 rounded-lg"
              style={{
                backgroundSize: "200% 100%",
              }}
            />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="space-y-3">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index}>{renderSkeleton()}</div>
      ))}
    </div>
  );
}
