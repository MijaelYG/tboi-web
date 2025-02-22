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
        <SectionImage src={"/img/rooms/necropolis.png"} floor="2v1">
        <SectionInfo></SectionInfo>
        </SectionImage>
        <SectionImage src={"/img/rooms/necropolis.png"} floor="2v1">
        </SectionImage>
      </div>
    </>
  );
};

export default Home;
