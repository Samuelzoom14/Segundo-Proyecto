const usuario = document.getElementById("mailModal");
const passwordModal = document.getElementById("passwordModal");
const modal = document.getElementById("login");
const inicioSesion = document.getElementById("inicioSesion");
const adminSection = document.getElementById('adminSection');

modal.addEventListener("submit", e => {
  e.preventDefault();
  let usuarioAdmin = "segundoproyecto@gmail.com";
  let passwordAdmin = "peliscode";
  if (usuario.value === usuarioAdmin && passwordModal.value === passwordAdmin) {
    adminSection.style.display = 'block';
    inicioSesion.textContent = 'Administrador';
    localStorage.setItem('isAdmin', 'true');
    window.location.href = "crudPelis.html";
  } else {
    alert("no coincide");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  let isAdmin = localStorage.getItem('isAdmin');
  if (isAdmin === 'true') {
    adminSection.style.display = 'block';
    inicioSesion.textContent = 'Administrador';
  }
});

inicioSesion.addEventListener('click', () => {
  if (inicioSesion.textContent === 'Administrador') {
    localStorage.removeItem('isAdmin'); 
    inicioSesion.textContent = 'Inicio de sesion';
    adminSection.style.display = 'none';
    } 
});




