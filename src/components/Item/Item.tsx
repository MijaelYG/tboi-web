import styles from "./Item.module.css";

interface PropsItem {
  index?: number;
  name: string;
  type:string;
}
function Item({ index, name,type }: PropsItem) {
  return (
    <div className={styles.cont_item}>
      <div
        className={styles.item}
        key={index}
        style={{
          backgroundImage: `url(/img/objects/${type}s/${name
            .replace(/[^a-zA-Z0-9]/g, "_")
            .toLowerCase()}.png)`,
        }}
      ></div>
    </div>
  );
}

export default Item;
