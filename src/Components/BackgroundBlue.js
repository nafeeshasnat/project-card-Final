import { useState , useEffect } from 'react';
import Card from './Card';
import FireworksBackground from './FireworksBackground';
import classes from './BackgroundBlue.module.css';
import topLeftUnderFlower from '../Images/top-left-under-flower.svg';
import bottomRightUnderFlower from '../Images/bottom-right-under-flower.svg';
import topLeftFlower from '../Images/top-left-flower.svg';
import bottomRightFlower from '../Images/bottom-right-flower.svg';
import bottomLeftFlower from '../Images/bottom-left.svg'; 
import { db } from '../config';
import { collection, getDocs } from 'firebase/firestore';

// const peoples = [
//     {
//         name: 'Nafees Hasnat',
//         url: 'nafees_hasnat',
//         attend: null
//     },
//     {
//         name: 'Gazi Panna Naznin',
//         url: 'panna_naznin',
//         attend: null
//     }
// ]

var name;
var attend;
let found;

function BackgroundBlue(){
    const [guests, setGuest] = useState([]);
    const guestCollectionRef = collection(db , 'guests')

    useEffect(() => {
        const getGuest = async () => {
            const data = await getDocs(guestCollectionRef);
            setGuest(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
        }
        getGuest()
    }, [])

    guests.forEach((guest) => {
        console.log(window.location.href.indexOf(guest.url))
        if(window.location.href.indexOf(guest.url) > -1){
            found = 1;
            name = (guest.name);
            attend = (guest.attend);
        }else if(found !== 1){
            found = 0;
        }
    });

    return(
        <div className={classes.background}>
            <img src={topLeftUnderFlower} className={`${classes['top-left-under-flower']} ${classes['under-flower']}`} alt="topLeftUnderFlower"></img>
            <img src={bottomRightUnderFlower} className={`${classes['bottom-right-under-flower']} ${classes['under-flower']}`} alt="bottomRightUnderFlower"></img>
            <img src={topLeftFlower} className={`${classes['top-left-flower']} ${classes['under-flower']}`} alt="top-left-flower"></img>
            <img src={bottomRightFlower} className={`${classes['bottom-right-flower']} ${classes['under-flower']}`} alt="bottom-right-flower"></img>
            <img src={bottomLeftFlower} className={`${classes['bottom-left']} ${classes['under-flower']}`} alt="bottom-left"></img>
            <FireworksBackground/>
            <Card guestFound={found} guestName = {name} guestConfirm = {attend}/>
        </div>
    );
}

export default BackgroundBlue;