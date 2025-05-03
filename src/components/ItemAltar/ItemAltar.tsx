import { motion } from "framer-motion";
import styles from "./ItemAltar.module.css";

interface PropsItemAltar {
  index?: number;
  name: string;
}

const ItemAltar = ({ index, name }: PropsItemAltar) => {
  return (
    <motion.div className={styles.item_stactic}>
      <motion.div className={styles.cont_item}>
        <div
          className={styles.item}
          key={index}
          style={{
            backgroundImage: `url(/img/objects/items/${name
              .replace(/[^a-zA-Z0-9]/g, "_")
              .toLowerCase()}.png)`,
            animationDelay: `-${Math.random()}s`,
          }}
        ></div>
      </motion.div>
      <motion.div className={styles.altar}></motion.div>
    </motion.div>
  );
};

export default ItemAltar;
