import st from "./styles.module.css";
import Item from "./list-item";

const List = ({ headphones, wirelessHeadphones }) => {
  return (
    <div>
      <h2 className={st.list_header}>Наушники</h2>
      <div className={st.itemsContainer}>
        {headphones.map((item) => (
          <Item item={item} />
        ))}
      </div>
      <h2 className={st.list_header}>Беспроводные наушники</h2>
      <div className={st.itemsContainer}>
        {wirelessHeadphones.map((item) => (
          <Item item={item} />
        ))}
      </div>
    </div>
  );
};

export default List;
