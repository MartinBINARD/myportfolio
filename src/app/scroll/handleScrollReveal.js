import ScrollReveal from 'scrollreveal';

export const handleScrollReveal = () => {
  const scroll = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 300,
    delay: 300,
  });

  scroll.reveal(`.home__data, .home__social, .contact__container, .footer__container`);
  scroll.reveal(`.home__image`, {origin: 'bottom'});
  scroll.reveal(`.about__data, .skills__data`, {origin: 'left'});
  scroll.reveal(`.about__image, .skills__content`, {origin: 'right'});
  scroll.reveal(`.portfolio__container`, {interval: 100});
};
