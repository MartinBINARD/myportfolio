const langMenu = document.querySelector(".lang-menu");
const blocLinks = document.querySelector(".bloc-links");
const langSelected = document.querySelector(".lang-selected");
const langItems = document.querySelectorAll(".lang");
const imgSelected = document.querySelector(".img-selected");
let toggleLang;
const language = {
  eng: {
    nameLeft: "Hi, I'm ",
    nameRight: " VueJS Frontend Web Developer.",
    myDescriptionLeft:
      "I'm a Javascript Web Developer mainly focused on interface of website in ",
    myDescriptionRight: " and also having skills in NodeJS and Express server.",
    download: "Download CV",
    aboutLeft: "About ",
    aboutRight: "me",
    aboutBackground: "about me",
    aboutSubtitleLeft: "informations",
    aboutSubtitleRight: " about me"
  },
  fr: {
    nameLeft: "Bonjour, je suis ",
    nameRight: " Développeur Web Frontend VueJS.",
    myDescriptionLeft:
      "Je suis un développeur Web Javascript principalement axé sur l'interface de site Web en ",
    myDescriptionRight: " et j'ai aussi des compétences en NodeJS et serveur Express.",
    download: "Télécharger le CV",
    aboutLeft: "A propos de ",
    aboutRight: "moi",
    aboutBackground: "A propos de moi",
    aboutSubtitleLeft: "information",
    aboutSubtitleRight: " me concernant"
  },
};
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
    // display country flag selected
    document.querySelector(".active-lang").classList.remove("active-lang");
    document.getElementById(li.dataset.id).classList.add("active-lang");
    // display country selected in localstorage
    if (li.dataset.id == "french") {
      localStorage.setItem("selectedLanguage", "french");
    } else {
      localStorage.setItem("selectedLanguage", "english");
    }
    // display language content
    setLanguageContent();
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
// display language content
function setLanguageContent() {
  if (localStorage.getItem("selectedLanguage") == "french") {
    console.log("in french please !");
    document.querySelector(".name-part1").textContent = language.fr.nameLeft;
    document.querySelector(".name-part2").textContent = language.fr.nameRight;
    document.querySelector(".my-description-part1").textContent = language.fr.myDescriptionLeft;
    document.querySelector(".my-description-part2").textContent = language.fr.myDescriptionRight;
    document.querySelector(".btn-text").textContent = language.fr.download;
    document.querySelector(".about-left").textContent = language.fr.aboutLeft;
    document.querySelector(".about-right").textContent = language.fr.aboutRight;
    document.querySelector(".about-background").textContent = language.fr.aboutBackground;
    document.querySelector(".about-subtitle-left").textContent = language.fr.aboutSubtitleLeft;
  } else if (localStorage.getItem("selectedLanguage") == "english") {
    console.log("in english please !");
    document.querySelector(".name-part1").textContent = language.eng.nameLeft;
    document.querySelector(".name-part2").textContent = language.eng.nameRight;
    document.querySelector(".my-description-part1").textContent = language.eng.myDescriptionLeft;
    document.querySelector(".my-description-part2").textContent = language.eng.myDescriptionRight;
    document.querySelector(".btn-text").textContent = language.eng.download;
    document.querySelector(".about-left").textContent = language.eng.aboutLeft;
    document.querySelector(".about-right").textContent = language.fr.aboutRight;
    document.querySelector(".about-background").textContent = language.eng.aboutBackground;
    document.querySelector(".about-subtitle-right").textContent = language.eng.aboutSubtitleLeft;

  } else {
    console.log("no language selected !");
  }
}
