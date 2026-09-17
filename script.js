// ================= MENÚ MÓVIL =================
document.addEventListener('DOMContentLoaded', function () {
  const botonMenu = document.querySelector('.btn-menu-movil');
  const menu = document.querySelector('.menu');

  if (botonMenu && menu) {
    botonMenu.addEventListener('click', function () {
      const abierto = menu.classList.toggle('abierto');
      botonMenu.classList.toggle('abierto', abierto);
      botonMenu.setAttribute('aria-expanded', abierto ? 'true' : 'false');
    });

    // Cierra el menú al elegir una opción
    menu.querySelectorAll('a').forEach(function (enlace) {
      enlace.addEventListener('click', function () {
        menu.classList.remove('abierto');
        botonMenu.classList.remove('abierto');
        botonMenu.setAttribute('aria-expanded', 'false');
      });
    });
  }
});
