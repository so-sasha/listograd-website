// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("header");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else if (window.pageXOffset > sticky) {
    header.classList.add("sticky");
  }
  else {
    header.classList.remove("sticky");
  }
}

document.getElementById('menu').onclick = e => {
  e.target.style.display = 'none';
  document.getElementById('menu_open').style.display = 'block';
  document.querySelector('menu_text').style.display = 'block';
}

document.getElementById('menu_open').onclick = e => {
  e.target.style.display = 'none';
  document.querySelector('menu_text').style.display = 'none';
  document.getElementById('menu').style.display = 'block';
}

document.getElementById('map').onclick = e => {
  e.target.style.textDecorationStyle = 'line-through';
}
