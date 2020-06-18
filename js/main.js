document.getElementById('header__nav__burger-btn').onclick = e => {
  e.target.classList.toggle('is-open');
  document.querySelector('.header__nav__menu').classList.toggle('is-open');
}

document.getElementById('poster').onmouseenter = e => {
  e.target.style.display = 'none';
  document.getElementById('poster_hover').style.display = 'block';
}

document.getElementById('poster_hover').onmouseleave = e => {
  e.target.style.display = 'none';
  document.getElementById('poster').style.display = 'block';
}

document.getElementById('guide').onmouseenter = e => {
  e.target.style.display = 'none';
  document.getElementById('guide_hover').style.display = 'block';
}

document.getElementById('guide_hover').onmouseleave = e => {
  e.target.style.display = 'none';
  document.getElementById('guide').style.display = 'block';
}
