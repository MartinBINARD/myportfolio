import emailjs from '@emailjs/browser';

export const submitFormOnClick = () => {
  const contactForm = document.getElementById('contact-form');
  const contactMessage = document.getElementById('contact-message');
  const contactSubmitButton = document.getElementById('contact-submit');
  const contactSubmitButtonText = document.getElementById('contact-submit__text');

  const sendEmail = (e) => {
    e.preventDefault();
    contactSubmitButton.classList.add('loading');
    contactSubmitButtonText.classList.add('contact__button__text--loading');
    
    emailjs.sendForm(process.env.serviceID, process.env.templateID, '#contact-form', process.env.publicKey)
    .then(() => {
      contactMessage.textContent = 'Message envoyé avec succès ✅';

        setTimeout(() => {
          contactMessage.textContent = '';
        }, 5000)
        
        contactForm.reset();
      },
      () => {
        contactMessage.textContent = 'Message non envoyé ❌';
      })
      .finally(() => {
        contactSubmitButton.classList.remove('loading');
        contactSubmitButtonText.classList.remove('contact__button__text--loading');
        ('loading');
      })
  };

  contactForm.addEventListener('submit', sendEmail)
};