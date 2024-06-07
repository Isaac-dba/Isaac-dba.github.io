//elementos html
const btnBefore = document.getElementById("before");
const btnAfter = document.getElementById("after");
const section = document.querySelectorAll("#section-days article");
const spanNum = document.getElementById("days-number");

//funcionalidad
let currentId = 4;
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
        transform: "rotate(0deg)"
    });
    $("#sun").css({
        position: "absolute",
        width: "13%",
        height: "13%",
        borderRadius: "50%",
        backgroundColor: "yellow"
    })

//Day 4
    $(".days-4").css("background-color", "#ec5b5be1");
    $(".circle").css({
        borderRadius: "50%",
        backgroundColor: "#f0f0f0",
        position: "absolute",
        boxShadow: "3px 2px 2px 2px #50474781"
    });
    $("#circle-container").css({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative"
    })
    $("#inner-first").css({
        width: "120px",
        height: "120px"
    }).addClass("first-circle");
    $("#inner-second").css({
        width: "80px",
        height: "80px"
    }).addClass("second-circle");
    $("#inner-tree").css({
        width: "40px",
        height: "40px"
    }).addClass("tree-circle");
    
    //Day 5
    //variables
    let bgcPuntoRaya = "#fa7373";
    let bgcPuntoRaya1 = "#5ba2ff"

    $(".days-5").css("background-color", "#0d968ae1");
    $("hr").css({
        width: "95%",
        height: "0.1px",
        position: "relative",
        left: "5px",
        backgroundColor: "#0000004d",
        border: "none"
    })
    $(".content-graph").css({
        backgroundColor: "white",
        width: "80%",
        height: "60%",
        display: "flex",
        flexDirection: "column",
        boxShadow: "0px 1px 10px 0px rgba(0, 0, 0, 0.3)"
    });
    $(".content-graph  .head").css({
        backgroundColor: "#f1ba64",
        display: "flex",
        justifyContent: "space-between", 
        padding: "10px",
        alignItems: "center",
        color: "white",
        fontWeight: "bold"
    });
    $(".content-graph .head .date h1").css({
        "font-size": "12px",
    });
    $(".content-graph .head .date .dates").css({
        fontSize: "14px"
    });
    $(".content-graph .head .value .title").css({
        fontSize: "12px",
        textAlign: "end"
    });
    $(".views-purchases").css({
        display: "flex",
        justifyContent: "end",
        gap: "10px",
        padding: "10px",
        fontSize: "12px",
        color: "#858585"
    });
    $(".views-purchases .view").css({
        display: "flex",
        alignItems: "center",
        gap: "5px"
    });
    $(".views-purchases .view .span").css({
        width: "15px",
        height: "4px",
        backgroundColor: bgcPuntoRaya,
        borderRadius: "4px"
    });
    $(".views-purchases .purchase").css({
        display: "flex",
        alignItems: "center",
        gap: "5px"
    });
    $(".views-purchases .purchase .span").css({
        width: "15px",
        height: "4px",
        backgroundColor: bgcPuntoRaya1,
        borderRadius: "4px"
    });
    $(".graph-view, .graph-purchase").css({
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "13px 10px", 
        position: "relative"
    });
    $(".graph-view .punto, .graph-purchase .punto").css({
        width: "6px",
        height: "6px",
        borderRadius: "50%",
        cursor: "pointer"
    });
    $(".graph-purchase .punto").css({
        backgroundColor: bgcPuntoRaya1
    })
    //rojo
    $(".graph-view .punto").css("background-color", bgcPuntoRaya);
    $(".graph-view .punto:nth-child(1)").css({
        position: "relative",
        top: "21px",
        zIndex: "1"
    }).after("<div class='line-1 line-red'></div>");
    $(".line-1").css({
        width: "40px",
        transform: "rotate(-40deg)",
        top: "21px",
        left: "10px",
    });
    $(".graph-view .punto:nth-child(3)").css({
        position: "relative",
        top: "-8px",
    }).after("<div class='line-2 line-red'></div>");
    $(".line-2").css({
        width: "32px",
        transform: "rotate(13deg)",
        left: "50px",
        top: "11px"
    });
    $(".graph-view .punto:nth-child(5)").after("<div class='line-3 line-red'></div>");
    $(".line-3").css({
        width: "32px",
        left: "85px",
        top: "11px",
        transform: "rotate(-15deg)"
    });
    $(".graph-view .punto:nth-child(7)").css({
        position: "relative",
        top: "-9px"
    }).after("<div class='line-4 line-red'></div>");
    $(".line-4").css({
        width: "36px",
        left: "119px",
        top: "17px",
        transform: "rotate(31deg)",
    });
    $(".graph-view .punto:nth-child(9)").css({
        position: "relative",
        top: "13px",
    }).after("<div class='line-5 line-red'></div");
    $(".line-5").css({
        width: "36px",
        left: "155px",
        top: "33px",
        transform: "rotate(15deg)"
    });
    $(".graph-view .punto:nth-child(11)").css({
        position: "relative",
        top: "23px",
        zIndex: "1"
    }).after("<div class='line-6 line-red'></div>");
    $(".line-6").css({
        width: "36px",
        left: "191px",
        top: "27px",
        transform: "rotate(-34deg)"
    });
    $(".line-red").css({
        height: "2px",
        backgroundColor: bgcPuntoRaya,
        position: "absolute",
        zIndex: "1"
    });
    //funcion para el hover
    $(".graph-view .punto").each(function(index, element){
        $(element).hover(() => {
            $(this).append("<div class='hover'></div>");
            $(".hover").css({
                backgroundColor: bgcPuntoRaya,
                width: "25px",
                height: "25px",
                borderRadius: "5px",
                position: "relative",
                top: "-25px",
                left: "-9px",
                transition: "all 0.5s ease-in-out",
                color: "white",
                fontSize: "11px",
                fontWeight: "bold",
            }).animate({},() => {
                
                $(".hover").css({
                    transform: "translateY(-5px)",
                });
                $(".hover").text(index === 0 ? 458 : index === 1 ? 812 : index === 2 ? 746
                    : index === 3 ? 877 : index === 4 ? 517 : index === 5 ? 434 
                    : index === 6 ? 458 : index
                ).css({
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                });
            });
        }, () => {
            $(this).find("div").last().remove();
            $(this).find(".item").last().remove();
        })
    });
    // azul
    $(".graph-purchase").children(".punto").eq(0).css({
        position: "relative",
    }).after("<div class='line-7 line-blue'></div>");
    $(".line-7").css({
        width: "32px",
        transform: "rotate(-15deg)",
        top: "10px",
        left: "15px"
    });
    $(".graph-purchase .punto").eq(1).css({
        position: "relative",
        top: "-9px"
    }).after("<div class='line-8 line-blue'></div>");
    $(".line-8").css({
        width: "33px",
        left: "50px",
        transform: "rotate(22deg)",
        top: "13px"
    });
    $(".graph-purchase .punto").eq(2).css({
        position: "relative",
        top: "5px"
    }).after("<div class='line-9 line-blue'></div>");
    $(".line-9").css({
        width: "33px",
        left: "84px",
        transform: "rotate(-18deg)"
    });
    $(".graph-purchase .punto").eq(3).css({
        position: "relative",
        top: "-6px"
    }).after("<div class='line-10 line-blue'></div>");
    $(".line-10").css({
        width: "33px",
        left: "120px",
        top: "12px",
        transform: "rotate(10deg)"
    });
    $(".graph-purchase .punto").eq(4).after("<div class='line-11 line-blue'></div>");
    $(".line-11").css({
        width: "33px",
        left: "156px",
        top: "20px",
        transform: "rotate(16deg)"
    });
    $(".graph-purchase .punto").eq(5).css({
        position: "relative",
        top: "10px"
    }).after("<div class='line-12 line-blue'></div>");
    $(".line-12").css({
        width: "33px",
        left: "190px",
        top: "22px",
        transform: "rotate(-11deg)"
    });
    $(".graph-purchase .punto").eq(6).css({
        position: "relative",
        top: "3px"
    });
    $(".line-blue").css({
        height: "2px",
        backgroundColor: bgcPuntoRaya1,
        position: "absolute",
    });
    //function para el hover
    $(".graph-purchase .punto").each(function(index, element){
        
        $(element).hover(() => {
            $(this).append("<div class='hover'></div>");
            $(".hover").css({
                backgroundColor: bgcPuntoRaya1,
                width: "20px",
                height: "25px",
                borderRadius: "5px",
                position: "relative",
                top: "-25px",
                left: "-7px",
                zIndex: "2",
                color: "white",
                fontSize: "11px",
                fontWeight: "bold",
                transition: "all 0.5s ease-in-out",
            }).animate({},() => {
                $(".hover").css({
                    transform: "translateY(-5px)",
                });
                $(".hover").text(index === 0 ? 26 : index === 1 ? 41 : index === 2 ? 22
                    : index === 3 ? 36 : index === 4 ? 25 : index === 5 ? 13 
                    : index === 6 ? 20 : index
                ).css({
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                });
            })
        }, () => {
            $(this).find("div").last().remove();
        });
    });
    //lista de dias
    $(".content-graph ul").css({
        listStyle: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        textTransform: "uppercase",
        fontSize: "10px",
        padding: "5px 7px",
        color: "#7a7a7a"
    });
});

