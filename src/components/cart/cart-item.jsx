import { useState } from "react";
import st from "./styles.module.css";

const CartItem = ({ item }) => {
  const [quantity, setQuantity] = useState(item.quantity);

  const handleDecrement = () => {
    if (item.quantity > 1) {
      setQuantity(quantity - 1);
    }
 };

 const handleIncrement = () => {
  setQuantity(quantity + 1);
 };
    
  return (
    <div key={item.id} className={st.itemCard}>
      <img src={item.image} className={st.itemImage} alt="product_photo"></img>
      <div className={st.itemInfo}>
        <p className={st.itemTitle}>{item.title}</p>
        <p className={st.itemPrice}>{item.price}</p>
      </div>
      <div className={st.quantityButtons}>
        <button className={st.decrement} onClick={handleDecrement} disabled={item.quantity <= 1}>-</button>
        <p className={st.quantity}>{quantity}</p>
        <button className={st.increment} onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
};

export default CartItem;
