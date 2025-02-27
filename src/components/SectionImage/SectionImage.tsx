import { useRef } from "react";
import styles from "./SectionImage.module.css";
import { motion, useScroll } from "framer-motion";
import SectionBackground from "../SectionBackground/SectionBackground";
import SectionInfo from "../SectionInfo/SectionInfo";

interface PropsImagen {
  height: string;
}

const SectionImage = ({ height }: PropsImagen) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  return (
    <motion.section
      ref={scrollRef}
      className={styles.container_s}
      style={{ height: `${height}` }}
    >
      <div className={styles.sticky}>
        <SectionBackground
          scrollYProgress={scrollYProgress}
          floor={"21"}
          name={"necropolis"}
        >
          <SectionInfo scrollYProgress={scrollYProgress}></SectionInfo>
        </SectionBackground>
      </div>
    </motion.section>
  );
};

export default SectionImage;
