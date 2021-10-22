import React from "react";
import { render } from "react-dom";
import App from "./App.jsx";
import AppProvider from "./contexts/AppProvider.jsx";
//---------------------------------------------
render(
  <AppProvider>
    <App />
  </AppProvider>,
  document.getElementById("root")
);
