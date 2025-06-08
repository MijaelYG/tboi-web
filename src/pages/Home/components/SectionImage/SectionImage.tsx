import { useRef } from "react";
import styles from "./SectionImage.module.css";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import SectionBackground from "../SectionBackground/SectionBackground";
import Banner from "../Banner/Banner";
import { scrollStartEnd, heightTotal, sections } from "../../config/config";
import PixelScene from "../PixelScene/PixelScene";
import InfoCard from "../InfoCard/InfoCard";
import CarouselCharacters from "../CarouselCharacters/CarouselCharacters";
import ItemSection from "../ItemSection/ItemSection";
import SectionMenu from "../SectionMenu/SectionMenu";

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
      scrollStartEnd[2][1] - 0.0001,
      scrollStartEnd[2][1],
      scrollStartEnd[3][0] + 0.01,
      scrollStartEnd[3][1] - 0.0001,
      scrollStartEnd[3][1],
      scrollStartEnd[4][0] + 0.01,
      scrollStartEnd[4][1] - 0.0001,
      scrollStartEnd[4][1],
      scrollStartEnd[6][0] + 0.01,
      scrollStartEnd[6][1] - 0.0001,
      scrollStartEnd[6][1],
      scrollStartEnd[7][0] + 0.01,
      scrollStartEnd[7][1] - 0.01,
    ],
    [
      -15, -15, 0, 0, -20, 0, 0, -105, 0, 0, -20, 0, 0, -20, -20, -20, -105, 0,
      0, -20,
    ]
  );
  const yscrollsmooth = useSpring(yscrollRaw, { stiffness: 200, damping: 40 });
  const value = useTransform(yscrollsmooth, (value) => `${value}vh`);
  const scale = useTransform(
    scrollYProgress,
    [scrollStartEnd[8][0], scrollStartEnd[8][1]],
    [1, 0.1]
  );
  const opacity = useTransform(scrollYProgress,
    [scrollStartEnd[8][0], scrollStartEnd[8][1]],
    [1, 0])

  const scalesmooth = useSpring(scale, { stiffness: 250, damping: 40 });
  const opacitysmooth = useSpring(opacity, { stiffness: 250, damping: 40 });
  return (
    <>
    <motion.section
      ref={scrollRef}
      className={styles.container_sImage}
      style={{ height: `${heightTotal}vh` }}
    >
      <motion.div
        className={styles.sticky}
        style={{ y: value, scale: scalesmooth, opacity:opacitysmooth }}
      >
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
                  section.infoCard.map((card) =>
                    section.id == 6 ? (
                      <InfoCard
                        key={card.id}
                        scrollYProgress={scrollYProgress}
                        scrollStartEnd={[
                          scrollStartEnd[section.id - 1][0],
                          scrollStartEnd[section.id][1],
                        ]}
                        card={card}
                      ></InfoCard>
                    ) : section.id == 7 ? (
                      <InfoCard
                        key={card.id}
                        scrollYProgress={scrollYProgress}
                        scrollStartEnd={scrollStartEnd[section.id]}
                        card={card}
                      ></InfoCard>
                    ) : (
                      <InfoCard
                        key={card.id}
                        scrollYProgress={scrollYProgress}
                        scrollStartEnd={scrollStartEnd[section.id - 1]}
                        card={card}
                      ></InfoCard>
                    )
                  )}
                {section.pixelSprite &&
                  section.pixelSprite.map((pixel, index) =>
                    section.id == 6 ? (
                      <PixelScene
                        key={index}
                        scrollYProgress={scrollYProgress}
                        scrollStartEnd={[
                          scrollStartEnd[section.id - 1][0],
                          scrollStartEnd[section.id][1],
                        ]}
                        pixelsprite={pixel}
                      ></PixelScene>
                    ) : section.id == 7 ? (
                      <PixelScene
                        key={index}
                        scrollYProgress={scrollYProgress}
                        scrollStartEnd={scrollStartEnd[section.id]}
                        pixelsprite={pixel}
                      ></PixelScene>
                    ) : (
                      <PixelScene
                        key={index}
                        scrollYProgress={scrollYProgress}
                        scrollStartEnd={scrollStartEnd[section.id - 1]}
                        pixelsprite={pixel}
                      ></PixelScene>
                    )
                  )}
                {section.id == 4 ? (
                  <CarouselCharacters></CarouselCharacters>
                ) : (
                  section.id == 5 && <ItemSection></ItemSection>
                )}
              </>
            )}
          </SectionBackground>
        ))}
      </motion.div>
      <SectionMenu ScrollYProgress={scrollYProgress}></SectionMenu>
      <div className={styles.footer_home}>

      </div>
    </motion.section>
</>
  );
};

export default SectionImage;
