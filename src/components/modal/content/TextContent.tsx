import type { TextContent as TextContentType } from '../../../types/calendar';
import { Heart } from 'lucide-react';

interface TextContentProps {
  data: TextContentType;
}

const TextContent = ({ data }: TextContentProps) => {
  return (
    <div className="text-center py-5">
      <p className="text-xl md:text-2xl leading-relaxed text-pink-primary/90 whitespace-pre-line font-medium mb-6">
        {data.message}
      </p>
      <Heart className="w-8 h-8 mx-auto text-pink-primary animate-heartbeat" />
    </div>
  );
};

export default TextContent;
