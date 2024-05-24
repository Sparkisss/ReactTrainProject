import React from 'react';
import { Link} from 'react-router-dom';
import classes from './Button.module.css';

const Button = ({children, size, ...props}) => {
    return (
        <button className={classes.myBtn}>
            <Link to={props.route} className={classes[props.state]} style={{ fontSize: size }}>{children}</Link>
        </button>
    );
};

export default Button;