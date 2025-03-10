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
  { id: 6, shadow: "32", name: "depths" },
  { id: 7, shadow: "41", name: "utero" },
];

const SectionImage = ({ height }: PropsImagen) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (value) => console.log(value));
  const yscrollRaw = useTransform(
    scrollYProgress,
    [
      0, 0.1, 0.138, 0.14, 0.24, 0.278, 0.28, 0.48, 0.558, 0.56, 0.66,0.698,0.70
    ],
    [0, -15, -15, 0, -15, -15, 0, -98,  -98, 0,-15,-15,0]
  );
  const yscrollsmooth = useSpring(yscrollRaw, { stiffness: 200, damping: 40 });
  const value = useTransform(yscrollsmooth, (value) => `${value}vh`);
  return (
    <motion.section
      ref={scrollRef}
      className={styles.container_sImage}
      style={{ height: `${height}` }}
    >
      <motion.div className={styles.sticky} style={{ y: value }}>
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
