import {createRoot} from "react-dom/client";
import App from "@/App";
import { BrowserRouter } from "react-router-dom";


const root = document.getElementById("root");

if (!root) {
    throw new Error("root not found")
}

const conteiner = createRoot(root);

conteiner.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
)