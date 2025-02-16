import styles from "./Home.module.css";
import Banner from "../../components/Banner/Banner";
import { useEffect } from "react";

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
    </div>
    </>
  
  );
};

export default Home;
