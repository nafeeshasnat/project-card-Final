import { useState } from 'react';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';
import classes from './Card.module.css';
import FirstPage from './FirstPage';
import Next from '../Images/arrow.png';
import FourthPage from './FourthPage';
function Card (props){
    const [active, setActive] = useState("firstPage");
    // var activePageNumber = 0;
    function nextButton(){
        if(active === 'firstPage'){
            setActive('secondPage');
        }else if(active === 'secondPage'){
            setActive('thirdPage');
        }else if(active === 'thirdPage'){
            setActive('fourthPage');
        }
    }
    function prevButton(){
        if(active === 'secondPage'){
            setActive('firstPage');
        }else if(active === 'thirdPage'){
            setActive('secondPage');
        }else if(active === 'fourthPage'){
            setActive('thirdPage');
        }
    }
    
    return(
        <div className={`${classes.card} ${active === 'thirdPage' && classes.third}`}>
            {active === 'firstPage' && props.guestFound === 1 && <FirstPage guests = {props}/>}
            {active === 'secondPage' && <SecondPage />}
            {active === 'thirdPage' && <ThirdPage/>}
            {active === 'fourthPage' && <FourthPage classProps = {props}/>}
            {active !== 'fourthPage' && <img className={classes.next} src={Next} alt="next" onClick={nextButton}></img>}
            {active !== 'firstPage' && <img className={classes.prev} src={Next} alt="prev" onClick={prevButton}></img>}
            {props.guestFound === 0 && <h1>Not Invited</h1>}
        </div>
    )
}

export default Card;