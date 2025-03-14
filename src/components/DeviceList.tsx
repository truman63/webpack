import { useTypedSelector } from '@/hooks/redux'
import React, { FC, useEffect, useState } from 'react'
import DeviceItem from './DeviceItem'
import { fetchDevices, fetchOneDevice } from '@/http/device'
import { addDevice, setDevices } from '@/store/reducers/deviseReducer'
import { Device } from '@/types/device'
import { useDispatch } from 'react-redux'

const DeviceList: FC = () => {
    const dispatch = useDispatch()
    const {devices} = useTypedSelector(state => state.device)

    useEffect(() => {
        fetchDevices()
        .then(data => dispatch(setDevices(data)))
    }, [])

    return (
        <div>
            {devices.map(device => 
                <DeviceItem key={device.id} device={device} />
            )}
            <button onClick={() => console.log(devices)}>vsdsdv</button>
            {/* <h1>{JSON.stringify(devices)}</h1> */}
        </div>
    )
}

export default DeviceList