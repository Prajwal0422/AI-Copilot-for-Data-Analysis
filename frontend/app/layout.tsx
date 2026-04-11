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
        <div className="min-h-screen relative overflow-hidden">
          {/* INSANE 3D DEPTH BACKGROUND */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0B0B12] via-[#12121A] to-[#0B0B12]" />
          
          {/* MASSIVE ANIMATED GRADIENT ORBS - MORE INTENSE */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Primary massive orbs */}
            <div className="absolute -top-[20%] -left-[10%] w-[800px] h-[800px] bg-blue-500/30 rounded-full blur-[180px] animate-float-slow" />
            <div className="absolute top-[10%] -right-[15%] w-[900px] h-[900px] bg-purple-500/25 rounded-full blur-[200px] animate-float-slow" style={{ animationDelay: '2s', animationDuration: '28s' }} />
            <div className="absolute -bottom-[20%] left-[15%] w-[850px] h-[850px] bg-cyan-400/20 rounded-full blur-[190px] animate-float-slow" style={{ animationDelay: '4s', animationDuration: '32s' }} />
            <div className="absolute top-[40%] right-[20%] w-[700px] h-[700px] bg-pink-500/15 rounded-full blur-[170px] animate-float-slow" style={{ animationDelay: '1s', animationDuration: '25s' }} />
            
            {/* Secondary accent orbs */}
            <div className="absolute top-[20%] left-[40%] w-[400px] h-[400px] bg-blue-400/15 rounded-full blur-[120px] animate-float-slow" style={{ animationDelay: '3s', animationDuration: '20s' }} />
            <div className="absolute bottom-[30%] right-[35%] w-[450px] h-[450px] bg-purple-400/12 rounded-full blur-[130px] animate-float-slow" style={{ animationDelay: '5s', animationDuration: '22s' }} />
            <div className="absolute top-[60%] left-[25%] w-[380px] h-[380px] bg-cyan-300/10 rounded-full blur-[115px] animate-float-slow" style={{ animationDelay: '6s', animationDuration: '24s' }} />
            
            {/* Micro accent orbs for extra depth */}
            <div className="absolute top-[15%] right-[45%] w-[250px] h-[250px] bg-blue-300/8 rounded-full blur-[90px] animate-float-slow" style={{ animationDelay: '7s', animationDuration: '18s' }} />
            <div className="absolute bottom-[45%] left-[55%] w-[280px] h-[280px] bg-purple-300/8 rounded-full blur-[95px] animate-float-slow" style={{ animationDelay: '8s', animationDuration: '19s' }} />
          </div>
          
          {/* RADIAL GRADIENT DEPTH LAYERS */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_0%,#0B0B12_70%)] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,transparent_0%,#12121A_70%)] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0B0B12_100%)] pointer-events-none opacity-40" />
          
          {/* GRID PATTERN OVERLAY */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
            backgroundPosition: '-1px -1px'
          }} />
          
          {/* NOISE TEXTURE - MORE VISIBLE */}
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
          }} />
          
          {/* VIGNETTE EFFECT */}
          <div className="absolute inset-0 shadow-[inset_0_0_200px_rgba(0,0,0,0.8)] pointer-events-none" />
          
          {/* Content */}
          <div className="relative z-10">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
