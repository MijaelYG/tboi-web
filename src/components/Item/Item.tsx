import { AnimatePresence, motion } from "framer-motion";
import styles from "./Item.module.css";
import { useState } from "react";

interface PropsItems {
  index?: number;
  name: string;
  type?: string;
  characterpos?:string;
}

const Item = ({ index, name, type,characterpos }: PropsItems) => {
  const [hoveredId, setHoveredId] = useState(0);

  return (

      <motion.div className={styles.item_stactic}>
        <AnimatePresence mode="wait">
        <motion.div
         key={`${characterpos}_${index}_cont_item`}
          className={styles.cont_item}
          onMouseEnter={() => setHoveredId(1)}
          onMouseLeave={() => setHoveredId(0)}
          initial={{ opacity: 0, top: 25 }}
          animate={{ opacity: 1, top: 0 }}
          exit={{ opacity: 0, top: -20, transition: { duration: 0.2} }}
          transition={{ duration: 0.3, ease: "easeIn" }}
        >
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
        </AnimatePresence>
        <motion.div
          className={styles.altar}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0 }  }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        ></motion.div>
      </motion.div>
  );
};

export default Item;
