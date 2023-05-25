function toggleGamingMode(checked) {
  window.customTheme = checked ? "gaming" : "work";

  Array.from(
    document.getElementsByClassName(`show-${window.customTheme}`)
  ).forEach((item) => {
    item.style.display = "inline-block";
  });

  Array.from(
    document.getElementsByClassName(
      `show-${window.customTheme === "work" ? "gaming" : "work"}`
    )
  ).forEach((item) => {
    item.style.display = "none";
  });

  document
    .getElementById(`${window.customTheme}-text`)
    .classList.add("mode-active");
  document
    .getElementById(window.customTheme === "work" ? "gaming-text" : "work-text")
    .classList.remove("mode-active");
}

toggleGamingMode(false);
