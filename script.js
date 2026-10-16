const root = document.documentElement;

try {
  root.dataset.theme = localStorage.getItem("theme") === "light" ? "light" : "dark";
} catch {
  root.dataset.theme = "dark";
}

document.addEventListener("DOMContentLoaded", () => {
  const themeButton = document.getElementById("lightSwitch");

  function updateThemeButton() {
    const isLight = root.dataset.theme === "light";
    themeButton.textContent = isLight ? "Dark mode" : "Light mode";
    themeButton.setAttribute(
      "aria-label",
      isLight ? "Switch to dark mode" : "Switch to light mode"
    );
  }

  themeButton.addEventListener("click", () => {
    const newTheme = root.dataset.theme === "light" ? "dark" : "light";
    root.dataset.theme = newTheme;

    try {
      localStorage.setItem("theme", newTheme);
    } catch {
      // The toggle still works if the browser blocks storage.
    }

    updateThemeButton();
  });

  updateThemeButton();
});
