import { useState } from 'react';

interface DayCardProps {
  day: number;
  canOpen: boolean;
  onClick: () => void;
}

const DayCard = ({ day, canOpen, onClick }: DayCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`
        relative aspect-square rounded-3xl transition-all duration-400 
        flex items-center justify-center overflow-hidden
        ${canOpen 
          ? 'bg-gradient-to-br from-pink-light via-pink-lighter to-pink-lightest cursor-pointer shadow-lg shadow-pink-light/30 hover:scale-105 hover:-translate-y-2 hover:shadow-xl hover:shadow-pink-primary/40' 
          : 'bg-gradient-to-br from-gray-200 via-gray-100 to-gray-50 cursor-not-allowed opacity-60 shadow-md'
        }
      `}
      onClick={canOpen ? onClick : undefined}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Shimmer effect */}
      {canOpen && isHovered && (
        <div className="absolute inset-0 animate-shimmer"
             style={{
               background: 'linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.4) 50%, transparent 70%)',
               backgroundSize: '200% 200%'
             }}>
        </div>
      )}

      <div className="relative z-10 flex flex-col items-center gap-2">
        <div className={`text-4xl md:text-5xl font-bold font-serif ${canOpen ? 'text-pink-primary' : 'text-gray-400'} drop-shadow-md`}>
          {day}
        </div>
        
        {!canOpen ? (
          <div className="text-2xl animate-sway">🔒</div>
        ) : (
          <div className="text-2xl animate-sparkle">✨</div>
        )}
      </div>

      {canOpen && isHovered && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 
                      bg-pink-primary/95 text-white px-4 py-2 rounded-full 
                      text-sm font-semibold whitespace-nowrap shadow-lg
                      animate-fadeIn">
          ¡Ábrelo!
        </div>
      )}
    </div>
  );
};

export default DayCard;
