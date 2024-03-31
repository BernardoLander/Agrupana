import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import  "../components/Carousel.css";
import CarouselInside from './CarouselInside';

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
      <div>
        <CarouselInside
        title ="La Misión"
        description ={json.Mision.description}
        pic = {json.Mision.pic} 
      ></CarouselInside>
      </div>
      <div className='h3'>
          <CarouselInside
          title ="La Misión"
          description ={json.Vision.description}
          pic = {json.Vision.pic} 
          ></CarouselInside>
      </div>
      </Slider>
    </div>
  )
}

export default Carousel

