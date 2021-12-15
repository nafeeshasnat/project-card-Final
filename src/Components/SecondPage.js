import classes from './SecondPage.module.css';
import GroomImg from '../Images/groom.png';
import BrideImg from '../Images/bride.png';
import HeartLogo from '../Images/heart-logo.png';

function SecondPage(){
    return(
        <div className={classes.info}>
            <h1>Reciption OF</h1>
            <div className={classes['info-cards']}>
                <div className={classes['info-card']}>
                    <div className={classes['img-container']}>
                        <h2>Groom</h2>
                        <img src={GroomImg} alt="Groom"></img>
                    </div>
                    <div className={classes['personal-info']}>
                        <h2>Nafees Hasnat</h2>
                        <p>Son Of</p>
                        <h2>Firozur Rahman</h2>
                        <span>&amp;</span>
                        <h2>Gazi Panna Naznin</h2>
                    </div>
                </div>
                <div className={classes.icon}>
                    <img src={HeartLogo} className={classes.heart} alt="Heart-Logo"></img>
                </div>
                <div className={classes['info-card']}>
                    <div className={classes['img-container']}>
                        <h2>Bride</h2>
                        <img src={BrideImg} alt="Bride"></img>
                    </div>
                    <div className={classes['personal-info']}>
                        <h2>Moontaha Mahmood</h2>
                        <p>Daughter Of</p>
                        <h2>Abdullah Al Mahmood</h2>
                        <span>&amp;</span>
                        <h2>Place Holder</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecondPage;