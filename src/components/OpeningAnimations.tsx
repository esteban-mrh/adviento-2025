import { cn } from '@/lib/utils';

interface AnimatedCardProps {
  className?: string;
}

export const AnimatedCard = ({ className }: AnimatedCardProps) => {
  return (
    <div className={cn("envelope-wrapper", className)}>
      <div className="envelope-container group">
        {/* Envelope background with gradient */}
        <div className="env-wrap">
          {/* Top flap of envelope */}
          <div className="env-top">
            <div className="env-top-inner" />
          </div>
          
          {/* Bottom part of envelope */}
          <div className="env-bottom-wrap">
            <div className="env-bottom">
              <div className="env-bottom-left" />
              <div className="env-bottom-right" />
            </div>
          </div>
          
          {/* Letter content inside envelope */}
          <div className="env-letter">
            <div className="letter-content">
              <div className="letter-heart">💝</div>
              <div className="letter-sparkles">
                <span className="sparkle sparkle-1">✨</span>
                <span className="sparkle sparkle-2">✨</span>
                <span className="sparkle sparkle-3">✨</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedCard;
