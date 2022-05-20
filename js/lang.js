const langMenu = document.querySelector(".lang-menu");
const blocLinks = document.querySelector(".bloc-links");
const langSelected = document.querySelector(".lang-selected");
const langItems = document.querySelectorAll(".lang");
const imgSelected = document.querySelector(".img-selected");
let toggleLang;
// open and close dropdown menu
langSelected.addEventListener("click", toggleLangDropDown);
// close dropdown when language is selected
langItems.forEach((li) => li.addEventListener("click", toggleLangDropDown));
// select language
langItems.forEach((li) =>
  li.addEventListener("click", function () {
    document
      .querySelector(".active-item-lang")
      .classList.remove("active-item-lang");
    this.classList.add("active-item-lang");
    document.querySelector(".active-lang").classList.remove("active-lang");
    document.getElementById(li.dataset.id).classList.add("active-lang");
  })
);
// toggle dropdown language
function toggleLangDropDown() {
  if (!toggleLang) {
    blocLinks.style.height = `${blocLinks.scrollHeight}px`;
    toggleLang = true;
    return;
  } else {
    blocLinks.style.height = 0;
    toggleLang = false;
  }
}
