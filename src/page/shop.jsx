import { useEffect, useState } from "react";
import { buyItem, getShopItems } from "../api/shopApi";
import ShopCard from "../page/shopCard";
import ShopModal from "../page/shopModal";
import "./shop.css";

const Shop = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    loadItems();
  }, []);

  const loadItems = async () => {
    try {
      const data = await getShopItems();
      setItems(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const handleBuy = async (id) => {
    try {
      await buyItem(id);
      alert("Покупка успешна!");
    } catch (e) {
      alert("Ошибка покупки");
    }
  };

  const handleOpen = (item) => {
    setSelectedItem(item);
  };

  const handleClose = () => {
    setSelectedItem(null);
  };

  if (loading) {
    return <div className="shop-page">Загрузка...</div>;
  }

  // 🔥 фильтрация по категориям
  const statusItems = items.filter((i) => i.category === "status");
  const boosterItems = items.filter((i) => i.category === "booster");
  const otherItems = items.filter((i) => i.category === "other");

  return (
    <div className="shop-page">
      <div className="shop-container">
        <h1 className="shop-title">Магазин</h1>

        {/* СТАТУСЫ */}
        <h2 className="section-title">Статусы</h2>
        <div className="items-grid">
          {statusItems.map((item) => (
            <ShopCard
              key={item.id}
              item={item}
              onBuy={handleBuy}
              onClick={handleOpen}
            />
          ))}
        </div>

        {/* БУСТЕРЫ */}
        <h2 className="section-title">Бустеры</h2>
        <div className="items-grid">
          {boosterItems.map((item) => (
            <ShopCard
              key={item.id}
              item={item}
              onBuy={handleBuy}
              onClick={handleOpen}
            />
          ))}
        </div>

        {/* ДРУГОЕ */}
        <h2 className="section-title">Другое</h2>
        <div className="items-grid">
          {otherItems.map((item) => (
            <ShopCard
              key={item.id}
              item={item}
              onBuy={handleBuy}
              onClick={handleOpen}
            />
          ))}
        </div>
      </div>

      {/* МОДАЛКА */}
      {selectedItem && (
        <ShopModal
          item={selectedItem}
          onClose={handleClose}
          onBuy={handleBuy}
        />
      )}
    </div>
  );
};

export default Shop;