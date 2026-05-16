const ShopCard = ({ item, onBuy, onClick }) => {
  return (
    <div className="card">

      <div
        className="card-click"
        onClick={() => onClick(item)}
      >
        <div className="card-image">
          <img src={item.image} alt={item.title} />
        </div>

        <div className="card-title">{item.title}</div>
      </div>

      <button
        className="buy-btn"
        onClick={(e) => {
          e.stopPropagation();
          onBuy(item.id);
        }}
      >
        {item.price} ₽
      </button>

    </div>
  );
};

export default ShopCard;