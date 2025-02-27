import { motion, MotionValue, useSpring, useTransform } from "framer-motion";
import styles from "./SectionBackground.module.css";
import { useEffect, useRef, useState } from "react";

interface SectionBackgroundProps {
  id: number;
  floor: string;
  name: string;
  children: React.ReactNode;
  scrollYProgress: MotionValue<number>;
}

const SectionBackground = ({
  id,
  floor,
  name,
  children,
  scrollYProgress,
}: SectionBackgroundProps) => {
  const shadowRef1 = useRef<HTMLDivElement | null>(null);
  const shadowRef2 = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (shadowRef1.current !== null && shadowRef2.current !== null) {
      shadowRef1.current.style.backgroundImage = `url(/img/shadows/shadow_floor${floor}_right.png)`;
      shadowRef2.current.style.backgroundImage =
        `url(/img/shadows/shadow_floor${floor}_left.png)`;
    }
  }, []);

  const yscroll = useTransform(
    scrollYProgress,
    (() => {
      switch (id) {
        case 1:
          return [0, 0.3];
        case 2:
          return [0, 0.3];

        default:
          return [0, 1];
      }
    })(),
    (() => {
      switch (id) {
        case 1:
          return ["0", "-100px"];
        case 2:
          return ["0", "-100px"];

        default:
          return ["0", "100px"];
      }
    })()
  );

  const yscrollsmooth = useSpring(yscroll, { stiffness: 200, damping: 40 });

  const xscroll_scene = useTransform(
    scrollYProgress,
    (() => {
      switch (id) {
        case 1:
          return [0.3, 0.5];
        case 2:
          return [0.3, 0.5];
        default:
          return [0.1, 0.2];
      }
    })(),
    (() => {
      switch (id) {
        case 1:
          return ["0%", "-100%"];
        case 2:
          return ["100%", "0%"];
        default:
          return ["0%", "-100%"];
      }
    })()
  );
  return (
    <motion.div
      style={{ y: yscrollsmooth, x: xscroll_scene }}
      className={styles.container_absolute}
    >
      <div
        className={styles.scene}
        style={{
          backgroundImage: `url(/img/rooms/${name}.png)`,
        }}
      >
        <div ref={shadowRef1} className={styles.shadow}></div>
        <div ref={shadowRef2} className={styles.shadow}></div>
        {children}
      </div>
    </motion.div>
  );
};

export default SectionBackground;
