import React, { useContext } from 'react';
import './DeviceList.css'
import { observer } from 'mobx-react-lite';
import { Context } from '../../index';
import DeviceItem from '../deviceItem/DeviceItem';

const DeviceList = observer(() => {
    const {device} = useContext(Context)
    return (
        <div className='devices__place'>
            {device.devices.map(device => 
                <DeviceItem key={device.id} device={device}/>
            )}
        </div>
    );
});

export default DeviceList;