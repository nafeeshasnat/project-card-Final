import classes from './FirstPage.module.css';
import ArabicRight from '../Images/arabic-right.png';
import ArabicLeft from '../Images/arabic-left.png';
import HeartLogo from '../Images/heart-logo.png';

function FirstPage(props){
    var name = props.guests.guestName;
    return(
        <div className={classes['first-page']}>
            <div className={classes['arabic-div']}>
                <div className={classes['arabic-text']}>
                    <img className={classes.arabic} src={ArabicLeft} alt="arabic-left"></img>
                    <img className={classes.heart} src={HeartLogo} alt="heart-logo"></img>
                    <img className={classes.arabic} src={ArabicRight} alt="arabic-right"></img>
                </div>
                <p>"And we created you in pairs"</p>
                <p>In the name of Allah (swt), the most beneficial, the most merciful</p>
            </div>
            <div className={classes.details}>
                <div className={classes.salam}>
                    <h2>ٱلسَّلَامُ عَلَيْكُمْ<span> - - </span>As-Salamu Alaykum</h2>
                </div>
                <h3 className={classes['guest-name']}>{name}</h3>
                <h4>You are cordially invited with family on the joyful occasion of the marriage of</h4>
                <h2 className={classes['bride-groom']}>Rafin &amp; Mahrin</h2>
                <p>We whole heartedly hope that you can join us in this blissful celebration.</p>
                <div className={classes['right-text']}>
                    <p><span>Regards From </span><br></br>Gazi Panna Naznin</p>
                </div>
            </div>
        </div>
    )
}

export default FirstPage;