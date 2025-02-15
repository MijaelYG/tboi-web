import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from"./pages/Home/Home";
import Header from './components/Header/Header';
import { useState } from 'react';
import Introvideo from './components/Introvideo/Introvideo';
import Items from './pages/Items/Items';

function App() {
const [showIntro, setShowIntro] = useState(true);
  return (
    <>
    <Header></Header>
    {showIntro ? (
      <Introvideo onFinish={() => setShowIntro(false)} />
    ):(
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/Items' element={<Items></Items>}></Route>
    </Routes>
      )}
    </>
  )
}

export default App
