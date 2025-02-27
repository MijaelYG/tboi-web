import { motion, MotionValue, useSpring, useTransform } from "framer-motion";
import styles from "./SectionBackground.module.css";
import { useEffect, useRef, useState } from "react";

interface SectionBackgroundProps {
  floor: string;
  name: string;
  children: React.ReactNode;
  scrollYProgress: MotionValue<number>;
}

const SectionBackground = ({
  floor,
  name,
  children,
  scrollYProgress,
}: SectionBackgroundProps) => {
  const [typeFloor, setTypeFloor] = useState<String>(floor);
  const shadowRef1 = useRef<HTMLDivElement | null>(null);
  const shadowRef2 = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setTypeFloor(floor);
    if (shadowRef1.current !== null && shadowRef2.current !== null) {
      switch (typeFloor) {
        case "21":
          shadowRef1.current.style.backgroundImage =
            "url(/img/shadows/shadow_floor2_right.png";
          shadowRef2.current.style.backgroundImage =
            "url(/img/shadows/shadow_floor2_left.png";
          break;

        default:
          break;
      }
    }
  }, []);

  const yscroll = useTransform(scrollYProgress, [0.17, 0.6], [0, -100]);

  const yscrollsmooth = useSpring(yscroll, { stiffness: 150, damping: 20 });

  const xscroll_scene = useTransform(
    scrollYProgress,
    [0.6, 1],
    ["0%", "-100%"]
  );
  return (
    <motion.div
      style={{ y: yscrollsmooth }}
      className={styles.container_section}
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
