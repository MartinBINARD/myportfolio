import { englishForm, englishParagraphs } from "./englishSpeech";
import { frenchForm, frenchParagraphs } from "./frenchSpeech";

function setPlaceholder(languageForm) {
  languageForm.forEach((input) => {
    document.querySelector(input.id).placeholder = input.placeholder;
  });
}

function setTextContent(languageParagraphs) {
  languageParagraphs.forEach(
    (paragraph) =>
      (document.querySelector(paragraph.id).textContent = paragraph.content)
  );
}

function setSpeech(languageParagraphs, languageForm) {
  setPlaceholder(languageForm);
  setTextContent(languageParagraphs);
}

function toggleLanguageButtonClass(classLanguage) {
  const english = document.querySelector("#english");
  const french = document.querySelector("#french");

  if (classLanguage === "french") {
    english.classList.remove("active-lang");
    french.classList.add("active-lang");
  }

  if (classLanguage === "english") {
    french.classList.remove("active-lang");
    english.classList.add("active-lang");
  }
}

function toggleResume(language) {
  const resumeLink = document.querySelector("#resume-link");
  const englishResume =
    "assets/img/CV_Martin_Binard_Front-end_Web_Developer.jpg";
  const frenchResume =
    "assets/img/CV_Martin_Binard_Développeur_Web_Front-end.jpg";

  if (language === "french") {
    resumeLink.href = frenchResume;
  }

  if (language === "english") {
    resumeLink.href = englishResume;
  }
}

function translateFrench() {
  localStorage.setItem("selectedLanguage", "french");
  toggleResume("french");

  setSpeech(frenchParagraphs, frenchForm);
}

function translateEnglish() {
  localStorage.setItem("selectedLanguage", "english");
  toggleResume("english");

  setSpeech(englishParagraphs, englishForm);
}

function detectLanguageBrowser() {
  if (
    localStorage.getItem("selectedLanguage") === "french" ||
    navigator.language === "fr"
  ) {
    toggleLanguageButtonClass("french");
    translateFrench();
  }

  if (localStorage.getItem("selectedLanguage") === "english") {
    toggleLanguageButtonClass("english");
    translateEnglish();
  }
}

function closeLanguageMenu(menu) {
  menu.style.height = 0;
}

function openLanguageMenu(menu) {
  menu.style.height = `${menu.scrollHeight}px`;
}

function toggleLanguageMenu(menu) {
  if (menu.style.height === `${menu.scrollHeight}px`) {
    closeLanguageMenu(menu);
  } else {
    openLanguageMenu(menu);
  }
}

export function toggleLanguage() {
  const body = document.querySelector("body");
  const menuButton = document.querySelector(".lang-selected");
  const menuButtonActiveFlag = document.querySelector(".active-item-lang");
  const menu = document.querySelector(".bloc-links");
  const menuItems = document.querySelectorAll(".lang");

  // check if already visited and selected to a specific language
  // No need to reload English content if french has never been selected.
  // No subdomain for french content.
  detectLanguageBrowser();
  // open and close dropdown menu when click on button
  menuButton.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleLanguageMenu(menu);
  });
  // close dropdown when language is selected
  menuItems.forEach((item) =>
    item.addEventListener("click", (e) => {
      e.stopPropagation();
      closeLanguageMenu(menu);
    })
  );

  // close dropdown menu when click outside of menu
  body.addEventListener("click", (e) => {
    e.stopPropagation();
    closeLanguageMenu(menu);
  });

  // select language and load content
  menuItems.forEach((item) =>
    item.addEventListener("click", function () {
      menuButtonActiveFlag.classList.remove("active-item-lang");
      this.classList.add("active-item-lang");
      // display country flag selected
      document.querySelector(".active-lang").classList.remove("active-lang");
      document.getElementById(item.dataset.id).classList.add("active-lang");
      // display country selected in localstorage
      if (item.dataset.id === "french") {
        translateFrench();
      } else if (item.dataset.id === "english") {
        translateEnglish();
      } else {
        return false;
      }
    })
  );
}
