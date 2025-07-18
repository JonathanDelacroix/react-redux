import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./App";
import React, { StrictMode } from 'react';

ReactDOM.createRoot(document.getElementById("root")).render(
<StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
</StrictMode>
);