import ReactDom from "react-dom/client";
import App from './App.jsx'
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import React from "react";

ReactDom.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);