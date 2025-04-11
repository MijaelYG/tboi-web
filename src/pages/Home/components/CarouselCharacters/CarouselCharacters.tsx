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
  const [disabled, setDisabled] = useState(false);
  const [changepixel, setChangepixel] = useState(false);
  const [changetainted, setChangetainted] = useState(false);
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

  const moveYbtn = useTransform(
    scrollYProgress,
    [cardStart, cardEnd],
    [40, -20]
  );
  const moveYbtnsmooth = useSpring(moveYbtn, { stiffness: 200, damping: 30 });

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
    if (disabled) return;
    setDisabled(true);
    setPosition((prev) => {
      const newPosition = prev === 0 ? charactersCarousel.length - 1 : prev - 1;
      updateVisibility(newPosition);
      return newPosition;
    });
    setTimeout(() => {
      setDisabled(false);
    }, 200);
  };

  const handlebtnRight = () => {
    if (disabled) return;
    setDisabled(true);
    setPosition((prev) => {
      const newPosition = prev < charactersCarousel.length - 1 ? prev + 1 : 0;
      updateVisibility(newPosition);
      return newPosition;
    });
    setTimeout(() => {
      setDisabled(false);
    }, 200);
  };

  const getInitialValues = (
    index: number,
    indexpos: number,
    nextpos: number,
    prevpos: number
  ) => {
    const xPos =
      index === indexpos
        ? 0
        : index === nextpos
        ? 180
        : index === prevpos
        ? -180
        : 0;
    const opacity = 0;
    const yPos = index === nextpos ? -30 : index === prevpos ? -30 : 0;
    const scale =
      index === indexpos
        ? 1
        : index === nextpos
        ? 0.5
        : index === prevpos
        ? 0.5
        : 1;
    return { x: `${xPos}%`, opacity: opacity, y: `${yPos}%`, scale: scale };
  };

  const getAnimateValues = (
    index: number,
    indexpos: number,
    nextpos: number,
    prevpos: number
  ) => {
    const xPos = index === indexpos ? 0 : index === nextpos ? 130 : -130;
    const opacity = index === nextpos ? 0.8 : index === prevpos ? 0.8 : 1;
    const yPos = index === nextpos ? -15 : index === prevpos ? -15 : 0;
    const scale =
      index === indexpos
        ? 1
        : index === nextpos
        ? 0.8
        : index === prevpos
        ? 0.8
        : 1;
    return { x: `${xPos}%`, opacity: opacity, y: `${yPos}%`, scale: scale };
  };

  const getExitValues = (
    index: number,
    _indexpos: number,
    nextpos: number,
    prevpos: number
  ) => {
    const xPos = index === prevpos ? -180 : index === nextpos ? 180 : 0;
    const opacity = 0;
    const yPos = index === nextpos ? -30 : index === prevpos ? -30 : 0;
    const scale =
      index === indexpos
        ? 1
        : index === nextpos
        ? 0.5
        : index === prevpos
        ? 0.5
        : 1;
    return { x: `${xPos}%`, opacity: opacity, y: `${yPos}%`, scale: scale };
  };

  const handleChangeTainted = () => {
    setChangetainted((prev) => !prev);
  };
  const handleChangePixel = () => {
    setChangepixel((prev) => !prev);
  };
  return (
    <>
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
          <AnimatePresence>
            {charactersCarousel.map((character, index) => {
              return (
                visible[index] && (
                  <motion.div
                    key={`${character.id}}`}
                    className={styles.characters_art}
                    style={{
                      backgroundImage: `url(/img/characters/${charactersCarousel[
                        index
                      ].name?.toLowerCase()}/${charactersCarousel[
                        index
                      ].name?.toLowerCase()}_${changepixel ? "p" : "c"}.png)`,
                      zIndex: charactersCarousel.length - index,
                      width: `${changepixel ? 8.4 : 7.5}vw`,
                      height: `${changepixel ? 7.4 : 6.5}vw`,
                    }}
                    initial={getInitialValues(
                      index,
                      indexpos,
                      nextpos,
                      prevpos
                    )}
                    animate={getAnimateValues(
                      index,
                      indexpos,
                      nextpos,
                      prevpos
                    )}
                    exit={getExitValues(index, indexpos, nextpos, prevpos)}
                    transition={{ duration: 0.25, ease: "linear" }}
                  ></motion.div>
                )
              );
            })}
          </AnimatePresence>
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
        <div className={styles.stats}>
          <div
            className={styles.pixel_stats}
            style={{ backgroundImage: `url(/img/UI/heart_icon.png)` }}
          ></div>
          <div className={styles.cant}>
            {charactersCarousel
              .filter((_, index) => index === position)
              .map((data) => {
                return data.life > 0 && data.life <= 4 ? (
                  Array.from({ length: data.life }).map((_, indexlife) => (
                    <AnimatePresence
                      key={`${data.name}_${indexlife}`}
                      mode="wait"
                    >
                      <motion.div
                        key={`${data.name}_${indexlife}`}
                        className={styles.id_stats}
                        style={{
                          backgroundImage: `url(/img/UI/stats/${
                            indexlife + 1
                          }_stats.png)`,
                          left:
                            indexlife == 0
                              ? `${indexlife}0%`
                              : indexlife == 2
                              ? `calc(${indexlife}0% + 10%)`
                              : indexlife == 3
                              ? `calc(${indexlife}0% + 18%)`
                              : `calc(${indexlife}0% + 5%)`,
                        }}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{
                          opacity: 1,
                          x: 0,
                          transition: { duration: 0.25 },
                        }}
                        exit={{
                          opacity: 0,
                          x: 10,
                          transition: { duration: 0.25 },
                        }}
                      ></motion.div>
                    </AnimatePresence>
                  ))
                ) : data.life > 4 ? (
                  <AnimatePresence mode="wait" key={`${data.name}`}>
                    <motion.div
                      key={`${data.name}`}
                      className={styles.id_stats}
                      style={{
                        backgroundImage: `url(/img/UI/stats/${data.life}_life.png)`,
                        width: `95%`,
                        left: `-2%`,
                      }}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.25 },
                      }}
                      exit={{
                        opacity: 0,
                        x: 10,
                        transition: { duration: 0.25 },
                      }}
                    ></motion.div>
                  </AnimatePresence>
                ) : data.life == 0 ? (
                  <AnimatePresence mode="wait" key={`${data.name}`}>
                    <motion.div
                      key={`${data.name}`}
                      className={styles.id_stats}
                      style={{
                        backgroundImage: `url(/img/UI/stats/${data.life}_stats.png)`,
                        width: `50%`,
                        left: `5%`,
                      }}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.25 },
                      }}
                      exit={{
                        opacity: 0,
                        x: 10,
                        transition: { duration: 0.25 },
                      }}
                    ></motion.div>
                  </AnimatePresence>
                ) : (
                  <AnimatePresence mode="wait" key={`${data.name}`}>
                    <motion.div
                      key={`${data.name}`}
                      className={styles.id_stats}
                      style={{
                        backgroundImage: `url(/img/UI/stats/${data.life}_stats.png)`,
                        width: `50%`,
                        left: `5%`,
                      }}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.25 },
                      }}
                      exit={{
                        opacity: 0,
                        x: 10,
                        transition: { duration: 0.25 },
                      }}
                    ></motion.div>
                  </AnimatePresence>
                );
              })}
          </div>
          <div
            className={styles.pixel_stats}
            style={{
              backgroundImage: `url(/img/UI/speed_icon.png)`,
              marginRight: `1%`,
            }}
          ></div>
          <div className={styles.cant}>
            {charactersCarousel
              .filter((_, index) => index === position)
              .map((data) => {
                return data.speed > 0 && data.speed <= 4 ? (
                  Array.from({ length: data.speed }).map((_, indexspeed) => (
                    <AnimatePresence
                      key={`${data.name}_${indexspeed}`}
                      mode="wait"
                    >
                      <motion.div
                        key={`${data.name}_${indexspeed}`}
                        className={styles.id_stats}
                        style={{
                          backgroundImage: `url(/img/UI/stats/${
                            indexspeed + 1
                          }_stats.png)`,
                          left:
                            indexspeed == 0
                              ? `${indexspeed}0%`
                              : indexspeed == 2
                              ? `calc(${indexspeed}0% + 10%)`
                              : indexspeed == 3
                              ? `calc(${indexspeed}0% + 18%)`
                              : `calc(${indexspeed}0% + 5%)`,
                        }}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{
                          opacity: 1,
                          x: 0,
                          transition: { duration: 0.25 },
                        }}
                        exit={{
                          opacity: 0,
                          x: 10,
                          transition: { duration: 0.25 },
                        }}
                      ></motion.div>
                    </AnimatePresence>
                  ))
                ) : data.speed > 4 ? (
                  <AnimatePresence mode="wait" key={`${data.name}`}>
                    <motion.div
                      key={`${data.name}`}
                      className={styles.id_stats}
                      style={{
                        backgroundImage: `url(/img/UI/stats/${data.speed}_life.png)`,
                        width: `95%`,
                        left: `-2%`,
                      }}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.25 },
                      }}
                      exit={{
                        opacity: 0,
                        x: 10,
                        transition: { duration: 0.25 },
                      }}
                    ></motion.div>
                  </AnimatePresence>
                ) : data.speed == 0 ? (
                  <AnimatePresence mode="wait" key={`${data.name}`}>
                    <motion.div
                      key={`${data.name}`}
                      className={styles.id_stats}
                      style={{
                        backgroundImage: `url(/img/UI/stats/${data.speed}_stats.png)`,
                        width: `50%`,
                        left: `5%`,
                      }}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.25 },
                      }}
                      exit={{
                        opacity: 0,
                        x: 10,
                        transition: { duration: 0.25 },
                      }}
                    ></motion.div>
                  </AnimatePresence>
                ) : (
                  <AnimatePresence mode="wait" key={`${data.name}`}>
                    <motion.div
                      key={`${data.name}`}
                      className={styles.id_stats}
                      style={{
                        backgroundImage: `url(/img/UI/stats/${data.speed}_stats.png)`,
                        width: `50%`,
                        left: `5%`,
                      }}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.25 },
                      }}
                      exit={{
                        opacity: 0,
                        x: 10,
                        transition: { duration: 0.25 },
                      }}
                    ></motion.div>
                  </AnimatePresence>
                );
              })}
          </div>
          <div
            className={styles.pixel_stats}
            style={{ backgroundImage: `url(/img/UI/attack_icon.png)` }}
          ></div>
          <div className={styles.cant}>
            {charactersCarousel
              .filter((_, index) => index === position)
              .map((data) => {
                return data.attack > 0 && data.attack <= 4 ? (
                  Array.from({ length: data.attack }).map((_, index) => (
                    <AnimatePresence
                      key={`${data.attack}_${index}`}
                      mode="wait"
                    >
                      <motion.div
                        key={`${data.attack}_${index}`}
                        className={styles.id_stats}
                        style={{
                          backgroundImage: `url(/img/UI/stats/${
                            index + 1
                          }_stats.png)`,
                          left:
                            index == 0
                              ? `${index}0%`
                              : index == 2
                              ? `calc(${index}0% + 10%)`
                              : index == 3
                              ? `calc(${index}0% + 18%)`
                              : `calc(${index}0% + 5%)`,
                        }}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{
                          opacity: 1,
                          x: 0,
                          transition: { duration: 0.25 },
                        }}
                        exit={{
                          opacity: 0,
                          x: 10,
                          transition: { duration: 0.25 },
                        }}
                      ></motion.div>
                    </AnimatePresence>
                  ))
                ) : data.attack > 4 ? (
                  <AnimatePresence mode="wait" key={`${data.name}`}>
                    <motion.div
                      key={`${data.name}`}
                      className={styles.id_stats}
                      style={{
                        backgroundImage: `url(/img/UI/stats/${data.attack}_attack.png)`,
                        width: `95%`,
                        left: `-2%`,
                      }}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.25 },
                      }}
                      exit={{
                        opacity: 0,
                        x: 10,
                        transition: { duration: 0.25 },
                      }}
                    ></motion.div>
                  </AnimatePresence>
                ) : data.attack == 0 ? (
                  <AnimatePresence mode="wait" key={`${data.name}`}>
                    <motion.div
                      key={`${data.name}`}
                      className={styles.id_stats}
                      style={{
                        backgroundImage: `url(/img/UI/stats/${data.attack}_stats.png)`,
                        width: `50%`,
                        left: `5%`,
                      }}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.25 },
                      }}
                      exit={{
                        opacity: 0,
                        x: 10,
                        transition: { duration: 0.25 },
                      }}
                    ></motion.div>
                  </AnimatePresence>
                ) : (
                  <AnimatePresence mode="wait" key={`${data.name}`}>
                    <motion.div
                      key={`${data.name}`}
                      className={styles.id_stats}
                      style={{
                        backgroundImage: `url(/img/UI/stats/${data.attack}_stats.png)`,
                        width: `50%`,
                        left: `5%`,
                      }}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.25 },
                      }}
                      exit={{
                        opacity: 0,
                        x: 10,
                        transition: { duration: 0.25 },
                      }}
                    ></motion.div>
                  </AnimatePresence>
                );
              })}
          </div>
        </div>
        <div className={styles.items}>
          {charactersCarousel
            .filter((_, index) => index === position)
            .map((data_name) => {
              return Array.from({ length: data_name.items ?? 0 }).map(
                (_, index) => (
                  <div
                    key={`${data_name.id}+${index}`}
                    className={styles.cont_item}
                  >
                    <div className={styles.item_icon}></div>
                    <div
                      className={styles.item_c}
                      style={{
                        backgroundImage: `url(/img/characters/${data_name.name?.toLowerCase()}/${data_name.name?.toLowerCase()}_item_${
                          index + 1
                        }.png)`,
                        width: `${
                          (data_name.name?.toLowerCase() == "magdalene" ||
                            data_name.name?.toLowerCase() == "eve" ||
                            data_name.name?.toLowerCase() == "the_lost") &&
                          index == 0
                            ? 45
                            : data_name.name?.toLowerCase() == "cain" ||
                              data_name.name?.toLowerCase() == "blue_baby" ||
                              (data_name.name?.toLowerCase() == "lilith" &&
                                index == 0) ||
                              (data_name.name?.toLowerCase() == "keeper" &&
                                index == 1)
                            ? 40
                            : data_name.name?.toLowerCase() == "judas" ||
                              data_name.name?.toLowerCase() == "bethany"
                            ? 65
                            : data_name.name?.toLowerCase() == "samson" ||
                              ((data_name.name?.toLowerCase() == "eve" ||
                                data_name.name?.toLowerCase() == "lilith") &&
                                index == 1) ||
                              (data_name.name?.toLowerCase() == "keeper" &&
                                index == 0)
                            ? 60
                            : (data_name.name?.toLowerCase() == "eve" &&
                                index == 2) ||
                              (data_name.name?.toLowerCase() == "the_lost" &&
                                index == 1)
                            ? 50
                            : data_name.name?.toLowerCase() == "apollyon"
                            ? 25
                            : 35
                        }%`,
                      }}
                    ></div>
                  </div>
                )
              );
            })}
        </div>
      </motion.div>
      
      <motion.div
        className={styles.btn_tainted}
        onClick={handleChangeTainted}
        style={{ y: moveYbtnsmooth, opacity: opacitysmooth }}
      ></motion.div>
      <motion.div
        className={styles.btn_change}
        onClick={handleChangePixel}
        style={{ y: moveYbtnsmooth, opacity: opacitysmooth }}
      ></motion.div>
    </>
  );
};

export default CarouselCharacters;
