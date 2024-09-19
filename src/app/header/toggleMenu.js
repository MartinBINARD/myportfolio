export const toggleMenu = () => {
  const footer = document.querySelector('footer');
  const main = document.querySelector('main');
  const navMenu = document.getElementById('nav-menu');
  const navToggle = document.getElementById('nav-toggle');
  const navClose=document.getElementById('nav-close');

  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.add('show-menu')
    });
  }

  if (navClose) {
    navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu')
    });
  }

  window.addEventListener('click', (e) => {
    const isMenuOpen = navMenu.classList.contains('show-menu');
    const isClickOutSideOfHeader = main.contains(e.target) || footer.contains(e.target);

    if (isMenuOpen && isClickOutSideOfHeader) {
      navMenu.classList.remove('show-menu');
    }
  });
}