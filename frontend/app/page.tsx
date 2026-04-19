export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Top Navbar */}
      <nav className="border-b border-gray-800 px-6 py-4 bg-gradient-to-r from-gray-900 to-black">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            AI Data Copilot
          </h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-400">Active</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-[280px_1fr_380px] h-[calc(100vh-73px)] gap-0">
        {/* Left Panel */}
        <div className="border-r border-gray-800 p-6 overflow-y-auto">
          <h2 className="text-sm font-semibold mb-6 text-gray-300 uppercase tracking-wide">Datasets</h2>
          
          {/* Upload Section */}
          <div className="border-2 border-dashed border-gray-700 rounded-xl p-4 mb-4 text-center hover:border-blue-600 hover:bg-gray-900/50 transition-all cursor-pointer">
            <div className="text-gray-400 text-sm">
              <div className="mb-2 text-2xl">📁</div>
              <div className="font-medium">Drop files here</div>
              <div className="text-xs mt-1 text-gray-500">or click to browse</div>
            </div>
          </div>

          {/* Dataset List */}
          <div className="space-y-2">
            <div className="bg-gray-900 rounded-lg p-3 border border-gray-800 hover:border-blue-600 hover:bg-gray-800 transition-all cursor-pointer">
              <div className="text-sm font-medium">sales_data.csv</div>
              <div className="text-xs text-gray-500 mt-1">1.2 MB</div>
            </div>
            <div className="bg-gray-900 rounded-lg p-3 border border-gray-800 hover:border-blue-600 hover:bg-gray-800 transition-all cursor-pointer">
              <div className="text-sm font-medium">customers.json</div>
              <div className="text-xs text-gray-500 mt-1">856 KB</div>
            </div>
          </div>
        </div>
        <div className="p-6 flex flex-col">
          {/* Chat Section */}
          <div className="flex-1 mb-6">
            <h2 className="text-sm font-semibold mb-6 text-gray-300 uppercase tracking-wide">Chat</h2>
            <div className="bg-gray-900 rounded-lg border border-gray-800 h-[300px] p-4 overflow-y-auto mb-1">
              <div className="space-y-4">
                {/* User Message */}
                <div className="flex justify-end animate-fade-in">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl rounded-tr-sm px-4 py-3 max-w-[80%] shadow-lg">
                    <div className="text-sm">Analyze sales trends</div>
                  </div>
                </div>
                
                {/* AI Message */}
                <div className="flex justify-start animate-fade-in">
                  <div className="bg-gray-800 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[80%] border border-gray-700">
                    <div className="text-sm">I'll analyze the sales trends for you...</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Input Box */}
            <div className="mt-4 flex gap-2">
              <input 
                type="text" 
                placeholder="Ask anything about your data..."
                className="flex-1 bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all"
              />
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3 rounded-xl text-sm font-medium transition-all hover:scale-105 active:scale-95">
                Send
              </button>
            </div>
          </div>

          {/* Workflow Section */}
          <div>
            <h2 className="text-sm font-semibold mb-6 text-gray-300 uppercase tracking-wide">Workflow</h2>
            <div className="bg-gray-900 rounded-xl border border-gray-800 p-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-800 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-sm font-semibold shadow-lg shadow-green-900/50">✓</div>
                  <div className="text-sm font-medium">Data loaded</div>
                </div>
                <div className="flex items-center gap-3 p-2 rounded-lg bg-blue-900/20 border border-blue-800/50">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-sm font-semibold shadow-lg shadow-blue-900/50 animate-pulse">2</div>
                  <div className="text-sm font-medium">Processing...</div>
                </div>
                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-800 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-sm font-semibold">3</div>
                  <div className="text-sm text-gray-500">Generate insights</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Right Panel */}
        <div className="border-l border-gray-800 p-6 overflow-y-auto">
          <h2 className="text-sm font-semibold mb-6 text-gray-300 uppercase tracking-wide">Insights</h2>
          
          {/* Output Card */}
          <div className="bg-gray-900 rounded-lg border border-gray-800 p-4 mb-4 hover:shadow-lg hover:shadow-blue-900/20 transition-all">
            <div className="text-xs text-gray-500 mb-2">Revenue Trend</div>
            <div className="text-2xl font-semibold mb-1">$124,500</div>
            <div className="text-xs text-green-500">↑ 12.5% from last month</div>
          </div>

          <div className="bg-gray-900 rounded-lg border border-gray-800 p-4 hover:shadow-lg hover:shadow-purple-900/20 transition-all">
            <div className="text-xs text-gray-500 mb-2">Top Product</div>
            <div className="text-lg font-medium mb-1">Product A</div>
            <div className="text-xs text-gray-400">2,450 units sold</div>
          </div>
        </div>
      </div>
    </div>
  );
}
