import type { CustomContent as CustomContentType } from '../../types/calendar';

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
              className="bg-white p-5 md:p-6 my-4 rounded-2xl text-lg md:text-xl text-[#5a3a4a] shadow-md shadow-pink-primary/15 border-l-4 border-pink-light transition-all duration-300 hover:translate-x-2.5 hover:shadow-lg hover:shadow-pink-primary/25 hover:border-pink-primary opacity-0 animate-[slideIn_0.5s_ease-out_forwards]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
      
      {data.specialMessage && (
        <div className="mt-10 p-8 bg-gradient-to-br from-pink-light/20 to-pink-lighter/30 rounded-3xl text-center border-2 border-dashed border-pink-primary relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-30 animate-[sparkle-bg_20s_linear_infinite]"
               style={{
                 background: 'radial-gradient(circle, rgba(255, 255, 255, 0.3) 10%, transparent 10%)',
                 backgroundSize: '20px 20px'
               }}>
          </div>
          
          <div className="text-3xl my-2.5 animate-[spin-sparkle_4s_linear_infinite] relative z-10">
            ✨
          </div>
          <p className="text-lg md:text-xl text-pink-primary font-semibold leading-relaxed my-5 relative z-10 drop-shadow-sm">
            {data.specialMessage}
          </p>
          <div className="text-3xl my-2.5 animate-[spin-sparkle_4s_linear_infinite] relative z-10">
            ✨
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomContent;
