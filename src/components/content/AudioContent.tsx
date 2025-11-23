import { useState, useRef } from 'react';
import type { AudioContent as AudioContentType } from '../../types/calendar';

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
      <div className="text-6xl mb-5 animate-[musical-note_3s_ease-in-out_infinite]">
        🎵
      </div>
      
      {data.title && (
        <h3 className="text-3xl text-pink-primary font-bold my-5 font-serif">
          {data.title}
        </h3>
      )}
      
      {data.description && (
        <p className="text-lg text-[#5a3a4a] my-4 italic">
          {data.description}
        </p>
      )}
      
      {hasError ? (
        <p className="text-base text-pink-primary font-semibold my-8 p-5 bg-pink-primary/10 rounded-2xl border-2 border-dashed border-pink-primary">
          ⚠️ No se pudo cargar el audio. Por favor, verifica que el archivo existe.
        </p>
      ) : (
        <>
          <div className="my-8 flex justify-center">
            <button 
              className={`w-20 h-20 rounded-full border-none bg-gradient-to-br from-pink-light to-pink-primary text-white text-3xl cursor-pointer flex items-center justify-center shadow-lg shadow-pink-primary/40 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-pink-primary/60 active:scale-95 relative ${isPlaying ? 'animate-[ripple_2s_linear_infinite]' : ''}`}
              onClick={togglePlay}
            >
              {isPlaying ? '⏸️' : '▶️'}
            </button>
            
            <audio 
              ref={audioRef}
              src={data.url}
              onEnded={() => setIsPlaying(false)}
              onError={handleError}
            />
          </div>
          
          <p className="text-base text-pink-primary font-semibold mt-5 animate-[fade-pulse_2s_ease-in-out_infinite]">
            {isPlaying ? 'Reproduciendo... 🎶' : 'Presiona para escuchar 🎧'}
          </p>
        </>
      )}
    </div>
  );
};

export default AudioContent;
