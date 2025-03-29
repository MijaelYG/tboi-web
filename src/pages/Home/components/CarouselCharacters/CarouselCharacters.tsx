import {
  AnimatePresence,
  motion,
  MotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import styles from "./CarouselCharacters.module.css";
import { InfoCardType } from "../../../../types/Types";
import { charactersCarousel } from "../../config/characters";
import { useState } from "react";

interface PropsCarousel {
  scrollYProgress: MotionValue<number>;
  scrollStartEnd: [number, number];
  card: InfoCardType | undefined;
}
const CarouselCharacters = ({
  scrollYProgress,
  scrollStartEnd,
  card,
}: PropsCarousel) => {
  const [position, setPosition] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [visible, setVisible] = useState(
    charactersCarousel.map(
      (_, index) => index < 2 || index == charactersCarousel.length - 1
    )
  );

  const indexpos = position;
  const nextpos = (position + 1) % charactersCarousel.length;
  const prevpos =
    (position - 1 + charactersCarousel.length) % charactersCarousel.length;

  const cardStart = scrollStartEnd[0] + 0.01;
  const cardEnd = scrollStartEnd[1] - 0.01;
  const opacity = useTransform(
    scrollYProgress,
    [cardStart, cardStart + 0.02, cardEnd - 0.01, cardEnd],
    [0, 1, 1, 0]
  );
  const opacitysmooth = useSpring(opacity, { stiffness: 250, damping: 30 });
  let moveXsmooth;
  if (card?.moveX) {
    const moveX = useTransform(
      scrollYProgress,
      [cardStart, cardEnd],
      card.moveX
    );
    moveXsmooth = useSpring(moveX, { stiffness: 200, damping: 30 });
  }
  let moveYsmooth;
  if (card?.moveY) {
    const moveY = useTransform(
      scrollYProgress,
      [cardStart, cardEnd],
      card.moveY
    );
    moveYsmooth = useSpring(moveY, { stiffness: 200, damping: 30 });
  }

  const updateVisibility = (newPosition: number) => {
    setVisible(
      charactersCarousel.map(
        (_, index) =>
          index === newPosition ||
          index === (newPosition + 1) % charactersCarousel.length ||
          index ===
            (newPosition - 1 + charactersCarousel.length) %
              charactersCarousel.length
      )
    );
  };

  const handlebtnLeft = () => {
    if (disabled) return;
    setDisabled(true);
    setPosition((prev) => {
      const newPosition = prev === 0 ? charactersCarousel.length - 1 : prev - 1;
      updateVisibility(newPosition);
      return newPosition;
    });
    setTimeout(() => {
      setDisabled(false);
    }, 200);
  };

  const handlebtnRight = () => {
    if (disabled) return;
    setDisabled(true);
    setPosition((prev) => {
      const newPosition = prev < charactersCarousel.length - 1 ? prev + 1 : 0;
      updateVisibility(newPosition);
      return newPosition;
    });
    setTimeout(() => {
      setDisabled(false);
    }, 200);
  };

  const getInitialValues = (
    index: number,
    indexpos: number,
    nextpos: number,
    prevpos: number
  ) => {
    const xPos =
      index === indexpos
        ? 0
        : index === nextpos
        ? 165
        : index === prevpos
        ? -165
        : 0;
    const opacity = 0;
    const yPos = index === nextpos ? -40 : index === prevpos ? -30 : 0;

    return { x: `${xPos}%`, opacity: opacity, y: `${yPos}%` };
  };

  const getAnimateValues = (
    index: number,
    indexpos: number,
    nextpos: number,
    prevpos: number
  ) => {
    const xPos =
    index === indexpos ? 0 : index === nextpos ? 130 : -130;
    const opacity = 1;
    const yPos = index === nextpos ? -20 : index === prevpos ? -20 : 0;

    return { x: `${xPos}%`, opacity: opacity, y: `${yPos}%` };
  };

  const getExitValues = (
    index: number,
    _indexpos: number,
    nextpos: number,
    prevpos: number
  ) => {
    const xPos =
    index === prevpos ? -165 : index === nextpos ? 165 : 0;
    const opacity = 0;
    const yPos =index === nextpos ? -40 : index === prevpos ? -40 : 0;

    return { x: `${xPos}%`, opacity: opacity, y: `${yPos}%` };
  };
  return (
    <motion.div
      className={styles.card_carousel}
      style={{
        width: `${card?.width}vw`,
        height: `${card?.height}vw`,
        opacity: opacitysmooth,
        x: moveXsmooth,
        y: moveYsmooth,
      }}
    >
      <div className={styles.cont_characters}>
        {charactersCarousel.map((character, index) => {
          return (
            <AnimatePresence>
              {visible[index] && (
                <motion.div
                  key={`${character.name}-${index}`}
                  className={styles.characters_art}
                  style={{
                    backgroundImage: `url(/img/characters/${charactersCarousel[
                      index
                    ].name?.toLowerCase()}/${charactersCarousel[
                      index
                    ].name?.toLowerCase()}_c.png)`,
                    zIndex: charactersCarousel.length - index,
                  }}
                  initial={getInitialValues(index, indexpos, nextpos, prevpos)}
                  animate={getAnimateValues(index, indexpos, nextpos, prevpos)}
                  exit={getExitValues(index, indexpos, nextpos, prevpos)}
                  transition={{ duration: 0.3, ease: "anticipate" }}
                ></motion.div>
              )}
            </AnimatePresence>
          );
        })}
      </div>
      <div className={styles.btns_name}>
        <div className={styles.btn_left} onClick={handlebtnLeft}></div>
        <div
          className={styles.name_character}
          style={{
            backgroundImage: `url(/img/characters/${charactersCarousel[
              position
            ].name?.toLowerCase()}/${charactersCarousel[
              position
            ].name?.toLowerCase()}_title.png)`,
          }}
        ></div>
        <div className={styles.btn_right} onClick={handlebtnRight}></div>
      </div>
      <div className={styles.stats}>
        <div className={styles.pixel_stats} style={{backgroundImage:`url(/img/UI/heart_icon.png)`}}></div>  
        <div className={styles.cant_life}>
        {charactersCarousel.map((data)=>(
          Array.from({length:data.life}).map((_,index)=>(
            <div></div>
          ))
        ))}
        </div>
        <div className={styles.pixel_stats} style={{backgroundImage:`url(/img/UI/speed_icon.png)`}}></div>
        <div className={styles.cant_life}></div>
        <div className={styles.pixel_stats} style={{backgroundImage:`url(/img/UI/attack_icon.png)`}}></div>
        <div className={styles.cant_life}></div>
      </div>
    </motion.div>
  );
};

export default CarouselCharacters;
