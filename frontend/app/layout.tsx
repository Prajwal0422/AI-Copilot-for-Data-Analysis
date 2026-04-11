import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Copilot - Data Analysis",
  description: "Intelligent AI assistant for data analysis and insights",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="min-h-screen bg-[#0B0B12] relative overflow-hidden">
          {/* Animated gradient mesh background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Large gradient orbs */}
            <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[150px] animate-float-slow" />
            <div className="absolute top-1/4 -right-40 w-[700px] h-[700px] bg-purple-500/20 rounded-full blur-[160px] animate-float-slow" style={{ animationDelay: '2s', animationDuration: '25s' }} />
            <div className="absolute -bottom-40 left-1/4 w-[650px] h-[650px] bg-cyan-500/15 rounded-full blur-[150px] animate-float-slow" style={{ animationDelay: '4s', animationDuration: '30s' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[140px] animate-float-slow" style={{ animationDelay: '1s', animationDuration: '22s' }} />
            
            {/* Accent orbs */}
            <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-blue-400/10 rounded-full blur-[100px] animate-float-slow" style={{ animationDelay: '3s', animationDuration: '18s' }} />
            <div className="absolute bottom-1/3 right-1/3 w-[350px] h-[350px] bg-purple-400/10 rounded-full blur-[110px] animate-float-slow" style={{ animationDelay: '5s', animationDuration: '20s' }} />
          </div>
          
          {/* Radial gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-[#0B0B12]/50 to-[#0B0B12] pointer-events-none" />
          
          {/* Noise texture */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
          }} />
          
          {/* Content */}
          <div className="relative z-10">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
