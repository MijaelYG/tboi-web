import React, { useEffect, useRef, useState } from "react";
import styles from "./SectionImage.module.css";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";

interface PropsImagen {
  src: string;
  floor: string;
  height: string;
  name?: string;
  children?:
    | React.ReactNode
    | ((ScrollYProgressValue: MotionValue<number>) => React.ReactNode);
}

const SectionImage = ({ src, floor, height, name, children }: PropsImagen) => {
  const [typeFloor, setTypeFloor] = useState<String>(floor);
  const shadowRef1 = useRef<HTMLDivElement | null>(null);
  const shadowRef2 = useRef<HTMLDivElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    setTypeFloor(floor);
    if (shadowRef1.current !== null && shadowRef2.current !== null) {
      if (typeFloor === "2v1") {
        shadowRef1.current.style.backgroundImage =
          "url(/img/shadows/shadow_floor2_right.png";
        shadowRef2.current.style.backgroundImage =
          "url(/img/shadows/shadow_floor2_left.png";
      }
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset:["start end", "end end"]
  });

  const yscroll = useTransform(scrollYProgress,[0,1],[0,-100])

  return (
    <motion.section
      ref={scrollRef}
      className= {styles.container_s}
      style={{ height: `${height}`}}
    >
      <motion.div style={{y: yscroll}} className={styles.container_section}>
        <motion.div
          className={styles.scene}
          style={{
            backgroundImage: `url(${src})`
          }}
        >
          <div ref={shadowRef1} className={styles.shadow}></div>
          <div ref={shadowRef2} className={styles.shadow}></div>
          {typeof children === "function"
            ? children(scrollYProgress)
            : children}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default SectionImage;
