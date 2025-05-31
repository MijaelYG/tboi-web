import { useRef, useState } from "react";
import styles from "./SectionMenu.module.css";
import {
  AnimatePresence,
  motion,
  MotionValue,
  useMotionValueEvent,
} from "framer-motion";
import { sectionNav, sectionNavStartEnd } from "../../config/config";
import React from "react";

interface SectionMenuProps {
  ScrollYProgress: MotionValue<number>;
}
const SectionMenu = ({ ScrollYProgress }: SectionMenuProps) => {
  const [visibleCircle, setVisibleCircle] = useState(1);
  const [hoverBtn, setHoverBtn] = useState(0);
  const ScrollingByBtn = useRef(false);
  const ProgressSection = useRef<[number, number]>([
    sectionNavStartEnd[0][0],
    sectionNavStartEnd[0][1],
  ]);

  const handleBtnNav = (section: number, percent: number) => {
    ScrollingByBtn.current = true;
    ProgressSection.current = [
      sectionNavStartEnd[section - 1][0],
      sectionNavStartEnd[section - 1][1],
    ];
    setVisibleCircle(section);
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const scrollTarget = maxScroll * percent;
    window.scrollTo({ top: scrollTarget, behavior: "smooth" });
  };

  useMotionValueEvent(ScrollYProgress, "change", (latest) => {
    if (ScrollingByBtn.current) {
      if (
        latest >= ProgressSection.current[0] &&
        latest <= ProgressSection.current[1]
      ) {
        ScrollingByBtn.current = false;
      }
      return;
    }
    for (let i = 0; i < sectionNavStartEnd.length; i++) {
      const [start, end] = sectionNavStartEnd[i];
      if (latest >= start && latest < end) {
        setVisibleCircle(i + 1);
        return;
      }
    }
  });

  return (
    <div className={styles.cont_nav_sections}>
      <motion.div
        className={styles.nav_sections}
        initial={{x:"5vw",opacity:0}}
        animate={{
          x: "0vw",
          opacity: 1,
          transition: { duration: 0.7, delay: 1.1, ease: "backOut" },
        }}
      >
        {sectionNav.map((data, index) => (
          <React.Fragment key={index}>
            <div
              key={index}
              className={styles.btn_circle}
              onClick={() => handleBtnNav(index + 1, data[0])}
              onMouseEnter={() => setHoverBtn(index + 1)}
              onMouseLeave={() => setHoverBtn(0)}
            >
              {visibleCircle === index + 1 ? (
                <motion.div
                  className={styles.circle_on}
                  initial={{ scale: 0.6 }}
                  animate={{ scale: 1.2 }}
                ></motion.div>
              ) : (
                <motion.div
                  className={styles.circle_off}
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 0.6 }}
                ></motion.div>
              )}
              <AnimatePresence>
                {hoverBtn === index + 1 && (
                  <motion.div
                    className={styles.scene_section}
                    style={{ backgroundImage: `url(${data[1]})` }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                  >
                    <span>{data[2]}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            {index + 1 <= 6 && <div className={styles.line}></div>}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export default SectionMenu;
