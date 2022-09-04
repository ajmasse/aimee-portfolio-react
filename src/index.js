import { render } from "@testing-library/react";
import React from "react";
import App from "./App";
import "./index.css";

render(<App />, document.getElementById("root"));

// CURSOR
const mouseCursor = document.querySelector(".cursor");

function cursor(e) {
  mouseCursor.style.top = e.pageY + "px";
  mouseCursor.style.left = e.pageX + "px";
}
window.addEventListener("mousemove", cursor);

const filterContainer = document.querySelector(".project-filter"),
  projectItems = document.querySelectorAll(".project-item");

filterContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("filter-item")) {
    // deactivate existing active 'filter-item'
    filterContainer.querySelector(".active").classList.remove("active");
    // activate new 'filter-item'
    event.target.classList.add("active");
    const filterValue = event.target.getAttribute("data-filter");
    projectItems.forEach((item) => {
      if (item.classList.contains(filterValue) || filterValue === "all") {
        item.classList.remove("hide");
        item.classList.add("show");
      } else {
        item.classList.remove("show");
        item.classList.add("hide");
      }
    });
  }
});
