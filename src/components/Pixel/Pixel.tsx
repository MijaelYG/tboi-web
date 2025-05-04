import styles from "./Pixel.module.css";

interface PropsPixel {
  width: number;
  height: number;
  img: string;
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  scaleX?: number;
}

const Pixel = ({
  width,
  height,
  img,
  top,
  bottom,
  left,
  right,
  scaleX,
}: PropsPixel) => {
  return (
    <div
      className={styles.pixel}
      style={{
        width: `${width}vw`,
        height: `${height}vw`,
        backgroundImage: `url(${img})`,
        backgroundSize:`${width}vw auto`,
        top: `${top}%`,
        bottom: `${bottom}%`,
        left: `${left}%`,
        right: `${right}%`,
        transform: `scaleX(${scaleX})`,
      }}
    ></div>
  );
};

export default Pixel;
