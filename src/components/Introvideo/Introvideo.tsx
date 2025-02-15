import { useEffect, useRef, useState } from "react";
import styles from "./Introvideo.module.css";

interface IntroVideoProps {
  onFinish: () => void;
}

const Introvideo = ({ onFinish }: IntroVideoProps) => {
  const [play, setPlay] = useState(false);
  const [btnclick, setBtnclick] = useState(true);
  const [btnskip, setBtnskip] = useState(false);
  const [hoverhead, setHoverhead] = useState(false);
  const [intervalvideo, setIntervalvideo] = useState<number | null>(null);
  const [showWhiteScreen, setShowWhiteScreen] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null!);

  useEffect(() => {
    if (localStorage.getItem("video")) {
      onFinish();
    }
  }, []);

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
    }
  };

  const handleSkip = () => {
    if (!videoRef.current || intervalvideo) return;
    localStorage.setItem("video", "true");
    setShowWhiteScreen(true);

    setTimeout(() => {
      onFinish();
    }, 1950);

    const IntervalVolumen = setInterval(() => {
      if (videoRef.current!.volume > 0) {
        videoRef.current!.volume = Math.max(0, videoRef.current.volume - 0.01);
      } else {
        clearInterval(IntervalVolumen);
      }
    }, 16);
    setIntervalvideo(IntervalVolumen);
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;

    if (video.duration - video.currentTime <= 2 && !showWhiteScreen) {
      setShowWhiteScreen(true);
      localStorage.setItem("video", "true");
      const IntervalVolumen = setInterval(() => {
        if (videoRef.current!.volume > 0) {
          videoRef.current!.volume = Math.max(
            0,
            videoRef.current.volume - 0.01
          );
        } else {
          clearInterval(IntervalVolumen);
        }
      }, 16);
      setIntervalvideo(IntervalVolumen);
      setTimeout(() => {
        onFinish();
      }, 1950);
    }

  };

  const handleEnd = () => {
    localStorage.setItem("video", "true");
    onFinish();
  };
  
  return (
    <>
      <div
        className={styles.screen_white}
        style={{
          opacity: showWhiteScreen ? "1" : "0",
          visibility: showWhiteScreen ? "visible" : "hidden",
        }}
      ></div>
        <div className={styles.intro}>
          {btnclick && (
            <div
              style={{ opacity: play ? "0" : "" }}
              className={styles.intro_play}
            >
              <div
                className={styles.intro__playimg}
                style={{
                  backgroundImage: hoverhead
                    ? "url(/img/intro_head/isaac_happy.png)"
                    : "url(/img/intro_head/isaac_head.png)",
                }}
              ></div>
              <div className={styles.intro__playbtn}>
                <button
                  onClick={handlePlay}
                  disabled={play}
                  onMouseEnter={() => setHoverhead(true)}
                  onMouseLeave={() => setHoverhead(false)}
                >
                  COMENZAR
                </button>
                <div className={styles.titleui}>
                  <img src="/img/UI/title_streak.png" alt="" />
                </div>
              </div>
            </div>
          )}
          <video
            ref={videoRef}
            onTimeUpdate={handleTimeUpdate}
            onEnded={handleEnd}
            src="/videos/intro.mp4"
          ></video>
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
    </>
  );
};

export default Introvideo;
