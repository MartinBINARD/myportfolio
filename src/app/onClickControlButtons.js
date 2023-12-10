// select section with control buttons

function setButtonActiveClass(button) {
  const buttonControl = document.querySelector(".active-btn");

  buttonControl.classList.remove("active-btn");
  button.classList.add("active-btn");
}

function setSectionActiveClass(id) {
  const section = document.querySelector(".active");
  const sectionSelected = document.getElementById(id);

  section.classList.remove("active");
  sectionSelected.classList.add("active");
}
export function onClickControlButtons() {
  [...document.querySelectorAll(".control")].forEach((button) => {
    button.addEventListener("click", function () {
      setButtonActiveClass(this);
      setSectionActiveClass(button.dataset.id);
    });
  });
}
