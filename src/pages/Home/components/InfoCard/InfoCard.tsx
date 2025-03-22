import {
  motion,
  MotionValue,
  useMotionValueEvent,
  useSpring,
  useTransform,
} from "framer-motion";
import styles from "./CardInfo.module.css";
import { useState } from "react";
import { InfoCardType } from "../Types";

interface PropsInfoCard {
  scrollYProgress: MotionValue<number>;
  scrollStartEnd: [number, number];
  infoCardType: InfoCardType;
}

const InfoCard = ({
  scrollYProgress,
  scrollStartEnd,
  infoCardType,
}: PropsInfoCard) => {
  const [visible, setVisible] = useState(false);
  const start = scrollStartEnd[0] + 0.01;
  const end = scrollStartEnd[1] - 0.01;
  const cardStep = (end - start) / infoCardType.totalCard;

  const cardStart = start + infoCardType.id * cardStep;
  const cardEnd = cardStart + cardStep;

  const opacity1 = useTransform(
    scrollYProgress,
    [cardStart, cardStart + 0.015, cardEnd - 0.015, cardEnd],
    [0, 1, 1, 0]
  );
  const opacity1smooth = useSpring(opacity1, { stiffness: 250, damping: 30 });
  let moveXsmooth;
  if (infoCardType.moveX) {
    const moveX = useTransform(
      scrollYProgress,
      [cardStart, cardStart + 0.015, cardEnd - 0.015, cardEnd],
      infoCardType.moveX
    );
    moveXsmooth = useSpring(moveX, { stiffness: 200, damping: 30 });
  }
  let moveYsmooth;
  if (infoCardType.moveY) {
    const moveY = useTransform(
      scrollYProgress,
      [cardStart, cardStart + 0.015, cardEnd - 0.015, cardEnd],
      infoCardType.moveY
    );
    moveYsmooth = useSpring(moveY, { stiffness: 200, damping: 30 });
  }
  useMotionValueEvent(opacity1smooth, "change", (value) => {
    setVisible(value > 0);
  });
  return (
    <>
      {infoCardType.typeCard == "Normal" && visible && (
        <motion.div
          className={styles.card}
          style={{
            opacity: opacity1smooth,
            x: moveXsmooth,
            y: moveYsmooth,
          }}
        >
          <div className={styles.image_h}></div>
          <div className={styles.desc}>{infoCardType.text}</div>
        </motion.div>
      )}
      {infoCardType.typeCard == "Hover" && visible && (
        <motion.div
          className={styles.card}
          style={{
            opacity: opacity1smooth,
            x: moveXsmooth,
            y: moveYsmooth,
          }}
        >
          <div className={styles.image_h}></div>
          <div className={styles.desc}>{infoCardType.text}</div>
        </motion.div>
      )}
      
    </>
  );
};

export default InfoCard;
