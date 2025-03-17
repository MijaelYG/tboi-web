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

interface PropsImagen {
  height: number;
}
const sections = [
  { id: 1, shadow: "11", name: "basement" },
  { id: 2, shadow: "12", name: "cellar" },
  { id: 3, shadow: "21", name: "cavesv2" },
  { id: 4, shadow: "22", name: "catacombs" },
  { id: 5, shadow: "31", name: "necropolis" },
  { id: 6, shadow: "32", name: "depthsL" },
  { id: 7, shadow: "41", name: "utero" },
];

const SectionImage = ({ height }: PropsImagen) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (value) => console.log(value));
  const yscrollRaw = useTransform(
    scrollYProgress,
    [
      0, 0.1009, 0.1009, 0.101, 0.111, 0.192, 0.2019, 0.202, 0.202, 0.3639,
      0.3639, 0.3639, 0.3639, 0.4649, 0.4649, 0.465, 0.465, 0.5659, 0.5659,
      0.566, 0.698, 0.8299, 0.8299, 0.83, 0.83, 0.931,
    ],
    [
      -15, -15, -15, 0, 0, -15, -15, 0, 0, -98, -98, 0, 0, -15, -15, 0, 0, -15,
      -15, -15, -15, -98, -98, 0, 0, -15,
    ]
  );
  const yscrollsmooth = useSpring(yscrollRaw, { stiffness: 200, damping: 40 });
  const value = useTransform(yscrollsmooth, (value) => `${value}vh`);
  const scale = useTransform(scrollYProgress, [0.931, 1], [1, 0.15]);
  return (
    <motion.section
      ref={scrollRef}
      className={styles.container_sImage}
      style={{ height: `${height}vh` }}
    >
      <motion.div className={styles.sticky} style={{ y: value, scale: scale }}>
        {sections.map((section) => (
          <SectionBackground
            key={section.id}
            id={section.id}
            scrollYProgress={scrollYProgress}
            shadow={section.shadow}
            name={section.name}
          >
            {section.id == 1 ? (
              <Banner scrollYProgress={scrollYProgress}></Banner>
            ) : section.id == 2 ? (
              <SectionInfoTwo ScrollYProgress={scrollYProgress}></SectionInfoTwo>
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
