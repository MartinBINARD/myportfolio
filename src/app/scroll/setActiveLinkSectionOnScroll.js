export const setActiveLinkSectionOnScroll = () => {
  const sections = document.querySelectorAll('section[id]');

  const scrollActive = () => {
    const scrollY = window.scrollY || document.body.scrollTop;
    const HEADER_HEIGHT = 58;

    sections.forEach((current) => {
      const sectionTop = current.offsetTop - HEADER_HEIGHT;
      const sectionHeight = current.offsetHeight;
      const sectionBottom = sectionTop + sectionHeight;
      const sectionId = current.getAttribute('id');
      const sectionNavLink = document.querySelector(`.nav__menu a[href="#${sectionId}"]`);
      
      if (scrollY > sectionTop && scrollY <= sectionBottom) {
        sectionNavLink.classList.add('active-link');
      } else {
        sectionNavLink.classList.remove('active-link');
      }
    });
  };

  window.addEventListener('scroll', scrollActive);
};
