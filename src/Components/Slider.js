import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import './Slider.css';
import Shayan from '../Images/polapan/Shayan.jpeg';
import Momo from '../Images/polapan/momo.jpg';
import Soha from '../Images/polapan/sohaCompressed.jpg';
import Sparsha from '../Images/polapan/sparshaCompressed.jpg';
import Ifti from '../Images/polapan/iftiCompressed.jpg';
import Tomo from '../Images/polapan/tomo.jpg';
import Mahi from '../Images/polapan/mahi.jpg';
import Shihab from '../Images/polapan/shihab.jpg';
import Rahma from '../Images/polapan/rahma.jpg';
import Dina from '../Images/polapan/dina.jpg';
import Hasan from '../Images/polapan/hasan.jpg';
import Raiyyan from '../Images/polapan/raiyyan.jpg';
import Tansa from '../Images/polapan/tansa.jpg';
import Hafsa from '../Images/polapan/hafsa.jpg';
import Sayma from '../Images/polapan/sayma.jpg';
import Samiha from '../Images/polapan/samiha.jpg';

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
    <div className="item" data-value="6"><img src={Tomo} alt="slider Image"></img><p>Tomo</p></div>,
    <div className="item" data-value="7"><img src={Tansa} alt="slider Image"></img><p>Tansa</p></div>,
    <div className="item" data-value="8"><img src={Mahi} alt="slider Image"></img><p>Mahi</p></div>,
    <div className="item" data-value="9"><img src={Shihab} alt="slider Image"></img><p>Shihab</p></div>,
    <div className="item" data-value="10"><img src={Rahma} alt="slider Image"></img><p>Rahma</p></div>,
    <div className="item" data-value="11"><img src={Dina} alt="slider Image"></img><p>Dina</p></div>,
    <div className="item" data-value="12"><img src={Hasan} alt="slider Image"></img><p>Hasan</p></div>,
    <div className="item" data-value="13"><img src={Raiyyan} alt="slider Image"></img><p>Raiyyan</p></div>,
    <div className="item" data-value="14"><img src={Hafsa} alt="slider Image"></img><p>Hafsa</p></div>,
    <div className="item" data-value="15"><img src={Sayma} alt="slider Image"></img><p>Sayma</p></div>,
    <div className="item" data-value="16"><img src={Samiha} alt="slider Image"></img><p>Samiha</p></div>
];

const Slider = () => (
    <AliceCarousel
        mouseTracking = "true"
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
        autoPlay = "true"
        autoPlayInterval = "3000"
        autoWidth="100%"
        infinite="true"
        controlsStrategy = "responsive"
        disableDotsControls = "true"
    />
);

export default Slider;
