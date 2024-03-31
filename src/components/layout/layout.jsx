import st from "./styles.module.css";
import { useState } from "react";
import ApplicationBar from "../applicationBar/applicationBar";
import MainPanel from "../content/mainPanel";
import { CartContext } from "../context/cart-context";

const Layout = () => {
  const [itemsCounter, setItemsCounter] = useState(0);
  const [cartItems, setCartItems] = useState([]);
 
  return (
    <div className={st.layout}>
      <CartContext.Provider
        value={{
          itemsCounter, setItemsCounter, 
          cartItems, setCartItems
        }}
      >
        <ApplicationBar />
        <MainPanel />
      </CartContext.Provider>
    </div>
  );
};

export default Layout;
