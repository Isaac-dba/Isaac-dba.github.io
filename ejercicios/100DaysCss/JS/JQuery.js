//elementos html
const btnBefore = document.getElementById("before");
const btnAfter = document.getElementById("after");
const section = document.querySelectorAll("#section-days article");
const spanNum = document.getElementById("days-number");

//funcionalidad
let currentId = 2;
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
//Day 1
$(document).ready(function() {
    $(".days-1").css({
        "flex-direction": "column",
        "gap": "10px",
        "background": "-webkit-linear-gradient(bottom left, #43389f 0%, #4ec6ca 100%)",
    });
    $(".number").css({
        "display": "flex",
        "margin-left": "40px",
    });
    $(".num-1").css({
        "width": "20px",
        "background-color": "white",
        "height": "100px",
        "box-shadow": "0px 0px 4px #e4e4e4",
        "position": "absolute",
        "z-index": "100",
        "left": "100px",
        "border-radius": "2px" 
    });
    $(".num-1").clone().appendTo(".number").css({
        "width": "0px",
        "height": "0px",
        "position": "relative",
        "left": "-206px",
        "top": "1px",
        "transform": "rotate(45deg)",
        "border-left": "solid 20px white",
        "border-right": "solid 0px white",
        "border-bottom": "solid 20px white",
        "border-top": "solid 20px transparent",
        "z-index": "10"
    });
    $(".uno").css({
        "width": "100px",
        "height": "100px",
        "background-color": "transparent",
        "border": "solid 23px white",
        "border-radius": "50%",
        "box-shadow": "0px 0px 4px #e4e4e4",
        "margin-left": "1px",
        "z-index": "20"
    });
    $(".dos").css({
        "width": "100px",
        "height": "100px",
        "background-color": "transparent",
        "border": "solid 23px white",
        "border-radius": "50%",
        "box-shadow": "0px 0px 4px #e4e4e4",
        "margin-left": "-15px"
        
    });
    $(".text-days").css({
        "color": "white",
        "font-weight": "bold",
        "font-size": "4.4rem",
        "margin-top": "-20px"
    });
    $(".text-info").css({
        "color": "white",
        "letter-spacing": "4px",
        "font-weight": "bold",
        "margin-top": "-20px"
    });

//Day 2
    $(".days-2").css({
        "background-color": "#39b98f"
    });
    $(".content-menu").css({
        "display": "flex",
        "flex-direction": "column",
        "align-items": "center",
        "top": "-20px",
        "gap": "10px",
        "padding": "10px",
        "position": "relative"
    });
    $("#item-1").css("top", "0px");
    $("#item-2").css("top", "20px");
    $("#item-3").css("top", "40px");
    $(".item").css({
        "width": "80px",
        "height": "10px",
        "background-color": "white",
        "border": "none",
        "border-radius": "3px",
        "box-shadow": "0px 3px 4px #686767",
        "position": "absolute",
        "transition": "all 0.5s ease"
    });

    var isOpen = false;
    $(".content-menu").on("click", function(){
        if(isOpen){
            $("#item-2").animate({opacity: 1});
            $("#item-1").animate({top: "0px"}, 500).css("transform", "rotate(0deg)");
            $("#item-3").animate({top: "40px"}, 500).css("transform", "rotate(0deg)");
        }else{
            $("#item-1").animate({top: "20px"}, 500);
            $("#item-3").animate({top: "20px"}, 500);
            setTimeout(() => {
                $("#item-1").css("transform", "rotate(45deg)");
                $("#item-3").css("transform", "rotate(-45deg)");
            }, 650);
            $("#item-2").animate({opacity: 0}, 1);
        }
        isOpen = !isOpen;
    });

//Days 3
    $(".days-3").css({
        backgroundColor: "#272c34",
    });
    $("#dessert").css({
        width: "190px",
        height: "190px",
        borderRadius: "50%",
        position: "relative",
        backgroundColor: "#75cfeb",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    }).addClass("hidden");
    
    $("#eart").css({
        position: "absolute",
        height: "50%",
        width: "100%",
        backgroundColor: "#dece6f",
        top: "64.4%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    });
    $("#shadow").css({
        width: "150%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.25)",
        clipPath: "polygon(15% 0, 100% 20%, 85% 0)"
    }).addClass("shadow");
    $("#pyramid").css({
        position: "absolute",
        height: "30%",
        width: "70%",
        display: "flex"
    });
    $(".side-1").css({
        width: "70%",
        height: "100%",
        backgroundColor: "#f0f0f0",
        clipPath: "polygon(79% 0%, 0 100%, 100% 100%)",
        position: "absolute",
        zIndex: "1"
    }).addClass("side1");
    $(".side-2").css({
        width: "70%",
        height: "100%",
        backgroundColor: "#c3c1c3",
        clipPath: "polygon(36% 0%, 0% 100%, 100% 100%)",
        position: "absolute",
        left: "30%"
    }).addClass("side2");
    $(".eco").css({
        position: "absolute",
        height: "170%",  
        width: "170%",
        top: "40%",
        transform: "rotate(0deg)",
    });
    $("#sun").css({
        position: "absolute",
        width: "13%",
        height: "13%",
        borderRadius: "50%",
        backgroundColor: "yellow"
    })
});
