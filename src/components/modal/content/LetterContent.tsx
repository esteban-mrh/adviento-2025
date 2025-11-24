import type { LetterContent as LetterContentType } from '../../../types/calendar';
import { Flower2, Sparkles, Heart } from 'lucide-react';

interface LetterContentProps {
  data: LetterContentType;
}

const LetterContent = ({ data }: LetterContentProps) => {
  return (
    <div className="bg-white rounded-2xl p-10 shadow-lg shadow-pink-primary/15 border-2 border-pink-light/30">
      <div className="text-center mb-8 relative">
        <Flower2 className="w-8 h-8 mx-auto my-3 text-pink-primary animate-rotate" />
        <h2 className="text-3xl md:text-4xl text-pink-primary font-serif font-bold my-4 drop-shadow-sm">
          {data.title}
        </h2>
        <Sparkles className="w-8 h-8 mx-auto my-3 text-pink-primary animate-twinkle" />
      </div>
      
      <div className="my-8">
        <p className="text-lg md:text-xl leading-loose text-gray-700 whitespace-pre-line text-left font-serif">
          {data.text}
        </p>
      </div>
      
      <div className="mt-10 flex flex-col items-center gap-4">
        <div className="w-48 h-0.5 bg-gradient-to-r from-transparent via-pink-primary to-transparent"></div>
        <Heart className="w-8 h-8 text-pink-primary animate-heartbeat" />
      </div>
    </div>
  );
};

export default LetterContent;
