export function toggleLanguage() {
  const language = {
    eng: {
      nameLeft: "Hi, I'm ",
      nameRight: " VueJS Frontend Web Developer.",
      myDescriptionLeft:
        "I'm a Javascript Web Developer mainly focused on interface of website in ",
      myDescriptionRight:
        " and also having skills in NodeJS and Express server.",
      download: "Download CV",
      aboutLeft: "About ",
      aboutRight: "me",
      aboutBackground: "about me",
      aboutSubtitleLeft: "informations",
      aboutSubtitleRight: " about me",
      aboutDescription:
        "After created my last project, a social private network using VueJS, NodeJS, Sequelize and MySQL. I would like to bring my expertise in VueJs and deepen my skills in TDD.",
      frontendTitle: "Frontend VueJS, Javascript framework, HTML, CSS, SASS",
      frontendDescription:
        "I'm able to create reactive and dymanic applications with Javascript framework such as VueJS or simple reponsive web pages with HTML, CSS, SASS and vanilla Javascript.",
      backendDescription:
        "if you need to develop a REST API, i master the framework NodeJS, Express server communicating with MongoDB or MySQL database through Sequelize library.",
      linuxTitle: "Linux environments, Arch linux, Debian",
      linuxDescription:
        "I'm familiar with UNIX commands and use a Linux Arch-based distribution on my daily computer.",
      portfolioTitleLeft: "My ",
      portfolioTitleBackground: "my portfolio",
      groupomaniaTitle: "Secure Social Network",
      groupomaniaDescription:
        "Groupomania, a private social network using VueJS 3, nodeJS, express, MySQL & Sequelize...",
      apiTitle: "REST API with NodeJS",
      apiDescription:
        "Using CRUD operations for a gastronomic review application...",
      orinocoTitle: "E-commerce website in Javascript",
      orinocoDescription:
        "The customer can select different items and add it to its cart...",
      ohMyFoodTitle: "A french booking menu website",
      ohMyFoodDescription:
        "A mobile-first website with transition effects and load spinner with CSS & SASS...",
      contactTitleLeft: "contact ",
      contactTitleRight: "me",
      contactTitleBackground: "contact me",
      contactSubtitleLeft: "Drop me",
      contactSubtitleRight: " a message",
      contactSubtitleDescription:
        "I look forward to make my contribution within a development team and put my skills at your service.",
      languageTitle: "Languages :",
      languageDescription: "English, French",
      insertYourEmail: "Insert your email...",
      insertYourTitle: "Insert your title...",
      insertYourMessage: "Insert your message...",
      sendMessageButton: "Send message",
    },
    fr: {
      nameLeft: "Bonjour, je suis ",
      nameRight: " Développeur Web Frontend VueJS.",
      myDescriptionLeft:
        "Je suis un développeur Web Javascript principalement axé sur l'interface de site Web en ",
      myDescriptionRight:
        " et j'ai aussi des compétences en NodeJS et serveur Express.",
      download: "Télécharger le CV",
      aboutLeft: "A propos de ",
      aboutRight: "moi",
      aboutBackground: "A propos de moi",
      aboutSubtitleLeft: "informations",
      aboutSubtitleRight: " me concernant",
      aboutDescription:
        "Après avoir créé mon dernier projet, un réseau social privé utilisant VueJS, NodeJS, Sequelize et MySQL. Je souhaite apporter mon expertise en VueJs et approfondir mes compétences en TDD.",
      frontendTitle: "Frontend VueJS, framework Javascript, HTML, CSS, SASS",
      frontendDescription:
        "Je suis capable de créer des applications réactives et dynamiques avec un framework Javascript tel que VueJS ou de simples pages web réactives avec HTML, CSS, SASS et Javascript natif.",
      backendDescription:
        "Si vous avez besoin de développer une API REST, je maîtrise le framework NodeJS, serveur Express communiquant avec la base de données MongoDB ou MySQL via la librairie Sequelize.",
      linuxTitle: "Environnements Linux, Arch linux, Debian",
      linuxDescription:
        "Je connais les commandes UNIX et j'utilise quotidiennement une distribution basée sur Arch Linux sur mon ordinateur.",
      portfolioTitleLeft: "Mon ",
      portfolioTitleBackground: "mon portfolio",
      groupomaniaTitle: "Réseau social sécurisé",
      groupomaniaDescription:
        "Groupomania, un réseau social privé utilisant VueJS 3, nodeJS, express, MySQL & Sequelize...",
      apiTitle: "API REST avec NodeJS",
      apiDescription:
        "Utilisation des opérations CRUD pour une application de revue gastronomique...",
      orinocoTitle: "Site e-commerce en Javascript",
      orinocoDescription:
        "Le client peut sélectionner différents articles et l'ajouter à son panier...",
      ohMyFoodTitle: "Un site de réservation de menus français",
      ohMyFoodDescription:
        "Un site Web mobile-first avec des effets de transition et un load spinner avec CSS & SASS...",
      contactTitleLeft: "contactez ",
      contactTitleRight: "moi",
      contactTitleBackground: "Contactez moi",
      contactSubtitleLeft: "Laissez-moi",
      contactSubtitleRight: " un message",
      contactSubtitleDescription:
        "J'ai hâte d'apporter ma contribution au sein d'une équipe de développement et de mettre mes compétences à votre service.",
      languageTitle: "Langues :",
      languageDescription: "Anglais, Français",
      insertYourEmail: "Insérez votre email...",
      insertYourTitle: "Insérez votre titre...",
      insertYourMessage: "Insérez votre message...",
      sendMessageButton: "Envoyer le message",
    },
  };

  // display french content
  function setFrenchContent() {
    document.querySelector("#name-part1").textContent = language.fr.nameLeft;
    document.querySelector("#name-part2").textContent = language.fr.nameRight;
    document.querySelector("#my-description-part1").textContent =
      language.fr.myDescriptionLeft;
    document.querySelector("#my-description-part2").textContent =
      language.fr.myDescriptionRight;
    document.querySelector("#download").textContent = language.fr.download;
    document.querySelector("#about-left").textContent = language.fr.aboutLeft;
    document.querySelector("#about-right").textContent = language.fr.aboutRight;
    document.querySelector("#about-background").textContent =
      language.fr.aboutBackground;
    document.querySelector("#about-subtitle-left").textContent =
      language.fr.aboutSubtitleLeft;
    document.querySelector("#about-subtitle-right").textContent =
      language.fr.aboutSubtitleRight;
    document.querySelector("#about-description").textContent =
      language.fr.aboutDescription;
    document.querySelector("#frontend-title").textContent =
      language.fr.frontendTitle;
    document.querySelector("#frontend-description").textContent =
      language.fr.frontendDescription;
    document.querySelector("#backend-description").textContent =
      language.fr.backendDescription;
    document.querySelector("#linux-title").textContent = language.fr.linuxTitle;
    document.querySelector("#linux-description").textContent =
      language.fr.linuxDescription;
    document.querySelector("#portfolio-title-left").textContent =
      language.fr.portfolioTitleLeft;
    document.querySelector("#portfolio-title-background").textContent =
      language.fr.portfolioTitleBackground;
    document.querySelector("#groupomania-title").textContent =
      language.fr.groupomaniaTitle;
    document.querySelector("#groupomania-description").textContent =
      language.fr.groupomaniaDescription;
    document.querySelector("#api-title").textContent = language.fr.apiTitle;
    document.querySelector("#api-description").textContent =
      language.fr.apiDescription;
    document.querySelector("#orinoco-title").textContent =
      language.fr.orinocoTitle;
    document.querySelector("#orinoco-description").textContent =
      language.fr.orinocoDescription;
    document.querySelector("#ohmyfood-title").textContent =
      language.fr.ohMyFoodTitle;
    document.querySelector("#ohmyfood-description").textContent =
      language.fr.ohMyFoodDescription;
    document.querySelector("#contact-title-left").textContent =
      language.fr.contactTitleLeft;
    document.querySelector("#contact-title-right").textContent =
      language.fr.contactTitleRight;
    document.querySelector("#contact-title-background").textContent =
      language.fr.contactTitleBackground;
    document.querySelector("#contact-subtitle-left").textContent =
      language.fr.contactSubtitleLeft;
    document.querySelector("#contact-subtitle-right").textContent =
      language.fr.contactSubtitleRight;
    document.querySelector("#contact-description").textContent =
      language.fr.contactSubtitleDescription;
    document.querySelector("#language-title").textContent =
      language.fr.languageTitle;
    document.querySelector("#language-description").textContent =
      language.fr.languageDescription;
    document.getElementsByName("email")[0].placeholder =
      language.fr.insertYourEmail;
    document.getElementsByName("title")[0].placeholder =
      language.fr.insertYourTitle;
    document.getElementsByName("message")[0].placeholder =
      language.fr.insertYourMessage;
    document.querySelector("#send-message-btn").textContent =
      language.fr.sendMessageButton;
  }
  // display english content
  function setEnglishContent() {
    document.querySelector("#name-part1").textContent = language.eng.nameLeft;
    document.querySelector("#name-part2").textContent = language.eng.nameRight;
    document.querySelector("#my-description-part1").textContent =
      language.eng.myDescriptionLeft;
    document.querySelector("#my-description-part2").textContent =
      language.eng.myDescriptionRight;
    document.querySelector("#download").textContent = language.eng.download;
    document.querySelector("#about-left").textContent = language.eng.aboutLeft;
    document.querySelector("#about-right").textContent =
      language.eng.aboutRight;
    document.querySelector("#about-background").textContent =
      language.eng.aboutBackground;
    document.querySelector("#about-subtitle-right").textContent =
      language.eng.aboutSubtitleLeft;
    document.querySelector("#about-subtitle-right").textContent =
      language.eng.aboutSubtitleRight;
    document.querySelector("#about-description").textContent =
      language.eng.aboutDescription;
    document.querySelector("#frontend-title").textContent =
      language.eng.frontendTitle;
    document.querySelector("#frontend-description").textContent =
      language.eng.frontendDescription;
    document.querySelector("#backend-description").textContent =
      language.eng.backendDescription;
    document.querySelector("#linux-title").textContent =
      language.eng.linuxTitle;
    document.querySelector("#linux-description").textContent =
      language.eng.linuxDescription;
    document.querySelector("#portfolio-title-left").textContent =
      language.eng.portfolioTitleLeft;
    document.querySelector("#portfolio-title-background").textContent =
      language.eng.portfolioTitleBackground;
    document.querySelector("#groupomania-title").textContent =
      language.eng.groupomaniaTitle;
    document.querySelector("#groupomania-description").textContent =
      language.eng.groupomaniaDescription;
    document.querySelector("#api-title").textContent = language.eng.apiTitle;
    document.querySelector("#api-description").textContent =
      language.eng.apiDescription;
    document.querySelector("#orinoco-title").textContent =
      language.eng.orinocoTitle;
    document.querySelector("#orinoco-description").textContent =
      language.eng.orinocoDescription;
    document.querySelector("#ohmyfood-title").textContent =
      language.eng.ohMyFoodTitle;
    document.querySelector("#ohmyfood-description").textContent =
      language.eng.ohMyFoodDescription;
    document.querySelector("#contact-title-left").textContent =
      language.eng.contactTitleLeft;
    document.querySelector("#contact-title-right").textContent =
      language.eng.contactTitleRight;
    document.querySelector("#contact-title-background").textContent =
      language.eng.contactTitleBackground;
    document.querySelector("#contact-subtitle-left").textContent =
      language.eng.contactSubtitleLeft;
    document.querySelector("#contact-subtitle-right").textContent =
      language.eng.contactSubtitleRight;
    document.querySelector("#contact-description").textContent =
      language.eng.contactSubtitleDescription;
    document.querySelector("#language-title").textContent =
      language.eng.languageTitle;
    document.querySelector("#language-description").textContent =
      language.eng.languageDescription;
    document.getElementsByName("email")[0].placeholder =
      language.eng.insertYourEmail;
    document.getElementsByName("title")[0].placeholder =
      language.eng.insertYourTitle;
    document.getElementsByName("message")[0].placeholder =
      language.eng.insertYourMessage;
    document.querySelector("#send-message-btn").textContent =
      language.eng.sendMessageButton;
  }
  const english = document.querySelector("#english");
  const french = document.querySelector("#french");
  const selectedLanguage = document.querySelector(".lang-selected");
  const activeLanguage = document.querySelector(".active-item-lang");
  let toggleLang;
  const menuLanguage = document.querySelector(".bloc-links");
  const blockMenudLanguage = document.querySelectorAll(".lang");
  const resumeLink = document.querySelector("#resume-link");
  const englishResume =
    "assets/img/CV-BINARD_Martin_Frontend_Web_Developer.pdf";
  const frenchResume =
    "assets/img/CV_BINARD_Martin_Développeur_Web_Frontend.pdf";
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
    setFrenchContent();
  } else if (
    localStorage.getItem("selectedLanguage") === "english" ||
    navigator.language !== "fr" ||
    navigator.language !== "fr-FR" ||
    navigator.language !== "fr-CA" ||
    navigator.language !== "fr-BE" ||
    navigator.language !== "fr-CH" ||
    navigator.language !== "fr-PF"
  ) {
    french.classList.remove("active-lang");
    english.classList.add("active-lang");
    resumeLink.href = englishResume;
    localStorage.setItem("selectedLanguage", "english");
    setEnglishContent();
  } else {
    console.log("No language selected !");
  }
  // open and close dropdown menu
  selectedLanguage.addEventListener("click", toggleLangDropDown);
  // close dropdown when language is selected
  blockMenudLanguage.forEach((li) =>
    li.addEventListener("click", toggleLangDropDown)
  );
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
        setFrenchContent();
      } else if (li.dataset.id === "english") {
        localStorage.setItem("selectedLanguage", "english");
        resumeLink.href = englishResume;
        setEnglishContent();
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
      return;
    } else {
      menuLanguage.style.height = 0;
      toggleLang = false;
    }
  }
}
