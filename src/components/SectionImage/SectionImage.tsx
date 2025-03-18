import { useRef } from "react";
import styles from "./SectionImage.module.css";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import SectionBackground from "../SectionBackground/SectionBackground";
import SectionInfo from "../SectionInfo/SectionInfo";
import Banner from "../Banner/Banner";
import SectionInfoTwo from "../HomeSectionInfos/SectionInfoTwo/SectionInfoTwo";

const sectionHeight = [140, 500, 650, 300, 400, 500, 400, 300, 150];
const heightTotal = sectionHeight.reduce((acum, number) => acum + number, 0);

const sections = [
  { id: 1, shadow: "11", name: "basement" },
  { id: 2, shadow: "12", name: "cellar" },
  { id: 3, shadow: "21", name: "cavesv2" },
  { id: 4, shadow: "22", name: "catacombs" },
  { id: 5, shadow: "31", name: "necropolis" },
  { id: 6, shadow: "32", name: "depthsL" },
  { id: 7, shadow: "41", name: "utero" },
];
const scrollStartEnd: [number, number][] = sectionHeight.map(
  (height, index) => {
    const start =
      index == 0
        ? 0
        : sectionHeight.slice(0, index).reduce((sum, h) => sum + h, 0) /
          heightTotal;
    const end = start + height / heightTotal;
    return [start, end];
  }
);

const SectionImage = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  //useMotionValueEvent(scrollYProgress, "change", (value) => console.log(value));
  const yscrollRaw = useTransform(
    scrollYProgress,
    [
      scrollStartEnd[0][0],
      scrollStartEnd[0][1] - 0.00005,
      scrollStartEnd[0][1],
      scrollStartEnd[1][0] + 0.01,
      scrollStartEnd[1][1] - 0.0001,
      scrollStartEnd[1][1],
      scrollStartEnd[2][0] + 0.01,
      scrollStartEnd[2][1],
      scrollStartEnd[2][1] - 0.0001,
      scrollStartEnd[3][0] + 0.01,
      scrollStartEnd[3][1],
      scrollStartEnd[3][1] - 0.0001,
      scrollStartEnd[4][0] + 0.01,
      scrollStartEnd[4][1],
      scrollStartEnd[4][1] - 0.0001,
      scrollStartEnd[6][0] + 0.01,
      scrollStartEnd[6][1],
      scrollStartEnd[6][1] - 0.0001,
      scrollStartEnd[7][0] + 0.01,
      scrollStartEnd[7][1] - 0.01,
    ],
    [
      -15, -15, 0, 0, -15, 0, 0, -98, 0, 0, -15, 0, 0, -15, -15, -15, -98, 0, 0,
      -15,
    ]
  );
  const yscrollsmooth = useSpring(yscrollRaw, { stiffness: 200, damping: 40 });
  const value = useTransform(yscrollsmooth, (value) => `${value}vh`);
  const scale = useTransform(
    scrollYProgress,
    [scrollStartEnd[8][0], scrollStartEnd[8][1]],
    [1, 0.15]
  );
  return (
    <motion.section
      ref={scrollRef}
      className={styles.container_sImage}
      style={{ height: `${heightTotal}vh` }}
    >
      <motion.div className={styles.sticky} style={{ y: value, scale: scale }}>
        {sections.map((section) => (
          <SectionBackground
            key={section.id}
            id={section.id}
            scrollYProgress={scrollYProgress}
            shadow={section.shadow}
            name={section.name}
            scrollArray={scrollStartEnd}
          >
            {section.id == 1 ? (
              <Banner scrollYProgress={scrollYProgress}></Banner>
            ) : section.id == 2 ? (
              <SectionInfoTwo
                ScrollYProgress={scrollYProgress}
                ScrollStartEnd={scrollStartEnd[section.id-1]}
              ></SectionInfoTwo>
            ) : (
              <SectionInfo scrollYProgress={scrollYProgress}></SectionInfo>
            )}
          </SectionBackground>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default SectionImage;
