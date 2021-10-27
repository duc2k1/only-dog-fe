import React from "react";
import { render } from "react-dom";
import App from "./App.jsx";
import AppProvider from "./contexts/AppProvider.jsx";
import AuthProvider from "./contexts/AuthProvider.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
//---------------------------------------------
render(
  <AuthProvider>
    <AppProvider>
      <App />
    </AppProvider>
  </AuthProvider>,
  document.getElementById("root")
);
