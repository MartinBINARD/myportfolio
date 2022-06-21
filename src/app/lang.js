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
    document.getElementById("name-part1").textContent = language.fr.nameLeft;
    document.getElementById("name-part2").textContent = language.fr.nameRight;
    document.getElementById("my-description-part1").textContent =
      language.fr.myDescriptionLeft;
    document.getElementById("my-description-part2").textContent =
      language.fr.myDescriptionRight;
    document.getElementById("download").textContent = language.fr.download;
    document.getElementById("about-left").textContent = language.fr.aboutLeft;
    document.getElementById("about-right").textContent = language.fr.aboutRight;
    document.getElementById("about-background").textContent =
      language.fr.aboutBackground;
    document.getElementById("about-subtitle-left").textContent =
      language.fr.aboutSubtitleLeft;
    document.getElementById("about-subtitle-right").textContent =
      language.fr.aboutSubtitleRight;
    document.getElementById("about-description").textContent =
      language.fr.aboutDescription;
    document.getElementById("frontend-title").textContent =
      language.fr.frontendTitle;
    document.getElementById("frontend-description").textContent =
      language.fr.frontendDescription;
    document.getElementById("backend-description").textContent =
      language.fr.backendDescription;
    document.getElementById("linux-title").textContent = language.fr.linuxTitle;
    document.getElementById("linux-description").textContent =
      language.fr.linuxDescription;
    document.getElementById("portfolio-title-left").textContent =
      language.fr.portfolioTitleLeft;
    document.getElementById("portfolio-title-background").textContent =
      language.fr.portfolioTitleBackground;
    document.getElementById("groupomania-title").textContent =
      language.fr.groupomaniaTitle;
    document.getElementById("groupomania-description").textContent =
      language.fr.groupomaniaDescription;
    document.getElementById("api-title").textContent = language.fr.apiTitle;
    document.getElementById("api-description").textContent =
      language.fr.apiDescription;
    document.getElementById("orinoco-title").textContent =
      language.fr.orinocoTitle;
    document.getElementById("orinoco-description").textContent =
      language.fr.orinocoDescription;
    document.getElementById("ohmyfood-title").textContent =
      language.fr.ohMyFoodTitle;
    document.getElementById("ohmyfood-description").textContent =
      language.fr.ohMyFoodDescription;
    document.getElementById("contact-title-left").textContent =
      language.fr.contactTitleLeft;
    document.getElementById("contact-title-right").textContent =
      language.fr.contactTitleRight;
    document.getElementById("contact-title-background").textContent =
      language.fr.contactTitleBackground;
    document.getElementById("contact-subtitle-left").textContent =
      language.fr.contactSubtitleLeft;
    document.getElementById("contact-subtitle-right").textContent =
      language.fr.contactSubtitleRight;
    document.getElementById("contact-description").textContent =
      language.fr.contactSubtitleDescription;
    document.getElementById("language-title").textContent =
      language.fr.languageTitle;
    document.getElementById("language-description").textContent =
      language.fr.languageDescription;
    document.getElementsByName("email")[0].placeholder =
      language.fr.insertYourEmail;
    document.getElementsByName("title")[0].placeholder =
      language.fr.insertYourTitle;
    document.getElementsByName("message")[0].placeholder =
      language.fr.insertYourMessage;
    document.getElementById("send-message-btn").textContent =
      language.fr.sendMessageButton;
  }
  // display english content
  function setEnglishContent() {
    document.getElementById("name-part1").textContent = language.eng.nameLeft;
    document.getElementById("name-part2").textContent = language.eng.nameRight;
    document.getElementById("my-description-part1").textContent =
      language.eng.myDescriptionLeft;
    document.getElementById("my-description-part2").textContent =
      language.eng.myDescriptionRight;
    document.getElementById("download").textContent = language.eng.download;
    document.getElementById("about-left").textContent = language.eng.aboutLeft;
    document.getElementById("about-right").textContent =
      language.eng.aboutRight;
    document.getElementById("about-background").textContent =
      language.eng.aboutBackground;
    document.getElementById("about-subtitle-right").textContent =
      language.eng.aboutSubtitleLeft;
    document.getElementById("about-subtitle-right").textContent =
      language.eng.aboutSubtitleRight;
    document.getElementById("about-description").textContent =
      language.eng.aboutDescription;
    document.getElementById("frontend-title").textContent =
      language.eng.frontendTitle;
    document.getElementById("frontend-description").textContent =
      language.eng.frontendDescription;
    document.getElementById("backend-description").textContent =
      language.eng.backendDescription;
    document.getElementById("linux-title").textContent =
      language.eng.linuxTitle;
    document.getElementById("linux-description").textContent =
      language.eng.linuxDescription;
    document.getElementById("portfolio-title-left").textContent =
      language.eng.portfolioTitleLeft;
    document.getElementById("portfolio-title-background").textContent =
      language.eng.portfolioTitleBackground;
    document.getElementById("groupomania-title").textContent =
      language.eng.groupomaniaTitle;
    document.getElementById("groupomania-description").textContent =
      language.eng.groupomaniaDescription;
    document.getElementById("api-title").textContent = language.eng.apiTitle;
    document.getElementById("api-description").textContent =
      language.eng.apiDescription;
    document.getElementById("orinoco-title").textContent =
      language.eng.orinocoTitle;
    document.getElementById("orinoco-description").textContent =
      language.eng.orinocoDescription;
    document.getElementById("ohmyfood-title").textContent =
      language.eng.ohMyFoodTitle;
    document.getElementById("ohmyfood-description").textContent =
      language.eng.ohMyFoodDescription;
    document.getElementById("contact-title-left").textContent =
      language.eng.contactTitleLeft;
    document.getElementById("contact-title-right").textContent =
      language.eng.contactTitleRight;
    document.getElementById("contact-title-background").textContent =
      language.eng.contactTitleBackground;
    document.getElementById("contact-subtitle-left").textContent =
      language.eng.contactSubtitleLeft;
    document.getElementById("contact-subtitle-right").textContent =
      language.eng.contactSubtitleRight;
    document.getElementById("contact-description").textContent =
      language.eng.contactSubtitleDescription;
    document.getElementById("language-title").textContent =
      language.eng.languageTitle;
    document.getElementById("language-description").textContent =
      language.eng.languageDescription;
    document.getElementsByName("email")[0].placeholder =
      language.eng.insertYourEmail;
    document.getElementsByName("title")[0].placeholder =
      language.eng.insertYourTitle;
    document.getElementsByName("message")[0].placeholder =
      language.eng.insertYourMessage;
    document.getElementById("send-message-btn").textContent =
      language.eng.sendMessageButton;
  }
  const english = document.getElementById("english");
  const french = document.getElementById("french");
  const selectedLanguage = document.querySelector(".lang-selected");
  const activeLanguage = document.querySelector(".active-item-lang");
  let toggleLang;
  const menuLanguage = document.querySelector(".bloc-links");
  const blockMenudLanguage = document.querySelectorAll(".lang");
  const resumeLink = document.getElementById("resume-link");
  const englishResume =
    "assets/img/CV-BINARD_Martin_Frontend_Web_Developer.pdf";
  const frenchResume =
    "assets/img/CV_BINARD_Martin_Développeur_Web_Frontend.pdf";
  // check if already visited and selected to a specific language
  // No need to reload English content if french has never been selected.
  // No subdomain for french content.
  if (localStorage.getItem("selectedLanguage") === "french") {
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
