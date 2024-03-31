import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselInside from './CarouselInside';

const Carousel = ({json, picvis, picmis}) => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
  return (
<Slider {...settings}>
<div>
  <h3><CarouselInside
        title ={"La Misión"}
        description ={json.mision}
        pic = {picmis} 
      ></CarouselInside></h3>
</div>
<div>
  <h3><CarouselInside
          title ="La Visión"
          description ={json.vision}
          pic = {picvis} 
          ></CarouselInside></h3>
</div>
</Slider>
);
}

export default Carousel



