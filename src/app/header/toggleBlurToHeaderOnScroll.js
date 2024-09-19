export function toggleBlurToHeaderOnScroll () {
  const toggleBlurToHeaderOnHeight = () => {
    const VIEWPORT_HEIGHT_MINI = 50;
    const header = document.getElementById('header');

    window.scrollY >= VIEWPORT_HEIGHT_MINI ? header.classList.add('blur-header') : header.classList.remove('blur-header');
  }

  window.addEventListener('scroll', toggleBlurToHeaderOnHeight)
}