import styles from "./Home.module.css";
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
        <SectionImage
          height="1400vh"
        ></SectionImage>
      </div>
    </>
  );
};

export default Home;
