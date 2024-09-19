export const showScrollUpOnScroll = () => {
  const scrollUp = () => {
    const scrollUpDiv= document.getElementById('scroll-up');

    window.scrollY >= 350 ? scrollUpDiv.classList.add('show-scroll') : scrollUpDiv.classList.remove('show-scroll');
  };

  window.addEventListener('scroll', scrollUp);
};