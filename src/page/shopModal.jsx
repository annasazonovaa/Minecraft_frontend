import closeIcon from '../Components/Assets/closeIcon.svg';
import "./shopModal.css";

const ShopModal = ({ item, onClose, onBuy }) => {
  if (!item) return null;


  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        
        <button className="close-btn" onClick={onClose}>
          <img src={closeIcon} alt="close" />
        </button>

        <div className="modal-body">

          {/* ЛЕВАЯ ЧАСТЬ */}
          <div className="modal-left">
            <div className="card">
              <div className="card-image">
                <img src={item.image} alt={item.title} />
              </div>

              <div className="card-title">{item.title}</div>

              <button className="buy-btn">
                {item.price} ₽
              </button>
            </div>
          </div>

          {/* ПРАВАЯ ЧАСТЬ */}
          <div className="modal-right">
            <div className="modal-description">
              {item.description}
            </div>

            <button
              className="buy-btn"
              onClick={() => onBuy(item.id)}
            >
              Купить
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ShopModal;