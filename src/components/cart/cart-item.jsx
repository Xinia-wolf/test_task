import { useState } from "react";
import st from "./styles.module.css";

const CartItem = ({ item }) => {
    const [quantity, setQuantity] = useState(item.quantity);

  return (
    <div key={item.id} className={st.itemCard}>
      <img src={item.image} className={st.itemImage} alt="product_photo"></img>
      <div className={st.itemInfo}>
        <p className={st.itemTitle}>{item.title}</p>
        <p className={st.itemPrice}>{item.price}</p>
      </div>
      <div className={st.quantityButtons}>
        <button className={st.decrement} onClick={() => setQuantity(quantity - 1)} disabled={quantity <= 1}>-</button>
        <p className={st.quantity}>{item.quantity}</p>
        <button className={st.increment} onClick={() => setQuantity(quantity + 1)}>+</button>
      </div>
    </div>
  );
};

export default CartItem;
