import { useContext } from "react";
import st from "./styles.module.css";
import star from "../../icons/Star.svg";
import { CartContext } from "../context/cart-context";

const Item = ({ item }) => {
  const { itemsCounter, setItemsCounter, setCartItems } = useContext(CartContext);

  const addToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
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
