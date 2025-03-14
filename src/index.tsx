import {createRoot} from "react-dom/client";
import App from "@/App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";


const root = document.getElementById("root");

if (!root) {
    throw new Error("root not found")
}

const conteiner = createRoot(root);

import {setupStore} from "./store/store";

const store = setupStore();

conteiner.render(
    <Provider store={store}>
        <App/>
    </Provider>
)