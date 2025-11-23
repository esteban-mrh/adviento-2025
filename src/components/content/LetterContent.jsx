import './LetterContent.css';

const LetterContent = ({ data }) => {
  return (
    <div className="letter-content">
      <div className="letter-header">
        <div className="letter-ornament top">🌹</div>
        <h2 className="letter-title">{data.title}</h2>
        <div className="letter-ornament bottom">✨</div>
      </div>
      <div className="letter-body">
        <p className="letter-text">{data.text}</p>
      </div>
      <div className="letter-signature">
        <div className="signature-line"></div>
        <div className="signature-heart">💖</div>
      </div>
    </div>
  );
};

export default LetterContent;
