//elementos html
const btnBefore = document.getElementById("before");
const btnAfter = document.getElementById("after");
const section = document.querySelectorAll("#section-days article");
const spanNum = document.getElementById("days-number");

//funcionalidad
let currentId = 0;
function showArticle(index){
    section.forEach((article, i) => {
        article.classList.toggle("active", i === index);
    });
}

btnBefore.addEventListener("click", () => {
    currentId = (currentId > 0) ? currentId - 1 : section.length - 1;
    showArticle(currentId);
    spanNum.innerText = currentId + 1;
});
btnAfter.addEventListener("click", () => {
    currentId = (currentId < section.length - 1) ? currentId + 1 : 0;
    showArticle(currentId);
    spanNum.innerText = currentId + 1;
});
showArticle(currentId);
//este codigo tambien puede ir dentro del codigo JQuery


// parte JQuery
$(document).ready(function() {
    

});