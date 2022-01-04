import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import './Slider.css';
import slideImg1 from '../Images/groom.png';
import Shayan from '../Images/polapan/Shayan.jpeg';
import Momo from '../Images/polapan/momo.jpg';
import Soha from '../Images/polapan/sohaCompressed.jpg';
import Sparsha from '../Images/polapan/sparshaCompressed.jpg';
import Ifti from '../Images/polapan/iftiCompressed.jpg';

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

const items = [
    <div className="item" data-value="1"><img src={Shayan} alt="slider Image"></img><p>Shayan</p></div>,
    <div className="item" data-value="2"><img src={Momo} alt="slider Image"></img><p>Momo</p></div>,
    <div className="item" data-value="3"><img src={Soha} alt="slider Image"></img><p>Soha</p></div>,
    <div className="item" data-value="4"><img src={Sparsha} alt="slider Image"></img><p>Sparsha</p></div>,
    <div className="item" data-value="5"><img src={Ifti} alt="slider Image"></img><p>Ifti</p></div>,
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