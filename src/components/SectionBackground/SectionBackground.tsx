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
  const [zindex, setzIndex] = useState(1);
  const shadowRef1 = useRef<HTMLDivElement | null>(null);
  const shadowRef2 = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (shadowRef1.current !== null && shadowRef2.current !== null) {
      shadowRef1.current.style.backgroundImage = `url(/img/shadows/shadow_floor${floor}_right.png)`;
      shadowRef2.current.style.backgroundImage = `url(/img/shadows/shadow_floor${floor}_left.png)`;
    }
    switch (id) {
      case 1:
        return setzIndex(10);
      case 2:
        return setzIndex(9);
      case 3:
        return setzIndex(8);
      case 4:
        return setzIndex(7);
      case 5:
        return setzIndex(6);
      case 6:
        return setzIndex(5);
      default:
        break;
    }
  }, []);
 // const scale = useTransform(scrollYProgress, [0, 0.08], [2, 1]);

  const xscroll_scene = useTransform(
    scrollYProgress,
    (() => {
      switch (id) {
        case 1:
          return [0.278, 0.28,0.698, 0.70];
        case 2:
          return [0.278, 0.28,0.698, 0.70];
        case 3:
          return [0.278, 0.28,0.698, 0.70];
        case 4:
          return [0.278, 0.28,0.698, 0.70];
        case 5:
          return [0.278, 0.28,0.698, 0.70];
        case 6:
          return [0, 0];
        default:
          return [0, 0];
      }
    })(),
    (() => {
      switch (id) {
        case 1:
          return ["0%", "-100%","-100%","0%"];
        case 2:
          return ["0%", "-100%","-100%","0%"];
        case 3:
          return ["100%", "0%","0%","100%"];
        case 4:
          return ["100%", "0%","0%","100%"];
        case 5:
          return ["0%","-100%","-100%", "0%"];
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
          return [0.138, 0.14,0.558, 0.56];
        case 2:
          return [0.138, 0.14,0.558, 0.56];
        case 3:
          return [0.138, 0.14,0.558, 0.56];
        case 4:
          return [0.138, 0.14,0.558, 0.56];
        case 5:
          return [0.138, 0.14,0.558, 0.56];
        default:
          return [0, 0];
      }
    })(),
    (() => {
      switch (id) {
        case 1:
          return [0, -130.5,-130.5,-213.5 -130.5];
        case 2:
          return [130.5, 0,0,-213.5];
        case 3: 
          return [130.5, 0,0,-213.5];
        case 4:
          return [213.5+130.5, 213.5 ,213.5,0];
        case 5:
          return [213.5+130.5, 213.5 ,213.5,0];
        default:
          return [0, 0];
      }
    })()
  );

  const yscroll_scenesmooth = useSpring(yscroll_scene, {
    stiffness: 210,
    damping: 50,
  });
  const value_y_scene= useTransform(yscroll_scenesmooth, (value) => `${value}vh`);
  const xscroll_scenesmooth = useSpring(xscroll_scene, {
    stiffness: 210,
    damping: 50,
  });

  return (
    <motion.div
      ref={sectionRef}
      style={{
        y: value_y_scene,
        x: xscroll_scenesmooth,
        willChange: "transform",
        //scale: id == 1 ? scale : 1,
        zIndex: zindex,
      }}
      className={styles.container_absolute}
    >
      <motion.div
        className={styles.scene}
        style={{
          backgroundImage: `url(/img/rooms/${name}.png)`,
          height: id == 3 ? "213.5vh" :"130.5vh",
        }}
      >
        <motion.div ref={shadowRef1} className={styles.shadow}></motion.div>
        <motion.div ref={shadowRef2} className={styles.shadow}></motion.div>
        {children}
      </motion.div>
    </motion.div>
  );
};

export default SectionBackground;
