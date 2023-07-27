const $ = document;
const html = document.documentElement;
const themeColorsWrapper = $.querySelector(".theme-colors");
const colorInput = $.querySelector("input");

window.addEventListener("load", (e) => {
  let lastTheme = localStorage.getItem("theme");
  html.style.setProperty("--theme-color", lastTheme);
});

themeColorsWrapper.addEventListener("click", (e) => {
  if (e.target.classList.contains("theme-color")) {
    let themeColor = e.target.dataset.color;
    html.style.setProperty('--theme-color',themeColor)
    localStorage.setItem('theme',themeColor)
  }
});

// change theme with input color

colorInput.addEventListener("input", (e) => {
  themeColor = e.target.value;
  html.style.setProperty("--theme-color", themeColor);
  localStorage.setItem("theme", themeColor);
});
