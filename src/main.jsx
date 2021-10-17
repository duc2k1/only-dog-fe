import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import FirebaseContext from "./context/firebase";
import { fire, FieldValue } from "./lib/firebase";

ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{ fire, FieldValue }}>
      <App />
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
