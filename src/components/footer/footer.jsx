import st from "./styles.module.css";
import logo from "../../icons/QPICK2.svg";
import globe from "../../icons/Globe.svg";
import vk from "../../icons/VK.svg";
import telegram from "../../icons/Telegram.svg";
import whatsapp from "../../icons/Whatsapp.svg";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className={st.footer}>
      <NavLink to="/">
        <img src={logo} className={st.footerLogo} alt="logo"></img>
      </NavLink>
      <div className={st.linksContainerLeft}>
        <NavLink className={st.footerLink}>Избранное</NavLink>
        <NavLink to="/cart" className={st.footerLink}>
          Корзина
        </NavLink>
        <NavLink className={st.footerLink}>Контакты</NavLink>
      </div>
      <div className={st.linksContainerRight}>
        <NavLink className={st.footerLink}>Условия сервиса</NavLink>
        <div className={st.languageIcons}>
          <img src={globe} className={st.globe} alt="globe_icon"></img>
          <button className={st.rusButton}>Рус</button>
          <button className={st.engButton}>Eng</button>
        </div>
      </div>
      <div className={st.footerContacts}>
        <a href="https://vk.com/" target="_blank" rel="noreferrer">
          <img src={vk} className={st.vk} alt="vk_logo"></img>
        </a>
        <a href="https://web.telegram.org/" target="_blank" rel="noreferrer">
          <img src={telegram} className={st.telegram} alt="telegram_logo"></img>
        </a>
        <a href="https://web.whatsapp.com/" target="_blank" rel="noreferrer">
          <img src={whatsapp} className={st.whatsapp} alt="whatsapp_logo"></img>
        </a>
      </div>
    </div>
  );
};

export default Footer;
