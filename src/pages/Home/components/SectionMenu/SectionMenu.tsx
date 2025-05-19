import { useState } from "react";
import styles from "./SectionMenu.module.css";
import { motion } from "framer-motion";

interface PropsSectionMenu {
  sectionRef: React.RefObject<HTMLDivElement>[]
}
const SectionMenu = ({ sectionRef }:PropsSectionMenu) => {
  const [visibleCircle, setVisibleCircle] = useState(1);

  const handleBtnNav = (section: number) => {
    
    setVisibleCircle(section);
    sectionRef[section -1].current?.scrollIntoView({ behavior: 'smooth' })
  };
  return (
    <div className={styles.cont_nav_sections}>
      <div className={styles.nav_sections}>
        <div className={styles.btn_circle} onClick={() => handleBtnNav(1)}>
          {visibleCircle === 1 && (
            <motion.div
              className={styles.circle}
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
            ></motion.div>
          )}
        </div>
        <div className={styles.btn_circle} onClick={() => handleBtnNav(2)}>
          {visibleCircle === 2 && (
            <motion.div
              className={styles.circle}
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
            ></motion.div>
          )}
        </div>
        <div className={styles.btn_circle} onClick={() => handleBtnNav(3)}>
          {visibleCircle === 3 && (
            <motion.div
              className={styles.circle}
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
            ></motion.div>
          )}
        </div>
        <div className={styles.btn_circle} onClick={() => handleBtnNav(4)}>
          {visibleCircle === 4 && (
            <motion.div
              className={styles.circle}
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
            ></motion.div>
          )}
        </div>
        <div className={styles.btn_circle} onClick={() => handleBtnNav(5)}>
          {visibleCircle === 5 && (
            <motion.div
              className={styles.circle}
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
            ></motion.div>
          )}
        </div>
        <div className={styles.btn_circle} onClick={() => handleBtnNav(6)}>
          {visibleCircle === 6 && (
            <motion.div
              className={styles.circle}
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
            ></motion.div>
          )}
        </div>
        <div className={styles.btn_circle} onClick={() => handleBtnNav(7)}>
          {visibleCircle === 7 && (
            <motion.div
              className={styles.circle}
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
            ></motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SectionMenu;
