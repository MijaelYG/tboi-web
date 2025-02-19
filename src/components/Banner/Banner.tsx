import { motion } from "framer-motion";
import style from "./Banner.module.css";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  const BtnExp = useRef<HTMLDivElement | null>(null);
  const BtnJu = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (BtnExp.current !== null && BtnJu.current !== null) {
       
        if (window.scrollY >= 95 && window.scrollY <= 800 ) {
          console.log("ScrollY:", window.scrollY);
          BtnExp.current.classList.add(style.btn_bn_visible);
          BtnJu.current.classList.add(style.btn_bn_visible);
        }else{
          BtnExp.current.classList.remove(style.btn_bn_visible);
          BtnJu.current.classList.remove(style.btn_bn_visible);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="container">
      <div className={style.banner}>
        <div className={style.scene}>
          <div className={style.shadow}></div>
          <div className={style.shadow}></div>
          <div className={style.container_banner}>
            <div className={style.logo}>
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                src="/img/logo/Logo.webp"
                alt=""
              />
              <div className={style.fly}></div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className={style.text}
            >
              <p>
                "¡Explora los secretos ocultos de The Binding of Isaac!
                Sumérgete en un mundo lleno de misterios, desafíos y sorpresas
                mientras descubres estrategias avanzadas, desentrañas los
                secretos de cada personaje y desbloqueas poderosos ítems.
                Aprende a enfrentar a los enemigos más temibles y conviértete en
                un verdadero veterano."
              </p>
            </motion.div>
            <div className={style.btn_info}>
              <div ref={BtnExp} className={style.btn_bn}>
                <img src="/img/UI/explorar.png" alt="" />
              </div>
              <div ref={BtnJu} className={style.btn_bn}>
                <Link
                  to={
                    "https://store.steampowered.com/app/250900/The_Binding_of_Isaac_Rebirth/"
                  }
                >
                  <img src="/img/UI/jugar.png" alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
