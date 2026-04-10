"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

interface ParticleEffectProps {
  trigger: boolean;
  color?: string;
}

export default function ParticleEffect({ 
  trigger, 
  color = "cyan" 
}: ParticleEffectProps) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    if (trigger) {
      const newParticles: Particle[] = Array.from({ length: 12 }, (_, i) => ({
        id: Date.now() + i,
        x: Math.random() * 100 - 50,
        y: Math.random() * 100 - 50,
        size: Math.random() * 4 + 2,
        duration: Math.random() * 1 + 0.5,
        delay: Math.random() * 0.2,
      }));
      setParticles(newParticles);

      setTimeout(() => setParticles([]), 2000);
    }
  }, [trigger]);

  const colorClasses = {
    cyan: "bg-cyan-400",
    purple: "bg-purple-400",
    pink: "bg-pink-400",
    green: "bg-green-400",
  };

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute top-1/2 left-1/2 rounded-full ${
            colorClasses[color as keyof typeof colorClasses] || colorClasses.cyan
          }`}
          style={{
            width: particle.size,
            height: particle.size,
          }}
          initial={{
            x: 0,
            y: 0,
            opacity: 1,
            scale: 0,
          }}
          animate={{
            x: particle.x,
            y: particle.y,
            opacity: 0,
            scale: 1,
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}
