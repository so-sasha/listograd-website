document.getElementById('header__nav__burger-btn').onclick = e => {
  e.target.classList.toggle('is-open');
  document.querySelector('.header__nav__menu').classList.toggle('is-open');
}

document.getElementById('plane').onmouseenter = function() {
  document.getElementById('plane_text').style.display = 'block';
}

document.getElementById('plane_text').onmouseleave = e => {
  e.target.style.display = 'none';
}
