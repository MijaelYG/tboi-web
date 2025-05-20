import { useRef, useState } from "react";
import styles from "./SectionMenu.module.css";
import { motion, MotionValue, useMotionValueEvent } from "framer-motion";
import { sectionNav, sectionNavStartEnd } from "../../config/config";
import React from "react";

interface SectionMenuProps {
  ScrollYProgress: MotionValue<number>;
}
const SectionMenu = ({ ScrollYProgress }: SectionMenuProps) => {
  const [visibleCircle, setVisibleCircle] = useState(1);
  const ScrollingByBtn = useRef(false);
  const ProgressSection = useRef<[number,number]>([sectionNavStartEnd[0][0],sectionNavStartEnd[0][1]]);

  const handleBtnNav = (section: number, percent: number) => {
    ScrollingByBtn.current = true; 
    ProgressSection.current = [sectionNavStartEnd[section-1][0],sectionNavStartEnd[section-1][1]]
    setVisibleCircle(section);
    const scrollTarget = document.body.scrollHeight * percent;
    window.scrollTo({ top: scrollTarget, behavior: "smooth" });
  };
  useMotionValueEvent(ScrollYProgress, "change", (latest) => {
     if (ScrollingByBtn.current) {
      if (latest >=ProgressSection.current[0] && latest<= ProgressSection.current[1]) {
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
      <div className={styles.nav_sections}>
        {sectionNav.map((data, index) => (
          <React.Fragment key={index}>
            <div
              key={index}
              className={styles.btn_circle}
              onClick={() => handleBtnNav(index + 1, data)}
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
            </div>
            {index + 1 <= 6 && <div className={styles.line}></div>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default SectionMenu;
