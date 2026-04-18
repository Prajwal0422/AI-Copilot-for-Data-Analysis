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
    </div>
  );
}
