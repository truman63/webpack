import { Device } from '@/types/device'
import React, { FC } from 'react'

interface Props {
    device: Device
}

const DeviceItem: FC<Props> = ({device}) => {
    const fullUrlImage = `https://b05229b7-5d6c-49d5-a964-113872f3922a.selstorage.ru/${device.img}`
    return (
        <div>
            <h1>{device.id}</h1>
            <h1>{device.name}</h1>
            <h1>{device.price}</h1>
            <img src={fullUrlImage} width={200} height={200}/>
        </div>
    )
}

export default DeviceItem