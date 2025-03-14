export interface Device {
    id: number;
    name: string;
    price: number;
    img: string;
}

export interface DeviceState {
    devices: Device[];
}
