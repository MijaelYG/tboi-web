import {
  motion,
  MotionValue,
  steps,
  useMotionValueEvent,
  useSpring,
  useTransform,
} from "framer-motion";
import styles from "./InfoCard.module.css";
import { useRef, useState } from "react";
import { InfoCardType } from "../Types";

interface PropsInfoCard {
  scrollYProgress: MotionValue<number>;
  scrollStartEnd: [number, number];
  card: InfoCardType;
}

const InfoCard = ({ scrollYProgress, scrollStartEnd, card }: PropsInfoCard) => {
  const [visible, setVisible] = useState(false);
  const [mouseHover, setMouseHover] = useState(false);
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

  const handleMouseEnter = () => {
    setMouseHover(true);
  };
  const handleMouseLeave = () => {
    setMouseHover(false);
  };
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
      {card.typeCard == "Hover" && card.info_img?.length && visible && (
        <motion.div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={styles.card}
          style={{
            opacity: opacitysmooth,
            x: moveXsmooth,
            y: moveYsmooth,
            backgroundImage: `url(${card.bg_img})`,
            width: card.width,
            height: card.height,
            left: `${card.left}%`,
            right: `${card.right}%`,
            top: `${card.top}%`,
            bottom: `${card.bottom}%`,
          }}
          whileHover={{
            top: card.top && `${card.top - 1.5}%`,
            bottom: card.bottom && `${card.bottom + 1.5}%`,
          }}
          transition={{ duration: 0 }}
        >
          <div className={styles.image_h}>
            <motion.div
              className={styles.card_img}
              style={{
                backgroundImage: `url(${card.info_img[0].sprite_bg_img})`,
                width: card.info_img[0].width / 2,
                height: card.info_img[0].height,
                animationTimingFunction: `${card.info_img[0].sprites}`,
                opacity: mouseHover ? 0 : 1,
                transitionDelay: mouseHover ? "0s" : "0.05s"
              }}
              animate={{
                backgroundPositionX: [0, -card.info_img[0].width],
              }}
              transition={{
                duration: 0.25,
                repeat: Infinity,
                ease: steps(card.info_img[0].sprites),
              }}
            ></motion.div>
            <motion.div
              className={styles.card_img}
              style={{
                backgroundImage: `url(${card.info_img[1].sprite_bg_img})`,
                width: card.info_img[1].width / 2,
                height: card.info_img[1].height,
                animationTimingFunction: `${card.info_img[1].sprites}`,
                opacity: mouseHover ? 1 : 0,
                transitionDelay: mouseHover ? "0.05s" : "0s"
              }}
              animate={{
                backgroundPositionX: [0, -card.info_img[1].width],
              }}
              transition={{
                duration: 0.25,
                repeat: Infinity,
                ease: steps(card.info_img[1].sprites),
              }}
            ></motion.div>
          </div>
          <div className={styles.desc}>{card.text}</div>
        </motion.div>
      )}
    </>
  );
};

export default InfoCard;
