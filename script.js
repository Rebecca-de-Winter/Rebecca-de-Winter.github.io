
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('navbar');
  const btn = document.getElementById('menu-toggle');

  btn.addEventListener('click', () => {
    const open = nav.classList.toggle('responsive');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
});
