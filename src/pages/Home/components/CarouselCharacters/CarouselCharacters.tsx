import styles from "./CarouselCharacters.module.css";
import { useRef, useState } from "react";
import { charactersCarousel } from "../../config/characters";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

function CarouselCharacters() {
  const [position, setPosition] = useState(0);
  const [direction, setDirection] = useState(1);
  const handleBtnLeft = () => {
    setDirection(0);
    setPosition(
      (prev) =>
        (prev - 1 + charactersCarousel.length) % charactersCarousel.length
    );

  };
  const handleBtnRight = () => {
    setDirection(1);
    setPosition((prev) => (prev + 1) % charactersCarousel.length);

  };

  const getInitialValues = (btnPressed: number) => {
    const xPos = btnPressed === 0 ? -50 : 50;
    return { x: `${xPos}%`, opacity: 0 };
  };

  const getAnimateValues = () => {
    const xPos = 0;
    return { x: `${xPos}%`, opacity: 1 };
  };

  const getExitValues = (btnPressed: number) => {
    const xPos = btnPressed === 0 ? 50 : -50;
    return { x: `${xPos}%`, opacity: 0 };
  };
  return (
    <>
      <div className={styles.cont_carousel}>
        <div className={styles.cont_characters}>
          <AnimatePresence mode="wait">
            {charactersCarousel.map((character, index) => {
              return (
                index == position && (
                  <React.Fragment key={`${character.id}`}>
                    <motion.div
                      key={`${character.name}`}
                      className={styles.character}
                      style={{
                        backgroundImage: `url(/img/characters/${character.name?.toLocaleLowerCase()}/${character.name?.toLocaleLowerCase()}_p.png)`,
                      }}
                      initial={getInitialValues(direction)}
                      animate={getAnimateValues()}
                      exit={getExitValues(direction)}
                      transition={{ duration: 0.25, ease: "linear" }}
                    ></motion.div>
                    <motion.div
                      key={`${character.name}_shadow`}
                      className={styles.shadow_pixel}
                    ></motion.div>
                  </React.Fragment>
                )
              );
            })}
          </AnimatePresence>
        </div>
      </div>
      <div className={styles.btn_left} onClick={handleBtnLeft}></div>
      <div className={styles.btn_right} onClick={handleBtnRight}></div>
    </>
  );
}

export default CarouselCharacters;
