import { useRef, useState } from "react";
import styles from "./Home.module.css";

const Home = () => {
  const [play, setPlay] = useState(false);
  const [opacity, setOpacity] = useState(1);
  const [btnclick, setBtnclick] = useState(true);
  const [btnskip, setBtnskip] = useState(false);
  const [btnSkipClear, setBtnSkipClear] = useState(true);
  const intervalRef = useRef<number | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null!);

  const handlePlay = () => {
    if (play == false) {
      setPlay(true);

      setTimeout(() => {
        setBtnclick(false);
      }, 600);

      setTimeout(() => {
        setBtnskip(true);
      }, 1500);

      videoRef.current.play();
      setOpacity(0);
    }
  };

  const handleSkip = () => {
    if (!videoRef.current || intervalRef.current !== null) return;
    setTimeout(() => {
      setBtnSkipClear(false);
    }, 2550);

    intervalRef.current = window.setInterval(() => {
      if (videoRef.current!.volume > 0) {
        videoRef.current!.volume = Math.max(0, videoRef.current.volume - 0.01);
      } else {
        clearInterval(intervalRef.current!);
        intervalRef.current = null;
      }
    }, 22);
    setOpacity(2);
  };


  return (
    <>
      {btnSkipClear && (
        <div
          className={styles.intro}
          style={{ opacity: opacity == 2 ? "0" : "1" }}
        >
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
          <div
            onClick={handleSkip}
            className={styles.btn_skip}
            style={{
              transform: btnskip ? "translateX(0%)" : "translateX(100%)",
            }}
          >
            <button>CONTINUAR</button>
          </div>
        </div>
      )}

      <div className=""></div>
    </>
  );
};

export default Home;
