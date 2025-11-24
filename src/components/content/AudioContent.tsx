import { useState, useRef } from 'react';
import type { AudioContent as AudioContentType } from '../../types/calendar';
import { Music, Play, Pause, Headphones, AlertTriangle } from 'lucide-react';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

interface AudioContentProps {
  data: AudioContentType;
}

const AudioContent = ({ data }: AudioContentProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleError = () => {
    setHasError(true);
  };

  return (
    <div className="text-center py-8">
      <Music className="w-16 h-16 mx-auto mb-5 text-pink-primary animate-musical-note" />
      
      {data.title && (
        <h3 className="text-3xl text-pink-primary font-bold my-5 font-serif">
          {data.title}
        </h3>
      )}
      
      {data.description && (
        <p className="text-lg text-gray-700 my-4 italic">
          {data.description}
        </p>
      )}
      
      {hasError ? (
        <div className="text-base text-pink-primary font-semibold my-8 p-5 bg-pink-primary/10 rounded-2xl border-2 border-dashed border-pink-primary flex items-center justify-center gap-2">
          <AlertTriangle className="w-5 h-5" />
          <span>No se pudo cargar el audio. Por favor, verifica que el archivo existe.</span>
        </div>
      ) : (
        <>
          <div className="my-8 flex justify-center">
            <Button
              size="icon"
              className={cn(
                'w-20 h-20 rounded-full bg-gradient-to-br from-pink-light to-pink-primary',
                'shadow-lg shadow-pink-primary/40 transition-all duration-300',
                'hover:scale-110 hover:shadow-xl hover:shadow-pink-primary/60',
                'active:scale-95',
                isPlaying && 'animate-ripple'
              )}
              onClick={togglePlay}
            >
              {isPlaying ? (
                <Pause className="w-8 h-8" />
              ) : (
                <Play className="w-8 h-8 ml-1" />
              )}
            </Button>
            
            <audio 
              ref={audioRef}
              src={data.url}
              onEnded={() => setIsPlaying(false)}
              onError={handleError}
            />
          </div>
          
          <div className="flex items-center justify-center gap-2 text-base text-pink-primary font-semibold mt-5 animate-fade-pulse">
            {isPlaying ? (
              <>
                <Music className="w-5 h-5" />
                <span>Reproduciendo...</span>
              </>
            ) : (
              <>
                <Headphones className="w-5 h-5" />
                <span>Presiona para escuchar</span>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default AudioContent;
