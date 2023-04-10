import "../scss/styles.scss";
import "bootstrap";

import { ShowMore } from "./show-more.js";
import { InfiniteScroll } from "./infinite-scroll.js";
import { ThemeToggle } from "./theme-toggle.js";

const showMoreCollection = document.querySelectorAll(".card p");
new ShowMore(showMoreCollection);

const themeToggle = document.querySelectorAll(".theme-toggle");
new ThemeToggle(themeToggle);

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
