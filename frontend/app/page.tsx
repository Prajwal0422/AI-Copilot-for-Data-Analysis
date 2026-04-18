export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top Navbar */}
      <nav className="border-b border-gray-800 px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold">AI Data Copilot</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-400">Status: Active</span>
          </div>
        </div>
      </nav>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-[250px_1fr_350px] h-[calc(100vh-73px)]">
        {/* Left Panel */}
        <div className="border-r border-gray-800 p-4 overflow-y-auto">
          <h2 className="text-sm font-semibold mb-4 text-gray-300">Datasets</h2>
          
          {/* Upload Section */}
          <div className="border-2 border-dashed border-gray-700 rounded-lg p-4 mb-4 text-center hover:border-gray-600 transition-colors cursor-pointer">
            <div className="text-gray-400 text-sm">
              <div className="mb-2">📁</div>
              <div>Drop files here</div>
              <div className="text-xs mt-1">or click to browse</div>
            </div>
          </div>

          {/* Dataset List */}
          <div className="space-y-2">
            <div className="bg-gray-900 rounded-lg p-3 border border-gray-800 hover:border-gray-700 transition-colors cursor-pointer">
              <div className="text-sm font-medium">sales_data.csv</div>
              <div className="text-xs text-gray-500 mt-1">1.2 MB</div>
            </div>
            <div className="bg-gray-900 rounded-lg p-3 border border-gray-800 hover:border-gray-700 transition-colors cursor-pointer">
              <div className="text-sm font-medium">customers.json</div>
              <div className="text-xs text-gray-500 mt-1">856 KB</div>
            </div>
          </div>
        </div>
        <div className="p-4 flex flex-col">
          {/* Chat Section */}
          <div className="flex-1 mb-4">
            <h2 className="text-sm font-semibold mb-4 text-gray-300">Chat</h2>
            <div className="bg-gray-900 rounded-lg border border-gray-800 h-[300px] p-4 overflow-y-auto">
              <div className="space-y-3">
                {/* User Message */}
                <div className="flex justify-end">
                  <div className="bg-blue-600 rounded-lg px-4 py-2 max-w-[80%]">
                    <div className="text-sm">Analyze sales trends</div>
                  </div>
                </div>
                
                {/* AI Message */}
                <div className="flex justify-start">
                  <div className="bg-gray-800 rounded-lg px-4 py-2 max-w-[80%]">
                    <div className="text-sm">I'll analyze the sales trends for you...</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-l border-gray-800 p-4">Right Panel</div>
      </div>
    </div>
  );
}
