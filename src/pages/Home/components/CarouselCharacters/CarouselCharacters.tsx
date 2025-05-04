import styles from "./CarouselCharacters.module.css";
import { useState } from "react";
import { charactersCarousel } from "../../config/characters";
import { AnimatePresence, motion, steps } from "framer-motion";
import React from "react";
import ItemAltar from "../../../../components/ItemAltar/ItemAltar";
import Item from "../../../../components/Item/Item";
import Pixel from "../../../../components/Pixel/Pixel";
import { pixelSpritesBg4 } from "../../config/sprites";

function CarouselCharacters() {
  const [position, setPosition] = useState(0);
  const [tainted, setTainted] = useState(0);
  const [pressedTainted, setPressedTainted] = useState(1);
  const [hoveredId, setHoveredId] = useState(0);

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
    if (pressedTainted == 1) {
      tainted === 0 ? setTainted(1) : setTainted(0);
      setPressedTainted(0);
      setTimeout(() => {
        setPressedTainted(1);
      }, 400);
    }
  };

  const handleTextLength = (text: string) => {
    if (text.length <= 5) {
      return "/img/UI/cards/card_title_item_4.png";
    } else if (text.length >= 6 && text.length <= 10) {
      return "/img/UI/cards/card_title_item_3.png";
    } else if (text.length >= 11 && text.length <= 15) {
      return "/img/UI/cards/card_title_item_2.png";
    } else if (text.length >= 16) {
      return "/img/UI/cards/card_title_item_1.png";
    }
  };

  const getInitialValues = () => {
    return { opacity: 0 };
  };

  const getAnimateValues = (duration_number?: number) => {
    return {
      opacity: 1,
      transition: { duration: duration_number ?? 0.25, ease: "easeInOut" },
    };
  };

  const getExitValues = (duration_number?: number) => {
    return {
      opacity: 0,
      transition: { duration: duration_number ?? 0.25, ease: "easeInOut" },
    };
  };

  const getLeft = (index: number, length: number, type?: string) => {
    switch (length) {
      case 2:
        if (type == "text") {
          if (index == 0) {
            return -40;
          } else {
            return 40;
          }
        } else {
          if (index == 0) {
            return 58;
          } else {
            return -58;
          }
        }
      case 3:
        if (type == "text") {
          if (index == 0) {
            return 10;
          } else if (index == 1) {
            return -57;
          } else {
            return -10;
          }
        } else {
          if (index == 0) {
            return 112;
          } else if (index == 1) {
            return 0;
          } else {
            return -112;
          }
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
            <React.Fragment
              key={`${charactersCarousel[position].name}_${tainted}_fragment`}
            >
              <motion.div
                key={`${charactersCarousel[position].name}_${tainted}`}
                className={styles.character}
                style={{
                  backgroundImage: `url(/img/characters/${charactersCarousel[
                    position
                  ].name?.toLocaleLowerCase()}/${charactersCarousel[
                    position
                  ].name?.toLocaleLowerCase()}_${
                    tainted == 0 ? "p" : "tainted"
                  }.png)`,
                }}
                initial={getInitialValues()}
                animate={getAnimateValues()}
                exit={getExitValues()}
              ></motion.div>
              {charactersCarousel[position].name?.toLocaleLowerCase() ==
                "the_forgotten" && tainted == 0 ? (
                <>
                  <motion.div
                    key={`${charactersCarousel[position].name}_shadow`}
                    className={styles.shadow_pixel}
                    style={{ left: "29%", bottom: "-5%" }}
                    initial={getInitialValues()}
                    animate={getAnimateValues()}
                    exit={getExitValues()}
                  ></motion.div>
                  <motion.div
                    key={`${charactersCarousel[position].name}_shadow_2`}
                    className={styles.shadow_pixel}
                    style={{ right: "-19%", bottom: "-1.2%" }}
                    initial={getInitialValues()}
                    animate={getAnimateValues()}
                    exit={getExitValues()}
                  ></motion.div>
                </>
              ) : charactersCarousel[position].name?.toLocaleLowerCase() ==
                  "the_forgotten" && tainted == 1 ? (
                <>
                  <motion.div
                    key={`${charactersCarousel[position].name}_shadow`}
                    className={styles.shadow_pixel}
                    style={{ left: "33%", bottom: "-4%" }}
                    initial={getInitialValues()}
                    animate={getAnimateValues()}
                    exit={getExitValues()}
                  ></motion.div>
                  <motion.div
                    key={`${charactersCarousel[position].name}_shadow_2`}
                    className={styles.shadow_pixel}
                    style={{ right: "-12%", bottom: "-1.5%" }}
                    initial={getInitialValues()}
                    animate={getAnimateValues()}
                    exit={getExitValues()}
                  ></motion.div>
                </>
              ) : charactersCarousel[position].name?.toLocaleLowerCase() ==
                  "jacob_esau" && tainted == 0 ? (
                <>
                  <motion.div
                    key={`${charactersCarousel[position].name}_shadow`}
                    className={styles.shadow_pixel}
                    style={{ left: "31.5%", bottom: "-5%" }}
                    initial={getInitialValues()}
                    animate={getAnimateValues()}
                    exit={getExitValues()}
                  ></motion.div>
                  <motion.div
                    key={`${charactersCarousel[position].name}_shadow_2`}
                    className={styles.shadow_pixel}
                    style={{ right: "-16.5%", bottom: "-1%" }}
                    initial={getInitialValues()}
                    animate={getAnimateValues()}
                    exit={getExitValues()}
                  ></motion.div>
                </>
              ) : (
                <motion.div
                  key={`${charactersCarousel[position].name}_shadow`}
                  className={styles.shadow_pixel}
                  style={{ left: "50%", bottom: "-5%" }}
                  initial={getInitialValues()}
                  animate={getAnimateValues()}
                  exit={getExitValues()}
                ></motion.div>
              )}
            </React.Fragment>
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.div
              key={`${charactersCarousel[position].name}_${tainted}`}
              className={styles.items_characters}
              initial={getInitialValues()}
              animate={getAnimateValues()}
              exit={getExitValues()}
              style={{ alignItems: `${tainted == 1 ? "center" : "end"}` }}
            >
              {charactersCarousel[position].items && tainted === 0
                ? charactersCarousel[position].items.map((data, index) =>
                    data.type == "item" ? (
                      <React.Fragment key={`${index}_fragment_item`}>
                        <motion.div className={styles.position_item} style={{}}>
                          <ItemAltar name={data.name} index={index}></ItemAltar>
                        </motion.div>
                        <AnimatePresence>
                          {hoveredId === data.id && (
                            <motion.div
                              key={`${hoveredId}`}
                              className={styles.cont_item_name}
                              style={{
                                left:
                                  charactersCarousel[position].items &&
                                  `calc(${getLeft(
                                    index,
                                    charactersCarousel[position].items.length,
                                    "item_name"
                                  )}%)`,
                                backgroundImage: `url(${handleTextLength(
                                  data.name
                                )})`,
                              }}
                              initial={getInitialValues()}
                              animate={{
                                ...getAnimateValues(0.2),
                                y: 10,
                              }}
                              exit={{
                                ...getExitValues(0.2),
                                y: -10,
                              }}
                            >
                              <motion.div className={styles.item_name}>
                                {data.name}
                              </motion.div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </React.Fragment>
                    ) : (
                      <motion.div
                        key={`${index}_other_item`}
                        className={styles.position_item}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <Item
                          name={data.name}
                          index={index}
                          type={data.type}
                        ></Item>
                      </motion.div>
                    )
                  )
                : charactersCarousel[position].itemsTainted &&
                  tainted === 1 &&
                  charactersCarousel[position].itemsTainted.map((data, index) =>
                    data.type == "item" ? (
                      <React.Fragment key={`${index}_fragment_item`}>
                        <motion.div
                          className={styles.position_item}
                          style={{
                            left:
                              charactersCarousel[position].itemsTainted &&
                              getLeft(
                                index,
                                charactersCarousel[position].itemsTainted
                                  .length,
                                "item "
                              ),
                          }}
                        >
                          <ItemAltar name={data.name} index={index}></ItemAltar>
                        </motion.div>
                      </React.Fragment>
                    ) : data.type === "text" ? (
                      <motion.div
                        key={`${index}_text`}
                        className={styles.text}
                        style={{
                          left:
                            charactersCarousel[position].itemsTainted &&
                            getLeft(
                              index,
                              charactersCarousel[position].itemsTainted.length,
                              "text"
                            ),
                        }}
                      >
                        {data.name}
                      </motion.div>
                    ) : (
                      <motion.div
                        key={`${index}_other_item`}
                        className={styles.position_item}
                      >
                        <Item
                          name={data.name}
                          index={index}
                          type={data.type}
                        ></Item>
                      </motion.div>
                    )
                  )}
            </motion.div>
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
      <AnimatePresence mode="wait">
        <React.Fragment key={`${tainted}_fragment_tainted_pixel`}>
          {tainted === 1 &&
            pixelSpritesBg4.map((data, index) => (
              <motion.div
                key={index}
                className={styles.cont_pixel_bg}
                style={{
                  top: `${data.top}%`,
                  bottom: `${data.bottom}%`,
                  left: `${data.left}%`,
                  right: `${data.right}%`,
                }}
                initial={getInitialValues()}
                animate={getAnimateValues(0.7)}
                exit={getExitValues(0.7)}
              >
                <Pixel
                  width={data.width}
                  height={data.height}
                  img={data.img}
                  scaleX={data.scaleX}
                ></Pixel>
              </motion.div>
            ))}
        </React.Fragment>
      </AnimatePresence>
    </>
  );
}

export default CarouselCharacters;
