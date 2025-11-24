import { LockIcon, SparkleIcon, HeartIcon } from './Icons';

interface DayCardProps {
  day: number;
  canOpen: boolean;
  onClick: () => void;
}

const DayCard = ({ day, canOpen, onClick }: DayCardProps) => {
  // Special day 14 - 9 month anniversary
  const isSpecialDay = day === 14;

  return (
    <div
      className={`
        relative aspect-square rounded-2xl transition-all duration-300 
        flex items-center justify-center overflow-hidden group
        ${canOpen 
          ? 'bg-gradient-to-br from-pink-light via-pink-lighter to-white cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-pink-primary/50' 
          : 'bg-gradient-to-br from-gray-200 via-gray-100 to-white cursor-not-allowed opacity-50 shadow-md'
        }
      `}
      onClick={canOpen ? onClick : undefined}
    >
      {/* Shimmer effect on hover */}
      {canOpen && (
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
             style={{
               background: 'linear-gradient(135deg, transparent 0%, rgba(255, 255, 255, 0.5) 50%, transparent 100%)',
               backgroundSize: '200% 200%',
               animation: 'shimmer 2s ease-in-out infinite'
             }}>
        </div>
      )}

      {/* Main content - centered and always in same position */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-3">
        <div className={`text-5xl md:text-6xl font-bold ${canOpen ? 'text-pink-primary' : 'text-gray-400'} transition-transform group-hover:scale-110 duration-300`}>
          {day}
        </div>
        
        {!canOpen ? (
          <LockIcon className={`w-7 h-7 text-gray-400 animate-sway`} />
        ) : isSpecialDay ? (
          <HeartIcon className={`w-8 h-8 text-pink-primary animate-heartbeat`} />
        ) : (
          <SparkleIcon className={`w-7 h-7 text-pink-primary animate-sparkle`} />
        )}
      </div>

      {/* Hover overlay - positioned absolutely so it doesn't affect layout */}
      {canOpen && (
        <div className="absolute inset-0 bg-pink-primary/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center backdrop-blur-sm">
          <div className="text-white text-lg font-bold tracking-wide">
            {isSpecialDay ? '💕' : '✨'}
          </div>
        </div>
      )}
    </div>
  );
};

export default DayCard;
