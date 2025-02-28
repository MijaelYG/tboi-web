import { motion, MotionValue, useSpring, useTransform } from "framer-motion";
import styles from "./SectionBackground.module.css";
import { useEffect, useRef } from "react";

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
      shadowRef2.current.style.backgroundImage = `url(/img/shadows/shadow_floor${floor}_left.png)`;
    }
  }, []);

  const yscroll = useTransform(
    scrollYProgress,
    (() => {
      switch (id) {
        case 1:
          return [0, 0.08];
        case 2:
          return [0.14, 0.28];
        case 3:
          return [0.14, 0.28, 0.285, 0.50];
        case 4:
          return [0, 0.08];
        default:
          return [0, 0.08];
      }
    })(),
    (() => {
      switch (id) {
        case 1:
          return ["0", "-100px"];
        case 2:
          return ["0", "-100px"];
        case 3:
          return ["0", "-100px","-100px", "-900px"];
        default:
          return ["0", "-100px"];
      }
    })()
  );
  const yscrollsmooth = useSpring(yscroll, { stiffness: 200, damping: 40 });
  const scale = useTransform(scrollYProgress, [0, 0.08], [2, 1]);

  const xscroll_scene = useTransform(
    scrollYProgress,
    (() => {
      switch (id) {
        case 1:
          return [0.278, 0.28];
        case 2:
          return [0.278, 0.28];
        case 3:
          return [0.278, 0.28];
        case 4:
          return [0, 0];
        case 5:
          return [0, 0];
        case 6:
          return [0, 0];
        default:
          return [0, 0];
      }
    })(),
    (() => {
      switch (id) {
        case 1:
          return ["0%", "-100%"];
        case 2:
          return ["0%", "-100%"];
        case 3:
          return ["100%", "0%"];
        case 4:
          return ["0%", "100%"];
        case 5:
          return ["0%", "100%"];
        case 6:
          return ["0%", "100%"];
        default:
          return ["0%", "100%"];
      }
    })()
  );

  const yscroll_scene = useTransform(
    scrollYProgress,
    (() => {
      switch (id) {
        case 1:
          return [0.138, 0.14];
        case 2:
          return [0.138, 0.14];
        case 3:
          return [0.138, 0.14];
        default:
          return [0, 0];
      }
    })(),
    (() => {
      switch (id) {
        case 1:
          return ["0%", "-100%"];
        case 2:
          return ["100%", "0%"];
        case 3:
          return ["100%", "0%"];
        default:
          return ["0%", "0%"];
      }
    })()
  );
  const yscroll_scenesmooth = useSpring(yscroll_scene, {
    stiffness: 200,
    damping: 50,
  });
  const xscroll_scenesmooth = useSpring(xscroll_scene, {
    stiffness: 200,
    damping: 50,
  });

  return (
    <motion.div
      style={{
        y: yscroll_scenesmooth,
        x: xscroll_scenesmooth,
        willChange: "transform",
        scale: id == 1 ? scale : 1,
        zIndex: id == 1 ? 5 : 3,
      }}
      
      className={styles.container_absolute}
    >
      <motion.div
        className={styles.scene}
        style={{
          backgroundImage: `url(/img/rooms/${name}.png)`,
          backgroundPositionY: yscrollsmooth,
        }}
      >
        <motion.div
          ref={shadowRef1}
          className={styles.shadow}
          style={{
            backgroundPositionY: yscrollsmooth,
          }}
        ></motion.div>
        <motion.div
          ref={shadowRef2}
          className={styles.shadow}
          style={{
            backgroundPositionY: yscrollsmooth,
          }}
        ></motion.div>
        {children}
      </motion.div>
    </motion.div>
  );
};

export default SectionBackground;
