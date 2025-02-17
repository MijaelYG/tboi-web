import React, { useEffect, useRef, useState } from "react";
import styles from "./SectionImage.module.css";

interface PropsImagen {
  src: string;
  floor: string;
  children?: React.ReactNode;
}

const SectionImage = ({ src, floor, children }: PropsImagen) => {
  const [typeFloor, setTypeFloor] = useState<String>(floor);
  const shadowRef1 = useRef<HTMLDivElement | null>(null);
  const shadowRef2 = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    setTypeFloor(floor);
    if (shadowRef1.current !== null && shadowRef2.current !== null) {
        if(typeFloor === "2v1"){
            shadowRef1.current.style.backgroundImage = "url(/img/shadows/shadow_floor2_right.png";
            shadowRef2.current.style.backgroundImage = "url(/img/shadows/shadow_floor2_left.png";
        }
    }
  }, []);

  return (
    <section className="container">
      <div className={styles.container_section}>
        <div
          className={styles.scene}
          style={{ backgroundImage: `url(${src})` }}
        >
          <div ref={shadowRef1} className={styles.shadow}></div>
          <div ref={shadowRef2} className={styles.shadow}></div>
          {children}
        </div>
      </div>
    </section>
  );
};

export default SectionImage;
