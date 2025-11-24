import type { URLContent as URLContentType } from '../../types/calendar';
import { Link2, ExternalLink, Star } from 'lucide-react';
import { Button } from '../ui/button';

interface URLContentProps {
  data: URLContentType;
}

const URLContent = ({ data }: URLContentProps) => {
  const handleClick = () => {
    window.open(data.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="text-center py-8">
      <Link2 className="w-16 h-16 mx-auto mb-5 text-pink-primary animate-bounce" />
      
      {data.title && (
        <h3 className="text-3xl text-pink-primary font-bold my-5 font-serif">
          {data.title}
        </h3>
      )}
      
      {data.description && (
        <p className="text-lg text-gray-700 my-4 italic mb-8">
          {data.description}
        </p>
      )}
      
      <Button
        onClick={handleClick}
        size="lg"
        className="group relative inline-flex items-center gap-3 text-lg font-bold bg-gradient-to-br from-pink-light to-pink-primary hover:scale-110 active:scale-95 overflow-hidden shadow-lg shadow-pink-primary/40 hover:shadow-xl hover:shadow-pink-primary/60"
      >
        {/* Shimmer effect */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: 'linear-gradient(135deg, transparent 0%, rgba(255, 255, 255, 0.3) 50%, transparent 100%)',
            backgroundSize: '200% 200%',
            animation: 'shimmer 1.5s ease-in-out infinite'
          }}
        />
        
        <span className="relative z-10">
          {data.buttonText || 'Abrir enlace'}
        </span>
        
        <ExternalLink className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1" />
      </Button>
      
      <div className="flex items-center justify-center gap-2 text-sm text-pink-primary/70 mt-6 font-medium">
        <Star className="w-4 h-4" />
        <span>Se abrirá en una nueva pestaña</span>
      </div>
    </div>
  );
};

export default URLContent;
