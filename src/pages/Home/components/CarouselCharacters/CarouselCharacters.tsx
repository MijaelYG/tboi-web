import styles from "./CarouselCharacters.module.css";
import { useState } from "react";
import { charactersCarousel } from "../../config/characters";
import { AnimatePresence, motion, steps } from "framer-motion";
import React from "react";

function CarouselCharacters() {
  const [position, setPosition] = useState(0);

  const handleBtnLeft = () => {
    setPosition(
      (prev) =>
        (prev - 1 + charactersCarousel.length) % charactersCarousel.length
    );
  };
  const handleBtnRight = () => {
    setPosition((prev) => (prev + 1) % charactersCarousel.length);
  };

  const getInitialValues = () => {
    return { opacity: 0 };
  };

  const getAnimateValues = () => {
    return { opacity: 1 };
  };

  const getExitValues = () => {
    return { opacity: 0 };
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
                      initial={getInitialValues()}
                      animate={getAnimateValues()}
                      exit={getExitValues()}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                    ></motion.div>
                    {
                    character.name?.toLocaleLowerCase() == "the_forgotten" ? (
                      <>
                        <motion.div
                          key={`${character.name}_shadow`}
                          className={styles.shadow_pixel}
                          style={{ left: "29%", bottom: "-5%" }}
                          initial={getInitialValues()}
                          animate={getAnimateValues()}
                          exit={getExitValues()}
                          transition={{ duration: 0.2, ease: "easeInOut" }}
                        ></motion.div>
                        <motion.div
                          key={`${character.name}_shadow_2`}
                          className={styles.shadow_pixel}
                          style={{ right: "-19%", bottom: "-1.2%" }}
                          initial={getInitialValues()}
                          animate={getAnimateValues()}
                          exit={getExitValues()}
                          transition={{ duration: 0.2, ease: "easeInOut" }}
                        ></motion.div>
                      </>
                    ) : character.name?.toLocaleLowerCase() == "jacob_esau" ? (
                      <>
                      <motion.div
                        key={`${character.name}_shadow`}
                        className={styles.shadow_pixel}
                        style={{ left: "31.5%", bottom: "-5%" }}
                        initial={getInitialValues()}
                        animate={getAnimateValues()}
                        exit={getExitValues()}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                      ></motion.div>
                      <motion.div
                        key={`${character.name}_shadow_2`}
                        className={styles.shadow_pixel}
                        style={{ right: "-16.5%", bottom: "-1%" }}
                        initial={getInitialValues()}
                        animate={getAnimateValues()}
                        exit={getExitValues()}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                      ></motion.div>
                    </>
                    ): (
                      <motion.div
                        key={`${character.name}_shadow`}
                        className={styles.shadow_pixel}
                        style={{ left: "50%", bottom: "-5%" }}
                        initial={getInitialValues()}
                        animate={getAnimateValues()}
                        exit={getExitValues()}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                      ></motion.div>
                    )}
                  </React.Fragment>
                )
              );
            })}
          </AnimatePresence>
        </div>
      </div>
      <motion.div
        className={styles.btn_left}
        onClick={handleBtnLeft}
        initial={{
          backgroundPositionX: "0%",
          transition: { duration: 0, ease: steps(2) },
        }}
        whileTap={{
          backgroundPositionX: "calc(-6.8vw)",
          transition: { duration: 0, ease: steps(2) },
        }}
        animate={{
          backgroundPositionX: "0%",
          transition: { duration: 0, ease: steps(2) },
        }}
      ></motion.div>
      <motion.div
        className={styles.btn_right}
        onClick={handleBtnRight}
        whileTap={{
          backgroundPositionX: "calc(-6.8vw)",
          transition: { duration: 0, ease: steps(2) },
        }}
        animate={{
          backgroundPositionX: "0%",
          transition: { duration: 0, ease: steps(2) },
        }}
      ></motion.div>
    </>
  );
}

export default CarouselCharacters;
