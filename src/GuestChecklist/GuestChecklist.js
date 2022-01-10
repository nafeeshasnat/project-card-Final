import { useState , useEffect } from 'react';
import classes from './GuestChecklist.module.css';
import { db } from '../config';
import { collection, documentId, getDocs } from 'firebase/firestore';

var countAttend = 0;
var countNotAttend = 0;
var pending = 0;
var alreadyInAttending = [];
var alreadyInNotAttending = [];
var notComfirmed = [];

function GuestChecklist(){
    const [guests, setGuest] = useState([]);
    const guestCollectionRef = collection(db , 'guests')

    useEffect(() => {
        const getGuest = async () => {
            const data = await getDocs(guestCollectionRef);
            setGuest(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
        }
        getGuest()
    }, []);

    guests.forEach((guest) => {
        if(guest.attend === 1 && alreadyInAttending.includes(guest.name) === false){
            var td = '<tr><td>'+guest.name+'</td><td>'+ guest.id +'</td><td>Yes</td></tr>';
            alreadyInAttending.push(guest.name);
            document.querySelector('#table-attending tr').insertAdjacentHTML('afterend', td)
            countAttend++;
        }

        if(guest.attend === 0 && alreadyInNotAttending.includes(guest.name) === false){
            var td = '<tr><td>'+guest.name+'</td><td>'+ guest.id +'</td><td>No</td></tr>';
            alreadyInNotAttending.push(guest.name);
            document.querySelector('#table-notattending tr').insertAdjacentHTML('afterend', td)
            countNotAttend++;
        }


        if(guest.attend === -1 && notComfirmed.includes(guest.name) === false){
            var td = '<tr><td>'+guest.name+'</td><td>'+ guest.id +'</td><td>Pending</td></tr>';
            notComfirmed.push(guest.name);
            document.querySelector('#table-pending tr').insertAdjacentHTML('afterend', td)
            pending++;
        }
        
    });


    // var acceptCounter = '<p>total invitation accepted '+ count +'</p>'
    // document.querySelector('table').insertAdjacentHTML('afterend', acceptCounter);

    return(
        <div>
            <h1>Full Invited Guest List Details</h1>

            <table id="table-attending">
                <tr>
                    <th>Name</th>
                    <th>Id</th>
                    <th>Attending</th>
                </tr>
            </table>
            <p>{countAttend}</p>
            <table id="table-notattending">
                <tr>
                    <th>Name</th>
                    <th>Id</th>
                    <th>Attending</th>
                </tr>
            </table>
            <p>{countNotAttend}</p>
            <table id="table-pending">
                <tr>
                    <th>Name</th>
                    <th>Id</th>
                    <th>Attending</th>
                </tr>
            </table>
            <p>{pending}</p>
        </div>
    )
}

export default GuestChecklist;