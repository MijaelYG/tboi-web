import { motion, MotionValue, useSpring, useTransform } from "framer-motion";
import styles from "./SectionInfoTwo.module.css";

interface PropsSectionInfoTwo{
  ScrollYProgress: MotionValue<number>
}

const SectionInfoTwo = ({ScrollYProgress}:PropsSectionInfoTwo) => {
  

  const opacity1 = useTransform(ScrollYProgress, [0.111, 0.120, 0.130, 0.138], [0, 1, 1, 0]);
  const move1 = useTransform(ScrollYProgress, [0.111, 0.120, 0.130, 0.138], [-10, 20, 20, 40]);
  const opacity1smooth = useSpring(opacity1, {stiffness:250,damping:30})
  const move1smooth = useSpring(move1, {stiffness:200,damping:30})

  const opacity2 = useTransform(ScrollYProgress, [0.139, 0.148, 0.158, 0.165], [0, 1, 1, 0]);
  const move2 = useTransform(ScrollYProgress, [0.139, 0.148, 0.158, 0.165], [-10, 20, 20, 40]);
  const opacity2smooth = useSpring(opacity2, {stiffness:250,damping:30})
  const move2smooth = useSpring(move2, {stiffness:200,damping:30})

  const opacity3 = useTransform(ScrollYProgress, [0.166, 0.175, 0.185, 0.192], [0, 1, 1, 0]);
  const move3 = useTransform(ScrollYProgress, [0.166, 0.175, 0.185, 0.192], [-10, 20, 20, 40]);
  const opacity3smooth = useSpring(opacity3, {stiffness:250,damping:30})
  const move3smooth = useSpring(move3, {stiffness:200,damping:30})

  return (
    <div className={styles.container_section_info}>
      <motion.div className={styles.card} style={{opacity:opacity1smooth, x:move1smooth}}>
        <div className={styles.image_h}></div>
        <div className={styles.desc}>
        Isaac y su madre vivían en una pequeña casa en lo alto de una colina. Él pasaba sus días jugando, mientras su madre veía programas religiosos. Todo era tranquilo, hasta que un día, ella escuchó una voz <b>celestial.</b>
        </div>
      </motion.div>
      <motion.div className={styles.card} style={{opacity:opacity2smooth, x:move2smooth}}>
        <div className={styles.image_h}></div>
        <div className={styles.desc}>
        La voz le dijo que su hijo estaba manchado por el <b>pecado</b> y que debía ser Obediente, su madre tomó un cuchillo, decidida a cumplir la voluntad divina. Isaac, aterrorizado, vio cómo su destino se sellaba.
        </div>
      </motion.div>
      <motion.div className={styles.card} style={{opacity:opacity3smooth, x:move3smooth}}>
        <div className={styles.image_h}></div>
        <div className={styles.desc}>
        Antes de que fuera demasiado tarde, Isaac encontró una <b>trampilla</b>  en su habitación. Sin otra opción, la abrió y se lanzó al vacío, cayendo en un oscuro sótano lleno de peligros que nunca imaginó.
        </div>
      </motion.div>
    </div>
  );
};

export default SectionInfoTwo;
