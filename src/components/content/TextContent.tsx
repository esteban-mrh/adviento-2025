import type { TextContent as TextContentType } from '../../types/calendar';

interface TextContentProps {
  data: TextContentType;
}

const TextContent = ({ data }: TextContentProps) => {
  return (
    <div className="text-center py-5">
      <p className="text-xl md:text-2xl leading-relaxed text-[#5a3a4a] whitespace-pre-line font-medium mb-5">
        {data.message}
      </p>
      <div className="text-3xl animate-[pulse_2s_ease-in-out_infinite]">
        💕
      </div>
    </div>
  );
};

export default TextContent;
