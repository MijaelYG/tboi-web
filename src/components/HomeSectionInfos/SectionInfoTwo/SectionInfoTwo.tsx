import {
  motion,
  MotionValue,
  useMotionValueEvent,
  useSpring,
  useTransform,
} from "framer-motion";
import styles from "./SectionInfoTwo.module.css";
import { useState } from "react";

interface PropsSectionInfoTwo {
  ScrollYProgress: MotionValue<number>;
  ScrollStartEnd: [number, number];
}

const SectionInfoTwo = ({
  ScrollYProgress,
  ScrollStartEnd,
}: PropsSectionInfoTwo) => {
  const [visible, setvisible] = useState(true);
  const [visible2, setvisible2] = useState(true);
  const [visible3, setvisible3] = useState(true);
  const start = ScrollStartEnd[0] + 0.01;
  const end = ScrollStartEnd[1] - 0.01;
  const step = (end - start) / 3;

  const opacity1 = useTransform(
    ScrollYProgress,
    [start, start + 0.015, start + step - 0.015, start + step],
    [0, 1, 1, 0]
  );
  const move1 = useTransform(
    ScrollYProgress,
    [start, start + 0.015, start + step - 0.015, start + step],
    [-10, 20, 20, 40]
  );
  const opacity1smooth = useSpring(opacity1, { stiffness: 250, damping: 30 });
  const move1smooth = useSpring(move1, { stiffness: 200, damping: 30 });
  useMotionValueEvent(opacity1smooth, "change", (value) => {
    setvisible(value > 0);
  });

  const opacity2 = useTransform(
    ScrollYProgress,
    [
      start + step,
      start + step + 0.015,
      start + step + step - 0.015,
      start + step + step,
    ],
    [0, 1, 1, 0]
  );
  const move2 = useTransform(
    ScrollYProgress,
    [
      start + step,
      start + step + 0.015,
      start + step + step - 0.015,
      start + step + step,
    ],
    [-10, 20, 20, 40]
  );
  const opacity2smooth = useSpring(opacity2, { stiffness: 250, damping: 30 });
  const move2smooth = useSpring(move2, { stiffness: 200, damping: 30 });
  useMotionValueEvent(opacity2smooth, "change", (value) => {
    setvisible2(value > 0);
  });
  
  const opacity3 = useTransform(
    ScrollYProgress,
    [start + step + step, start + step + step + 0.015, end - 0.015, end],
    [0, 1, 1, 0]
  );
  const move3 = useTransform(
    ScrollYProgress,
    [start + step + step, start + step + step + 0.015, end - 0.015, end],
    [-10, 20, 20, 40]
  );
  const opacity3smooth = useSpring(opacity3, { stiffness: 250, damping: 30 });
  const move3smooth = useSpring(move3, { stiffness: 200, damping: 30 });
  useMotionValueEvent(opacity3smooth, "change", (value) => {
    setvisible3(value > 0);
  });
  return (
    <div className={styles.container_section_info}>
      {visible && (
        <motion.div
          className={styles.card}
          style={{ opacity: opacity1smooth, x: move1smooth }}
        >
          <div className={styles.image_h}></div>
          <div className={styles.desc}>
            Isaac y su madre vivían en una pequeña casa en lo alto de una
            colina. Él pasaba sus días jugando, mientras su madre veía programas
            religiosos. Todo era tranquilo, hasta que un día, ella escuchó una
            voz <b>celestial.</b>
          </div>
        </motion.div>
      )}
      {visible2 && (
        <motion.div
          className={styles.card2}
          style={{ opacity: opacity2smooth, x: move2smooth }}
        >
          <div className={styles.image_h}></div>
          <div className={styles.desc}>
            La voz le dijo que su hijo estaba manchado por el <b>pecado</b> y
            que debía ser Obediente, su madre tomó un cuchillo, decidida a
            cumplir la voluntad divina. Isaac, aterrorizado, vio cómo su destino
            se sellaba.
          </div>
        </motion.div>
      )}
      {visible3 && (
        <motion.div
          className={styles.card3}
          style={{ opacity: opacity3smooth, x: move3smooth }}
        >
          <div className={styles.image_h}></div>
          <div className={styles.desc}>
            Antes de que fuera demasiado tarde, Isaac encontró una{" "}
            <b>trampilla</b> en su habitación. Sin otra opción, la abrió y se
            lanzó al vacío, cayendo en un oscuro sótano lleno de peligros que
            nunca imaginó.
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default SectionInfoTwo;
