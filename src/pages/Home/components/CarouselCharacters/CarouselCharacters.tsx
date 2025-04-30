import styles from "./CarouselCharacters.module.css";
import { useState } from "react";
import { charactersCarousel } from "../../config/characters";
import { AnimatePresence, motion, steps } from "framer-motion";
import React from "react";

function CarouselCharacters() {
  const [position, setPosition] = useState(0);
  const [tainted, setTainted] = useState(0);
  const [pressedTainted, setPressedTainted] = useState(1);

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
    if(pressedTainted == 1){
      tainted === 0 ? setTainted(1) : setTainted(0);
      setPressedTainted(0)
      setTimeout(() => {
        setPressedTainted(1);
      }, 400);
    }
  };

  const getInitialValues = () => {
    return { opacity: 0 };
  };

  const getAnimateValues = (duration_number?:number) => {
    return { opacity: 1, transition: { duration: duration_number ?? 0.25, ease: "easeInOut" } };
  };

  const getExitValues = (duration_number?:number) => {
    return { opacity: 0, transition: { duration: duration_number ?? 0.25, ease: "easeInOut" } };
  };

  const getLeft = (index: number, length: number, type?: string) => {
    switch (length) {
      case 0:
        return 0;
      case 1:
        if (type == "text") {
          if (index == 0) {
            return -5;
          }
        } else {
          if (index == 0) {
            return 20.5;
          }
        }
        return;
      case 2:
        if (type == "text") {
          if (index == 0) {
            return -100;
          } else {
            return 90;
          }
        } else {
          if (index == 0) {
            return -33;
          } else {
            return 75;
          }
        }
      case 3:
        if (type == "text") {
          if (index == 0) {
            return -155;
          } else if (index == 1) {
            return -5;
          } else {
            return 138;
          }
        } else {
          if (index == 0) {
            return -89;
          } else if (index == 1) {
            return 20.5;
          } else {
            return 131.5;
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
          {charactersCarousel[position].items && tainted === 0
            ? charactersCarousel[position].items.map((data, index) =>
                data.type == "item" ? (
                  <React.Fragment
                    key={`${charactersCarousel[position]}_${index}_items`}
                  >
                    <div
                      className={styles.cont_item}
                      key={`${charactersCarousel[position]}_${index}_cont_item`}
                      style={{
                        left:
                          charactersCarousel[position].items &&
                          `calc(${getLeft(
                            index,
                            charactersCarousel[position].items.length
                          )}% - 1%)`,
                      }}
                    >
                      <div
                        key={`${charactersCarousel[position]}_${index}_item`}
                        className={styles.item}
                        style={{
                          backgroundImage: `url(/img/objects/items/${data.name
                            .replace(/[^a-zA-Z0-9]/g, "_")
                            .toLowerCase()}.png)`,
                          animationDelay: `-${index * 0.25}s`,
                        }}
                      ></div>
                    </div>
                    <div
                      key={`${charactersCarousel[position]}_${index}_altar`}
                      className={styles.altar}
                      style={{
                        left:
                          charactersCarousel[position].items &&
                          `${getLeft(
                            index,
                            charactersCarousel[position].items.length
                          )}%`,
                      }}
                    ></div>
                  </React.Fragment>
                ) : data.type === "pickup" ? (
                  <div
                    key={`${charactersCarousel[position]}_${index}_other_item`}
                    className={styles.other_item}
                    style={{
                      backgroundImage: `url(/img/objects/pickups/${data.name
                        .replace(/[^a-zA-Z0-9]/g, "_")
                        .toLowerCase()}.png)`,
                      left:
                        charactersCarousel[position].items &&
                        `calc(${getLeft(
                          index,
                          charactersCarousel[position].items.length
                        )}% - 1%)`,
                    }}
                  ></div>
                ) : (
                  <div
                    key={`${charactersCarousel[position]}_${index}_other_item`}
                    className={styles.other_item}
                    style={{
                      backgroundImage: `url(/img/objects/trinkets/${data.name
                        .replace(/[^a-zA-Z0-9]/g, "_")
                        .toLowerCase()}.png)`,
                      left:
                        charactersCarousel[position].items &&
                        `calc(${getLeft(
                          index,
                          charactersCarousel[position].items.length
                        )}% - 1%)`,
                    }}
                  ></div>
                )
              )
            : charactersCarousel[position].itemsTainted &&
              tainted === 1 &&
              charactersCarousel[position].itemsTainted.map((data, index) =>
                data.type == "item" ? (
                  <React.Fragment
                    key={`${charactersCarousel[position]}_${index}_items`}
                  >
                    <div
                      className={styles.cont_item}
                      key={`${charactersCarousel[position]}_${index}_cont_item`}
                      style={{
                        left:
                          charactersCarousel[position].itemsTainted &&
                          `calc(${getLeft(
                            index,
                            charactersCarousel[position].itemsTainted.length
                          )}% - 1%)`,
                      }}
                    >
                      <div
                        key={`${charactersCarousel[position]}_${index}_item`}
                        className={styles.item}
                        style={{
                          backgroundImage: `url(/img/objects/items/${data.name
                            .replace(/[^a-zA-Z0-9]/g, "_")
                            .toLowerCase()}.png)`,
                          animationDelay: `-${index * 0.25}s`,
                        }}
                      ></div>
                    </div>
                    <div
                      key={`${charactersCarousel[position]}_${index}_altar`}
                      className={styles.altar}
                      style={{
                        left:
                          charactersCarousel[position].itemsTainted &&
                          `${getLeft(
                            index,
                            charactersCarousel[position].itemsTainted.length
                          )}%`,
                      }}
                    ></div>
                  </React.Fragment>
                ) : data.type === "pickup" ? (
                  <div
                    key={`${charactersCarousel[position]}_${index}_other_item`}
                    className={styles.other_item}
                    style={{
                      backgroundImage: `url(/img/objects/pickups/${data.name
                        .replace(/[^a-zA-Z0-9]/g, "_")
                        .toLowerCase()}.png)`,
                      left:
                        charactersCarousel[position].itemsTainted &&
                        `calc(${getLeft(
                          index,
                          charactersCarousel[position].itemsTainted.length
                        )}% - 1%)`,
                    }}
                  ></div>
                ) : data.type === "text" ? (
                  <div
                    key={`${charactersCarousel[position]}_${index}_text`}
                    className={styles.text}
                    style={{
                      left:
                        charactersCarousel[position].itemsTainted &&
                        `calc(${getLeft(
                          index,
                          charactersCarousel[position].itemsTainted.length,
                          "text"
                        )}% - 1%)`,
                    }}
                  >
                    {" "}
                    {data.name}{" "}
                  </div>
                ) : (
                  <div
                    key={`${charactersCarousel[position]}_${index}_other_item`}
                    className={styles.other_item}
                    style={{
                      backgroundImage: `url(/img/objects/trinkets/${data.name
                        .replace(/[^a-zA-Z0-9]/g, "_")
                        .toLowerCase()}.png)`,
                      left:
                        charactersCarousel[position].itemsTainted &&
                        `calc(${getLeft(
                          index,
                          charactersCarousel[position].itemsTainted.length
                        )}% - 1%)`,
                    }}
                  ></div>
                )
              )}
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
        {tainted === 1 && (
          <React.Fragment key={tainted}>
            <motion.div
              className={styles.web}
              key={tainted}
              style={{ top: `18%`, right: `23.5%`, transform: "scaleX(-1)" }}
              initial={getInitialValues()}
              animate={getAnimateValues(0.7)}
              exit={getExitValues(0.7)}
            ></motion.div>
            <motion.div
              className={styles.web}
              style={{
                bottom: `18.6%`,
                left: `23.9%`,
                backgroundImage: `url(/img/obstacles/web2.png)`,
              }}
              initial={getInitialValues()}
              animate={getAnimateValues(0.7)}
              exit={getExitValues(0.7)}
            ></motion.div>
            <motion.div
              className={styles.web}
              style={{ top: `27.5%`, left: `12%` }}
              initial={getInitialValues()}
              animate={getAnimateValues(0.8)}
              exit={getExitValues(0.8)}
            ></motion.div>
            <motion.div
              className={styles.web}
              style={{ bottom: `27.3%`, right: `11.6%` }}
              initial={getInitialValues()}
              animate={getAnimateValues(0.7)}
              exit={getExitValues(0.7)}
            ></motion.div>
            <motion.div
              className={styles.web}
              style={{ top: `36.5%`, right: `11.5%` }}
              initial={getInitialValues()}
              animate={getAnimateValues(0.7)}
              exit={getExitValues(0.7)}
            ></motion.div>
            <motion.div
              className={styles.web}
              style={{ bottom: `27.8%`, left: `18%` }}
              initial={getInitialValues()}
              animate={getAnimateValues(0.7)}
              exit={getExitValues(0.7)}
            ></motion.div>
            <motion.div
              className={styles.poop}
              style={{ bottom: `26.4%`, left: `11.1%` }}
              initial={getInitialValues()}
              animate={getAnimateValues(0.7)}
              exit={getExitValues(0.7)}
            ></motion.div>
            <motion.div
              className={styles.poop}
              style={{ top: `26.5%`, right: `11.35%` }}
              initial={getInitialValues()}
              animate={getAnimateValues(0.7)}
              exit={getExitValues(0.7)}
            ></motion.div>
          </React.Fragment>
        )}
      </AnimatePresence>
    </>
  );
}

export default CarouselCharacters;
