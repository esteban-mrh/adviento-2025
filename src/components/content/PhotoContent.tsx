import type { PhotoContent as PhotoContentType } from '../../types/calendar';

// Placeholder image for when photo fails to load
const PLACEHOLDER_IMAGE = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23ffd4e5" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="24" fill="%23d4576d"%3E📸%3C/text%3E%3Ctext x="50%25" y="60%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="16" fill="%23d4576d"%3EFoto aquí%3C/text%3E%3C/svg%3E';

interface PhotoContentProps {
  data: PhotoContentType;
}

const PhotoContent = ({ data }: PhotoContentProps) => {
  return (
    <div className="text-center py-5">
      <div className="relative inline-block bg-white p-5 rounded-2xl shadow-lg shadow-pink-primary/20 mb-5 border-4 border-pink-light/50">
        <img 
          src={data.url} 
          alt={data.caption || 'Foto especial'} 
          className="max-w-full w-full h-auto block rounded-xl shadow-md"
          onError={(e) => {
            e.currentTarget.src = PLACEHOLDER_IMAGE;
          }}
        />
        
        {/* Decorative corners */}
        <div className="absolute top-2.5 left-2.5 w-8 h-8 border-t-4 border-l-4 border-pink-primary rounded-tl-md pointer-events-none"></div>
        <div className="absolute top-2.5 right-2.5 w-8 h-8 border-t-4 border-r-4 border-pink-primary rounded-tr-md pointer-events-none"></div>
        <div className="absolute bottom-2.5 left-2.5 w-8 h-8 border-b-4 border-l-4 border-pink-primary rounded-bl-md pointer-events-none"></div>
        <div className="absolute bottom-2.5 right-2.5 w-8 h-8 border-b-4 border-r-4 border-pink-primary rounded-br-md pointer-events-none"></div>
      </div>
      
      {data.caption && (
        <p className="text-lg md:text-xl text-[#5a3a4a] italic my-4 font-medium">
          {data.caption}
        </p>
      )}
      
      <div className="text-3xl animate-float">💕✨</div>
    </div>
  );
};

export default PhotoContent;
