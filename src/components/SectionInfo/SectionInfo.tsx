import {
  motion,
  MotionValue,
  useMotionValueEvent,
  useSpring,
  useTransform,
} from "framer-motion";
import styles from "./SectionInfo.module.css";
import { useState } from "react";
interface SectionInfoProps {
  scrollYProgress: MotionValue<number>;
}

const SectionInfo = ({ scrollYProgress }: SectionInfoProps) => {
  const [caruselcont, setCaruselcont] = useState(1);
  const [position, setPosition] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(latest);
  });

  const xleft = useTransform(scrollYProgress, [0.25, 0.55], [0, 60]);
  const xright = useTransform(scrollYProgress, [0.6, 0.9], [0, -60]);
  const opacityLeft = useTransform(
    scrollYProgress,
    [0.25, 0.32, 0.48, 0.55],
    [0, 1, 1, 0]
  );
  const opacityRight = useTransform(
    scrollYProgress,
    [0.6, 0.67, 0.83, 0.9],
    [0, 1, 1, 0]
  );

  const xSmoothLeft = useSpring(xleft, { stiffness: 150, damping: 20 });
  const opacitySmoothLeft = useSpring(opacityLeft, {
    stiffness: 300,
    damping: 30,
  });
  const xSmoothRight = useSpring(xright, { stiffness: 150, damping: 20 });
  const opacitySmoothRight = useSpring(opacityRight, {
    stiffness: 300,
    damping: 30,
  });

  const handleLeftBtn = () => {
    if (caruselcont == 4){
      setPosition(-125 *2)
      setCaruselcont(3);
    }else if (caruselcont == 3) {
      setPosition(-125)
      setCaruselcont(2);
    } else if (caruselcont == 2) {
      setCaruselcont(1);
      setPosition(0)
    }
    console.log(position)
  };
  const handleRighttBtn = () => {
    if (caruselcont == 1) {
      setCaruselcont(2);
      setPosition(-125)

    } else if (caruselcont == 2) {
      setCaruselcont(3);
      setPosition(-125 * 2)
    }else if (caruselcont == 3) {
      setCaruselcont(4);
      setPosition(-125 * 3)
    }
    console.log(position)
  };

  return (
    <div className={styles.container_section_info}>
      <motion.div
        style={{ opacity: opacitySmoothLeft, x: xSmoothLeft }}
        className={styles.info_left}
      >
        <div className={styles.monster_container}>
          <div className={styles.arrow_left} onClick={handleLeftBtn}>
            <img src="/img/UI/card_arrow_left.png" alt="" />
          </div>
          <div className={styles.monsters}>
            <div
              className={styles.monster}
              style={{ left: position}}
            >
              <div className={styles.monster_id}>
                <div
                  className={styles.monster_vis}
                  style={{
                    backgroundImage: "url(/img/monsters/vis.png)",opacity: `${caruselcont== 1 ? 1 : 0}`, scale: `${caruselcont== 1 ? 1 : 0.5}`
                  }}
                ></div>
              </div>
              <div className={styles.monster_id}>
                <div
                  className={styles.monster_sucker}
                  style={{ backgroundImage: "url(/img/monsters/sucker.png)", opacity: `${caruselcont== 2 ? 1 : 0}`, scale: `${caruselcont== 2 ? 1 : 0.5}`}}
                ></div>
              </div>
              <div className={styles.monster_id}>
                <div
                  className={styles.monster_one_tooth}
                  style={{
                    backgroundImage: "url(/img/monsters/one_tooth.png)",opacity: `${caruselcont== 3 ? 1 : 0}`, scale: `${caruselcont== 3 ? 1 : 0.5}`
                  }}
                ></div>
              </div>
              <div className={styles.monster_id}>
                <div
                  className={styles.monster_spitty}
                  style={{
                    backgroundImage: "url(/img/monsters/spitty.png)",opacity: `${caruselcont== 4 ? 1 : 0}`, scale: `${caruselcont== 4 ? 1 : 0.5}`
                  }}
                ></div>
              </div>
            </div>
          </div>
          <div className={styles.arrow_right} onClick={handleRighttBtn}>
            <img src="/img/UI/card_arrow_right.png" alt="" />
          </div>
        </div>
        <h1>ENEMIGOS</h1>
        <p>
          "Enfréntate a diversas criaturas en las sombrías habitaciones del
          sótano. Cada enemigo tiene ataques y mecánicas únicas que pondrán a
          prueba tu habilidad."
        </p>
      </motion.div>
      <motion.div
        style={{ opacity: opacitySmoothRight, x: xSmoothRight }}
        className={styles.info_right}
      >
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
