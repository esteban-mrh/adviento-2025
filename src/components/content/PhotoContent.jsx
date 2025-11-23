import './PhotoContent.css';

const PhotoContent = ({ data }) => {
  return (
    <div className="photo-content">
      <div className="photo-frame">
        <img 
          src={data.url} 
          alt={data.caption || 'Foto especial'} 
          className="photo-image"
          onError={(e) => {
            e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23ffd4e5" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="24" fill="%23d4576d"%3E📸%3C/text%3E%3Ctext x="50%25" y="60%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="16" fill="%23d4576d"%3EFoto aquí%3C/text%3E%3C/svg%3E';
          }}
        />
        <div className="photo-corners">
          <div className="corner top-left"></div>
          <div className="corner top-right"></div>
          <div className="corner bottom-left"></div>
          <div className="corner bottom-right"></div>
        </div>
      </div>
      {data.caption && (
        <p className="photo-caption">{data.caption}</p>
      )}
      <div className="photo-decoration">💕✨</div>
    </div>
  );
};

export default PhotoContent;
