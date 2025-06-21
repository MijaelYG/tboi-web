import {
  AnimatePresence,
  motion,
  MotionValue,
  useMotionValueEvent,
} from "framer-motion";
import styles from "./Footer.module.css";
import { useState } from "react";

interface FooterProps {
  ScrollYProgress: MotionValue<number>;
}

const Footer = ({ ScrollYProgress }: FooterProps) => {
  const [visibleFooter, setVisibleFooter] = useState(false);
  useMotionValueEvent(ScrollYProgress, "change", (latest) => {
    setVisibleFooter(latest < 1);
    setVisibleFooter(latest >= 0.9999);
  });
  return (
    <AnimatePresence mode="wait">
      {visibleFooter && (
        <motion.div
          className={styles.footer_home}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.8 } }}
          exit={{ opacity: 0, transition: { duration: 0.25, delay: 0 } }}
        >
          <motion.div
            className={styles.img_footer_left}
            initial={{ opacity: 0, x: -80 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.8, delay: 0.4, ease: "easeInOut" },
            }}
            exit={{
              opacity: 0,
              x: -200,
              transition: { duration: 0.4, delay: 0, ease: "easeInOut" },
            }}
          ></motion.div>
          <motion.div
            className={styles.img_footer_right}
            initial={{ opacity: 0, x: 80 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.8, delay: 0.4, ease: "easeInOut" },
            }}
            exit={{
              opacity: 0,
              x: 200,
              transition: { duration: 0.4, delay: 0, ease: "easeInOut" },
            }}
          ></motion.div>
          <motion.div
            className={styles.logo}
            initial={{ opacity: 0, top: -50 }}
            animate={{
              opacity: 1,
              top: 0,
              transition: { duration: 0.75, delay: 0.6, ease: "easeInOut" },
            }}
            exit={{
              opacity: 0,
              top: -50,
              transition: { duration: 0.4, delay: 0, ease: "easeInOut" },
            }}
          >
            <img src="/img/logo/Logo.webp"></img>
          </motion.div>
          <div className={styles.cont_footer_info}>
            <motion.div
              className={styles.section_footer}
              initial={{ opacity: 0, y: -15 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, delay: 1.1 },
              }}
              exit={{
                opacity: 0,
                y: 15,
                transition: { duration: 0.25, delay: 0 },
              }}
            >
              <div className={styles.section_footer_title}>
                Créditos del Proyecto
              </div>
              <p>
                Hecho por Mijael D. Yauyo Granados, proyecto fan inspirado en
                The Binding of Isaac: Repentance+
              </p>
            </motion.div>
            <motion.div
              className={styles.section_footer}
              initial={{ opacity: 0, y: -15 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, delay: 1.25 },
              }}
              exit={{
                opacity: 0,
                y: 15,
                transition: { duration: 0.25, delay: 0 },
              }}
            >
              <div className={styles.section_footer_title}>
                Derechos de autor
              </div>
              <p>
                Todos los derechos sobre The Binding of Isaac pertenecen a sus
                respectivos creadores. Este sitio no tiene relación oficial.
              </p>
            </motion.div>
            <motion.div
              className={styles.section_footer}
              initial={{ opacity: 0, y: -15 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, delay: 1.4 },
              }}
              exit={{
                opacity: 0,
                y: 15,
                transition: { duration: 0.25, delay: 0 },
              }}
            >
              <div className={styles.section_footer_title}>
                Términos y contacto
              </div>
              <p>
                Pueden contactarme en mi correo de gmail aqui:{" "}
                <a href="mailto:yauyogranadosmijael@gmail.com">
                  yauyogranadosmijael@gmail.com
                </a>{" "}
                o ver otros proyectos en mi repositorio de 🐙 GitHub:{" "}
                <a href="https://github.com/MijaelYG">Github.com/MijaelYG</a>
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Footer;
