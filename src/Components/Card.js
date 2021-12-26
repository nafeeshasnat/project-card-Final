import { useState } from 'react';
import LoadingMobile from './LoadingMobile';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';
import classes from './Card.module.css';
import FirstPage from './FirstPage';
import Next from '../Images/arrow.png';
import FourthPage from './FourthPage';
import NotInvited from './NotInvited';
function Card (props){
    const [active, setActive] = useState("firstPage");
    const [loading, setLoading] = useState(1);
    // var activePageNumber = 0;
    function nextButton(){
        setLoading(0);
        if(active === 'firstPage'){
            setActive('secondPage');
        }else if(active === 'secondPage'){
            setActive('thirdPage');
        }else if(active === 'thirdPage'){
            setActive('fourthPage');
        }

        setTimeout(function(){
            setLoading(1)
        },2500);
    }
    function prevButton(){
        setLoading(0);
        if(active === 'secondPage'){
            setActive('firstPage');
        }else if(active === 'thirdPage'){
            setActive('secondPage');
        }else if(active === 'fourthPage'){
            setActive('thirdPage');
        }
        setTimeout(function(){
            setLoading(1)
        },2500);
    }
    
    return(
        <div className={`${classes.card} ${active === 'thirdPage' && classes.third}`}>
            {active === 'firstPage' && props.guestFound === 1 && <FirstPage guests = {props}/>}
            {active === 'secondPage' && <SecondPage />}
            {active === 'thirdPage' && <ThirdPage/>}
            {active === 'fourthPage' && <FourthPage classProps = {props}/>}
            {active !== 'fourthPage' && props.guestFound === 1 && <img className={classes.next} src={Next} alt="next" onClick={nextButton}></img>}
            {active !== 'firstPage' && props.guestFound === 1 && <img className={classes.prev} src={Next} alt="prev" onClick={prevButton}></img>}
            {props.guestFound === 0 && <h1><NotInvited /></h1>}
            {loading === 0 && <LoadingMobile />}
        </div>
    )
}

export default Card;