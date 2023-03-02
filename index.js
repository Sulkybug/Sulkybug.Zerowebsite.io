const navToggle = document.querySelector('.toggle');
const navMenu = document.querySelector('.nav-menu');
const navMenuItems = document.querySelectorAll('.nav-menu-item');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('nav-menu_visible');

  if (navMenu.classList.contains('nav-menu_visible')) {
    navToggle.setAttribute('aria-label', 'Cerrar Menu');
  } else {
    navToggle.setAttribute('aria-label', 'Abrir Menu');
  }
});

for (let i = 0; i < navMenuItems.length; i++) {
  const navMenuItem = navMenuItems[i];
  navMenuItem.addEventListener('click', () => {
    navMenu.classList.toggle('nav-menu_visible');
  });
}
