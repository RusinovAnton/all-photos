import "../scss/styles.scss";
import "bootstrap";

import { InfiniteScroll } from "./infinite-scroll.js";
import { ShowMore } from "./show-more.js";
import { ThemeToggle } from "./theme-toggle.js";

const navbar = document.getElementById("navbar-collapsible");

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
