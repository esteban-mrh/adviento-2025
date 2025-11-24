import { useState, useEffect } from 'react';
import { announcementMessages } from '../data/messages';
import { Megaphone } from 'lucide-react';
import { Card } from './ui/card';
import { cn } from '@/lib/utils';

const AnnouncementBanner = (): JSX.Element | null => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(true);

  // Rotate messages every 8 seconds
  useEffect(() => {
    if (announcementMessages.length === 0) return;

    const interval: NodeJS.Timeout = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentMessageIndex((prevIndex: number) => 
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
    <div className="max-w-4xl mx-auto mt-12 mb-8 relative z-10 px-4 sm:px-0">
      <Card className="bg-gradient-to-r from-pink-50 via-pink-50/80 to-purple-50/80 border-pink-200/50 overflow-hidden backdrop-blur-sm">
        {/* Content */}
        <div className="relative px-4 py-4 md:px-6 md:py-5">
          <div className="flex items-start gap-3 md:gap-4">
            {/* Icon */}
            <div className="flex-shrink-0 mt-0.5">
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-pink-primary/10 flex items-center justify-center">
                <Megaphone className="w-5 h-5 md:w-6 md:h-6 text-pink-primary" />
              </div>
            </div>

            {/* Message */}
            <div className="flex-1 min-w-0">
              <div 
                className={cn(
                  'text-pink-primary/90 text-sm md:text-base leading-relaxed transition-opacity duration-300',
                  isVisible ? 'opacity-100' : 'opacity-0'
                )}
              >
                {announcementMessages[currentMessageIndex]}
              </div>

              {/* Pagination dots */}
              {announcementMessages.length > 1 && (
                <div className="flex gap-1.5 mt-3 justify-center md:justify-start">
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
                      className={cn(
                        'w-2 h-2 rounded-full transition-all duration-300',
                        index === currentMessageIndex 
                          ? 'bg-pink-primary w-6' 
                          : 'bg-pink-primary/30 hover:bg-pink-primary/50'
                      )}
                      aria-label={`Ver mensaje ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AnnouncementBanner;
