import styles from "./Home.module.css";
import Banner from "../../components/Banner/Banner";
import { useEffect } from "react";
import SectionImage from "../../components/SectionImage/SectionImage";
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
          height="900vh"
        ></SectionImage>
      </div>
    </>
  );
};

export default Home;
