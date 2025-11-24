import { useState, useRef } from 'react';
import DayCard from './DayCard';
import Modal from './Modal';
import AnnouncementBanner from './AnnouncementBanner';
import { canOpenDay } from '../lib/dateUtils';
import { calendarData } from '../data/calendarData';

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
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 px-4 py-8 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{
               backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(255, 192, 203, 0.15) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(216, 180, 254, 0.15) 0%, transparent 50%)',
             }}>
        </div>
      </div>

      {/* Minimal header */}
      <header className="text-center mb-8 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-pink-primary mb-2 tracking-tight">
          Diciembre 2025
        </h1>
        <p className="text-lg text-pink-primary/70 font-medium">
          Para Dome 💕
        </p>
      </header>

      {/* Calendar grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-4 md:grid-cols-6 gap-3 md:gap-4 px-2 relative z-10">
        {days.map((day) => (
          <div key={day} ref={(el) => (cardRefs.current[day] = el)}>
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
