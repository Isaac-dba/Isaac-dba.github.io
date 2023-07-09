/*ejercicios.index */
const notificacion = document.getElementById("contenedor");

notificacion.addEventListener("click", () => {
  notificacion.classList.add("animation");
  setTimeout(() => {
    notificacion.classList.remove("animation");
  }, 10000);
});
