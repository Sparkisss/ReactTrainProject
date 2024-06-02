import React, { useCallback, useState, memo } from 'react';
import dataSlider from './dataSlider';
import btnLeft from '../../source/icon/angle-double-left.svg';
import btnRight from '../../source/icon/angle-double-right.svg';
import './Slider.css'

const Slide = memo(({ slide, i, pages }) => {
    return (i === pages) && <div className='item' style={{animation: 'fade-in 1s'}}>
        <h2>{slide.title}</h2>
        <p>{slide.subTitle}</p>
        <img src={slide.img} alt={i} />
    </div>
});

const Slider = () => {
    const [pages, setPages] = useState(0);

    const handleClickLeft = useCallback(() => {
        setPages((pages + 1) % dataSlider.length);
    }, [pages])

    const handleClickRight = useCallback(() => {
        setPages((pages - 1 + dataSlider.length) % dataSlider.length);
    }, [pages])

    return (
        <section className='mainContainer'>
            <img 
            className='btn' 
            src={btnLeft} 
            alt="arrow left" 
            onClick={handleClickLeft}/>
            <div className='window'>
                <div className='dots'>
                    {
                        dataSlider.map((_, i) => {
                            return <span key={i + 1} className={`dot ${i === pages ? 'active' : ''}`} onClick={() => setPages(i)}></span>
                        })
                    }
                </div>
                <div className='itemsContainer'>
                    {
                        dataSlider.map((slide, i) => {
                            return <Slide key={slide.id+1} slide={slide} i={i} pages={pages} />
                        })
                    }
                </div>

            </div>
            <img 
            className='btn' 
            src={btnRight} 
            alt="arrow right" 
            onClick={handleClickRight}/>
        </section>
    );
};

export default Slider;
