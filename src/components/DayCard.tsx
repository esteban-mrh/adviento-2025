import { LockIcon, SparkleIcon, HeartIcon } from './Icons';
import { Card } from './ui/card';
import { cn } from '@/lib/utils';

interface DayCardProps {
  day: number;
  canOpen: boolean;
  onClick: () => void;
}

const DayCard = ({ day, canOpen, onClick }: DayCardProps) => {
  // Special day 14 - 9 month anniversary
  const isSpecialDay = day === 14;

  return (
    <Card
      className={cn(
        'relative aspect-square transition-all duration-500 flex items-center justify-center overflow-hidden group cursor-pointer border-0',
        canOpen 
          ? 'bg-gradient-to-br from-pink-light via-pink-lighter via-gold-lighter/40 to-white shadow-lg hover:shadow-2xl hover:shadow-gold/40 hover:scale-105' 
          : 'bg-gradient-to-br from-gray-200 via-gray-100 to-white cursor-not-allowed opacity-50 shadow-md'
      )}
      onClick={canOpen ? onClick : undefined}
    >
      {/* Golden shimmer effect on hover */}
      {canOpen && (
        <>
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
               style={{
                 background: 'linear-gradient(135deg, transparent 0%, rgba(255, 215, 0, 0.3) 30%, rgba(255, 255, 255, 0.6) 50%, rgba(255, 215, 0, 0.3) 70%, transparent 100%)',
                 backgroundSize: '200% 200%',
                 animation: 'shimmer 2s ease-in-out infinite'
               }}>
          </div>
          {/* Subtle golden border glow */}
          <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
               style={{
                 boxShadow: 'inset 0 0 20px rgba(255, 215, 0, 0.2)'
               }}>
          </div>
        </>
      )}

      {/* Main content - centered and always in same position */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-2 group-hover:opacity-0 transition-opacity duration-300">
        <div className={cn(
          'text-4xl md:text-5xl font-bold transition-all group-hover:scale-110 duration-300',
          canOpen ? 'bg-gradient-to-br from-pink-primary to-gold-dark bg-clip-text text-transparent' : 'text-gray-400'
        )}>
          {day}
        </div>
        
        {!canOpen ? (
          <LockIcon className="w-6 h-6 text-gray-400 animate-sway" />
        ) : isSpecialDay ? (
          <HeartIcon className="w-7 h-7 text-pink-primary animate-heartbeat" />
        ) : (
          <SparkleIcon className="w-6 h-6 text-gold animate-sparkle" />
        )}
      </div>

      {/* Hover overlay with gradient - positioned absolutely so it doesn't affect layout */}
      {canOpen && (
        <div className="absolute inset-0 bg-gradient-to-br from-pink-primary via-pink-primary/95 to-gold-dark/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-sm z-20 rounded-xl">
          <div className="flex items-center gap-2 text-white animate-gentle-bounce">
            {isSpecialDay ? (
              <HeartIcon className="w-6 h-6" />
            ) : (
              <SparkleIcon className="w-6 h-6" />
            )}
            <span className="text-sm font-semibold">Abrir</span>
          </div>
        </div>
      )}
    </Card>
  );
};

export default DayCard;
