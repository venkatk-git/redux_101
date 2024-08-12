//Dependencies
import React from "react";
import ReactDOM from "react-dom/client";

//Context
import { Provider } from "react-redux";

//Styles
import "./index.css";

//Components
import App from "./App.jsx";

//Redux store
import store from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
