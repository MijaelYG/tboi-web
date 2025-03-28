import { motion, MotionValue, useSpring, useTransform } from "framer-motion";
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
      charactersCarousel.map((_, index) => 
        index === newPosition || 
        index === (newPosition + 1) % charactersCarousel.length || 
        index === (newPosition - 1 + charactersCarousel.length) % charactersCarousel.length
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
        {charactersCarousel.map((character) => {
          return (
            visible[character.id - 1] && (
              <motion.div
                key={character.id}
                className={styles.characters_art}
                style={{
                  backgroundImage: `url(/img/characters/${charactersCarousel[
                    character.id - 1
                  ].name?.toLowerCase()}/${charactersCarousel[
                    character.id - 1
                  ].name?.toLowerCase()}_c.png)`,
                  zIndex: charactersCarousel.length - character.id,
                }}
              ></motion.div>
            )
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
