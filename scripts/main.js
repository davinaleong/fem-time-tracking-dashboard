/*
Sections:
  - Elements
*/

import data from "./data.json";

// Elements
const navLinks = document.querySelectorAll(".nav-link");

// Functions
const getTimeframe = (title) => {
  return data.filter((timeframe) => timeframe.title.toLowerCase == title);
};

// Event Listeners
navLinks.forEach((thisNavLink) => {
  thisNavLink.addEventListener(`click`, (e) => {
    e.preventDefault();
    navLinks.forEach((navLink) => {
      navLink.removeAttribute(`data-active`);
    });
    thisNavLink.setAttribute(`data-active`, true);
  });
});
