const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
let currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark" || (!currentTheme && prefersDarkScheme.matches)) {
  document.documentElement.classList.add("dark-theme");
} else {
  document.documentElement.classList.remove("dark-theme");
}

function setTheme(theme) {
  const root = document.documentElement;
  if (theme === "dark") {
    root.style.setProperty("--body-color", "#0e1b13");
    root.style.setProperty("--font-color", "#fbfefc");
    root.style.setProperty("--secound-color", "#057e46");
    root.style.setProperty("--secound-color-light", "#0d9f5e");
    root.style.setProperty("--title-color", "#fbfefc");
    root.style.setProperty("--input-color", "#274f33");
    root.style.setProperty("--progress-bar-color", "#4a6355");
    root.style.setProperty("--footer-color", "#fbfefc");
  } else {
    root.style.setProperty("--body-color", "#fbfefc");
    root.style.setProperty("--font-color", "#6a7c70");
    root.style.setProperty("--secound-color", "#43cb75");
    root.style.setProperty("--secound-color-light", "#57e089");
    root.style.setProperty("--title-color", "#000");
    root.style.setProperty("--input-color", "#eefcf3");
    root.style.setProperty("--progress-bar-color", "#9fada4");
    root.style.setProperty("--footer-color", "#0e1b13");
  }
}

function toggleTheme() {
  if (currentTheme === "dark") {
    document.documentElement.classList.remove("dark-theme");
    currentTheme = "light";
    setTheme("light");
  } else {
    document.documentElement.classList.add("dark-theme");
    currentTheme = "dark";
    setTheme("dark");
  }

  localStorage.setItem("theme", currentTheme);
}

document.querySelector("#theme-toggle").addEventListener("click", toggleTheme);

document.addEventListener("DOMContentLoaded", () => {
  const localTheme = localStorage.getItem("theme") || "light";
  setTheme(localTheme);
});
