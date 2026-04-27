import './headerButton.css';

const Button = ({ icon, children, onClick, width }) => {
  return (
    <button 
      className="custom-button" 
      onClick={onClick}
      style={{ width: `${width}px` }}
    >
      {icon && <span className="button-icon">{icon}</span>}
      <span className="button-text">{children}</span>
    </button>
  );
};

export default Button;