import {createRoot} from "react-dom/client";
import App from "@/App";
import {setupStore} from "./store/store";
import { Provider } from "react-redux";

const root = document.getElementById("root");

const conteiner = createRoot(root);
const store = setupStore();

conteiner.render(
    <Provider store={store}>
        <App/>
    </Provider>
)