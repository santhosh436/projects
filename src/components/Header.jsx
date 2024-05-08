import React from 'react'
import Responsive from '../Sliders/MobileSlide'
import TvSlider from '../Sliders/TvSlider'
import FridgeSlider from '../Sliders/FridgeSlider'
import FrunitureSlider from '../Sliders/FrunitureSlider'
import SpeakerSlider from '../Sliders/SpeakerSlider'
import MenSlider from '../Sliders/MenSlider'
import BookSlider from '../Sliders/BookSlider'
import AcSlider from '../Sliders/AcSlider'
import ComputerSlider from '../Sliders/ComputerSlider'
import WatchSlider from '../Sliders/WatchSlider'
const Header = () => {
  return (
    <div>
      <Responsive/>
      <TvSlider/>
      <FridgeSlider/>
      <FrunitureSlider/>
      <SpeakerSlider/>
      <MenSlider/>
      <BookSlider/>
      <AcSlider/>
      <ComputerSlider/>
      <WatchSlider/>

    </div>
  )
}

export default Header