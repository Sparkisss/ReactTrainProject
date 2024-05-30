import React, {useState, useEffect, Children, cloneElement} from 'react';
import btnRight from '../../source/icon/angle-double-right.svg'
import btnLeft from '../../source/icon/angle-double-left.svg'
import './Slider.css'

const PAGE_WIDTH = 450;

const Slider = ({children}) => {
    const [pages, setPages] = useState([]);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        setPages(
            Children.map(children, (child) => {
                return cloneElement(child, {
                    style: {
                        height: '100%',
                        minWidth: `${PAGE_WIDTH}px`,
                        maxWidth: `${PAGE_WIDTH}px`,
                        transform: `translateX(${offset}px)`
                    },
                })
            })
        )
    }, [children, offset])

    const handleLeftArrowClick = () => {
        if (offset < 0) {
            setOffset(offset + PAGE_WIDTH)
        }
    }

    const handleRightArrowClick = () => {
        const maxOffset = -(PAGE_WIDTH * (pages.length - 1))
        if (offset > maxOffset){
            setOffset(offset - PAGE_WIDTH)
        }  
    }

    return (
        <div className='sliderContainer'>
            <img className='arrow' src={btnLeft} alt="btnLeft" onClick={handleLeftArrowClick}/>
            <div className='sliderWindow'>
                <div className='sliderContent'>{pages}</div>
            </div>
            <img className='arrow' src={btnRight} alt="btnRight" onClick={handleRightArrowClick}/>
        </div>
    );
};

export default Slider;