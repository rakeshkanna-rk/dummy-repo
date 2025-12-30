'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { taglines } from '@/lib/constants';

export default function HeroSection() {
  const [currentTagline, setCurrentTagline] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Title animation
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 2,
          ease: 'power3.out',
          delay: 0.5,
        }
      );
    }

    // Rotating taglines
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Cursor interaction for particles
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (particlesRef.current) {
      const { clientX, clientY } = e;
      const moveX = (clientX / window.innerWidth - 0.5) * 50;
      const moveY = (clientY / window.innerHeight - 0.5) * 50;
      
      gsap.to(particlesRef.current, {
        x: moveX,
        y: moveY,
        duration: 1,
        ease: 'power2.out',
      });
    }
  };

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative h-screen w-full overflow-hidden film-grain"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black z-10" />
        {/* Placeholder for video background */}
        <div className="w-full h-full bg-gradient-to-br from-cinematic-black via-cinematic-blue to-cinematic-black" />
        <img
          src="https://images.unsplash.com/photo-1706385858488-bdaafe33e7f2"
          alt="Cinematic Background"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
      </div>

      {/* Animated Fog/Smoke */}
      <div className="absolute inset-0 z-10">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-gray-900/30 to-transparent animate-drift" />
        <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-gray-800/20 to-transparent animate-drift" style={{ animationDelay: '5s' }} />
      </div>

      {/* Floating Particles */}
      <div ref={particlesRef} className="absolute inset-0 z-10 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cinematic-red rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center px-4">
        {/* Title */}
        <motion.h1
          ref={titleRef}
          className="font-cinematic text-7xl md:text-9xl font-bold text-white text-glow-red animate-breathe mb-8"
          initial={{ opacity: 0 }}
        >
          ZYNORA
        </motion.h1>

        {/* Rotating Taglines */}
        <div className="h-16 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentTagline}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
              className="font-body text-xl md:text-2xl text-gray-300 italic text-center"
            >
              {taglines[currentTagline]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-cinematic-red rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1.5 h-1.5 bg-cinematic-red rounded-full"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>

        {/* Red Neon Glow Effect */}
        <div className="absolute inset-0 bg-cinematic-red opacity-5 blur-3xl animate-pulse-glow pointer-events-none" />
        
        {/* Dark Masked Silhouettes */}
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/40 blur-3xl rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-black/40 blur-3xl rounded-full animate-float" style={{ animationDelay: '2s' }} />
      </div>
    </section>
  );
}
