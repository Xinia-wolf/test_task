import st from "./styles.module.css";
import Content from '../content/content';
import Footer from "../footer/footer";

const MainPanel = () => {
    return (
        <div className={st.mainPanel}>
            <Content />
            <Footer />
        </div>
    )
}

export default MainPanel;