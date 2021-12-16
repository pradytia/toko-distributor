import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import './carousel.css'

function CarouselPage (props) {

  return (
       <>
            <Carousel.Item>
                <img
                className="d-block w-100"
                height="500"
                src={props.value.url}
                alt="slide"
                />
            </Carousel.Item>      
       </>
  );
}

export default CarouselPage;