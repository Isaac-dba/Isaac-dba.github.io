const bmenuO = document.getElementById("bmenuOpen");
const bmenuC = document.getElementById("bmenuClose");
const menuH = document.getElementById("absolute");

bmenuO.addEventListener("click", (e) => {
    menuH.classList.toggle("collapse");
});
bmenuC.addEventListener("click", (e) => {
    menuH.classList.toggle("collapse");
}); 