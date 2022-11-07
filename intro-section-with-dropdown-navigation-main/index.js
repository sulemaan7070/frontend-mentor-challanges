"use strict";
const feature = document.getElementById("feature");
const company = document.getElementById("company");
const featureMobile = document.getElementById("featureMobile");
const featureButtonUp = document.getElementById("featureButtonUp");
const featureButtonDown = document.getElementById("featureButtonDown");
const featureButtonDownMobile = document.getElementById(
  "featureButtonDownMobile"
);
const featureButtonUpMobile = document.getElementById("featureButtonUpMobile");
const companyButtonUp = document.getElementById("companyButtonUp");
const companyButtonDown = document.getElementById("companyButtonDown");
let featureCounter = 1;
let companyCounter = 1;
let featureCounterMobile = 1;
const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const box3 = document.querySelector(".box3");
const box4 = document.querySelector(".box4");

/**
 * adding mobile menu
 */
const menu = document.querySelector(".menu");
const mobileMenuBox = document.querySelector(".mobile-menu-box");
const iconClose = document.querySelector(".icon-close");
const overlay = document.querySelector(".overlay");

menu.addEventListener("click", () => {
  mobileMenuBox.classList.remove("hidden");
  overlay.classList.remove("hidden");
});
iconClose.addEventListener("click", () => {
  mobileMenuBox.classList.add("hidden");
  overlay.classList.add("hidden");
});
feature.addEventListener("click", () => {
  featureCounter += 1;
  if (featureCounter % 2 == 0) {
    console.log("feature");
    featureButtonDown.classList.add("hidden");
    featureButtonUp.classList.remove("hidden");
    box1.classList.remove("hidden");
  } else {
    console.log("elseExcecuted");
    featureButtonDown.classList.remove("hidden");
    featureButtonUp.classList.add("hidden");
    box1.classList.add("hidden");
  }
});
company.addEventListener("click", () => {
  companyCounter += 1;
  if (companyCounter % 2 == 0) {
    console.log("company");
    companyButtonDown.classList.add("hidden");
    companyButtonUp.classList.remove("hidden");
    box2.classList.remove("hidden");
  } else {
    console.log("company else");
    companyButtonDown.classList.remove("hidden");
    companyButtonUp.classList.add("hidden");
    box2.classList.add("hidden");
  }
});

featureMobile.addEventListener("click", () => {
  featureCounterMobile += 1;
  if (featureCounterMobile % 2 == 0) {
    console.log("mobile feature");
    featureButtonDownMobile.classList.add("hidden");
    featureButtonUpMobile.classList.remove("hidden");
    box3.classList.remove("hidden");
  } else {
    console.log("mobile feature else");
    featureButtonDownMobile.classList.remove("hidden");
    featureButtonUpMobile.classList.add("hidden");
    box3.classList.add("hidden");
  }
});
