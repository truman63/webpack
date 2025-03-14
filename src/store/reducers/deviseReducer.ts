import { Device, DeviceState } from "@/types/device";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState: DeviceState = {
    devices: [
        
    ]
}

export const deviceSlice = createSlice({
    name: "device",
    initialState,
    reducers: {
        addDevice(state, action: PayloadAction<Device>) {
            state.devices.push(action.payload)
        },
        setDevices(state, action: PayloadAction<Device[]>) {
            state.devices = action.payload
        }
    }
})


export const {
    addDevice,
    setDevices,
} = deviceSlice.actions

export default deviceSlice.reducer;