const navToggle = document.querySelector('.mobile-nav-toggle');
const navEl = document.querySelector('.nav');

navToggle.addEventListener('click', () => {
  const currentVisibility = navEl.getAttribute('data-visibility');

  if (currentVisibility === 'false') {
    navEl.setAttribute('data-visibility', 'true');
    navToggle.style.backgroundImage = 'url("../images/icon-hamburger.svg")';
  }

  if (currentVisibility === 'true') {
    navEl.setAttribute('data-visibility', 'false');
    navToggle.style.backgroundImage = 'url("../images/icon-close.svg")';
  }
});
