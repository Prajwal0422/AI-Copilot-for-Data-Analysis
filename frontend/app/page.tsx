export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-purple-900/10"></div>
      
      {/* Top Navbar */}
      <nav className="border-b border-gray-800 px-6 py-4 bg-gradient-to-r from-gray-900 via-black to-gray-900 backdrop-blur-sm relative overflow-hidden z-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-pink-600/5"></div>
        <div className="flex items-center justify-between relative z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center text-base font-bold shadow-lg shadow-purple-900/50 hover:scale-105 transition-transform cursor-pointer">
              AI
            </div>
            <h2 className="text-sm font-semibold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              AI Data Copilot
            </h2>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-900/50 rounded-full border border-gray-800 hover:border-green-700 transition-colors">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-gray-400 font-medium">Active</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <span className="px-2 py-1 bg-purple-900/20 text-purple-400 rounded">GPT-4</span>
              <span className="text-gray-600">•</span>
              <span>Fast Mode</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-[280px_1fr_380px] h-[calc(100vh-73px)] gap-0 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 via-transparent to-purple-900/5 pointer-events-none animate-pulse"></div>
        
        {/* Left Panel */}
        <div className="border-r border-gray-800 p-6 overflow-y-auto bg-gradient-to-b from-gray-900/50 to-transparent relative z-10">
          <h2 className="text-sm font-semibold mb-6 text-gray-300 uppercase tracking-wide flex items-center gap-2">
            <span className="text-blue-500 text-lg">📊</span>
            <span>Datasets</span>
            <span className="ml-auto text-xs bg-blue-900/30 text-blue-400 px-2 py-1 rounded-full">2</span>
          </h2>
          
          {/* Upload Section */}
          <div className="relative border-2 border-dashed border-gray-700 rounded-xl p-6 mb-4 text-center hover:border-blue-500 hover:bg-gradient-to-br hover:from-blue-900/10 hover:to-purple-900/10 transition-all cursor-pointer group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="text-gray-400 text-sm relative z-10">
              <div className="mb-3 text-3xl group-hover:scale-110 transition-transform">📁</div>
              <div className="font-medium text-gray-300">Drop files here</div>
              <div className="text-xs mt-2 text-gray-500">CSV, JSON, Excel supported</div>
            </div>
          </div>

          {/* Dataset List */}
          <div className="space-y-2">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-3 border border-gray-800 hover:border-blue-600 hover:shadow-lg hover:shadow-blue-900/20 transition-all cursor-pointer group relative">
              <div className="absolute top-2 right-2 w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <div className="text-sm font-medium group-hover:text-blue-400 transition-colors">sales_data.csv</div>
                    <span className="text-xs bg-green-900/30 text-green-400 px-1.5 py-0.5 rounded">Active</span>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">1.2 MB • CSV • 5 mins ago</div>
                </div>
                <div className="text-gray-600 group-hover:text-blue-500 transition-colors text-xl">📊</div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-3 border border-gray-800 hover:border-purple-600 hover:shadow-lg hover:shadow-purple-900/20 transition-all cursor-pointer group">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="text-sm font-medium group-hover:text-purple-400 transition-colors">customers.json</div>
                  <div className="text-xs text-gray-500 mt-1">856 KB • JSON • 12 mins ago</div>
                </div>
                <div className="text-gray-600 group-hover:text-purple-500 transition-colors text-xl">📄</div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6 flex flex-col bg-gradient-to-b from-transparent via-gray-900/30 to-transparent relative z-10">
          {/* Chat Section */}
          <div className="flex-1 mb-6">
          <h2 className="text-sm font-semibold mb-6 text-gray-300 uppercase tracking-wide flex items-center gap-2">
            <span className="text-purple-500 text-lg">💬</span>
            <span>Chat</span>
            <span className="ml-auto text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded-full">2 messages</span>
          </h2>
            <div className="bg-gray-900 rounded-lg border border-gray-800 h-[300px] p-4 overflow-y-auto mb-1 backdrop-blur-sm bg-opacity-50 hover:border-gray-700 transition-colors scroll-smooth">
              <div className="space-y-4">
                {/* User Message */}
                <div className="flex justify-end animate-fade-in group">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl rounded-tr-sm px-4 py-3 max-w-[80%] shadow-lg shadow-blue-900/50 hover:shadow-blue-800/60 transition-shadow cursor-pointer">
                    <div className="text-sm leading-relaxed">Analyze sales trends</div>
                    <div className="text-xs text-blue-200 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">Just now</div>
                  </div>
                </div>
                
                {/* AI Message */}
                <div className="flex justify-start animate-fade-in group">
                  <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[80%] border border-gray-700 shadow-lg hover:border-gray-600 transition-colors cursor-pointer">
                    <div className="text-sm leading-relaxed">I'll analyze the sales trends for you...</div>
                    <div className="text-xs text-gray-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">2 seconds ago</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Input Box */}
            <div className="mt-4 flex gap-2">
              <input 
                type="text" 
                placeholder="Ask anything about your data..."
                className="flex-1 bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all placeholder:text-gray-600 hover:border-gray-700"
              />
              <button className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 px-8 py-3 rounded-xl text-sm font-semibold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-purple-900/50 hover:shadow-purple-800/60 relative overflow-hidden group">
                <span className="relative z-10">Send ✨</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </button>
            </div>
          </div>

          {/* Workflow Section */}
          <div>
            <h2 className="text-sm font-semibold mb-6 text-gray-300 uppercase tracking-wide flex items-center gap-2">
              <span className="text-green-500">⚡</span>
              Workflow
            </h2>
            <div className="bg-gray-900 rounded-xl border border-gray-800 p-4 hover:border-gray-700 transition-colors">
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-sm font-semibold shadow-lg shadow-green-900/50 ring-2 ring-green-500/20">✓</div>
                  <div className="text-sm font-medium">Data loaded</div>
                  <div className="ml-auto text-xs text-green-500">Complete</div>
                </div>
                <div className="flex items-center gap-3 p-2 rounded-lg bg-blue-900/20 border border-blue-800/50 cursor-pointer">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-sm font-semibold shadow-lg shadow-blue-900/50 animate-pulse ring-2 ring-blue-500/30">2</div>
                  <div className="text-sm font-medium">Processing...</div>
                  <div className="ml-auto text-xs text-blue-400">In Progress</div>
                </div>
                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer opacity-60">
                  <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-sm font-semibold">3</div>
                  <div className="text-sm text-gray-500">Generate insights</div>
                  <div className="ml-auto text-xs text-gray-600">Pending</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Right Panel */}
        <div className="border-l border-gray-800 p-6 overflow-y-auto bg-gradient-to-b from-gray-900/50 to-transparent relative z-10">
          <h2 className="text-sm font-semibold mb-6 text-gray-300 uppercase tracking-wide flex items-center gap-2">
            <span className="text-yellow-500 text-lg">✨</span>
            <span>Insights</span>
            <span className="ml-auto text-xs bg-yellow-900/30 text-yellow-400 px-2 py-1 rounded-full">Live</span>
          </h2>
          
          {/* Output Card */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border border-gray-800 p-5 mb-4 hover:shadow-xl hover:shadow-green-900/30 hover:border-green-700/50 transition-all group cursor-pointer relative overflow-hidden">
            <div className="absolute inset-0 animate-shimmer"></div>
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-3">
                <div className="text-xs text-gray-500 uppercase tracking-wide font-semibold">Revenue Trend</div>
                <div className="text-2xl group-hover:scale-110 transition-transform">📈</div>
              </div>
              <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 bg-clip-text text-transparent">$124,500</div>
              <div className="flex items-center gap-1 text-xs font-medium">
                <span className="text-green-400">↑ 12.5%</span>
                <span className="text-gray-600">vs last month</span>
              </div>
            </div>
          </div>
              <span className="text-green-400">↑ 12.5%</span>
              <span className="text-gray-600">vs last month</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border border-gray-800 p-5 hover:shadow-xl hover:shadow-purple-900/30 hover:border-purple-700/50 transition-all group cursor-pointer relative overflow-hidden">
            <div className="absolute inset-0 animate-shimmer"></div>
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-3">
                <div className="text-xs text-gray-500 uppercase tracking-wide font-semibold">Top Product</div>
                <div className="text-2xl group-hover:scale-110 transition-transform">🏆</div>
              </div>
              <div className="text-xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Product A</div>
              <div className="text-xs text-gray-400">2,450 units sold this month</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
