import './CustomContent.css';

const CustomContent = ({ data }) => {
  return (
    <div className="custom-content">
      {data.title && (
        <h2 className="custom-title">{data.title}</h2>
      )}
      
      {data.items && data.items.length > 0 && (
        <ul className="custom-list">
          {data.items.map((item, index) => (
            <li key={index} className="custom-item" style={{ animationDelay: `${index * 0.1}s` }}>
              {item}
            </li>
          ))}
        </ul>
      )}
      
      {data.specialMessage && (
        <div className="special-message">
          <div className="special-message-decoration">✨</div>
          <p className="special-message-text">{data.specialMessage}</p>
          <div className="special-message-decoration">✨</div>
        </div>
      )}
    </div>
  );
};

export default CustomContent;
