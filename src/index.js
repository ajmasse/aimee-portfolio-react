import { render } from "react-dom";
import App from "./App";
import "./index.css";

// CURSOR
const mouseCursor = document.querySelector(".cursor");

function cursor(e) {
  mouseCursor.style.top = e.pageY + "px";
  mouseCursor.style.left = e.pageX + "px";
}
window.addEventListener("mousemove", cursor);

render(<App />, document.getElementById("root"));
