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
        <div className="border-r border-gray-800 p-4">Left Panel</div>
        <div className="p-4">Center Panel</div>
        <div className="border-l border-gray-800 p-4">Right Panel</div>
      </div>
    </div>
  );
}
