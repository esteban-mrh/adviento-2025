import { useState } from 'react';
import './Calendar.css';
import DayCard from './DayCard';
import Modal from './Modal';
import { canOpenDay } from '../utils/dateUtils';
import { calendarData } from '../data/calendarData';

const Calendar = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDayClick = (day) => {
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
    <div className="calendar-container">
      <header className="calendar-header">
        <h1 className="calendar-title">
          <span className="title-icon">🎄</span>
          Calendario de Adviento
          <span className="title-icon">✨</span>
        </h1>
        <p className="calendar-subtitle">
          Un regalo especial cada día para ti 💕
        </p>
      </header>

      <div className="calendar-grid">
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

      <footer className="calendar-footer">
        <p className="footer-text">
          Con amor, Diciembre 2025 💝
        </p>
      </footer>
    </div>
  );
};

export default Calendar;
