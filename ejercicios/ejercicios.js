/*ejercicios.index */
//Notification
const notificacion = document.getElementById("contenedor");
const  count = document.querySelector("#contenedor .count");

notificacion.addEventListener("click", () => {
  notificacion.classList.add("animation");
  setTimeout(() => {
    notificacion.classList.remove("animation");
  }, 10000);
});
let result = 0;
notificacion.addEventListener("click", incrementar);
function incrementar(){
result++;
count.innerHTML = `${result}`;
//tambien textConten
};


/**Startup Plan */
const checked = document.getElementById("check");
// a lo mejor con un input. el sabado 
checked.addEventListener("click", (e) => {
  checked.style.color = "black";
});
