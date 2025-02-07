import { useRef, useState } from "react";
import styles from "./Home.module.css";

const Home = () => {
  const [play, setPlay] = useState(false);
  const [opacity, setOpacity] = useState(1);
  const [btnclick, setBtnclick] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null!);

  const handlePlay = () => {
    if (play == false) {
      setPlay(true);
      setTimeout(() => {
        setBtnclick(false);
      }, 600);
      videoRef.current.play();
      setOpacity(0);
    } else {
      setPlay(false);
    }
  };

  return (
    <>
      <div className={styles.intro}>
        {btnclick && (
          <div style={{ opacity: opacity }} className={styles.intro_play}>
            <div className={styles.intro__playgif}>
              <img src="/videos/gif_isaac_intro.gif" alt="" />
            </div>
            <div className={styles.intro__playbtn}>
              <button onClick={handlePlay} disabled={play == true}>
                COMENZAR
              </button>
              <div className={styles.titleui}>
                <img src="/img/UI/title_streak.png" alt="" />
              </div>
            </div>
          </div>
        )}
        <video ref={videoRef} src="/videos/intro.mp4"></video>
        <div className={styles.btn_skip}>
          <button>SKIP</button> </div>
      </div>
      <div className=""></div>
    </>
  );
};

export default Home;
