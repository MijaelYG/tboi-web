import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
      className="container"
    >
      <div className={styles.header2}>
        <div className={styles.cont_nav}>
          <div className={styles.nav}>
            <div className={styles.nav_btn}>
              <Link to={"/"}> 
                <img src="/img/nav/start_search.webp" alt="" /> Inicio
              </Link>
            </div>
                        <div className={styles.nav_btn}>
              <Link to={"/"}> 
                <img src="/img/nav/start_search.webp" alt="" /> Inicio
              </Link>
            </div>
                        <div className={styles.nav_btn}>
              <Link to={"/"}> 
                <img src="/img/nav/start_search.webp" alt="" /> Inicio
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.btn_header}></div>
      </div>
      {/* <div className={style.header}>
        <div className={style.nav_btn}>
          <Link to={"/"}>
            {" "}
            <img src="/img/nav/start_search.webp" alt="" /> Inicio{" "}
          </Link>
        </div>
        <div className={style.nav_btn}>
          <Link to={"/"}>
            <img src="/img/nav/game_search.webp" alt="" /> ¿De que trata?{" "}
          </Link>
        </div>
        <div className={style.nav_btn}>
          <Link to={"/Items"}>
            <img src="/img/nav/item_search.webp" alt="" />
            Items{" "}
          </Link>
        </div>
        <div className={style.nav_btn}></div>
        <div className={style.nav_btn}>
          <Link to={""}>
            <img src="/img/nav/enemie_search.webp" alt="" />
            Enemigos
          </Link>
        </div>
        <div className={style.nav_btn}>
          <Link to={""}>
            <img src="/img/nav/character_search.webp" alt="" />
            Personajes
          </Link>
        </div>
        <div className={style.nav_btn}>
          <Link to={""}>
            <img src="/img/nav/room_search.webp" alt="" />
            Salas
          </Link>
        </div>
      </div> */}
    </motion.header>
  );
};

export default Header;
