import { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward } from 'lucide-react';

interface AudioPlayerProps {
  src: string;
  title: string;
}

export function AudioPlayer({ src, title }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Fonction pour basculer la lecture/pause
  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }

    setIsPlaying(!isPlaying);
  };

  // Fonction pour revenir en arrière de 10 secondes
  const skipBack = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = Math.max(audio.currentTime - 10, 0);
    }
  };

  // Fonction pour avancer de 10 secondes
  const skipForward = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = Math.min(audio.currentTime + 10, audio.duration);
    }
  };

  // Utilisation de useEffect pour lire l'audio dès que la source change
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  }, [src]); // Le hook se déclenche chaque fois que la source (src) change

  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-full max-w-md">
      <div className="text-center mb-4">
        <h3 className="text-lg font-semibold text-emerald-900">{title}</h3>
      </div>
      <div className="flex items-center justify-center gap-4">
        <button onClick={skipBack} className="p-2 hover:bg-emerald-100 rounded-full">
          <SkipBack className="w-6 h-6 text-emerald-800" />
        </button>
        <button onClick={togglePlay} className="p-3 bg-emerald-800 hover:bg-emerald-700 rounded-full">
          {isPlaying ? <Pause className="w-6 h-6 text-white" /> : <Play className="w-6 h-6 text-white" />}
        </button>
        <button onClick={skipForward} className="p-2 hover:bg-emerald-100 rounded-full">
          <SkipForward className="w-6 h-6 text-emerald-800" />
        </button>
      </div>
      <audio ref={audioRef} src={src} controls className="w-full mt-4" />
    </div>
  );
}
