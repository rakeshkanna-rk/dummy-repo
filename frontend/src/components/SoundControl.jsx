import React, { useEffect, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import './SoundControl.css';

const SoundControl = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [audio] = useState(() => {
    const audioElement = new Audio();
    audioElement.loop = true;
    audioElement.volume = 0.15;
    // Using a horror ambient sound effect (you can replace with actual audio file)
    audioElement.src = 'data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQAAAAA=';
    return audioElement;
  });

  const toggleMute = () => {
    if (isMuted) {
      audio.play().catch(e => console.log('Audio play failed:', e));
      setIsMuted(false);
    } else {
      audio.pause();
      setIsMuted(true);
    }
  };

  useEffect(() => {
    return () => {
      audio.pause();
      audio.src = '';
    };
  }, [audio]);

  return (
    <button 
      className="sound-control-btn" 
      onClick={toggleMute}
      aria-label={isMuted ? 'Unmute' : 'Mute'}
      title={isMuted ? 'Enable ambient sound' : 'Disable ambient sound'}
    >
      {isMuted ? (
        <VolumeX className="sound-icon" />
      ) : (
        <Volume2 className="sound-icon" />
      )}
    </button>
  );
};

export default SoundControl;
