import React from "react";
import  ReactDOM  from "react-dom/client";
import App from "./App";


// ReactDOM.render(<App/>,document.querySelector("#App"))
const root = ReactDOM.createRoot(document.querySelector("#App"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)