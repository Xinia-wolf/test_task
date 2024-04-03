import { useContext } from "react";
import st from "./styles.module.css";
import { CartContext } from "../context/cart-context";
import CartItem from "./cart-item";

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div>
      <h2 className={st.cart_header}>Корзина</h2>
      <div className={st.cartContainer}>
      {cartItems.length === 0 && <p>Ваша корзина пуста</p>}
        {cartItems.map((item) => (
          <CartItem item={item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
