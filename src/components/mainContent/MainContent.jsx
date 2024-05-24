import React from 'react';
import Button from '../UI/button/Button';
import './MainContent.css'

const MainContent = ({content}) => {
    const {header, description, bthText, clsHead, clsDiv, color} = content;
    
    return (
        <div className={color}>
            <h2 className={clsHead}>{header}</h2>
            <div className={clsDiv}>{description}</div>
            <Button size={'0.9em'}>{bthText}</Button>
        </div>
    );
};

export default MainContent;