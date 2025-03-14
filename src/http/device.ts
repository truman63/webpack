import axios from "axios"

export const fetchDevices = async () => {
    const { data } = await axios.get('http://localhost:5000/api/device');
    return data
}

export const fetchOneDevice = async () => {
    const {data} = await axios.get('api/device/1')
    return data
}