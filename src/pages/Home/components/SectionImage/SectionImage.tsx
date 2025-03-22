import { useRef } from "react";
import styles from "./SectionImage.module.css";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import SectionBackground from "../SectionBackground/SectionBackground";
import Banner from "../Banner/Banner";
import { scrollStartEnd, heightTotal, sections } from "./config";
import PixelScene from "../PixelScene/PixelScene";
import InfoCard from "../InfoCard/InfoCard";

const SectionImage = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });
  const yscrollRaw = useTransform(
    scrollYProgress,
    [
      scrollStartEnd[0][0],
      scrollStartEnd[0][1] - 0.00005,
      scrollStartEnd[0][1],
      scrollStartEnd[1][0] + 0.01,
      scrollStartEnd[1][1] - 0.0001,
      scrollStartEnd[1][1],
      scrollStartEnd[2][0] + 0.01,
      scrollStartEnd[2][1],
      scrollStartEnd[2][1] - 0.0001,
      scrollStartEnd[3][0] + 0.01,
      scrollStartEnd[3][1],
      scrollStartEnd[3][1] - 0.0001,
      scrollStartEnd[4][0] + 0.01,
      scrollStartEnd[4][1],
      scrollStartEnd[4][1] - 0.0001,
      scrollStartEnd[6][0] + 0.01,
      scrollStartEnd[6][1],
      scrollStartEnd[6][1] - 0.0001,
      scrollStartEnd[7][0] + 0.01,
      scrollStartEnd[7][1] - 0.01,
    ],
    [
      -15, -15, 0, 0, -15, 0, 0, -98, 0, 0, -15, 0, 0, -15, -15, -15, -98, 0, 0,
      -15,
    ]
  );
  const yscrollsmooth = useSpring(yscrollRaw, { stiffness: 200, damping: 40 });
  const value = useTransform(yscrollsmooth, (value) => `${value}vh`);
  const scale = useTransform(
    scrollYProgress,
    [scrollStartEnd[8][0], scrollStartEnd[8][1]],
    [1, 0.15]
  );
  return (
    <motion.section
      ref={scrollRef}
      className={styles.container_sImage}
      style={{ height: `${heightTotal}vh` }}
    >
      <motion.div className={styles.sticky} style={{ y: value, scale: scale }}>
        {sections.map((section) => (
          <SectionBackground
            key={section.id}
            id={section.id}
            scrollYProgress={scrollYProgress}
            shadow={section.shadow}
            name={section.name}
            scrollArray={scrollStartEnd}
          >
            {section.id == 1 ? (
              <Banner scrollYProgress={scrollYProgress}></Banner>
            ) : (
              <>
                {section.infoCard &&
                  section.infoCard.map((card, index) => (
                    <InfoCard
                      key={index}
                      scrollYProgress={scrollYProgress}
                      scrollStartEnd={scrollStartEnd[section.id - 1]}
                      card={card}
                    ></InfoCard>
                  ))}
                {section.pixelSprite &&
                  section.pixelSprite.map((pixel, index) => (
                    <PixelScene
                      key={index}
                      scrollYProgress={scrollYProgress}
                      scrollStartEnd={scrollStartEnd[section.id - 1]}
                      pixelsprite={pixel}
                    ></PixelScene>
                  ))}
              </>
            )}
          </SectionBackground>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default SectionImage;
