'use client';

import { useEffect, useState } from 'react';
import HeroSection from '@/components/HeroSection';
import EventsSection from '@/components/EventsSection';
import RegisterButton from '@/components/RegisterButton';
import EasterEggs from '@/components/EasterEggs';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <main className="relative min-h-screen bg-cinematic-black">
      <HeroSection />
      <EventsSection />
      <RegisterButton />
      <EasterEggs />
      
      {/* Footer */}
      <footer className="relative py-8 px-4 text-center border-t border-cinematic-red/20">
        <p className="font-body text-gray-500 text-sm">
          © 2025 ZYNORA. Enter the Stories. Live the Legends.
        </p>
      </footer>
    </main>
  );
}
