document.getElementById('header__nav__burger-btn').onclick = e => {
  e.target.classList.toggle('is-open');
  document.querySelector('.header__nav__menu').classList.toggle('is-open');
}
