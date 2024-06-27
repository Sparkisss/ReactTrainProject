import React from 'react';
import './DeviceItem.css'
import star from '../../source/icon/star.svg'
import { useNavigate } from 'react-router-dom';

const DeviceItem = ({device}) => {
    const navigate = useNavigate()

    return (
        <div className='device' onClick={() => navigate('/store' + '/device' + '/' + device.id)}>
            <img src={device.img} alt="d" />
            <div className='device__info'>
                <div>Samsung...</div>
                <div className='device__info-text'>
                    <div>{device.rating}</div>
                    <img src={star} alt="100" />
                </div>
                <button>Defoult</button>
            </div>
            <div>{device.name}</div>
        </div>
    );
};

export default DeviceItem;