import styles from "./Home.module.css";
import Banner from "../../components/Banner/Banner";
import { useEffect } from "react";
import SectionImage from "../../components/SectionImage/SectionImage";
import SectionInfo from "../../components/SectionInfo/SectionInfo";
interface Props {
  onLoaded: () => void;
}

const Home = ({ onLoaded }: Props) => {
  useEffect(() => {
    onLoaded();
  }, []);

  return (
    <>
      <div className={styles.container_home}>
        <Banner></Banner>
        <SectionImage
          src={"/img/rooms/necropolis.png"}
          height="500vh"
          floor="2v1"
        >
          {(ScrollYProgressValue) => (
            <SectionInfo scrollYProgress={ScrollYProgressValue} />
          )}
        </SectionImage>
        <SectionImage
          src={"/img/rooms/necropolis.png"}
          height="400vh"
          floor="2v1"
        >
          {(ScrollYProgressValue) => (
            <SectionInfo scrollYProgress={ScrollYProgressValue} />
          )}
        </SectionImage>
      </div>
    </>
  );
};

export default Home;
