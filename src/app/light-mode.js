export function toggleLightMode() {
  let lightMode = localStorage.getItem("lightMode");
  // check if already visited and selected to light mode
  if (lightMode === "enable") {
    document.body.classList.add("light-mode");
    localStorage.setItem("lightMode", "enable");
  }
  // toggle light / dark mode
  document.querySelector(".theme-btn").addEventListener("click", () => {
    lightMode = localStorage.getItem("lightMode");
    if (lightMode !== "enable") {
      document.body.classList.add("light-mode");
      localStorage.setItem("lightMode", "enable");
    } else {
      document.body.classList.remove("light-mode");
      localStorage.setItem("lightMode", null);
    }
  });
}
