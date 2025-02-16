import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import { lazy, Suspense, useState } from "react";
import Introvideo from "./components/Introvideo/Introvideo";
import Loading from "./components/Loading/Loading";
import { AnimatePresence } from "framer-motion";

const Home = lazy(() => import("./pages/Home/Home"));
const Items = lazy(() => import("./pages/Items/Items"));

function App() {
  const [showIntro, setShowIntro] = useState(
    () => localStorage.getItem("video") !== "true"
  );
  const [hideLoading, setHideLoading] = useState(false);

  const handlePageLoad = () =>{
    setHideLoading(false);
    const time = setTimeout(() => {
      setHideLoading(true);
    }, 300);
    return () => clearTimeout(time);  
  }

  const handleShowIntro = () => {
    setShowIntro(false)
    setHideLoading(false);
    const time = setTimeout(() => {
      setHideLoading(true);
    }, 300);
    return () => clearTimeout(time);  
  }

  return (
    <>
      {showIntro ? (
        <Introvideo onFinish={handleShowIntro} />
      ) : (
        <>
          <AnimatePresence mode="wait">
            {!hideLoading && <Loading />}
          </AnimatePresence>
          <Suspense fallback={hideLoading ? null : <Loading />}>
            <Header />
            <Routes>
              <Route path="/" element={<Home onLoaded={handlePageLoad}/>} />
              <Route path="/Items" element={<Items onLoaded={handlePageLoad} />} />
            </Routes>
          </Suspense>
        </>
      )}
    </>
  );
}

export default App;
