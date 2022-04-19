import React from "react";
import ReactDOM from "react-dom"
import App from "./app";
import { register } from "./serviceWorkerRegistration.";

ReactDOM.render(<App />, document.getElementById("root"));

register();
