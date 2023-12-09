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

export function toggleLanguage() {
  const english = document.querySelector("#english");
  const french = document.querySelector("#french");
  const buttonSelectedLanguage = document.querySelector(".lang-selected");
  const activeLanguage = document.querySelector(".active-item-lang");
  let toggleLang = false;
  const body = document.querySelector("body");
  const menuLanguage = document.querySelector(".bloc-links");
  const blockMenudLanguage = document.querySelectorAll(".lang");
  const resumeLink = document.querySelector("#resume-link");
  const englishResume =
    "assets/img/CV_Martin_Binard_Front-end_Web_Developer.jpg";
  const frenchResume =
    "assets/img/CV_Martin_Binard_Développeur_Web_Front-end.jpg";
  // check if already visited and selected to a specific language
  // No need to reload English content if french has never been selected.
  // No subdomain for french content.
  if (
    localStorage.getItem("selectedLanguage") === "french" ||
    navigator.language === "fr" ||
    navigator.language === "fr-FR" ||
    navigator.language === "fr-CA" ||
    navigator.language === "fr-BE" ||
    navigator.language === "fr-CH" ||
    navigator.language === "fr-PF"
  ) {
    english.classList.remove("active-lang");
    french.classList.add("active-lang");
    resumeLink.href = frenchResume;
    localStorage.setItem("selectedLanguage", "french");
    setSpeech(frenchParagraphs, frenchForm);
  }

  if (localStorage.getItem("selectedLanguage") === "english") {
    french.classList.remove("active-lang");
    english.classList.add("active-lang");
    resumeLink.href = englishResume;
    localStorage.setItem("selectedLanguage", "english");
    setSpeech(englishParagraphs, englishForm);
  }
  // open and close dropdown menu when click on button
  buttonSelectedLanguage.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleLangDropDown();
  });
  // close dropdown when language is selected
  blockMenudLanguage.forEach((li) =>
    li.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleLangDropDown();
    })
  );

  // close dropdown menu when click outside of menu
  body.addEventListener("click", (e) => {
    e.stopPropagation();
    closeLangDropDown();
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
        localStorage.setItem("selectedLanguage", "french");
        resumeLink.href = frenchResume;
        setSpeech(frenchParagraphs, frenchForm);
      } else if (li.dataset.id === "english") {
        localStorage.setItem("selectedLanguage", "english");
        resumeLink.href = englishResume;
        setSpeech(englishParagraphs, englishForm);
      } else {
        return false;
      }
    })
  );

  // toggle dropdown language
  function toggleLangDropDown() {
    if (!toggleLang) {
      menuLanguage.style.height = `${menuLanguage.scrollHeight}px`;
      toggleLang = true;
    } else {
      menuLanguage.style.height = 0;
      toggleLang = false;
    }
  }

  function closeLangDropDown() {
    if (toggleLang) {
      menuLanguage.style.height = 0;
      toggleLang = false;
    }
  }
}
