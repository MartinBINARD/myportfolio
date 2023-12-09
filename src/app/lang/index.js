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

function closeLanguageMenu(isOpen, menu) {
  menu.style.height = 0;
  isOpen = false;
}

function openLanguageMenu(isOpen, menu) {
  menu.style.height = `${menu.scrollHeight}px`;
  isOpen = true;
}

function toggleLanguageMenu(isOpen, menu) {
  if (isOpen) {
    closeLanguageMenu(isOpen, menu);
  } else {
    openLanguageMenu(isOpen, menu);
  }
}

export function toggleLanguage() {
  const body = document.querySelector("body");
  const buttonSelectedLanguage = document.querySelector(".lang-selected");
  const activeLanguage = document.querySelector(".active-item-lang");
  let isOpen = false;
  const menu = document.querySelector(".bloc-links");
  const blockMenudLanguage = document.querySelectorAll(".lang");

  // check if already visited and selected to a specific language
  // No need to reload English content if french has never been selected.
  // No subdomain for french content.
  detectLanguageBrowser();
  // open and close dropdown menu when click on button
  buttonSelectedLanguage.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleLanguageMenu(isOpen, menu);
  });
  // close dropdown when language is selected
  blockMenudLanguage.forEach((li) =>
    li.addEventListener("click", (e) => {
      e.stopPropagation();
      closeLanguageMenu(isOpen, menu);
    })
  );

  // close dropdown menu when click outside of menu
  body.addEventListener("click", (e) => {
    e.stopPropagation();
    closeLanguageMenu(isOpen, menu);
  });

  // select language and load content
  blockMenudLanguage.forEach((li) =>
    li.addEventListener("click", function () {
      activeLanguage.classList.remove("active-item-lang");
      this.classList.add("active-item-lang");
      // display country flag selected
      document.querySelector(".active-lang").classList.remove("active-lang");
      document.getElementById(li.dataset.id).classList.add("active-lang");
      // display country selected in localstorage
      if (li.dataset.id === "french") {
        translateFrench();
      } else if (li.dataset.id === "english") {
        translateEnglish();
      } else {
        return false;
      }
    })
  );
}
