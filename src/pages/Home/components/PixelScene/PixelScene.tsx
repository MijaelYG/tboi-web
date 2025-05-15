import { PixelSpriteBg } from "../../../../types/Types";
import { motion, MotionValue, useSpring, useTransform } from "framer-motion";
import style from "./PixelScene.module.css";

interface PropsPixelScene {
  scrollYProgress: MotionValue<number>;
  scrollStartEnd: [number, number];
  pixelsprite: PixelSpriteBg;
}

const PixelScene = ({
  scrollYProgress,
  scrollStartEnd,
  pixelsprite,
}: PropsPixelScene) => {
  const start = scrollStartEnd[0];
  const end = scrollStartEnd[1];
  let valuex1;
  let valuey1;
  let animationshadow;
  const animation = useTransform(
    scrollYProgress,
    [start, end],
    [pixelsprite.animation[0], pixelsprite.animation[1]]
  );
  const animationsmooth = useSpring(animation, { stiffness: 200, damping: 40 });
  const animationvalue = useTransform(
    animationsmooth,
    (value) =>
      `calc(-${pixelsprite.width}vw *${
        Math.floor(value) % pixelsprite.sprites
      })`
  );
  if (pixelsprite.shadow) {
    const animation_pixel_shadow = useTransform(
      scrollYProgress,
      [start, end],
      [pixelsprite.shadow.animation[0], pixelsprite.shadow.animation[1]]
    );
    const animationsmooth = useSpring(animation_pixel_shadow, {
      stiffness: 200,
      damping: 40,
    });
    animationshadow = useTransform(
      animationsmooth,
      (value) =>
        `calc(-${pixelsprite.shadow!.width}vw *${
          Math.floor(value) % pixelsprite.shadow!.sprites
        })`
    );
  }

  if (pixelsprite.x) {
    const x1 = useTransform(scrollYProgress, [start, end], [0, pixelsprite.x]);
    const x1smooth = useSpring(x1, { stiffness: 300, damping: 40 });
    valuex1 = useTransform(x1smooth, (value) => `${value}%`);
  }

  if (pixelsprite.y) {
    const y1 = useTransform(scrollYProgress, [start, end], [0, pixelsprite.y]);
    const y1smooth = useSpring(y1, { stiffness: 300, damping: 40 });
    valuey1 = useTransform(y1smooth, (value) => `${value}%`);
  }

  return (
    <>
      <motion.div
        className={style.cont_pixel}
        style={{
          top: `${pixelsprite.top}%`,
          bottom: `${pixelsprite.bottom}%`,
          left: `${pixelsprite.left}%`,
          right: `${pixelsprite.right}%`,
          width: `${pixelsprite.width}vw`,
          height: `${pixelsprite.height}vw`,
          x: valuex1,
          y: valuey1,
        }}
      >
        <motion.div
          className={style.pixel}
          style={{
            backgroundPositionX: animationvalue,
            backgroundSize: `calc(${pixelsprite.width}vw * ${pixelsprite.sprites}) auto`,
            width: `${pixelsprite.width}vw`,
            height: `${pixelsprite.height}vw`,
            backgroundImage: `url(${pixelsprite.background_img})`,
            scaleX: pixelsprite.scaleX,
            scaleY: pixelsprite.scaleY
          }}
        ></motion.div>
        {pixelsprite.shadow && (
          <motion.div
            className={style.shadow_pixel}
            style={{
              backgroundPositionX: animationshadow,
              backgroundImage: `url(${pixelsprite.shadow.shadow_img})`,
              backgroundSize: `calc(${pixelsprite.shadow.width}vw * ${pixelsprite.shadow.sprites}) auto`,
              width: `${pixelsprite.shadow.width}vw`,
              height: `${pixelsprite.shadow.height}vw`,
              bottom: `${pixelsprite.shadow.bottom}%`,
              left: `${pixelsprite.shadow.left}%`,
            }}
          ></motion.div>
        )}
      </motion.div>
    </>
  );
};

export default PixelScene;
