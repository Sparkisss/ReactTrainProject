import React, {useContext} from 'react';
import { Link} from 'react-router-dom';
import classes from './Button.module.css';
import { Context } from '../../../index';
import { observer } from 'mobx-react-lite';


const Button = observer(({children, size, ...props}) => {
    const {user} = useContext(Context)
    return (
        <button className={classes.myBtn} onClick={() => user.setIsAuth(true)}>
            <Link to={props.route} className={classes[props.state]} style={{ fontSize: size }}>{children}</Link>
        </button>
    );
});

export default Button;