import { useState, useEffect } from 'react';
import { Card } from '../ui/card';
import { cn } from '@/lib/utils';
import { SparkleIcon } from './Icons';

// UTC-5 offset in milliseconds (Ecuador/Guayaquil timezone)
const UTC_MINUS_5_OFFSET = -5 * 60 * 60 * 1000;

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  total: number;
}

/**
 * Get the current time adjusted for UTC-5 timezone
 */
const getTimeInUTCMinus5 = (): Date => {
  const now = new Date();
  // Get UTC time, then add the UTC-5 offset
  const utcTime = now.getTime() + (now.getTimezoneOffset() * 60 * 1000);
  return new Date(utcTime + UTC_MINUS_5_OFFSET);
};

/**
 * Calculate time remaining until target date in UTC-5 timezone
 * Target: December 1st, 2025 at 00:00:00 UTC-5
 */
const calculateTimeRemaining = (): TimeRemaining => {
  // Target date: December 1st, 2025 at 00:00:00 in UTC-5
  // We need to create this date properly for comparison
  const targetYear = 2025;
  const targetMonth = 11; // December (0-indexed)
  const targetDay = 1;
  
  const nowInUTCMinus5 = getTimeInUTCMinus5();
  
  // Create target date in UTC-5 context
  const targetDateInUTCMinus5 = new Date(targetYear, targetMonth, targetDay, 0, 0, 0, 0);
  
  // Calculate the difference based on the current time in UTC-5
  const currentYearInUTCMinus5 = nowInUTCMinus5.getFullYear();
  const currentMonthInUTCMinus5 = nowInUTCMinus5.getMonth();
  const currentDayInUTCMinus5 = nowInUTCMinus5.getDate();
  const currentHoursInUTCMinus5 = nowInUTCMinus5.getHours();
  const currentMinutesInUTCMinus5 = nowInUTCMinus5.getMinutes();
  const currentSecondsInUTCMinus5 = nowInUTCMinus5.getSeconds();
  
  // Create a comparable date object for now in the same reference frame
  const nowComparable = new Date(
    currentYearInUTCMinus5,
    currentMonthInUTCMinus5,
    currentDayInUTCMinus5,
    currentHoursInUTCMinus5,
    currentMinutesInUTCMinus5,
    currentSecondsInUTCMinus5
  );
  
  const total = targetDateInUTCMinus5.getTime() - nowComparable.getTime();
  
  if (total <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, total: 0 };
  }
  
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  
  return { days, hours, minutes, seconds, total };
};

interface TimeUnitProps {
  value: number;
  label: string;
}

const TimeUnit = ({ value, label }: TimeUnitProps) => (
  <div className="flex flex-col items-center">
    <div className={cn(
      'w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-xl',
      'bg-gradient-to-br from-pink-lightest via-warm-cream to-gold-lightest',
      'shadow-lg border border-gold-light/30',
      'flex items-center justify-center',
      'transition-all duration-300 hover:scale-105 hover:shadow-gold/30'
    )}>
      <span className={cn(
        'text-2xl sm:text-3xl md:text-4xl font-bold',
        'bg-gradient-to-br from-pink-primary to-gold-dark bg-clip-text text-transparent'
      )}>
        {value.toString().padStart(2, '0')}
      </span>
    </div>
    <span className="mt-2 text-xs sm:text-sm text-pink-primary/70 font-medium">
      {label}
    </span>
  </div>
);

const Countdown = (): JSX.Element | null => {
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>(calculateTimeRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      const remaining = calculateTimeRemaining();
      setTimeRemaining(remaining);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Don't show countdown if we've reached December 1st
  if (timeRemaining.total <= 0) {
    return null;
  }

  return (
    <div className="max-w-4xl mx-auto mb-8 relative z-10 px-4 sm:px-0">
      <Card className="bg-gradient-to-r from-pink-lightest via-warm-cream to-gold-lightest border-gold-light/50 overflow-hidden backdrop-blur-sm">
        <div className="relative px-4 py-6 md:px-6 md:py-8">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-2 mb-2">
              <SparkleIcon className="w-5 h-5 text-gold animate-sparkle" />
              <h2 className={cn(
                'text-lg sm:text-xl md:text-2xl font-bold',
                'bg-gradient-to-r from-pink-primary to-gold-dark bg-clip-text text-transparent'
              )}>
                ¡Cuenta regresiva!
              </h2>
              <SparkleIcon className="w-5 h-5 text-gold animate-sparkle" style={{ animationDelay: '0.5s' }} />
            </div>
            <p className="text-sm sm:text-base text-pink-primary/70">
              Tiempo restante para el 1 de diciembre
            </p>
          </div>

          {/* Countdown display */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-6">
            <TimeUnit value={timeRemaining.days} label="Días" />
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-pink-primary/50 self-start mt-4 sm:mt-5 md:mt-6">:</div>
            <TimeUnit value={timeRemaining.hours} label="Horas" />
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-pink-primary/50 self-start mt-4 sm:mt-5 md:mt-6">:</div>
            <TimeUnit value={timeRemaining.minutes} label="Minutos" />
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-pink-primary/50 self-start mt-4 sm:mt-5 md:mt-6 hidden sm:block">:</div>
            <div className="hidden sm:block">
              <TimeUnit value={timeRemaining.seconds} label="Segundos" />
            </div>
          </div>

          {/* Timezone note */}
          <p className="text-center mt-4 text-xs text-pink-primary/50">
            Zona horaria: Ecuador (UTC-5)
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Countdown;
