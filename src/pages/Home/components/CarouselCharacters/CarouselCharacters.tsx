import styles from "./CarouselCharacters.module.css";
import { useState } from "react";
import { charactersCarousel } from "../../config/characters";
import { AnimatePresence, motion, steps } from "framer-motion";
import React from "react";

function CarouselCharacters() {
  const [position, setPosition] = useState(0);
  const [tainted, setTainted] = useState(0);

  const handleBtnLeft = () => {
    setPosition(
      (prev) =>
        (prev - 1 + charactersCarousel.length) % charactersCarousel.length
    );
  };
  const handleBtnRight = () => {
    setPosition((prev) => (prev + 1) % charactersCarousel.length);
  };

  const handleBtnTainted = () => {
    tainted === 0 ? setTainted(1) : setTainted(0);
  };

  const getInitialValues = () => {
    return { opacity: 0 };
  };

  const getAnimateValues = () => {
    return { opacity: 1 ,transition:{ duration: 0.15, ease: "easeInOut" }};
  };

  const getExitValues = () => {
    return { opacity: 0,transition:{ duration: 0.15, ease: "easeInOut" }};
  };

  const getLeft = (index: number, length: number) => {
    switch (length) {
      case 0:
        return 0;
      case 1:
        if (index == 0) {
          return 20.5;
        }
        return;
      case 2:
        if (index == 0) {
          return -33;
        } else {
          return 75;
        }
      case 3:
        if (index == 0) {
          return -89;
        } else if (index == 1) {
          return 20.5;
        } else {
          return 131.5;
        }
      default:
        return 0;
    }
  };
  return (
    <>
      <div className={styles.cont_carousel}>
        <div className={styles.cont_characters}>
          <AnimatePresence mode="wait">
            {charactersCarousel.map((character, index) => {
              return (
                index == position && (
                  <React.Fragment key={`${character.id}_${tainted}`}>
                    <motion.div
                      key={`${character.name}_${tainted}`}
                      className={styles.character}
                      style={{
                        backgroundImage: `url(/img/characters/${character.name?.toLocaleLowerCase()}/${character.name?.toLocaleLowerCase()}_${
                          tainted == 0 ? "p" : "tainted"
                        }.png)`,
                      }}
                      initial={getInitialValues()}
                      animate={getAnimateValues()}
                      exit={getExitValues()}
                      transition={{ duration: 0.15, ease: "easeInOut" }}
                    ></motion.div>
                    {character.items &&
                      Array.from({ length: character.items }).map(
                        (_, index) => (
                          <React.Fragment key={`${index}_items`}>
                            <div
                              className={styles.cont_item}
                              key={`${index}_item`}
                              style={{
                                left:
                                  character.items &&
                                  `calc(${getLeft(
                                    index,
                                    character.items
                                  )}% - 1%)`,
                              }}
                            >
                              <div
                                key={`${index}_item`}
                                className={styles.item}
                                style={{
                                  backgroundImage: `url(/img/characters/${character.name?.toLocaleLowerCase()}/${character.name?.toLocaleLowerCase()}_${
                                    tainted == 0 ? "item" : "tainted"
                                  }_${index + 1}.png)`,
                                  animationDelay: `-${index * 0.25}s`
                                }}
                              ></div>
                            </div>

                            <div
                              key={`${index}_altar`}
                              className={styles.altar}
                              style={{
                                left:
                                  character.items &&
                                  `${getLeft(index, character.items)}%`,
                              }}
                            ></div>
                          </React.Fragment>
                        )
                      )}
                    {character.name?.toLocaleLowerCase() == "the_forgotten" &&
                    tainted == 0 ? (
                      <>
                        <motion.div
                          key={`${character.name}_shadow`}
                          className={styles.shadow_pixel}
                          style={{ left: "29%", bottom: "-5%" }}
                          initial={getInitialValues()}
                          animate={getAnimateValues()}
                          exit={getExitValues()}
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
                    ) : character.name?.toLocaleLowerCase() ==
                        "the_forgotten" && tainted == 1 ? (
                      <>
                        <motion.div
                          key={`${character.name}_shadow`}
                          className={styles.shadow_pixel}
                          style={{ left: "33%", bottom: "-4%" }}
                          initial={getInitialValues()}
                          animate={getAnimateValues()}
                          exit={getExitValues()}
                        ></motion.div>
                        <motion.div
                          key={`${character.name}_shadow_2`}
                          className={styles.shadow_pixel}
                          style={{ right: "-12%", bottom: "-1.5%" }}
                          initial={getInitialValues()}
                          animate={getAnimateValues()}
                          exit={getExitValues()}
                          transition={{ duration: 0.2, ease: "easeInOut" }}
                        ></motion.div>
                      </>
                    ) : character.name?.toLocaleLowerCase() == "jacob_esau" &&
                      tainted == 0 ? (
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
                        ></motion.div>
                      </>
                    ) : (
                      <motion.div
                        key={`${character.name}_shadow`}
                        className={styles.shadow_pixel}
                        style={{ left: "50%", bottom: "-5%" }}
                        initial={getInitialValues()}
                        animate={getAnimateValues()}
                        exit={getExitValues()}
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
      <motion.div
        className={styles.btn_tainted}
        onClick={handleBtnTainted}
        whileTap={{
          backgroundPositionX: "calc(-6.2vw)",
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
