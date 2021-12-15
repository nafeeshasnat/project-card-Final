import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import slideImg1 from '../Images/groom.png';
import './Slider.css';

function Slider(){

    return (
        <Carousel 
        showThumbs={false} 
        centerMode={true} 
        centerSlidePercentage= {25} 
        autoPlay={true} 
        emulateTouch={true} 
        infiniteLoop={true} 
        showStatus={false} 
        showIndicators={false}
        stopOnHover={true}
        >
            <div>
                <img src={slideImg1} />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src={slideImg1} />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src={slideImg1} />
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>
    );
}

export default Slider;