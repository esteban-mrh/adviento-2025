import { useState } from 'react';
import './DayCard.css';

const DayCard = ({ day, canOpen, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`day-card ${canOpen ? 'can-open' : 'locked'} ${isHovered ? 'hovered' : ''}`}
      onClick={canOpen ? onClick : undefined}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="day-card-inner">
        <div className="day-number">{day}</div>
        {!canOpen && (
          <div className="lock-icon">🔒</div>
        )}
        {canOpen && (
          <div className="sparkle-icon">✨</div>
        )}
      </div>
      {canOpen && (
        <div className="hover-text">¡Ábrelo!</div>
      )}
    </div>
  );
};

export default DayCard;
