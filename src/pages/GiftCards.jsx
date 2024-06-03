import React, { useState } from 'react';
import Slider from '../components/slider/Slider';
import dataSlider from '../components/slider/dataSlider';
import Modal from '../components/modal/Modal';
import ScrollPage from '../components/scrollPage/ScrollPage';


const GiftCards = () => {
    const [modalActive, setModalActive] = useState(false);
    const [pages, setPages] = useState(0);

    const handlePagesChange = (newPages) => {
        setPages(newPages);
    }
    
    return (
        <>        
            <Slider active={modalActive} setActive={setModalActive} onPagesChange={handlePagesChange}/>
            <Modal active={modalActive} setActive={setModalActive}>
                {dataSlider.map((item, i) => {
                    if (i === pages) {
                        return <div key={i}>{item.describe}</div>
                    }                    
                })}
            </Modal>    
            <ScrollPage/>                 
        </>
    );
};

export default GiftCards;