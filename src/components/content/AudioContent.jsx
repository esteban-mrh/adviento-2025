import { useState, useRef } from 'react';
import './AudioContent.css';

const AudioContent = ({ data }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

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

  return (
    <div className="audio-content">
      <div className="audio-icon">🎵</div>
      
      {data.title && (
        <h3 className="audio-title">{data.title}</h3>
      )}
      
      {data.description && (
        <p className="audio-description">{data.description}</p>
      )}
      
      <div className="audio-player">
        <button 
          className={`play-button ${isPlaying ? 'playing' : ''}`}
          onClick={togglePlay}
        >
          {isPlaying ? '⏸️' : '▶️'}
        </button>
        
        <audio 
          ref={audioRef}
          src={data.url}
          onEnded={() => setIsPlaying(false)}
          onError={(e) => {
            console.error('Error loading audio:', e);
          }}
        />
      </div>
      
      <p className="audio-note">
        {isPlaying ? 'Reproduciendo... 🎶' : 'Presiona para escuchar 🎧'}
      </p>
    </div>
  );
};

export default AudioContent;
