import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import { lazy, Suspense, useState } from "react";
import Introvideo from "./components/Introvideo/Introvideo";
import Items from "./pages/Items/Items";
import Loading from "./components/Loading/Loading";

const Home = lazy(() => import("./pages/Home/Home"));

function App() {
  const [showIntro, setShowIntro] = useState(true);
  return (
    <>
      <Header></Header>
      {showIntro ? (
        <Introvideo onFinish={() => setShowIntro(false)} />
      ) : (
        <Routes>
          
            <Route path="/" element={<Suspense fallback={<Loading></Loading>}><Home></Home></Suspense>}></Route>
          <Route path="/Items" element={<Items></Items>}></Route>
        </Routes>
      )}
    </>
  );
}

export default App;
