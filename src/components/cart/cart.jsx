import { useContext, useState, useEffect } from "react";
import st from "./styles.module.css";
import { CartContext } from "../context/cart-context";
import CartItem from "./cart-item";

const Cart = () => {
  const { cartItems } = useContext(CartContext);
  const [totalCost, setTotalCost] = useState(0);

  const numberWithSpaces = (x) => {
    const parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(".");
  };

  useEffect(() => {
    const calculateTotalCost = () => {
      const total = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      const finalResult = numberWithSpaces(total);
      setTotalCost(finalResult);
    };

    calculateTotalCost();
  }, [cartItems]);

  return (
    <>
    <h2 className={st.cart_header}>Корзина</h2>
    <div className={st.cart}>
      <div className={st.cartContainer}>
        {cartItems.length === 0 && <p className={st.emptyCart}>Ваша корзина пуста</p>}
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className={st.totalCostContainer}>
        <div className={st.totalCost}>
          <p className={st.totalCostCaption}>ИТОГО</p>
          <p className={st.totalCostValue}>{totalCost}</p>
        </div>
        <button className={st.totalCostButton}>Перейти к оформлению</button>
      </div>
    </div>
    </>
  );
};

export default Cart;
