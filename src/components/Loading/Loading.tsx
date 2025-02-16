import styles from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={styles.container_loading}>
      <div className={styles.loading_spin}>
        <div className={styles.head_spin}></div>
        <span>LOADING...</span>
      </div>
      <div className={styles.img_left}></div>
      <div className={styles.img_right}></div>
    </div>
  );
};

export default Loading;
