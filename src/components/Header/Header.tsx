import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Header = () => {
  const [btnClickHeader, setBtnClickHeader] = useState<null | number>(null);
  const HandleBtnHeader = () => {
    if (btnClickHeader == 0 || btnClickHeader == null) {
      setBtnClickHeader(1);
    } else {
      setBtnClickHeader(0);
    }
  };

  const variantsHeader = {
    initial: {
      x: "-28vw", opacity:0
    },
    visible: {
      x: "0vw", opacity:1,
      transition: { duration: 0.4, ease: "easeOut" }, 
    },
    visiblefirst: {
      x: "-20vw", opacity:1,
      transition: { duration: 0.6, delay:1.1, ease: "backOut" }, 
    },
    hidden: {
      x: "-20vw", opacity:1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };
  return (
    <motion.header
      className="container"
      custom={btnClickHeader}
      variants={variantsHeader}
      initial="initial"
      animate={
        btnClickHeader === 1
          ? "visible"
          : btnClickHeader === 0
          ? "hidden"
          : "visiblefirst"
      }
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <div className={styles.cont_header}>
        <AnimatePresence mode="wait">
          {btnClickHeader == 1 && (
            <motion.div
              className={styles.nav}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <motion.div
                className={styles.nav_btn}
                initial={{ x: -15, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.29, ease: "easeOut" }}
              >
                <Link to={"/"}>
                  <img src="/img/nav/start_search.webp" alt="" />
                  <span>Inicio</span>
                </Link>
              </motion.div>
              <motion.div
                className={styles.nav_btn}
                initial={{ x: -15, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
              >
                <Link to={"/Items"}>
                  <img src="/img/nav/item_search.webp" alt="" />
                  <span>Items</span>
                </Link>
              </motion.div>
              <motion.div
                className={styles.nav_btn}
                initial={{ x: -15, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.51, ease: "easeOut" }}
              >
                <Link to={""}>
                  <img src="/img/nav/enemie_search.webp" alt="" />
                  <span>Enemigos</span>
                </Link>
              </motion.div>
              <motion.div
                className={styles.nav_btn}
                initial={{ x: -15, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.62, ease: "easeOut" }}
              >
                <Link to={""}>
                  <img src="/img/nav/character_search.webp" alt="" />
                  <span>Personajes</span>
                </Link>
              </motion.div>
              <motion.div
                className={styles.nav_btn}
                initial={{ x: -15, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.73, ease: "easeOut" }}
              >
                <Link to={""}>
                  <img src="/img/nav/room_search.webp" alt="" />
                  <span>Salas</span>
                </Link>
              </motion.div>
              <motion.div
                className={styles.nav_btn}
                initial={{ x: -15, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.84, ease: "easeOut" }}
              >
                <Link to={"/"}>
                  <img src="/img/nav/game_search.webp" alt="" />
                  <span>¿Que es?</span>
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className={styles.btn_header} onClick={HandleBtnHeader}>
        <div
          className={styles.btn_header_animation}
          style={{
            transform: `rotate(${btnClickHeader == 1 ? "0" : "180deg"})`,
          }}
        >
          <img src="/img/UI/btn/btn_arrow_pixel.png" alt="" />
        </div>
      </div>
      <AnimatePresence>
        {btnClickHeader == 1 && (
          <motion.div
            className={styles.black_shadow}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={HandleBtnHeader}
          ></motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
