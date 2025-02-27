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
    offset: ["start start", "end start"],
  });


  return (
    <motion.section
      ref={scrollRef}
      className={styles.container_sImage}
      style={{ height: `${height}` }}
    >
      <motion.div className={styles.sticky}>
        <SectionBackground
          id={1}
          scrollYProgress={scrollYProgress}
          floor={"21"}
          name={"necropolis"}
        >
          <SectionInfo scrollYProgress={scrollYProgress}></SectionInfo>
        </SectionBackground>
        <SectionBackground
          id={2}
          scrollYProgress={scrollYProgress}
          floor={"21"}
          name={"necropolis"}
        >
          <SectionInfo scrollYProgress={scrollYProgress}></SectionInfo>
        </SectionBackground>
      </motion.div>
    </motion.section>
  );
};

export default SectionImage;
