import type { URLContent as URLContentType } from '../../types/calendar';

interface URLContentProps {
  data: URLContentType;
}

const URLContent = ({ data }: URLContentProps) => {
  const handleClick = () => {
    window.open(data.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="text-center py-8">
      <div className="text-6xl mb-5 animate-bounce">
        🔗
      </div>
      
      {data.title && (
        <h3 className="text-3xl text-pink-primary font-bold my-5 font-serif">
          {data.title}
        </h3>
      )}
      
      {data.description && (
        <p className="text-lg text-[#5a3a4a] my-4 italic mb-8">
          {data.description}
        </p>
      )}
      
      <button
        onClick={handleClick}
        className="group relative inline-flex items-center gap-3 px-8 py-4 text-lg font-bold text-white bg-gradient-to-br from-pink-light to-pink-primary rounded-full shadow-lg shadow-pink-primary/40 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-pink-primary/60 active:scale-95 overflow-hidden"
      >
        {/* Shimmer effect */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: 'linear-gradient(135deg, transparent 0%, rgba(255, 255, 255, 0.3) 50%, transparent 100%)',
            backgroundSize: '200% 200%',
            animation: 'shimmer 1.5s ease-in-out infinite'
          }}
        />
        
        <span className="relative z-10">
          {data.buttonText || 'Abrir enlace'}
        </span>
        
        <svg 
          className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
          />
        </svg>
      </button>
      
      <p className="text-sm text-pink-primary/70 mt-6 font-medium">
        Se abrirá en una nueva pestaña 🌟
      </p>
    </div>
  );
};

export default URLContent;
