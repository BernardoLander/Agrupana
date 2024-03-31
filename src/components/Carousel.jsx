import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import  "../components/Carousel.css";
import "../components/CarouselInside.jsx"

const Carousel = ({json}) => {
    const settings = {
        dots: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 2,
        infinite: true,
        autoplay: false,
    }
    ;
  return (
    <div className='body'>
      <h2 className='h2'>Carousel Component</h2>
      <Slider {...settings}>
      <InsideInit
      title ="La Misión"
      description ={json.Mision.description}
      pic = {json.Mision.pic} 
      ></InsideInit>
        <div className='h3'>
        <InsideInit
      title ="La Misión"
      description ={json.Vision.description}
      pic = {json.Vision.pic} 
      ></InsideInit>
      </div>
      </Slider>
    </div>
  )
}

export default Carousel

