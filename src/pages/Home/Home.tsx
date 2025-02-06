import { useRef, useState } from "react";
import styles from "./Home.module.css";

const Home = () => {
  const [play, setPlay] = useState(false);
  const [opacity, setOpacity] = useState(1);
  const videoRef = useRef<HTMLVideoElement>(null!);

  const handlePlay = () => {
    if (play == false) {
      setPlay(true);
      videoRef.current.play();
      setOpacity(0);
    } else {
      setPlay(false);
    }
  };

  return (
    <>
      <div className={styles.intro}>
        <div style={{ opacity: opacity }} className={styles.intro_play}>
          <div className={styles.intro__play__gif}>
            <img src="/videos/gif_isaac_intro.gif" alt="" />
          </div>
          <div className={styles.intro__play__btn}>
            <button onClick={handlePlay} disabled={play == true}>
              COMENZAR
            </button>
            <div className={styles.intro__play__btn__gif}>
              <img src="/public/img/UI/title_streak.png" alt="" />
            </div>
          </div>
        </div>
        <video ref={videoRef} src="/videos/intro.mp4"></video>
      </div>
      <div className=""></div>
    </>
  );
};

export default Home;
