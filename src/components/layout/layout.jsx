import st from "./styles.module.css";
import { useState } from "react";
import ApplicationBar from "../applicationBar/applicationBar";
import MainPanel from "../content/mainPanel";
import { CartContext } from "../context/cart-context";

const Layout = () => {
  const [itemsCounter, setItemsCounter] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const updateCartItem = (id, newQuantity) => {
    setCartItems(currentCartItems => currentCartItems.map(item => 
       item.id === id ? { ...item, quantity: newQuantity } : item
    ));
   };
 
  return (
    <div className={st.layout}>
      <CartContext.Provider
        value={{
          itemsCounter, setItemsCounter, 
          cartItems, setCartItems, updateCartItem
        }}
      >
        <ApplicationBar />
        <MainPanel />
      </CartContext.Provider>
    </div>
  );
};

export default Layout;
