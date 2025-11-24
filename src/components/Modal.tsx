import { useEffect } from 'react';
import TextContent from './content/TextContent';
import LetterContent from './content/LetterContent';
import PhotoContent from './content/PhotoContent';
import AudioContent from './content/AudioContent';
import VideoContent from './content/VideoContent';
import URLContent from './content/URLContent';
import CustomContent from './content/CustomContent';
import type { DayContent } from '../types/calendar';
import { X, Heart } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { cn } from '@/lib/utils';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  day: number | null;
  content: DayContent | null;
  originPosition?: { x: number; y: number } | null;
}

const Modal = ({ isOpen, onClose, day, content, originPosition }: ModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // Calculate transform origin for animation
  const transformOrigin = originPosition 
    ? `${originPosition.x}px ${originPosition.y}px`
    : 'center center';

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
      className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-3 sm:p-4 animate-in fade-in duration-200"
      onClick={onClose}
      style={{
        transformOrigin: transformOrigin,
      }}
    >
      <Card 
        className={cn(
          'relative w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl border-0',
          'animate-in fade-in zoom-in-95 slide-in-from-bottom-4 duration-300'
        )}
        onClick={(e) => e.stopPropagation()}
        style={{
          transformOrigin: transformOrigin,
        }}
      >
        {/* Close button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-3 right-3 rounded-full bg-pink-primary/10 hover:bg-pink-primary hover:text-white z-10 transition-all duration-300 hover:rotate-90"
          onClick={onClose}
        >
          <X className="h-5 w-5" />
        </Button>
        
        {/* Header */}
        <div className="p-5 sm:p-6 pb-3 sm:pb-4 text-center border-b border-border/50">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className={cn(
              'text-4xl sm:text-5xl font-bold text-pink-primary',
              'animate-in zoom-in duration-500'
            )}>
              {day}
            </div>
            {isSpecialDay && (
              <Badge variant="secondary" className="bg-pink-primary/10 text-pink-primary border-pink-primary/20 animate-in slide-in-from-right-2 duration-500">
                <Heart className="w-3 h-3 mr-1" />
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
    </div>
  );
};

export default Modal;
