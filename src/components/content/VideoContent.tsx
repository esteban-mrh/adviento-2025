import { useState } from 'react';
import type { VideoContent as VideoContentType } from '../../types/calendar';

interface VideoContentProps {
  data: VideoContentType;
}

const VideoContent = ({ data }: VideoContentProps) => {
  const [hasError, setHasError] = useState(false);

  // Extract YouTube video ID from URL
  const getYouTubeId = (url: string): string | null => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  // Extract Vimeo video ID from URL
  const getVimeoId = (url: string): string | null => {
    const regExp = /vimeo\.com\/(\d+)/;
    const match = url.match(regExp);
    return match ? match[1] : null;
  };

  const renderVideo = () => {
    const platform = data.platform || 'youtube';
    
    if (platform === 'youtube') {
      const videoId = getYouTubeId(data.url);
      if (!videoId) {
        setHasError(true);
        return null;
      }
      return (
        <iframe
          className="w-full aspect-video rounded-xl shadow-lg"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={data.title || 'Video'}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      );
    } else if (platform === 'vimeo') {
      const videoId = getVimeoId(data.url);
      if (!videoId) {
        setHasError(true);
        return null;
      }
      return (
        <iframe
          className="w-full aspect-video rounded-xl shadow-lg"
          src={`https://player.vimeo.com/video/${videoId}`}
          title={data.title || 'Video'}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      );
    } else {
      // Direct video URL
      return (
        <video
          className="w-full aspect-video rounded-xl shadow-lg"
          controls
          onError={() => setHasError(true)}
        >
          <source src={data.url} type="video/mp4" />
          Tu navegador no soporta la reproducción de video.
        </video>
      );
    }
  };

  return (
    <div className="text-center py-5">
      <div className="text-6xl mb-5 animate-bounce">
        🎬
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
          ⚠️ No se pudo cargar el video. Por favor, verifica que la URL es correcta.
        </p>
      ) : (
        <div className="my-8 relative">
          <div className="relative inline-block w-full max-w-3xl bg-white p-3 rounded-2xl shadow-lg shadow-pink-primary/20 border-2 border-pink-light/50">
            {renderVideo()}
          </div>
        </div>
      )}
      
      <div className="text-3xl animate-float mt-4">🍿✨</div>
    </div>
  );
};

export default VideoContent;
