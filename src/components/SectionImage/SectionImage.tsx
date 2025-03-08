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
  { id: 1, floor: "11", name: "basement" },
  { id: 2, floor: "21", name: "catacombs" },
  { id: 3, floor: "21", name: "necropolisv2" },
  { id: 4, floor: "21", name: "depths" },
  { id: 5, floor: "21", name: "necropolis" },
  { id: 6, floor: "21", name: "necropolis" },
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
            floor={section.floor}
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
