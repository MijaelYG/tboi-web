import { useRef } from "react";
import styles from "./SectionImage.module.css";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
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
  { id: 4, floor: "21", name: "necropolis" },
  { id: 5, floor: "21", name: "necropolis" },
  { id: 6, floor: "21", name: "necropolis" },
];

const SectionImage = ({ height }: PropsImagen) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (value)=> (console.log(value)))
  return (
    <motion.section
      ref={scrollRef}
      className={styles.container_sImage}
      style={{ height: `${height}` }}
    >
      <motion.div className={styles.sticky}>
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
