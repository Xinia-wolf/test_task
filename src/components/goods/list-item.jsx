import { useContext, useEffect } from "react";
import st from "./styles.module.css";
import star from "../../icons/Star.svg";
import { CartContext } from "../context/cart-context";

const Item = ({ item }) => {
  const { itemsCounter, setItemsCounter, setCartItems, cartItems } = useContext(CartContext);

  useEffect(() => {
    item.quantity = 0;
  }, [item])

  const addToCart = (item) => {
    const existingProduct = cartItems.find(cartItem => cartItem.id === item.id);
    if (existingProduct) {
      const updatedCartItems = cartItems.map(cartItem =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      );
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    };
    console.log(cartItems);
  };

  const handleClick = () => {
    setItemsCounter(itemsCounter + 1);
    addToCart(item);
  }

  return (
    <div key={item.id} className={st.itemCard}>
      <img src={item.image} alt="product_photo"></img>
      <div className={st.itemInfo}>
        <p className={st.itemTitle}>{item.title}</p>
        <p className={st.itemPrice}>{item.price}</p>
        <p style={{visibility: item.oldPrice == null ? "hidden": ""}} className={st.itemOldPrice}>{item.oldPrice}</p>
        <div className={st.itemRateContainer}>
          <img src={star} className={st.itemRateIcon} alt="star_icon"></img>
          <p className={st.itemRate}>{item.rate}</p>
        </div>
        <button onClick={handleClick} className={st.buyItemButton}>Купить</button>
      </div>
    </div>
  );
};

export default Item;
