import { useState, useMemo } from 'react';
import type { VideoContent as VideoContentType } from '../../../types/calendar';
import { Video, AlertTriangle, Popcorn, Sparkles } from 'lucide-react';

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

  const videoEmbed = useMemo(() => {
    const platform = data.platform || 'youtube';
    
    if (platform === 'youtube') {
      const videoId = getYouTubeId(data.url);
      if (!videoId) {
        return { error: true };
      }
      return {
        error: false,
        component: (
          <iframe
            className="w-full aspect-video rounded-xl shadow-lg border-0"
            src={`https://www.youtube.com/embed/${videoId}`}
            title={data.title || 'Video'}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )
      };
    } else if (platform === 'vimeo') {
      const videoId = getVimeoId(data.url);
      if (!videoId) {
        return { error: true };
      }
      return {
        error: false,
        component: (
          <iframe
            className="w-full aspect-video rounded-xl shadow-lg border-0"
            src={`https://player.vimeo.com/video/${videoId}`}
            title={data.title || 'Video'}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        )
      };
    } else {
      // Direct video URL
      return {
        error: false,
        component: (
          <video
            className="w-full aspect-video rounded-xl shadow-lg"
            controls
            onError={() => setHasError(true)}
          >
            <source src={data.url} type="video/mp4" />
            Tu navegador no soporta la reproducción de video.
          </video>
        )
      };
    }
  }, [data.url, data.platform, data.title]);

  return (
    <div className="text-center py-5">
      <Video className="w-16 h-16 mx-auto mb-5 text-pink-primary animate-bounce" />
      
      {data.title && (
        <h3 className="text-3xl text-pink-primary font-bold my-5 font-serif">
          {data.title}
        </h3>
      )}
      
      {data.description && (
        <p className="text-lg text-pink-primary/80 my-4 italic">
          {data.description}
        </p>
      )}
      
      {hasError || videoEmbed.error ? (
        <div className="text-base text-pink-primary font-semibold my-8 p-5 bg-pink-lighter/50 rounded-2xl border-2 border-dashed border-pink-primary flex items-center justify-center gap-2">
          <AlertTriangle className="w-5 h-5" />
          <span>No se pudo cargar el video. Por favor, verifica que la URL es correcta.</span>
        </div>
      ) : (
        <div className="my-8 relative">
          <div className="relative inline-block w-full max-w-3xl bg-warm-cream p-3 rounded-2xl shadow-lg shadow-gold/20 border-2 border-gold-light/50">
            {videoEmbed.component}
          </div>
        </div>
      )}
      
      <div className="flex items-center justify-center gap-2 mt-4">
        <Popcorn className="w-6 h-6 text-pink-primary animate-float" />
        <Sparkles className="w-6 h-6 text-gold animate-float" style={{ animationDelay: '0.5s' }} />
      </div>
    </div>
  );
};

export default VideoContent;
