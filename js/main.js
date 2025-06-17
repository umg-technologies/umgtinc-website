
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');
const yearSpan = document.getElementById('year');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    nav.classList.toggle('show');
  });
}

if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
