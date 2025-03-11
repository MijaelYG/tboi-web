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

interface PropsImagen {
  height: string;
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
      0,0.0959, 0.0959,0.096, 0.096,0.1919, 0.1919,0.192, 0.192,0.3849, 0.3849,0.385 ,0.385,0.4809, 0.4809,0.481, 0.481,0.5769 ,0.5769,0.577
    ],
    [-15,-15, -15,0, 0,-15, -15,0, 0,-98,-98,0, 0,-15, -15,0, 0,-15, -15,-15 ]
  );
  const yscrollsmooth = useSpring(yscrollRaw, { stiffness: 200, damping: 40 });
  const value = useTransform(yscrollsmooth, (value) => `${value}vh`);
  const scale = useTransform(scrollYProgress, [0.962, 1], [1, 0.15]);
  return (
    <motion.section
      ref={scrollRef}
      className={styles.container_sImage}
      style={{ height: `${height}` }}
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
