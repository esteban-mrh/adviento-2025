import './TextContent.css';

const TextContent = ({ data }) => {
  return (
    <div className="text-content">
      <p className="text-message">{data.message}</p>
      <div className="text-decoration">💕</div>
    </div>
  );
};

export default TextContent;
