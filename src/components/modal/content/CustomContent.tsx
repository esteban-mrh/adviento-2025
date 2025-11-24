import type { CustomContent as CustomContentType } from '../../../types/calendar';
import { Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CustomContentProps {
  data: CustomContentType;
}

const CustomContent = ({ data }: CustomContentProps) => {
  return (
    <div className="py-2.5">
      {data.title && (
        <h2 className="text-3xl md:text-4xl text-pink-primary font-bold text-center mb-8 font-serif drop-shadow-sm">
          {data.title}
        </h2>
      )}
      
      {data.items && data.items.length > 0 && (
        <ul className="list-none p-0 m-0">
          {data.items.map((item, index) => (
            <li 
              key={index}
              className={cn(
                'bg-warm-cream p-5 md:p-6 my-4 rounded-2xl text-lg md:text-xl text-pink-primary/85',
                'shadow-md shadow-gold/15 border-l-4 border-gold-light',
                'transition-all duration-300 hover:translate-x-2.5 hover:shadow-lg',
                'hover:shadow-gold/25 hover:border-gold',
                'opacity-0 animate-slideIn'
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
      
      {data.specialMessage && (
        <div className="mt-10 p-8 bg-gradient-to-br from-pink-lightest/50 to-gold-lightest/50 rounded-3xl text-center border-2 border-dashed border-gold relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-20 animate-sparkle-bg"
               style={{
                 background: 'radial-gradient(circle, rgba(201, 168, 108, 0.3) 10%, transparent 10%)',
                 backgroundSize: '20px 20px'
               }}>
          </div>
          
          <Sparkles className="w-8 h-8 mx-auto my-3 text-gold animate-spin-sparkle relative z-10" />
          <p className="text-lg md:text-xl text-pink-primary font-semibold leading-relaxed my-5 relative z-10 drop-shadow-sm">
            {data.specialMessage}
          </p>
          <Sparkles className="w-8 h-8 mx-auto my-3 text-gold animate-spin-sparkle relative z-10" />
        </div>
      )}
    </div>
  );
};

export default CustomContent;
