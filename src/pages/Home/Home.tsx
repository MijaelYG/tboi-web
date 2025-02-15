import styles from "./Home.module.css";
import Banner from "../../components/Banner/Banner";

const Home = () => {
  return (
    <>
    <div className={styles.container_home}>
      <Banner></Banner>
      <Banner></Banner>
    </div>
    </>
  
  );
};

export default Home;
