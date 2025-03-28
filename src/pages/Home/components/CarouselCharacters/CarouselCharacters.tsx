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
    setPosition((prev) => {
      const newPosition = prev === 0 ? charactersCarousel.length - 1 : prev - 1;
      updateVisibility(newPosition);
      return newPosition;
    });
  };

  const handlebtnRight = () => {
    setPosition((prev) => {
      const newPosition = prev < charactersCarousel.length - 1 ? prev + 1 : 0;
      updateVisibility(newPosition);
      return newPosition;
    });
  };
  console.log(visible);
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
            <AnimatePresence mode="wait">
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
                  x: `${
                    index == indexpos
                      ? 0
                      : index == nextpos
                      ? 100
                      : index == prevpos
                      ? -100
                      : 0
                  }%`,
                }}
                initial={{
                  x: index === indexpos ? 0 : index === nextpos ? 300 : -100,
                }}
                animate={{
                  x: index === indexpos ? 0 : index === nextpos ? 200 : -200,
                  opacity: 1, // Mantener visibilidad
                }}
                exit={{
                  x: index === prevpos ? -300 : -200,
                  opacity: index === prevpos ? 0 : 1, // Evita que desaparezcan los demás
                }}
                transition={{ duration: 0.4, ease: "linear" }}
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
    </motion.div>
  );
};

export default CarouselCharacters;
