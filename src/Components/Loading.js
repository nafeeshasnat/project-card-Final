import classes from './Loading.module.css';
import ring2 from "../Images/ring_male.png";
import ring1 from "../Images/ring_women.png";

function Loading(){
    return (
        <div className={classes.loading}>
            <img className= {classes["ring-1"]} src={ring1} alt="women"></img>
            <img className= {classes["ring-2"]} src={ring2} alt="men"></img>
        </div>
    );
}

export default Loading;