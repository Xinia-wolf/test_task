import { useState, useCallback, useEffect, useContext } from "react";
import st from "./styles.module.css";
import trashBin from "../../icons/Delete.svg";
import { CartContext } from "../context/cart-context";

const CartItem = ({ item }) => {
  const [quantity, setQuantity] = useState(item.quantity);
  const [itemTotal, setItemTotal] = useState(item.price * item.quantity);
  const { updateCartItem } = useContext(CartContext);

  const total = useCallback(() => {
      let totalVal = quantity * item.price;
      setItemTotal(totalVal);
  }, [item.price, quantity]);

  useEffect(() => {
    total();
  }, [total]);

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      updateCartItem(item.id, quantity - 1);
    }
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
    updateCartItem(item.id, quantity + 1);
  };

  return (
    <div key={item.id} className={st.itemCard}>
      <div className={st.imageAndQuantity}>
        <img
          src={item.image}
          className={st.itemImage}
          alt="product_photo"
        ></img>
        <div className={st.quantityButtons}>
          <button
            className={st.decrement}
            onClick={handleDecrement}
            disabled={quantity <= 1}
          >
            -
          </button>
          <p className={st.quantity}>{quantity}</p>
          <button className={st.increment} onClick={handleIncrement}>
            +
          </button>
        </div>
      </div>
      <div className={st.itemInfo}>
        <p className={st.itemTitle}>{item.title}</p>
        <p className={st.itemPrice}>{item.price}</p>
      </div>
      <img src={trashBin} className={st.trashBin} alt="trash_bin"></img>
      <p className={st.itemTotal}>{itemTotal}</p>
    </div>
  );
};

export default CartItem;
