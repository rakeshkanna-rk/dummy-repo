'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Event {
  id: number;
  title: string;
  inspiration: string;
  description: string;
  image: string;
  color: string;
  symbols: string[];
}

interface EventCardProps {
  event: Event;
  index: number;
}

export default function EventCard({ event, index }: EventCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const glowColor = 
    event.color === 'red' ? 'rgba(220, 38, 38, 0.6)' :
    event.color === 'blue' ? 'rgba(37, 99, 235, 0.6)' :
    'rgba(234, 179, 8, 0.6)';

  return (
    <motion.div
      ref={cardRef}
      className="relative group cursor-pointer overflow-hidden rounded-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      style={{
        boxShadow: isHovered ? `0 0 40px ${glowColor}, 0 20px 60px rgba(0,0,0,0.8)` : '0 10px 30px rgba(0,0,0,0.7)',
      }}
    >
      {/* Card Background */}
      <div className="relative w-full h-[500px] overflow-hidden">
        <motion.div
          className="absolute inset-0"
          animate={{
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

        {/* Glitch Effect on Hover */}
        {isHovered && (
          <motion.div
            className="absolute inset-0 bg-cinematic-red mix-blend-multiply"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.1, 0] }}
            transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 1 }}
          />
        )}

        {/* Content */}
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
          {/* Movie-specific Symbols */}
          <div className="absolute top-6 right-6 flex gap-2">
            {event.symbols.slice(0, 2).map((symbol, i) => (
              <motion.div
                key={i}
                className="w-8 h-8 border-2 border-white/30 rounded flex items-center justify-center text-xs text-white/50"
                initial={{ opacity: 0, rotate: 0 }}
                animate={isHovered ? { opacity: 1, rotate: 360 } : { opacity: 0.5, rotate: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {symbol.charAt(0).toUpperCase()}
              </motion.div>
            ))}
          </div>

          {/* Number Badge (Squid Game style) */}
          <motion.div
            className="absolute top-6 left-6 w-12 h-12 rounded-full border-2 border-white/50 flex items-center justify-center font-bold text-white"
            animate={isHovered ? { scale: 1.2 } : { scale: 1 }}
          >
            {String(event.id).padStart(2, '0')}
          </motion.div>

          {/* Title */}
          <motion.h3
            className="font-cinematic text-3xl font-bold text-white mb-2"
            style={{
              textShadow: `0 0 20px ${glowColor}`,
            }}
          >
            {event.title}
          </motion.h3>

          {/* Inspiration */}
          <p className="font-body text-sm text-gray-400 italic mb-3">
            Inspired by {event.inspiration}
          </p>

          {/* Description */}
          <motion.p
            className="font-body text-gray-300 mb-4"
            initial={{ opacity: 0.8 }}
            animate={isHovered ? { opacity: 1 } : { opacity: 0.8 }}
          >
            {event.description}
          </motion.p>

          {/* Decorative Line */}
          <motion.div
            className="h-0.5 bg-gradient-to-r from-transparent via-white to-transparent"
            initial={{ scaleX: 0 }}
            animate={isHovered ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.5 }}
          />

          {/* Movie-specific Visual Elements */}
          {event.color === 'red' && (
            <div className="absolute bottom-0 left-0 w-2 h-full bg-cinematic-red opacity-50" />
          )}
          {event.inspiration.includes('Squid') && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5">
              <div className="w-32 h-32 border-4 border-white rounded-full" />
              <div className="w-32 h-32 border-4 border-white" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
            </div>
          )}
          {event.inspiration.includes('Breaking Bad') && (
            <div className="absolute bottom-6 right-6 opacity-20">
              <div className="text-6xl font-bold text-cyan-400">RxN</div>
            </div>
          )}
        </div>
      </div>

      {/* Card Border Glow Effect */}
      <motion.div
        className="absolute inset-0 rounded-lg"
        style={{
          border: `2px solid ${event.color === 'red' ? '#dc2626' : event.color === 'blue' ? '#2563eb' : '#eab308'}`,
          opacity: isHovered ? 0.8 : 0,
        }}
        animate={{
          opacity: isHovered ? [0.4, 0.8, 0.4] : 0,
        }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
    </motion.div>
  );
}
