import classes from './ThirdPage.module.css';
import Iframe from 'react-iframe';

function ThirdPage(){

    return(
        <div className={classes.vanue}>
            <h2>Vanue ~</h2>
            <div className={classes.map}>
                <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d456.0291553031379!2d90.39124258180652!3d23.88134653539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c56ebde8d293%3A0x125e6330c751c1f6!2sSea%20Shell%20Hotel%20and%20Party%20Palace!5e0!3m2!1sen!2sbd!4v1638900044219!5m2!1sen!2sbd" allowfullscreen="" loading="lazy"></Iframe>
                <h4>House # 09, Road # 13, Sector 10, Uttara, Dhaka<br></br>Contact Number - <a href= "tel:+8801581051775">+8801581051775</a></h4>
            </div>
            <div className={classes['time-polapan']}>
                <div className={classes.time}>
                    <h2>January</h2>
                    <p>29</p>
                    <h2>2022</h2>
                    <h3>Saturday</h3>
                    <h3>At 6 PM</h3>
                </div>
            </div>
        </div>
    )
}

export default ThirdPage;