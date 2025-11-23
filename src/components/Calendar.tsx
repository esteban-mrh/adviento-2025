import { useState } from 'react';
import DayCard from './DayCard';
import Modal from './Modal';
import { canOpenDay } from '../utils/dateUtils';
import { calendarData } from '../data/calendarData';
import type { DayContent } from '../types/calendar';

const Calendar = () => {
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDayClick = (day: number) => {
    if (canOpenDay(day)) {
      setSelectedDay(day);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedDay(null), 300);
  };

  const days = Array.from({ length: 24 }, (_, i) => i + 1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-pale via-pink-lightest to-pink-lighter px-5 py-10 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 bottom-0 opacity-50 animate-pulse"
             style={{
               background: 'radial-gradient(circle at 20% 30%, rgba(255, 192, 203, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(255, 215, 0, 0.2) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(255, 182, 193, 0.2) 0%, transparent 50%)'
             }}>
        </div>
      </div>

      <header className="text-center mb-12 relative z-10">
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-pink-primary mb-5 flex items-center justify-center gap-5 flex-wrap drop-shadow-lg">
          <span className="text-4xl md:text-5xl animate-bounce">🎄</span>
          Calendario de Adviento
          <span className="text-4xl md:text-5xl animate-bounce animation-delay-200">✨</span>
        </h1>
        <p className="text-xl md:text-2xl text-pink-primary/80 font-medium italic">
          Un regalo especial cada día para ti 💕
        </p>
      </header>

      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 px-4 relative z-10">
        {days.map((day) => (
          <DayCard
            key={day}
            day={day}
            canOpen={canOpenDay(day)}
            onClick={() => handleDayClick(day)}
          />
        ))}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        day={selectedDay}
        content={selectedDay ? calendarData[selectedDay] : null}
      />

      <footer className="text-center mt-16 pt-8 relative z-10">
        <p className="text-xl md:text-2xl text-pink-primary font-semibold font-serif drop-shadow-md animate-pulse">
          Con amor, Diciembre 2025 💝
        </p>
      </footer>
    </div>
  );
};

export default Calendar;
