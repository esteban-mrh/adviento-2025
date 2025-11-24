import { cn } from '@/lib/utils';

interface AnimatedCardProps {
  variant: 'card' | 'box';
  className?: string;
}

export const AnimatedCard = ({ variant, className }: AnimatedCardProps) => {
  if (variant === 'card') {
    return (
      <div className={cn("relative w-56 h-72 perspective-1000", className)}>
        {/* Card opening animation - greeting card style */}
        <div className="relative w-full h-full preserve-3d">
          {/* Back of card - stays fixed */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-lighter via-pink-light to-pink-primary rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden">
            {/* Decorative pattern on back */}
            <div className="absolute inset-6 border-4 border-white/40 rounded-2xl" />
            <div className="absolute inset-10 border-2 border-white/20 rounded-xl" />
            <div className="text-8xl opacity-30 animate-pulse">💝</div>
          </div>
          
          {/* Front of card - opens to the left */}
          <div 
            className="absolute inset-0 origin-left animate-card-open bg-gradient-to-br from-pink-light via-pink-lighter to-white rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Card front decorations */}
            <div className="absolute inset-6 border-4 border-pink-primary/30 rounded-2xl" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="text-7xl">🎀</div>
            </div>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-pink-primary font-serif text-sm opacity-60">
              Para ti
            </div>
          </div>
          
          {/* Sparkles revealing from inside */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="opacity-0 animate-content-reveal">
              <div className="relative">
                <div className="text-8xl animate-gentle-bounce">✨</div>
                <div className="absolute -top-6 -left-8 text-gold text-5xl animate-twinkle" style={{ animationDelay: '0.3s' }}>✨</div>
                <div className="absolute -top-6 -right-8 text-gold-light text-5xl animate-twinkle" style={{ animationDelay: '0.4s' }}>✨</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Box variant - gift box unboxing
  return (
    <div className={cn("relative w-56 h-56", className)}>
      <div className="relative w-full h-full">
        {/* Box base - stays fixed */}
        <div className="absolute inset-x-0 bottom-0 h-3/5">
          <div className="w-full h-full bg-gradient-to-br from-pink-lighter to-pink-light rounded-3xl shadow-2xl relative overflow-hidden">
            {/* Vertical ribbon on box */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-full bg-gradient-to-b from-gold-light via-gold to-gold-dark" />
            {/* Decorative dots on box */}
            <div className="absolute top-6 left-6 w-3 h-3 bg-white/40 rounded-full" />
            <div className="absolute top-6 right-6 w-3 h-3 bg-white/40 rounded-full" />
            <div className="absolute bottom-6 left-6 w-3 h-3 bg-white/40 rounded-full" />
            <div className="absolute bottom-6 right-6 w-3 h-3 bg-white/40 rounded-full" />
          </div>
        </div>
        
        {/* Box lid with bow - lifts up and tilts */}
        <div className="absolute inset-x-0 top-0 h-2/5 animate-box-lid-open origin-bottom">
          <div className="relative w-full h-full bg-gradient-to-br from-pink-light to-pink-primary rounded-t-3xl shadow-2xl">
            {/* Horizontal ribbon on lid */}
            <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 h-8 bg-gradient-to-r from-gold via-gold-light to-gold" />
            
            {/* Bow on top of lid */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 scale-125">
              <div className="relative w-12 h-12">
                {/* Left loop */}
                <div className="absolute -left-6 top-2 w-10 h-8 bg-gold rounded-full transform -rotate-45" />
                {/* Right loop */}
                <div className="absolute -right-6 top-2 w-10 h-8 bg-gold rounded-full transform rotate-45" />
                {/* Center knot */}
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-gold-dark rounded-full shadow-lg" />
                {/* Ribbon tails */}
                <div className="absolute top-8 -left-2 w-4 h-8 bg-gold transform rotate-12" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
                <div className="absolute top-8 -right-2 w-4 h-8 bg-gold transform -rotate-12" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
              </div>
            </div>
          </div>
        </div>
        
        {/* Sparkles and confetti bursting out */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="opacity-0 animate-content-reveal">
            <div className="relative">
              <div className="text-8xl animate-gentle-bounce" style={{ animationDelay: '0.2s' }}>🎁</div>
              <div className="absolute -top-8 -left-12 text-6xl animate-twinkle" style={{ animationDelay: '0.3s' }}>✨</div>
              <div className="absolute -top-8 -right-12 text-6xl animate-twinkle" style={{ animationDelay: '0.4s' }}>✨</div>
              <div className="absolute top-16 -left-8 text-4xl animate-sparkle" style={{ animationDelay: '0.5s' }}>💕</div>
              <div className="absolute top-16 -right-8 text-4xl animate-sparkle" style={{ animationDelay: '0.5s' }}>💕</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedCard;
