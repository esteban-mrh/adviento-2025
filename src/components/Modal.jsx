import { useEffect } from 'react';
import './Modal.css';
import TextContent from './content/TextContent';
import LetterContent from './content/LetterContent';
import PhotoContent from './content/PhotoContent';
import AudioContent from './content/AudioContent';
import CustomContent from './content/CustomContent';

const Modal = ({ isOpen, onClose, day, content }) => {
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
        return <TextContent data={content.content} />;
      case 'letter':
        return <LetterContent data={content.content} />;
      case 'photo':
        return <PhotoContent data={content.content} />;
      case 'audio':
        return <AudioContent data={content.content} />;
      case 'custom':
        return <CustomContent data={content.content} />;
      default:
        return <TextContent data={{ message: 'Contenido no disponible' }} />;
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>
        
        <div className="modal-header">
          <div className="modal-day">Día {day}</div>
          <div className="modal-decoration">🎄✨</div>
        </div>
        
        <div className="modal-body">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Modal;
