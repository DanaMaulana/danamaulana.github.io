// ripples buttons
const buttonsNav = document.querySelectorAll('a');
buttonsNav.forEach(btn => {
  btn.addEventListener('click', function (e) {

    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;

    let ripples = document.createElement('span');
    ripples.style.left = x + 'px';
    ripples.style.top = y + 'px';
    this.appendChild(ripples);

    setTimeout(() => {
      ripples.remove();
    }, 1000);

  });
});

// toggle button
const toggle = document.getElementById('toggle');
const body = document.querySelector('body');
const about = document.getElementById('about');
const skills = document.getElementById('skills');
const portfolio = document.getElementById('portfolio');
const contact = document.getElementById('contact');
toggle.onclick = function () {
  toggle.classList.toggle('active');
  body.classList.toggle('active');
  about.classList.toggle('active');
  skills.classList.toggle('active');
  portfolio.classList.toggle('active');
  contact.classList.toggle('active');
}

// draggimg
// const slider = document.querySelector('.certificate-container');
// const certificateCard = document.querySelector('.certificate-card');

// let pressed = false;
// let startX;
// let x;

// slider.addEventListener('mousedown', (e) => {
//   pressed = true;
//   startX = e.offsetX - certificateCard.offsetLeft;
//   slider.style.cursor = 'grabbing';
// });

// slider.addEventListener('mouseenter', () => {
//   slider.style.cursor = 'grab';
// });

// slider.addEventListener('mouseup', () => {
//   slider.style.cursor = 'grab';
// });

// slider.addEventListener('mouseup', () => {
//   pressed = false;
// });

// slider.addEventListener('mousemove', (e) => {
//   if (!pressed) return;
//   e.preventDefault();

//   x = e.offsetX;
//   certificateCard.style.left = `${x - startX}px`;

//   checkBoundary();
// });

// function checkBoundary() {
//   let outer = slider.getBoundingClientRect();
//   let inner = certificateCard.getBoundingClientRect();

//   if (parseInt(certificateCard.style.left) > 0) {
//     certificateCard.style.left = '0px';
//   } else if (inner.right < outer.right) {
//     certificateCard.style.left = `-${inner.width - outer.width}px`;
//   }
// }

// Slider Arrow
let buttonRight = document.getElementById('arrowRight');
let buttonLeft = document.getElementById('arrowLeft');

buttonLeft.addEventListener('click', function () {
  document.getElementById('card-slide').
  scrollLeft -= 200
});

buttonRight.addEventListener('click', function () {
  document.getElementById('card-slide').scrollLeft += 200
});

function checkBoundary() {

}

// Menu hamberger
function menuHumberger() {
  const menuHumberger = document.querySelector('.menuToggle');
  const navigasiList = document.querySelector('.navigasi-list');

  menuHumberger.classList.toggle('active');
  navigasiList.classList.toggle('active');

  setTimeout(() => {
    return navigasiList;
  }, 1000);
}

// ScrollTop
window.addEventListener('scroll', function () {
  let scroll = document.querySelector('.scrollTop');
  scroll.classList.toggle("active", window.scrollY > 500);
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}