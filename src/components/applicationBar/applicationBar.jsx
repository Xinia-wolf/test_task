import { NavLink } from "react-router-dom";
import { useContext } from "react";
import st from "./styles.module.css";
import logo from "../../icons/QPICK.svg";
import favourites from "../../icons/Favourites.svg";
import cart from "../../icons/Cart.svg";
import ellipse from "../../icons/Ellipse.svg"
import { CartContext } from "../context/cart-context";

const ApplicationBar = () => {
  const { itemsCounter } = useContext(CartContext);

  return (
    <div className={st.applicationBar}>
      <NavLink to="/" className={st.logo}>
        <img src={logo} alt="logo"></img>
      </NavLink>
      <div className={st.icons}>
        <div className={st.favourites_container}>
          <img
            src={favourites}
            className={st.favourites}
            alt="favourites_icon"
          ></img>
        </div>
        <div className={st.cart_container}>
          <NavLink to="/cart" className={st.cart}>
            <img src={cart} alt="cart_icon"></img>
            {!itemsCounter || <div><img src={ellipse} alt="yellow_ellipse" className={st.ellipse}></img><p className={st.itemsCounter}>{itemsCounter}</p></div>}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ApplicationBar;
