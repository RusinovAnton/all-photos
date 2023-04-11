import "../scss/styles.scss";
import "bootstrap";

import "./photos-list/controller";

import { ThemeToggle } from "./theme-toggle.js";
import { PhotosListController } from "./photos-list/controller";

const themeToggle = document.querySelectorAll(".theme-toggle");
new ThemeToggle(themeToggle);

const loadMoreBtn = document.getElementById("load-more");
const photosListContainer = document.getElementById("photos-list-container");

const controller = new PhotosListController(loadMoreBtn, photosListContainer);

// Easter egg 🤡
const clickAudio = document.getElementById("click-audio");
clickAudio.volume = 0.33;
requestAnimationFrame(() => {
  [...document.querySelectorAll("a")].map((el) =>
    el.addEventListener("click", () => {
      clickAudio.play();
    })
  );
});
