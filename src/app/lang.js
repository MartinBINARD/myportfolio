export function toggleLanguage() {
  const language = {
    eng: {
      greeting: "Hi, I'm",
      myDescriptionLeft:
        "I'm Javascript Web Developer mainly focused on interface of website in ",
      myDescriptionRight:
        " and also having skills in NodeJS and Express server.",
      download: "Download CV",
      aboutLeft: "About ",
      aboutRight: "me",
      aboutSubtitleLeft: "informations",
      aboutSubtitleRight: " about me",
      aboutDescription: "After contributing to the development of Archibald software under Quasar, Vuetify, NodeJS, Sequelize and MySQL. I want to bring my expertise in VueJs and deepen my web security skills acquired during my last experience.",
      frontendTitle: "Frontend Quasar, VueJS framework",
      frontendDescription:
        "I contributed to adding functionalities of a reactive and dynamic application with a Javascript framework such as Quasar based on VueJS.",
      backendDescription:
        "if you need to develop a REST API, i master the framework NodeJS, Express server with MongoDB or MySQL database through Sequelize library.",
      linuxTitle: "Linux environments, Arch linux, Debian",
      linuxDescription:
        "I'm familiar with UNIX commands and use a Linux Arch-based distribution on my daily computer.",
      portfolioTitleLeft: "My ",
      groupomaniaTitle: "Secure Social Network",
      groupomaniaDescription:
        "Groupomania, a private social network with admin privileges and secure database...",
      apiTitle: "REST API for a web application review",
      apiDescription:
        "Using CRUD operations for a gastronomic review application...",
      orinocoTitle: "E-commerce website in Javascript",
      orinocoDescription:
        "The customer can select different items and add it to its cart...",
      ohMyFoodTitle: "A french booking menu website",
      ohMyFoodDescription:
        "A mobile-first website with transition effects and load spinner...",
      contactTitleLeft: "contact ",
      contactTitleRight: "me",
      contactSubtitleLeft: "Drop me",
      contactSubtitleRight: " a message",
      contactSubtitleDescription:
        "I look forward to make my contribution within a development team and put my skills at your service.",
      languageTitle: "Languages :",
      languageDescription: "English, French",
      insertYourEmail: "Your email...",
      insertYourName: "Your Lastname & Firstname...",
      insertYourMessage: "Your message...",
      sendMessageButton: "Send message",
    },
    fr: {
      greeting: "Bonjour, je suis",
      myDescriptionLeft:
        "Je suis Développeur Web Javascript principalement axé sur l'interface de site Web en ",
      myDescriptionRight:
        " et j'ai aussi des compétences en NodeJS et serveur Express.",
      download: "Télécharger le CV",
      aboutLeft: "A propos de ",
      aboutRight: "moi",
      aboutSubtitleLeft: "informations",
      aboutSubtitleRight: " me concernant",
      aboutDescription:
        "Après avoir contribué au développement du logiciel Archibald sous Quasar, Vuetify, NodeJS, Sequelize et MySQL. Je souhaite apporter mon expertise en VueJs et approfondir mes compétences en sécurité web acquises au cours de ma dernière expérience.",
      frontendTitle: "Frontend Quasar, VueJS framework Javascript",
      frontendDescription:
        "J'ai contribué à l'ajout de fonctionnalités d'une application réactive et dynamique avec un framework Javascript tel que Quasar basé sur VueJS.",
      backendDescription:
        "Si vous avez besoin de développer une API REST, je maîtrise le framework NodeJS, serveur Express avec une base de données MongoDB ou MySQL via la librairie Sequelize.",
      linuxTitle: "Environnements Linux, Arch linux, Debian",
      linuxDescription:
        "Je connais les commandes UNIX et j'utilise quotidiennement une distribution basée sur Arch Linux sur mon ordinateur.",
      portfolioTitleLeft: "Mon ",
      groupomaniaTitle: "Réseau social sécurisé",
      groupomaniaDescription:
        "Groupomania, un réseau social privé avec privilèges d'administrateur et base de données sécurisée...",
      apiTitle: "API REST pour une revue d'application web",
      apiDescription:
        "Utilisation des opérations CRUD pour une application de revue gastronomique...",
      orinocoTitle: "Site e-commerce en Javascript",
      orinocoDescription:
        "Le client peut sélectionner différents articles et l'ajouter à son panier...",
      ohMyFoodTitle: "Un site de réservation de menus français",
      ohMyFoodDescription:
        "Un site Web mobile-first avec des effets de transition et un load spinner...",
      contactTitleLeft: "contactez ",
      contactTitleRight: "moi",
      contactSubtitleLeft: "Laissez-moi",
      contactSubtitleRight: " un message",
      contactSubtitleDescription:
        "J'ai hâte d'apporter ma contribution au sein d'une équipe de développement et de mettre mes compétences à votre service.",
      languageTitle: "Langues :",
      languageDescription: "Anglais, Français",
      insertYourEmail: "Votre email...",
      insertYourName: "Votre Nom & Prénom...",
      insertYourMessage: "Votre message...",
      sendMessageButton: "Envoyer le message",
    },
  };

  // display french content
  function setFrenchContent() {
    document.querySelector("#greeting").textContent = language.fr.greeting;
    document.querySelector("#my-description-part1").textContent =
      language.fr.myDescriptionLeft;
    document.querySelector("#my-description-part2").textContent =
      language.fr.myDescriptionRight;
    document.querySelector("#download").textContent = language.fr.download;
    document.querySelector("#about-left").textContent = language.fr.aboutLeft;
    document.querySelector("#about-right").textContent = language.fr.aboutRight;
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
    document.querySelector("#groupomania-title").textContent =
      language.fr.groupomaniaTitle;
    document.querySelector("#groupomania-description").textContent =
        language.fr.groupomaniaDescription;
    document.querySelector("#contact-title-left").textContent =
      language.fr.contactTitleLeft;
    document.querySelector("#contact-title-right").textContent =
      language.fr.contactTitleRight;
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
    document.getElementsByName("name")[0].placeholder =
      language.fr.insertYourName;
    document.getElementsByName("text")[0].placeholder =
      language.fr.insertYourMessage;
    document.querySelector("#send-message-btn").textContent =
      language.fr.sendMessageButton;
  }
  // display english content
  function setEnglishContent() {
    document.querySelector("#greeting").textContent = language.eng.greeting;
    document.querySelector("#my-description-part1").textContent =
      language.eng.myDescriptionLeft;
    document.querySelector("#my-description-part2").textContent =
      language.eng.myDescriptionRight;
    document.querySelector("#download").textContent = language.eng.download;
    document.querySelector("#about-left").textContent = language.eng.aboutLeft;
    document.querySelector("#about-right").textContent =
      language.eng.aboutRight;
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
    document.querySelector("#groupomania-title").textContent =
      language.eng.groupomaniaTitle;
    document.querySelector("#groupomania-description").textContent =
      language.eng.groupomaniaDescription;
    document.querySelector("#contact-title-left").textContent =
      language.eng.contactTitleLeft;
    document.querySelector("#contact-title-right").textContent =
      language.eng.contactTitleRight;
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
    document.getElementsByName("name")[0].placeholder =
      language.eng.insertYourName;
    document.getElementsByName("text")[0].placeholder =
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
  const englishResume = "assets/img/CV-BINARD_Martin_Web_Developer.jpg";
  const frenchResume = "assets/img/CV_BINARD_Martin_Développeur_Web.jpg";
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
  } else if (localStorage.getItem("selectedLanguage") === "english") {
    french.classList.remove("active-lang");
    english.classList.add("active-lang");
    resumeLink.href = englishResume;
    localStorage.setItem("selectedLanguage", "english");
    setEnglishContent();
  } else if (
    navigator.language !== "fr" ||
    navigator.language !== "fr-FR" ||
    navigator.language !== "fr-CA" ||
    navigator.language !== "fr-BE" ||
    navigator.language !== "fr-CH" ||
    navigator.language !== "fr-PF"
  ) {
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
    } else {
      menuLanguage.style.height = 0;
      toggleLang = false;
    }
  }
}
