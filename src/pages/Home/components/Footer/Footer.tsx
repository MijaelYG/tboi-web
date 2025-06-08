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
    setVisibleFooter(latest >= 1);
  });
  return (
    <AnimatePresence>
      {visibleFooter && (
        <motion.div
          className={styles.footer_home}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1, delay: 0.8 } }}
          exit={{ opacity: 0, transition: { duration: 0.25, delay: 0 } }}
        >
          <div className={styles.img_footer_left}></div>
          <div className={styles.img_footer_right}></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Footer;
