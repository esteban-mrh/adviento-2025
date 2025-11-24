import { useState, useEffect } from 'react';
import { announcementMessages } from '../data/messages';

const AnnouncementBanner = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // Rotate messages every 8 seconds
  useEffect(() => {
    if (announcementMessages.length === 0) return;

    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentMessageIndex((prevIndex) => 
          (prevIndex + 1) % announcementMessages.length
        );
        setIsVisible(true);
      }, 300); // Short delay for fade transition
    }, 8000); // Change message every 8 seconds

    return () => clearInterval(interval);
  }, []);

  if (announcementMessages.length === 0) {
    return null;
  }

  return (
    <div className="max-w-4xl mx-auto mt-12 mb-8 relative z-10">
      <div className="bg-gradient-to-r from-pink-100 via-pink-50 to-purple-50 rounded-2xl shadow-lg border border-pink-200/50 overflow-hidden">
        {/* Decorative corner elements */}
        <div className="absolute top-0 left-0 w-16 h-16 opacity-10">
          <div className="absolute inset-0 bg-pink-primary rounded-br-full"></div>
        </div>
        <div className="absolute bottom-0 right-0 w-16 h-16 opacity-10">
          <div className="absolute inset-0 bg-pink-primary rounded-tl-full"></div>
        </div>

        {/* Content */}
        <div className="relative px-6 py-5 md:px-8 md:py-6">
          <div className="flex items-start gap-4">
            {/* Icon */}
            <div className="flex-shrink-0 mt-1">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-pink-primary/10 flex items-center justify-center">
                <span className="text-2xl md:text-3xl">📢</span>
              </div>
            </div>

            {/* Message */}
            <div className="flex-1 min-w-0">
              <div 
                className={`text-pink-primary/90 text-base md:text-lg leading-relaxed transition-opacity duration-300 ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {announcementMessages[currentMessageIndex]}
              </div>

              {/* Pagination dots */}
              {announcementMessages.length > 1 && (
                <div className="flex gap-1.5 mt-4 justify-center md:justify-start">
                  {announcementMessages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setIsVisible(false);
                        setTimeout(() => {
                          setCurrentMessageIndex(index);
                          setIsVisible(true);
                        }, 300);
                      }}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentMessageIndex 
                          ? 'bg-pink-primary w-6' 
                          : 'bg-pink-primary/30 hover:bg-pink-primary/50'
                      }`}
                      aria-label={`Ver mensaje ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBanner;
