import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import './Slider.css';
import slideImg1 from '../Images/groom.png';

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

const items = [
    <div className="item" data-value="1"><img src={slideImg1} alt="slider Image"></img><p>polapan 1</p></div>,
    <div className="item" data-value="2"><img src={slideImg1} alt="slider Image"></img><p>polapan 2</p></div>,
    <div className="item" data-value="3"><img src={slideImg1} alt="slider Image"></img><p>polapan 3</p></div>,
    <div className="item" data-value="4"><img src={slideImg1} alt="slider Image"></img><p>polapan 4</p></div>,
    <div className="item" data-value="5"><img src={slideImg1} alt="slider Image"></img><p>polapan 5</p></div>,
];

const Slider = () => (
    <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
        autoPlay = "true"
        autoPlayInterval = "3000"
        autoWidth="100%"
        infinite="true"
    />
);

export default Slider;