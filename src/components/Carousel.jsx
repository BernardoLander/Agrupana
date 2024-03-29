import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import  "../components/Carousel.css";

const Carousel = () => {
    const settings = {
        dots: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1000,
    };
  return (
    <div className='body'>
      <h2 className='h2'>Carousel Component</h2>
      <Slider {...settings}>
        <div className='h3'>
          <h3>FIRST SLIDE</h3>
        </div>
        <div className='h3'>
          <h3>SECOND SLIDE</h3>
        </div>
      </Slider>
    </div>
  )
}

export default Carousel
