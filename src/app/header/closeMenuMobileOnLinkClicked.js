export const closeMenuMobileOnLinkClicked = () => {
  const navLinks = document.querySelectorAll('.nav__link');
  
  const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu')

  }

  navLinks.forEach(link => link.addEventListener('click', linkAction))
}