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
        </div>
        <div className="p-4">Center Panel</div>
        <div className="border-l border-gray-800 p-4">Right Panel</div>
      </div>
    </div>
  );
}
