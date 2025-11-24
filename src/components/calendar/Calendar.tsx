import { useState, useRef } from 'react';
import DayCard from './DayCard';
import { Modal } from '../modal';
import { AnnouncementBanner } from '../common';
import { canOpenDay } from '../../lib/dateUtils';
import { calendarData } from '../../data/calendarData';
import { cn } from '@/lib/utils';

const Calendar = () => {
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [buttonPosition, setButtonPosition] = useState<{ x: number; y: number } | null>(null);
  const cardRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  const handleDayClick = (day: number) => {
    if (canOpenDay(day)) {
      const cardElement = cardRefs.current[day];
      if (cardElement) {
        const rect = cardElement.getBoundingClientRect();
        setButtonPosition({
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
        });
      }
      setSelectedDay(day);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setSelectedDay(null);
      setButtonPosition(null);
    }, 300);
  };

  const days = Array.from({ length: 24 }, (_, i) => i + 1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50/40 via-rose-50/30 via-amber-50/20 to-blue-50/30 px-3 sm:px-4 py-6 sm:py-8 relative overflow-hidden">
      {/* Enhanced background with golden sparkles */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{
               backgroundImage: `
                 radial-gradient(circle at 25% 25%, rgba(255, 192, 203, 0.2) 0%, transparent 50%),
                 radial-gradient(circle at 75% 75%, rgba(216, 180, 254, 0.2) 0%, transparent 50%),
                 radial-gradient(circle at 50% 50%, rgba(255, 215, 0, 0.15) 0%, transparent 60%),
                 radial-gradient(circle at 10% 80%, rgba(255, 215, 0, 0.1) 0%, transparent 40%),
                 radial-gradient(circle at 90% 20%, rgba(255, 215, 0, 0.1) 0%, transparent 40%)
               `,
             }}>
        </div>
        {/* Floating golden sparkles */}
        <div className="absolute top-20 left-[10%] w-2 h-2 bg-gold rounded-full animate-twinkle" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-40 right-[15%] w-1.5 h-1.5 bg-gold-light rounded-full animate-twinkle" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-32 left-[20%] w-2.5 h-2.5 bg-gold rounded-full animate-twinkle" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-60 right-[25%] w-1 h-1 bg-gold-light rounded-full animate-twinkle" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-48 right-[30%] w-2 h-2 bg-gold rounded-full animate-twinkle" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Minimal header with golden accent */}
      <header className="text-center mb-6 sm:mb-8 relative z-10">
        <h1 className={cn(
          'text-3xl sm:text-4xl md:text-5xl font-bold mb-2 tracking-tight',
          'bg-gradient-to-r from-pink-primary via-pink-primary to-gold-dark bg-clip-text text-transparent',
          'animate-fadeIn'
        )}>
          Diciembre 2025
        </h1>
        <p className="text-base sm:text-lg text-pink-primary/70 font-medium">
          Para Dome 💕
        </p>
      </header>

      {/* Calendar grid - improved for mobile */}
      <div className={cn(
        'max-w-5xl mx-auto grid gap-2.5 sm:gap-3 md:gap-4 relative z-10',
        'grid-cols-4 sm:grid-cols-4 md:grid-cols-6',
        'px-1 sm:px-2'
      )}>
        {days.map((day) => (
          <div 
            key={day} 
            ref={(el) => (cardRefs.current[day] = el)}
            className="animate-fadeIn"
            style={{ animationDelay: `${day * 30}ms` }}
          >
            <DayCard
              day={day}
              canOpen={canOpenDay(day)}
              onClick={() => handleDayClick(day)}
            />
          </div>
        ))}
      </div>

      {/* Announcement Banner */}
      <AnnouncementBanner />

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        day={selectedDay}
        content={selectedDay ? calendarData[selectedDay] : null}
        originPosition={buttonPosition}
      />
    </div>
  );
};

export default Calendar;
