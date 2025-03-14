import { useState } from "react";
import "@/App.css"
import DeviceList from "./components/DeviceList";

const App: React.FC = () => {


    return (
        <div className="App">
            <DeviceList></DeviceList>
        </div>
    )
}

export default App