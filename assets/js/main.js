const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');
const form = document.querySelector('.contact-form');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Your request has been captured in this demo form. Connect it to Formspree or your backend before launch.');
  });
}
