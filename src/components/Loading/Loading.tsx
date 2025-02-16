import styles from "./Loading.module.css";
import { motion } from "framer-motion";
const Loading = () => {
  return (
    <div className={styles.container_loading}>
      <motion.div
        exit={{ opacity: 0, transition: { duration: 0.2 } }}
        className={styles.loading_spin}
      >
        <div className={styles.head_spin}></div>
        <span>LOADING...</span>
      </motion.div>
      <motion.div
        initial={{ translateX: "0%" }}
        exit={{ translateX: "-100%" }}
        transition={{ duration: 0.8 , ease: "linear" }}
        className={styles.img_left}
      ></motion.div>
      <motion.div
        initial={{ translateX: "0%" }}
        exit={{ translateX: "100%" }}
        transition={{ duration: 0.8,ease: "linear" }}
        className={styles.img_right}
      ></motion.div>
    </div>
  );
};

export default Loading;
