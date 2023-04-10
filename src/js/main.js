import "../scss/styles.scss";

import { InfiniteScroll } from "./infinite-scroll.js";
import { ShowMore } from "./show-more.js";
import { ThemeToggle } from "./theme-toggle.js";

// Easter egg 🤡
const clickAudio = document.getElementById("click-audio");
clickAudio.volume = 0.33;
requestAnimationFrame(() => {
  [
    ...[...document.querySelectorAll("a")],
    ...[...document.querySelectorAll("button")],
  ].map((el) =>
    el.addEventListener("click", () => {
      clickAudio.play();
    })
  );
});
