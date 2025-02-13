import { useRef, useState } from "react";
import styles from "./Home.module.css";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";

const Home = () => {
  const [play, setPlay] = useState(false);
  const [opacity, setOpacity] = useState(1);
  const [btnclick, setBtnclick] = useState(true);
  const [btnskip, setBtnskip] = useState(false);
  const [hoverhead, setHoverhead] = useState(false);
  const [btnSkipClear, setBtnSkipClear] = useState(true);
  const [intervalvideo, setIntervalvideo] = useState<number | null>(null);
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
    if (!videoRef.current || intervalvideo !== null) return;

    setTimeout(() => {
      setBtnSkipClear(false);
    }, 2550);

    const IntervalVolumen = setInterval(() => {
      if (videoRef.current!.volume > 0) {
        videoRef.current!.volume = Math.max(0, videoRef.current.volume - 0.01);
      } else {
        clearInterval(IntervalVolumen);
        setIntervalvideo(null);
      }
    }, 22);
    setIntervalvideo(IntervalVolumen)
    setOpacity(2);
  };


  return (
    <>
      {btnSkipClear && (
        <div
          className={styles.intro}
          style={{ opacity: opacity == 2 ? "0" : "", transition: opacity == 2 ? "opacity 2.5s" : ""}}
        >
          {btnclick && (
            <div style={{ opacity: play ? "0" : "" }} className={styles.intro_play}>
              <div className={styles.intro__playimg} style={{backgroundImage: hoverhead ? "url(/img/intro_head/isaac_happy.png)" : "url(/img/intro_head/isaac_head.png)"}}>
              </div>
              <div className={styles.intro__playbtn}>
                <button onClick={handlePlay} disabled={play} onMouseEnter={() => setHoverhead(true)} onMouseLeave={()=> setHoverhead(false)}>
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
      <div className="container_home">
        <Header></Header>
        <Banner></Banner>
      </div>
    </>
  );
};

export default Home;
