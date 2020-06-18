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

document.getElementById('monstera').onmouseenter = function() {
  document.getElementById('monstera_text').style.display = 'block';
}

document.getElementById('monstera_text').onmouseleave = e => {
  e.target.style.display = 'none';
}

document.getElementById('fern_shrub').onmouseenter = function() {
  document.getElementById('fern_shrub_text').style.display = 'block';
}

document.getElementById('fern_shrub_text').onmouseleave = e => {
  e.target.style.display = 'none';
}

document.getElementById('leaf_phisalis').onmouseenter = function() {
  document.getElementById('leaf_phisalis_text').style.display = 'block';
}

document.getElementById('leaf_phisalis_text').onmouseleave = e => {
  e.target.style.display = 'none';
}
