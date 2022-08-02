/*
Sections:
  - Elements
*/

import data from "./data.json";

// Variables & Config
const log = true;

const TIMEFRAME_DAILY = `daily`;
const TIMEFRAME_WEEKLY = `weekly`;
const TIMEFRAME_MONTHLY = `monthly`;

let currentTimeframe = TIMEFRAME_DAILY;

// Elements
const navLinks = document.querySelectorAll(".nav-link");

// Functions
const getSection = (title) => {
  if (log) {
    console.log(`== Get Timeframe ==`);
  }

  return data.filter(
    (section) => section.title.toLowerCase() == title.toLowerCase()
  )[0];
};

const printCurrent = (time) => {
  if (log) {
    console.log(`== Print Current ==`);
    console.log(`Time: `, time);
  }

  return `${time}hrs`;
};

const printPrevious = (time) => {
  if (log) {
    console.log(`== Print Previous ==`);
    console.log(`Time: `, time);
  }

  return `Last Week - ${time}hrs`;
};

const printTimeframe = (title) => {
  if (log) {
    console.log(`== Print Timeframe ==`);
  }

  const currNodeIndex = 5;
  const prevNodeIndex = 7;

  const titleLower = title.toLowerCase();
  const cell = document.querySelector(
    `.cell-dashboard[data-cell="${titleLower}"] .content-grid`
  );

  const section = getSection(titleLower);
  const { current, previous } = section.timeframes[currentTimeframe];

  if (log) {
    console.log(`Title: `, title);
    console.log(`Title Lower: `, titleLower);
    console.log(`Section: `, section);
    console.log(`Current: `, current, `Previous: `, previous);
  }

  cell.childNodes[currNodeIndex].innerHTML = printCurrent(current);
  cell.childNodes[prevNodeIndex].innerHTML = printPrevious(previous);
};

const printTimeframes = () => {
  if (log) {
    console.log(`== Print Timeframes ==`);
  }

  printTimeframe(`Work`);
  printTimeframe(`Play`);
  printTimeframe(`Study`);
  printTimeframe(`Exercise`);
  printTimeframe(`Social`);
  printTimeframe(`Self-Care`);
};

// Event Listeners
navLinks.forEach((thisNavLink) => {
  thisNavLink.addEventListener(`click`, (e) => {
    e.preventDefault();
    navLinks.forEach((navLink) => {
      navLink.removeAttribute(`data-active`);
    });
    thisNavLink.setAttribute(`data-active`, true);
    currentTimeframe = thisNavLink.getAttribute(`data-timeframe`);
    if (log) {
      console.log(`Selected Timeframe: ${currentTimeframe}`);
    }
    printTimeframes();
  });
});

// Execute Functions
printTimeframes();
