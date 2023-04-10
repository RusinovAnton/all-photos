export class ThemeToggle {
  constructor(toggleCollection) {
    this.toggleCollection = toggleCollection;
    this.init();
  }

  init() {
    this.toggleCollection.forEach((node) => {
      node.addEventListener("click", () => {
        this.toggleTheme();
      });
    });
  }

  toggleTheme() {
    const htmlElement = document.getElementsByTagName("html")[0];
    htmlElement.dataset.bsTheme =
      htmlElement.dataset.bsTheme === "dark" ? "light" : "dark";
  }
}
