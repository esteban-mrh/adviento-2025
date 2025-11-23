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
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-5 animate-[fadeIn_0.3s_ease-out]"
      onClick={onClose}
    >
      <div 
        className="bg-gradient-to-br from-pink-bg to-pink-lightest rounded-[30px] max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl shadow-pink-primary/30 relative animate-slideUp border-4 border-pink-light/50"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-5 right-5 bg-pink-primary/90 text-white w-10 h-10 rounded-full text-2xl flex items-center justify-center hover:bg-pink-primary hover:rotate-90 hover:scale-110 transition-all duration-300 shadow-lg shadow-pink-primary/30 z-10"
          onClick={onClose}
        >
          ✕
        </button>
        
        <div className="p-8 pb-5 text-center border-b-2 border-pink-light/30">
          <div className="text-4xl md:text-5xl font-bold text-pink-primary font-serif drop-shadow-md mb-3">
            Día {day}
          </div>
          <div className="text-2xl animate-float">
            🎄✨
          </div>
        </div>
        
        <div className="p-8 text-[#5a3a4a]">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Modal;
