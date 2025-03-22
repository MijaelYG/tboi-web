import {
  AnimatePresence,
  motion,
  MotionValue,
  useMotionValueEvent,
} from "framer-motion";
import style from "./Banner.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

interface BannerProps {
  scrollYProgress: MotionValue<number>;
}

const Banner = ({ scrollYProgress }: BannerProps) => {
  const [visiblelogo, setVisiblelogo] = useState(true);
  const [visiblelogo2, setVisiblelogo2] = useState(false);
  const [delay, setDelay] = useState(false);
  useEffect(() => {
    setDelay(true);
  }, []);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setVisiblelogo(latest <= 0.00 );
    setVisiblelogo2(latest >= 0.02);
  });

  return (
    <section className={style.section_banner}>
      <div className={style.banner}>
        <AnimatePresence mode="wait">
          {visiblelogo && (
            <motion.div key="cont1" className={style.container_banner} >
              <motion.div
                key="logo1"
                className={style.logo}
                initial={{ top: 65, scale: 0.7 }}
                animate={{
                  scale: 0.75,
                  transition: { duration: 0.6, delay: delay ? 0 : 0.6 },
                }}
                exit={{ scale: 0.6, transition: { duration: 0.3, delay: 0 } }}
              >
                <motion.img
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.6, delay: delay ? 0 : 0.6 },
                  }}
                  exit={{ opacity: 0, transition: { duration: 0.3, delay: 0 } }}
                  src="/img/logo/Logo.webp"
                  alt=""
                />
                <motion.div
                  className={style.fly}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.6, delay: delay ? 0 : 0.6 },
                  }}
                  exit={{ opacity: 0, transition: { duration: 0.3, delay: 0 } }}
                ></motion.div>
              </motion.div>
            </motion.div>
          )}
          {visiblelogo2 && (
            <motion.div key="cont2"className={style.container_banner}>
              <motion.div
                key="logo2"
                className={style.logo}
                initial={{ opacity: 0, y: -10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6 },
                }}
                exit={{ opacity: 0, transition: { duration: 0.3, delay: 0 } }}
              >
                <img src="/img/logo/Logo.webp" alt="" />
                <motion.div
                  className={style.fly}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.6, delay: 0.15 },
                  }}
                  exit={{ opacity: 0, transition: { duration: 0.3, delay: 0 } }}
                ></motion.div>
              </motion.div>
              <motion.div
                className={style.text}
                initial={{ opacity: 0, y: -10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, delay: 0.3 },
                }}
                exit={{ opacity: 0, transition: { duration: 0.3, delay: 0 } }}
              >
                <p>
                  "¡Explora los secretos ocultos de The Binding of Isaac!
                  Sumérgete en un mundo lleno de misterios, desafíos y sorpresas
                  mientras descubres estrategias avanzadas, desentrañas los
                  secretos de cada personaje y desbloqueas poderosos ítems.
                  Aprende a enfrentar a los enemigos más temibles y conviértete
                  en un verdadero veterano."
                </p>
              </motion.div>
              <div className={style.btn_info}>
                <motion.div
                  className={style.btn_bn}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, delay: 0.45 },
                  }}
                  exit={{
                    opacity: 0,
                    y: 10,
                    transition: { duration: 0.3, delay: 0 },
                  }}
                >
                  <img src="/img/UI/explorar.png" alt="" />
                </motion.div>
                <motion.div
                  className={style.btn_bn}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, delay: 0.55 },
                  }}
                  exit={{
                    opacity: 0,
                    y: 10,
                    transition: { duration: 0.3, delay: 0 },
                  }}
                >
                  <Link
                    to={
                      "https://store.steampowered.com/app/250900/The_Binding_of_Isaac_Rebirth/"
                    }
                  >
                    <img src="/img/UI/jugar.png" alt="" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Banner;
