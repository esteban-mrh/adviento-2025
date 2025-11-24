import { useEffect, useState } from 'react';
import {
  TextContent,
  LetterContent,
  PhotoContent,
  AudioContent,
  VideoContent,
  URLContent,
  CustomContent,
} from './content';
import type { DayContent } from '../../types/calendar';
import { X, Heart } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { cn } from '@/lib/utils';
import { AnimatedCard } from './OpeningAnimations';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  day: number | null;
  content: DayContent | null;
  originPosition?: { x: number; y: number } | null;
}

const Modal = ({ isOpen, onClose, day, content, originPosition: _originPosition }: ModalProps) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Delay content appearance for animation effect - 1200ms to match envelope animation
      const timer = setTimeout(() => setShowContent(true), 1200);
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = 'unset';
      };
    } else {
      setShowContent(false);
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const renderContent = () => {
    if (!content) return null;

    switch (content.type) {
      case 'text':
        return <TextContent data={content.content as any} />;
      case 'letter':
        return <LetterContent data={content.content as any} />;
      case 'photo':
        return <PhotoContent data={content.content as any} />;
      case 'audio':
        return <AudioContent data={content.content as any} />;
      case 'video':
        return <VideoContent data={content.content as any} />;
      case 'url':
        return <URLContent data={content.content as any} />;
      case 'custom':
        return <CustomContent data={content.content as any} />;
      default:
        return <TextContent data={{ message: 'Contenido no disponible' }} />;
    }
  };

  const isSpecialDay = day === 14;

  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-3 sm:p-4 animate-fadeIn"
      onClick={onClose}
    >
      {/* Loading animation overlay - only show during animation */}
      {!showContent && (
        <div className="absolute inset-0 flex items-center justify-center z-[60]">
          <div className="text-center">
            <AnimatedCard />
            <p className="mt-8 text-white text-lg font-semibold animate-fade-pulse">
              Abriendo sobre...
            </p>
          </div>
        </div>
      )}

      {/* Content Card - only render after animation completes */}
      {/* Content animates from center where the mini-carta (AnimatedCard) was displayed */}
      {showContent && (
        <Card 
          className={cn(
            'relative w-full max-w-2xl max-h-[90vh] overflow-y-auto border-0',
            'shadow-2xl shadow-gold/20',
            'animate-scale-in'
          )}
          onClick={(e) => e.stopPropagation()}
        >
        {/* Golden decorative corners */}
        <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-gold opacity-40 rounded-tl-xl"></div>
        <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-gold opacity-40 rounded-tr-xl"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-gold opacity-40 rounded-bl-xl"></div>
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-gold opacity-40 rounded-br-xl"></div>

        {/* Close button with golden hover */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-3 right-3 rounded-full bg-pink-primary/10 hover:bg-gradient-to-r hover:from-pink-primary hover:to-gold-dark hover:text-white z-10 transition-all duration-300 hover:rotate-90"
          onClick={onClose}
        >
          <X className="h-5 w-5" />
        </Button>
        
        {/* Header with golden accent */}
        <div className="p-5 sm:p-6 pb-3 sm:pb-4 text-center border-b border-gold/20 bg-gradient-to-r from-transparent via-gold-lighter/20 to-transparent">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className={cn(
              'text-4xl sm:text-5xl font-bold',
              'bg-gradient-to-r from-pink-primary via-pink-primary to-gold-dark bg-clip-text text-transparent',
              'animate-fadeIn'
            )}>
              {day}
            </div>
            {isSpecialDay && (
              <Badge variant="secondary" className="bg-gradient-to-r from-pink-primary/10 to-gold/10 text-pink-primary border-gold/30 animate-fadeIn">
                <Heart className="w-3 h-3 mr-1 fill-current" />
                9 meses juntos
              </Badge>
            )}
          </div>
          <p className="text-sm text-muted-foreground">Diciembre 2025</p>
        </div>
        
        {/* Content */}
        <div className="p-5 sm:p-6 text-gray-700">
          {renderContent()}
        </div>
      </Card>
      )}
    </div>
  );
};

export default Modal;
