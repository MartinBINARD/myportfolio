function setLightMode() {
  document.body.classList.add("light-mode");
  localStorage.setItem("lightMode", "enable");
}

function unsetLightMode() {
  document.body.classList.remove("light-mode");
  localStorage.setItem("lightMode", null);
}

function checkLightMode(lightMode) {
  if (lightMode === "enable") {
    document.body.classList.add("light-mode");
    localStorage.setItem("lightMode", "enable");
  }
}

function onClickLightMode(lightMode) {
  const themeButton = document.querySelector(".theme-btn");

  themeButton.addEventListener("click", () => {
    lightMode = localStorage.getItem("lightMode");

    if (lightMode !== "enable") {
      setLightMode();
    } else {
      unsetLightMode();
    }
  });
}

export function handleLightMode() {
  let lightMode = localStorage.getItem("lightMode");
  checkLightMode(lightMode);
  onClickLightMode(lightMode);
}
