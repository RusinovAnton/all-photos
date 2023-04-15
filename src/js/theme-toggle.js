const htmlElement = document.getElementsByTagName("html")[0];

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

    const initialColorTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";

    this.changeTheme(initialColorTheme);

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) => {
        const colorScheme = e.matches ? "dark" : "light";
        this.changeTheme(colorScheme);
      });
  }

  get colorScheme() {
    return htmlElement.dataset.bsTheme;
  }

  changeTheme(colorScheme) {
    htmlElement.dataset.bsTheme = colorScheme;
  }

  toggleTheme() {
    this.changeTheme(this.colorScheme === "dark" ? "light" : "dark");
  }
}
