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

  const getLeftText = (index: number, length: number) => {
    switch (length) {
      case 2:
        if (index == 0) {
          return -40;
        } else {
          return 40;
        }
      case 3:
        if (index == 0) {
          return -40;
        } else if (index == 1) {
          return 0;
        } else {
          return 40;
        }
    }
  };

  const getNamePill = (name: string) => {
    if (name === "red and pink pill") {
      return "Full Health";
    } else if (name === "blue pill") {
      return "Random";
    } else {
      return name;
    }
  };
  return (
    <>
      <div className={styles.cont_carousel}>
        <div className={styles.cont_characters}>
          <AnimatePresence mode="wait">
            <motion.div
              key={charactersCarousel[position].name}
              className={styles.title_name_character}
              initial={{ x: "200%" }}
              animate={{ x: "0%" }}
              exit={{ x: "-200%" }}
              transition={{duration:0.3, ease:[0.75, -0.24, 0.35, 1.24]}}
            >
              <div className={styles.name_character}>
                {charactersCarousel[position].name
                  ?.toUpperCase()
                  .replace("_", " ")}
              </div>
            </motion.div>
          </AnimatePresence>
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
                  ].name?.toLowerCase()}/${charactersCarousel[
                    position
                  ].name?.toLowerCase()}_${
                    tainted == 0 ? "p" : "tainted"
                  }.png)`,
                }}
                initial={getInitialValues()}
                animate={getAnimateValues()}
                exit={getExitValues()}
              ></motion.div>
              {charactersCarousel[position].name?.toLowerCase() ==
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
              ) : charactersCarousel[position].name?.toLowerCase() ==
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
              ) : charactersCarousel[position].name?.toLowerCase() ==
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
            >
              {charactersCarousel[position].items && tainted === 0
                ? charactersCarousel[position].items.map((data, index) =>
                    data.type == "item" ? (
                      <React.Fragment key={`${index}_fragment_item`}>
                        <motion.div
                          className={styles.position_item}
                          onMouseEnter={() => setHoveredId(data.id)}
                          onMouseLeave={() => setHoveredId(0)}
                        >
                          <ItemAltar name={data.name} index={index}></ItemAltar>
                          <AnimatePresence>
                            {hoveredId === data.id && (
                              <motion.div
                                key={`${index}_${hoveredId}`}
                                className={styles.cont_item_name}
                                initial={getInitialValues()}
                                animate={getAnimateValues()}
                                exit={getExitValues()}
                              >
                                <motion.div className={styles.item_name}>
                                  {data.name}
                                </motion.div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      </React.Fragment>
                    ) : (
                      <motion.div
                        key={`${index}_other_item`}
                        className={styles.position_item}
                        style={{ justifyContent: "end" }}
                        onMouseEnter={() => setHoveredId(data.id)}
                        onMouseLeave={() => setHoveredId(0)}
                      >
                        <Item
                          name={data.name}
                          index={index}
                          type={data.type}
                        ></Item>
                        <AnimatePresence>
                          {hoveredId === data.id && (
                            <motion.div
                              key={`${index}_${hoveredId}`}
                              className={styles.cont_item_name}
                              initial={getInitialValues()}
                              animate={getAnimateValues()}
                              exit={getExitValues()}
                            >
                              <motion.div className={styles.item_name}>
                                {getNamePill(data.name)}
                              </motion.div>
                            </motion.div>
                          )}
                        </AnimatePresence>
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
                          onMouseEnter={() => setHoveredId(data.id)}
                          onMouseLeave={() => setHoveredId(0)}
                        >
                          <ItemAltar name={data.name} index={index}></ItemAltar>
                          <AnimatePresence>
                            {hoveredId === data.id && (
                              <motion.div
                                key={`${index}_${hoveredId}`}
                                className={styles.cont_item_name}
                                initial={getInitialValues()}
                                animate={getAnimateValues()}
                                exit={getExitValues()}
                              >
                                <motion.div className={styles.item_name}>
                                  {getNamePill(data.name)}
                                </motion.div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      </React.Fragment>
                    ) : data.type === "text" ? (
                      <motion.div
                        className={styles.cont_text}
                        key={`${index}_text`}
                        style={{
                          left:
                            charactersCarousel[position].itemsTainted &&
                            getLeftText(
                              index,
                              charactersCarousel[position].itemsTainted.length
                            ),
                        }}
                      >
                        <div className={styles.text}>{data.name}</div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key={`${index}_other_item`}
                        className={styles.position_item}
                        style={{ justifyContent: "end" }}
                        onMouseEnter={() => setHoveredId(data.id)}
                        onMouseLeave={() => setHoveredId(0)}
                      >
                        <Item
                          name={data.name}
                          index={index}
                          type={data.type}
                        ></Item>
                        <AnimatePresence>
                          {hoveredId === data.id && (
                            <motion.div
                              key={`${index}_${hoveredId}`}
                              className={styles.cont_item_name}
                              initial={getInitialValues()}
                              animate={getAnimateValues()}
                              exit={getExitValues()}
                            >
                              <motion.div className={styles.item_name}>
                                {getNamePill(data.name)}
                              </motion.div>
                            </motion.div>
                          )}
                        </AnimatePresence>
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
                animate={getAnimateValues(0.6)}
                exit={getExitValues(0.6)}
              >
                <Pixel
                  width={data.width}
                  height={data.height}
                  img={data.img}
                  scaleX={data.scaleX}
                ></Pixel>
              </motion.div>
            ))}
          {tainted === 1 && (
            <motion.div
              className={styles.bg_shadow_tainted}
              initial={getInitialValues()}
              animate={getAnimateValues(0.6)}
              exit={getExitValues(0.6)}
            ></motion.div>
          )}
        </React.Fragment>
      </AnimatePresence>
    </>
  );
}

export default CarouselCharacters;
