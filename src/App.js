import React from 'react'
import LandingPage from './pages/LandingPage'
import './index.css';
import { Routes,Route } from 'react-router-dom';
import Responsive from './Sliders/MobileSlide';
import KitchenSlider from './Sliders/KitchenSlider';
import Homepage from './pages/Homepage';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element = {<Homepage/> } />
        <Route path='/MobileSlider' element = { <Responsive/> } />
        <Route path='/kitchenSlider' element = { <KitchenSlider/> } />
        <Route path='/shop' element = { <LandingPage/> } />
      </Routes>
        
    </div>
  )
}

export default App
