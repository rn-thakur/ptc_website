const btn = document.getElementById('hamburger');
const drawer = document.getElementById('nav-drawer');
btn.addEventListener('click', () => {
  const open = drawer.classList.toggle('open');
  btn.classList.toggle('open', open);
  btn.setAttribute('aria-expanded', open);
});