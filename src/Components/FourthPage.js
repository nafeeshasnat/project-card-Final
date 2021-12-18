import classes from './FourthPage.module.css';
import { useState , useEffect } from 'react';
import Slider from './Slider';
import { db } from '../config';
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore';

function FourthPage(){
    
    const [guests, setGuest] = useState([]);
    const guestCollectionRef = collection(db , 'guests')

    useEffect(() => {
        const getGuest = async () => {
            const data = await getDocs(guestCollectionRef);
            setGuest(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
        }
        getGuest();
    }, []);

    var attend
    var guestData;
    guests.forEach((guest) => {
        if(window.location.href.indexOf(guest.url) > -1){
            attend = (guest.attend);
            guestData = guest;
        }
    });

    const guestAttend = async (attending) => {
        if(attend !== attending){
            const guestDoc = doc(db, "guests", guestData.id);
            const number = {attend: attending};
            await updateDoc(guestDoc, number);
            attend = attending;
            console.log('success');
        }else if(attend === 1){
            console.log('You have already confirmed as attending');
        }else if(attend === 0){
            console.log('You have already confirmed as not attending');
        }
        console.log(attend);
    }


    return(
        <div className={classes.fourth}>
            <h2>In Reception</h2>
            <div className={classes.slider}>
                <Slider />
            </div>

            <div className={classes.join}>
                <div className={classes.buttons}>
                    <h3>Will you join us?</h3>
                    <div className={classes['button-div']}>
                        <button onClick={() => {guestAttend(1)}}>Yes</button>
                        <button onClick={() => {guestAttend(0)}}>No</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FourthPage;