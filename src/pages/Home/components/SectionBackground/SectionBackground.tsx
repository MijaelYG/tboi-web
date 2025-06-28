import {
  motion,
  MotionValue,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import styles from "./SectionBackground.module.css";
import { useEffect, useRef, useState } from "react";
import { useBreakpoint } from "../../../../Hooks/UseBreakpoint";

interface SectionBackgroundProps {
  id: number;
  shadow: string;
  name: string;
  scrollArray: [number, number][];
  children: React.ReactNode;
  scrollYProgress: MotionValue<number>;
}

const SectionBackground = ({
  id,
  shadow,
  name,
  children,
  scrollYProgress,
  scrollArray,
}: SectionBackgroundProps) => {
  const [zindex, setzIndex] = useState(1);
  const [unit, setUnit] = useState<"vh" | "vw">("vw");
  const shadowRef1 = useRef<HTMLDivElement | null>(null);
  const shadowRef2 = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef(null);
  const breakpoint = useBreakpoint();
  const HeightValueNormal = useMotionValue(100);
  const HeightValueBig = useMotionValue(213.5);
  const WidthValueNormal = useMotionValue(100);
  const WidthValueBig = useMotionValue(176.4);
  const HeightValueNormalVh = useTransform(
    HeightValueNormal,
    (v) => `${v}${unit} `
  );
  const HeightValueBigVh = useTransform(HeightValueBig, (v) => `${v}${unit}`);
  const WidthValueNormalVw = useTransform(WidthValueNormal, (v) => `${v}${unit}`);
  const WidthValueBigVw = useTransform(WidthValueBig, (v) => `${v}${unit}`);
  useEffect(() => {
    if (id == 5 && shadowRef1.current !== null) {
      shadowRef1.current.style.backgroundImage = `url(/img/shadows/shadow_floor${shadow}_right.png)`;
    } else if (shadowRef1.current !== null && shadowRef2.current !== null) {
      shadowRef1.current.style.backgroundImage = `url(/img/shadows/shadow_floor${shadow}_right.png)`;
      shadowRef2.current.style.backgroundImage = `url(/img/shadows/shadow_floor${shadow}_left.png)`;
    }
    switch (id) {
      case 1:
        return setzIndex(11);
      case 2:
        return setzIndex(10);
      case 3:
        return setzIndex(9);
      case 4:
        return setzIndex(8);
      case 5:
        return setzIndex(7);
      case 6:
        return setzIndex(6);
      case 7:
        return setzIndex(5);
      default:
        break;
    }
  }, []);
  useEffect(() => {
    switch (breakpoint) {
      case "mobile":
        console.log("mobile");
        break;
      case "tablet":
        console.log("tablet");
        HeightValueNormal.set(100);
        HeightValueBig.set(106);
        WidthValueNormal.set(150);
        WidthValueBig.set(176.4);
        setUnit("vh");
        break;
      case "desktop":
        console.log("desktop");
        HeightValueNormal.set(65);
        HeightValueBig.set(106);
        WidthValueNormal.set(100);
        WidthValueBig.set(176.4);
        setUnit("vw");
        break;
    }
  }, [breakpoint]);
  const scale = useTransform(scrollYProgress, [0, 0.0001], [2, 1]);
  const scalesmooth = useSpring(scale, { stiffness: 130, damping: 40 });

  const yscroll_scene = useTransform(
    scrollYProgress,
    [
      scrollArray[0][1] - 0.00005,
      scrollArray[0][1],
      scrollArray[2][1] - 0.0001,
      scrollArray[2][1],
      scrollArray[4][1] - 0.0001,
      scrollArray[4][1],
      scrollArray[6][1] - 0.0001,
      scrollArray[6][1],
    ],
    (() => {
      const hNormal = HeightValueNormal.get();
      const hBig = HeightValueBig.get();
      switch (id) {
        case 1:
          return [
            0,
            -hNormal,
            -hNormal,
            -hBig - hNormal,
            -hBig - hNormal,
            -hBig - hNormal - hNormal,
            -hBig - hNormal - hNormal,
            -hBig - hBig - hNormal - hNormal,
          ];
        case 2:
          return [
            hNormal,
            0,
            0,
            -hBig,
            -hBig,
            -hBig - hNormal,
            -hBig - hNormal,
            -hBig - hNormal - hNormal,
          ];
        case 3:
          return [
            hNormal,
            0,
            0,
            -hBig,
            -hBig,
            -hBig - hNormal,
            -hBig - hNormal,
            -hBig - hBig - hNormal,
          ];
        case 4:
          return [
            hBig + hNormal,
            hBig,
            hBig,
            0,
            0,
            -hNormal,
            -hNormal,
            -hBig - hNormal,
          ];
        case 5:
          return [
            hBig + hNormal,
            hBig,
            hBig,
            0,
            0,
            -hNormal,
            -hNormal,
            -hBig - hNormal,
          ];
        case 6:
          return [
            hBig + hNormal + hNormal,
            hBig + hNormal,
            hBig + hNormal,
            hNormal,
            hNormal,
            0,
            0,
            -hBig,
          ];
        case 7:
          return [
            hBig + hBig + hNormal + hNormal,
            hBig + hBig + hNormal,
            hBig + hBig + hNormal,
            hBig + hNormal,
            hBig + hNormal,
            hBig,
            hBig,
            0,
          ];
        default:
          return [0, 0];
      }
    })()
  );

  const yscroll_scenesmooth = useSpring(yscroll_scene, {
    stiffness: 210,
    damping: 50,
  });
  const value_y_scene = useTransform(
    yscroll_scenesmooth,
    (value) => `${value}vW`
  );

  const xscroll_scene = useTransform(
    scrollYProgress,
    [
      scrollArray[1][1] - 0.0001,
      scrollArray[1][1],
      scrollArray[3][1] - 0.0001,
      scrollArray[3][1],
      scrollArray[5][0] + 0.01,
      scrollArray[5][1],
    ],
    (() => {
      const wNormal = WidthValueNormal.get();
      switch (id) {
        case 1:
          return [0, -wNormal, -wNormal, 0, 0, -76.4];
        case 2:
          return [0, -wNormal, -wNormal, 0, 0, -76.4];
        case 3:
          return [wNormal, 0, 0, wNormal, wNormal, 23.6];
        case 4:
          return [wNormal, 0, 0, wNormal, wNormal, 23.6];
        case 5:
          return [0, -wNormal, -wNormal, 0, 0, -76.4];
        case 6:
          return [0, -wNormal, -wNormal, 0, 0, -76.4];
        case 7:
          return [76.4, -23.6, -23.6, 76.4, 76.4, 0];
        default:
          return [0, wNormal];
      }
    })()
  );
  const xscroll_scenesmooth = useSpring(xscroll_scene, {
    stiffness: 210,
    damping: 50,
  });
  const value_x_scene = useTransform(
    xscroll_scenesmooth,
    (value) => `${value}vw`
  );
  return (
    <motion.div
      ref={sectionRef}
      style={{
        y: value_y_scene,
        x: value_x_scene,
        willChange: "transform",
        scale: id == 1 ? scalesmooth : 1,
        zIndex: zindex,
      }}
      className={styles.container_absolute}
    >
      <motion.div
        className={styles.scene}
        style={{
          backgroundImage: `url(/img/rooms/${name}.png)`,
          height: id == 3 || id == 6 ? HeightValueBigVh : HeightValueNormalVh,
          width: id == 6 ? WidthValueBigVw : WidthValueNormalVw,
        }}
      >
        {id == 5 ? (
          <>
            <motion.div
              ref={shadowRef1}
              className={styles.shadow}
              style={{ width: "108%" }}
            ></motion.div>
          </>
        ) : (
          <>
            <motion.div
              ref={shadowRef1}
              className={id == 3 ? styles.shadowv2 : styles.shadow}
            ></motion.div>

            <motion.div
              ref={shadowRef2}
              className={id == 3 ? styles.shadowv2 : styles.shadow}
            ></motion.div>
          </>
        )}
        {children}
      </motion.div>
    </motion.div>
  );
};

export default SectionBackground;
