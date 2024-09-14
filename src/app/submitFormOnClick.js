import emailjs from '@emailjs/browser';

export const submitFormOnClick = () => {
  const contactForm = document.getElementById('contact-form');
  const contactMessage = document.getElementById('contact-message');

  const sendEmail = (e) => {
    e.preventDefault();

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
  };

  contactForm.addEventListener('submit', sendEmail)
};