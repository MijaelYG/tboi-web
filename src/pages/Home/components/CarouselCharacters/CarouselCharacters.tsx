import { motion, MotionValue, useSpring, useTransform } from "framer-motion";
import styles from "./CarouselCharacters.module.css";
import { InfoCardType } from "../../../../types/Types";
import { charactersCarousel } from "../../config/characters";

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
            <motion.div
              key={character.id}
              className={styles.characters_art}
              style={{
                backgroundImage: `url(${character.characterCard_img})`,
                zIndex: charactersCarousel.length - character.id,
              }}
            ></motion.div>
          );
          
        })}
      </div>
      <div className={styles.btns_name}>
      <div className={styles.btn_left}>
      </div>
      <div className={styles.name_character}> 

      </div>
      <div className={styles.btn_right}>
      </div>
      </div>

    </motion.div>
  );
};

export default CarouselCharacters;
