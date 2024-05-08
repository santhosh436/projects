import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { kitchenData } from '../data/kitchen';
const KitchenSlider = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
return (
<div className='slider-container'>
  <h2>Andriod Tv's</h2>
    <Slider {...settings}>
      {
        kitchenData.map((item)=>{
            return(
                <div className='box'>
                    <img src={item.image} alt="" />
                    <h3>Name:{item.name}</h3>
                </div>
            )
        })
      }
    </Slider>
</div>
)
}


export default KitchenSlider
