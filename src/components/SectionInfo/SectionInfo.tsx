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

  const x = useTransform(scrollYProgress, [0.04, 0.25, 0.40, 0.55], [0, 55, 55,0]);
  const opacityLeft = useTransform(scrollYProgress, [0.04, 0.25, 0.40, 0.55], [0, 1,1,0]);
  const opacityRight = useTransform(scrollYProgress, [0.65, 0.80, 0.90, 0.95], [0, 1,1,0]);

  const xSmooth = useSpring(x, { stiffness: 50, damping: 10 });

  return (
    <div className={styles.container_section_info}>
      <motion.div
        style={{ opacity: opacityLeft, x: xSmooth, transition: "linear" }}
        className={styles.info_left}
      >
        <h1>ENEMIGOS MORTALES</h1>
        <p>
          Enfréntate a todo tipo de enemigos mientras exploras las oscuras y
          retorcidas habitaciones del sotanó. Desde pequeñas criaturas hasta
          horribles abominaciones, cada enemigo tiene su propio patrón de ataque
          y mecánicas únicas.
        </p>
      </motion.div>
      <motion.div style={{opacity: opacityRight}} className={styles.info_right}>
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
