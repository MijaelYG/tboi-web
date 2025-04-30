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
    return { opacity: 1, transition: { duration: 0.15, ease: "easeInOut" } };
  };

  const getExitValues = () => {
    return { opacity: 0, transition: { duration: 0.15, ease: "easeInOut" } };
  };

  const getLeft = (index: number, length: number, type?:string) => {
    switch (length) {
      case 0:
        return 0;
      case 1:
        if(type == "text"){
          if (index == 0) {
            return -5;
          }
        }else{
          if (index == 0) {
            return 20.5;
          }
        }
        return;
      case 2:
        if(type == "text"){
          if (index == 0) {
            return -100;
          } else {
            return 90;
          }
        }else{
          if (index == 0) {
            return -33;
          } else {
            return 75;
          }
        }
      case 3:
        if(type == "text"){
          if (index == 0) {
            return -155;
          } else if (index == 1) {
            return -5;
          } else {
            return 138;
          }
        }else{
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
                          backgroundImage: `url(/img/objects/items/${data.name.replace(/[' ]/g,"_").toLowerCase()}.png)`,
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
                      backgroundImage: `url(/img/objects/pickups/${data.name.replace(/[' ]/g,"_").toLowerCase()}.png)`,
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
                      backgroundImage: `url(/img/objects/trinkets/${data.name.replace(/[' ]/g,"_").toLowerCase()}.png)`,
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
                          backgroundImage: `url(/img/objects/items/${data.name.replace(/[' ]/g,"_").toLowerCase()}.png)`,
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
                      backgroundImage: `url(/img/objects/pickups/${data.name.replace(/[' ]/g,"_").toLowerCase()}.png)`,
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
                          charactersCarousel[position].itemsTainted.length,"text"
                        )}% - 1%)`,
                    }}
                  > {data.name} </div>
                ) : (
                  <div
                    key={`${charactersCarousel[position]}_${index}_other_item`}
                    className={styles.other_item}
                    style={{
                      backgroundImage: `url(/img/objects/trinkets/${data.name.replace(/[' ]/g,"_").toLowerCase()}.png)`,
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
    </>
  );
}

export default CarouselCharacters;
