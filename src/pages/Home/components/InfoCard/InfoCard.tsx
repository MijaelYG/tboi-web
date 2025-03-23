import {
  motion,
  MotionValue,
  useMotionValueEvent,
  useSpring,
  useTransform,
} from "framer-motion";
import styles from "./InfoCard.module.css";
import { useState } from "react";
import { InfoCardType } from "../Types";

interface PropsInfoCard {
  scrollYProgress: MotionValue<number>;
  scrollStartEnd: [number, number];
  card: InfoCardType;
}

const InfoCard = ({
  scrollYProgress,
  scrollStartEnd,
  card,
}: PropsInfoCard) => {
  const [visible, setVisible] = useState(false);
  const start = scrollStartEnd[0] + 0.01;
  const end = scrollStartEnd[1] - 0.01;
  const cardStep = (end - start) / card.totalCard;

  const cardStart = start + card.id * cardStep;
  const cardEnd = cardStart + cardStep;

  const opacity = useTransform(
    scrollYProgress,
    [cardStart, cardStart + 0.015, cardEnd - 0.015, cardEnd],
    [0, 1, 1, 0]
  );
  const opacitysmooth = useSpring(opacity, { stiffness: 250, damping: 30 });
  let moveXsmooth;
  if (card.moveX) {
    const moveX = useTransform(
      scrollYProgress,
      [cardStart, cardStart + 0.015, cardEnd - 0.015, cardEnd],
      card.moveX
    );
    moveXsmooth = useSpring(moveX, { stiffness: 200, damping: 30 });
  }
  let moveYsmooth;
  if (card.moveY) {
    const moveY = useTransform(
      scrollYProgress,
      [cardStart, cardStart + 0.015, cardEnd - 0.015, cardEnd],
      card.moveY
    );
    moveYsmooth = useSpring(moveY, { stiffness: 200, damping: 30 });
  }
  useMotionValueEvent(opacitysmooth, "change", (value) => {
    setVisible(value > 0);
  });
  return (
    <>
      {card.typeCard == "Normal" && visible && (
        <motion.div
          className={styles.card}
          style={{
            opacity: opacitysmooth,
            x: moveXsmooth,
            y: moveYsmooth,
          }}
        >
          <div className={styles.image_h}></div>
          <div className={styles.desc}>{card.text}</div>
        </motion.div>
      )}
      {card.typeCard == "Hover" && card.info_img?.length  && visible && (
        
        <motion.div
          className={styles.card}
          style={{
            opacity: opacitysmooth,
            x: moveXsmooth,
            y: moveYsmooth,
            backgroundImage: `url(${card.bg_img})`, 
            width:card.width, height:card.height,left:`${card.left}%`,right:`${card.right}%`,top:`${card.top}%`,bottom:`${card.bottom}%`
          }}
        >
          <div className={styles.image_h}>
            <div className={styles.card_img1} style={{backgroundImage:`url(${card.info_img[0].sprite_bg_img})`}}>
            </div>
            <div className={styles.card_img2} style={{backgroundImage:`url(${card.info_img[1].sprite_bg_img})`}}>
            </div>
          </div>
          <div className={styles.desc}>{card.text}</div>
        </motion.div>
      )}
    </>
  );
};

export default InfoCard;
