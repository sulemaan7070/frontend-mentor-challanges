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
let companyCounterMobile = 1;
const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const box3 = document.querySelector(".box3");
const box4 = document.querySelector(".box4");
const mobileFeature = document.getElementById("mobile-feature");
const companyFeature = document.getElementById("mobile-company");
const featureBox = document.querySelector(".mobile-box1");
const compnayBox = document.querySelector(".mobile-box2");
const companyButtonDownMobile = document.getElementById(
  "companyButtonDownMobile"
);
const companyButtonUpMobile = document.getElementById("companyButtonUpMobile");
/**
 * adding mobile menu
 */
mobileFeature.addEventListener("click", () => {
  featureCounterMobile += 1;
  if (featureCounterMobile % 2 == 0) {
    featureBox.classList.remove("hidden");
    featureButtonUpMobile.classList.remove("hidden");
    featureButtonDownMobile.classList.add("hidden");
  } else {
    featureBox.classList.add("hidden");
    featureButtonUpMobile.classList.add("hidden");
    featureButtonDownMobile.classList.remove("hidden");
  }
});

companyFeature.addEventListener("click", () => {
  console.log("mobile company");
  companyCounterMobile += 1;
  if (companyCounterMobile % 2 == 0) {
    compnayBox.classList.remove("hidden");
    companyButtonUpMobile.classList.remove("hidden");
    companyButtonDownMobile.classList.add("hidden");
  } else {
    compnayBox.classList.add("hidden");
    companyButtonUpMobile.classList.add("hidden");
    companyButtonDownMobile.classList.remove("hidden");
  }
});

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
