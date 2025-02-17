import styles from "./Home.module.css";
import Banner from "../../components/Banner/Banner";
import { useEffect } from "react";
import SectionImage from "../../components/SectionImage/SectionImage";
interface Props{
  onLoaded: () => void;
}

const Home = ({ onLoaded }: Props ) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onLoaded(); 
    }, 0);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
    <div className={styles.container_home}>
      <Banner></Banner>
      <SectionImage src={"/img/rooms/necropolis.png"} floor="2v1">
      <div className=""><h2>GA</h2></div>
      </SectionImage>
    </div>
    </>
  
  );
};

export default Home;
