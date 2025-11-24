import { useEffect } from 'react';
import TextContent from './content/TextContent';
import LetterContent from './content/LetterContent';
import PhotoContent from './content/PhotoContent';
import AudioContent from './content/AudioContent';
import CustomContent from './content/CustomContent';
import type { DayContent } from '../types/calendar';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  day: number | null;
  content: DayContent | null;
}

const Modal = ({ isOpen, onClose, day, content }: ModalProps) => {
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
      case 'custom':
        return <CustomContent data={content.content as any} />;
      default:
        return <TextContent data={{ message: 'Contenido no disponible' }} />;
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-[fadeIn_0.2s_ease-out]"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative animate-slideUp"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 bg-pink-primary text-white w-10 h-10 rounded-full text-xl flex items-center justify-center hover:bg-pink-primary/90 hover:rotate-90 transition-all duration-300 shadow-lg z-10"
          onClick={onClose}
        >
          ✕
        </button>
        
        <div className="p-6 pb-4 text-center border-b border-gray-100">
          <div className="text-5xl font-bold text-pink-primary mb-1">
            {day}
          </div>
          {day === 14 && (
            <div className="text-sm text-pink-primary/70 font-medium mt-1">
              9 meses juntos 💕
            </div>
          )}
        </div>
        
        <div className="p-6 text-gray-700">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Modal;
