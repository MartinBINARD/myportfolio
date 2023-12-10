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

function setTranslation(language) {
  if (language === "french") {
    translateFrench();
  }

  if (language === "english") {
    translateEnglish();
  }
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

function onClickMenuButton(button, menuContainer) {
  button.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleLanguageMenu(menuContainer);
  });
}

function setButtonActiveClass(id) {
  const menuButtonActive = document.querySelector(".active-lang");
  const languageSelected = document.getElementById(id);

  menuButtonActive.classList.remove("active-lang");
  languageSelected.classList.add("active-lang");
}

function setMenuItemActiveClass(item) {
  const menuItemActive = document.querySelector(".active-item-lang");
  menuItemActive.classList.remove("active-item-lang");
  item.classList.add("active-item-lang");
}

function onClickMenuItems(menuItems, menuContainer) {
  menuItems.forEach((item) =>
    item.addEventListener("click", function (e) {
      e.stopPropagation();
      setMenuItemActiveClass(this);
      setButtonActiveClass(item.dataset.id);

      setTranslation(item.dataset.id);
      closeLanguageMenu(menuContainer);
    })
  );
}

function onClickBody(body, menuContainer) {
  body.addEventListener("click", (e) => {
    e.stopPropagation();
    closeLanguageMenu(menuContainer);
  });
}

export function handleLanguageMenu() {
  const body = document.querySelector("body");
  const menuButton = document.querySelector(".lang-selected");
  const menuContainer = document.querySelector(".bloc-links");
  const menuItems = document.querySelectorAll(".lang");

  detectLanguageBrowser();

  onClickMenuButton(menuButton, menuContainer);

  onClickMenuItems(menuItems, menuContainer);

  onClickBody(body, menuContainer);
}
