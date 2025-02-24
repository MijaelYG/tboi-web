import {
  motion,
  MotionValue,
  useMotionValueEvent,
  useSpring,
  useTransform,
} from "framer-motion";
import styles from "./SectionInfo.module.css";
interface SectionInfoProps {
  scrollYProgress: MotionValue<number>;
}

const SectionInfo = ({ scrollYProgress }: SectionInfoProps) => {
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(latest);
  });

  const xleft = useTransform(scrollYProgress, [0.25, 0.55], [0, 60]);
  const xright = useTransform(scrollYProgress, [0.60,  0.90], [0, -60]);
  const opacityLeft = useTransform(scrollYProgress, [0.25, 0.32, 0.48, 0.55], [0, 1,1,0]);
  const opacityRight = useTransform(scrollYProgress, [0.60, 0.67, 0.83, 0.90], [0, 1,1,0]);

  const xSmoothLeft = useSpring(xleft, { stiffness:150, damping: 20});
  const opacitySmoothLeft = useSpring(opacityLeft, { stiffness:300, damping: 30});
  const xSmoothRight = useSpring(xright, {  stiffness:150, damping: 20});
  const opacitySmoothRight = useSpring(opacityRight, { stiffness:300, damping: 30});
  return (
    <div className={styles.container_section_info}>
      <motion.div
        style={{ opacity: opacitySmoothLeft, x: xSmoothLeft}}
        className={styles.info_left}
      >
        <div className={styles.monster} style={{backgroundImage:"url(/img/monsters/vis.png)"}}>
        </div>
        <h1>ENEMIGOS</h1>
        <p>
        "Enfréntate a diversas criaturas en las sombrías habitaciones del sótano. Cada enemigo tiene ataques y mecánicas únicas que pondrán a prueba tu habilidad."
        </p>
      </motion.div>
      <motion.div style={{opacity: opacitySmoothRight, x:xSmoothRight }} className={styles.info_right}>
        <p>
          "Aprende a esquivar, atacar y sacar el máximo provecho de los objetos
          a tu disposición. ¿Tienes lo necesario para sobrevivir en este
          desafiante roguelike?"
        </p>
      </motion.div>
    </div>
  );
};

export default SectionInfo;
