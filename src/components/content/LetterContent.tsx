import type { LetterContent as LetterContentType } from '../../types/calendar';

interface LetterContentProps {
  data: LetterContentType;
}

const LetterContent = ({ data }: LetterContentProps) => {
  return (
    <div className="bg-white rounded-2xl p-10 shadow-lg shadow-pink-primary/15 border-2 border-pink-light/30">
      <div className="text-center mb-8 relative">
        <div className="text-2xl my-3 animate-rotate">🌹</div>
        <h2 className="text-3xl md:text-4xl text-pink-primary font-serif font-bold my-4 drop-shadow-sm">
          {data.title}
        </h2>
        <div className="text-2xl my-3 animate-twinkle">✨</div>
      </div>
      
      <div className="my-8">
        <p className="text-lg md:text-xl leading-loose text-[#5a3a4a] whitespace-pre-line text-left font-serif">
          {data.text}
        </p>
      </div>
      
      <div className="mt-10 flex flex-col items-center gap-4">
        <div className="w-48 h-0.5 bg-gradient-to-r from-transparent via-pink-primary to-transparent"></div>
        <div className="text-3xl animate-heartbeat">💖</div>
      </div>
    </div>
  );
};

export default LetterContent;
