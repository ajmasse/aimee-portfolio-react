import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// CURSOR
const mouseCursor = document.querySelector(".cursor");

function cursor(e) {
  mouseCursor.style.top = e.pageY + "px";
  mouseCursor.style.left = e.pageX + "px";
}
window.addEventListener("mousemove", cursor);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
