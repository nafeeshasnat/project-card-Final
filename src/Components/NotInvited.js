import classes from './NotInvited.module.css';

function NotInvited(){
    return(
        <div className={classes['not-invited']}>
            <h2>Invalid invitation link</h2>
            <h3>Please re-check the provided link</h3>
        </div>
    )
}

export default NotInvited;