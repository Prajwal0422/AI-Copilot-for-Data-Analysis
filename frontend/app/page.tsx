"use client";

import { Sparkles, Upload, Database } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Top Navigation */}
      <nav className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-semibold">AI Copilot</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm text-slate-400">Live</span>
            </div>
            <span className="text-sm text-slate-500">GPT-4</span>
          </div>
        </div>
      </nav>

      {/* Main Layout - 3 Panels */}
      <div className="max-w-7xl mx-auto p-6 flex gap-6 h-[calc(100vh-80px)]">
        {/* Left Panel - Datasets */}
        <div className="w-64 flex flex-col gap-4">
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-4">
            <h3 className="text-sm font-semibold mb-4 text-slate-300">Datasets</h3>
            
            <div className="border-2 border-dashed border-slate-700 rounded-lg p-6 text-center mb-4">
              <Upload className="w-6 h-6 mx-auto mb-2 text-slate-500" />
              <p className="text-xs text-slate-500">Drop CSV here</p>
            </div>

            <div className="p-3 rounded-lg bg-slate-800/50 border border-slate-700">
              <div className="flex items-center gap-2 mb-1">
                <Database className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-medium">sales_data.csv</span>
              </div>
              <p className="text-xs text-slate-500">1,250 rows • 8 cols</p>
            </div>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-4">
            <h3 className="text-sm font-semibold mb-3 text-slate-300">Tech Stack</h3>
            <div className="space-y-2">
              {["Next.js", "FastAPI", "GPT-4"].map((tech) => (
                <div key={tech} className="px-3 py-2 bg-slate-800/50 rounded-lg text-sm border border-slate-700">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Center - Chat */}
        <div className="flex-1 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
          <div className="h-full flex items-center justify-center">
            <p className="text-slate-500">Chat interface coming next...</p>
          </div>
        </div>

        {/* Right Panel - Output */}
        <div className="w-96 flex flex-col gap-4">
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-4">
            <h3 className="text-sm font-semibold mb-4 text-slate-300">Insights</h3>
            <div className="h-48 bg-slate-800/50 rounded-lg border border-slate-700 flex items-center justify-center">
              <p className="text-sm text-slate-500">Chart visualization</p>
            </div>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-4">
            <h3 className="text-sm font-semibold mb-3 text-slate-300">Stats</h3>
            <div className="space-y-2">
              <div className="flex justify-between p-3 bg-slate-800/50 rounded-lg border border-slate-700">
                <span className="text-sm text-slate-400">Queries</span>
                <span className="text-sm font-semibold text-blue-400">24</span>
              </div>
              <div className="flex justify-between p-3 bg-slate-800/50 rounded-lg border border-slate-700">
                <span className="text-sm text-slate-400">Avg Time</span>
                <span className="text-sm font-semibold text-green-400">2.3s</span>
              </div>
              <div className="flex justify-between p-3 bg-slate-800/50 rounded-lg border border-slate-700">
                <span className="text-sm text-slate-400">Success</span>
                <span className="text-sm font-semibold text-purple-400">98%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
