//elementos html
const btnBefore = document.getElementById("before");
const btnAfter = document.getElementById("after");
const section = document.querySelectorAll("#section-days article");
const spanNum = document.getElementById("days-number");

//funcionalidad
let currentId = 83;
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
    $("#itemMenu-1").css("top", "0px");
    $("#itemMenu-2").css("top", "20px");
    $("#itemMenu-3").css("top", "40px");
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
            $("#itemMenu-2").animate({opacity: 1});
            $("#itemMenu-1").animate({top: "0px"}, 500).css("transform", "rotate(0deg)");
            $("#itemMenu-3").animate({top: "40px"}, 500).css("transform", "rotate(0deg)");
        }else{
            $("#itemMenu-1").animate({top: "20px"}, 500);
            $("#itemMenu-3").animate({top: "20px"}, 500);
            setTimeout(() => {
                $("#itemMenu-1").css("transform", "rotate(45deg)");
                $("#itemMenu-3").css("transform", "rotate(-45deg)");
            }, 650);
            $("#itemMenu-2").animate({opacity: 0}, 1);
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
        cursor: "pointer",
        position: "relative"
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
        });
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

//Day 6
    $(".days-6").css({
        backgroundColor: "#ca7c4e",
        background: "linear-gradient(to top right, #eebe6c 0%, #ca7c4e 100%)",
        boxShadow: "1px 2px 10px 0px rgba(0, 0, 0, 0.3)",
        color: "#786450"
    });
    $("img").css({
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        position: "absolute",
        cursor: "pointer"
    });
    $(".days-6  .form").css({
        display: "flex",
        backgroundColor: "white",
        boxShadow: "1px 2px 10px 0px rgba(0, 0, 0, 0.3)",
        padding: "10px",
        height: "85%",
        width: "80%",
        borderRadius: "4px",
        position: "relative"
    });
    $(".form .form-left").css({
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        position: "absolute",
        width: "60%",
        height: "100%"
    });
    $(".border-img").css({
        width: "80px",
        height: "80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: "50%",
        marginTop: "-30px",
        position: "relative",
    });
    $(".inner-border").css({
        width: "70px",
        height: "70px",
        border: "solid 1px #786450",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderLeftColor: "transparent",
        position: "absolute",
        transition: "all 1s ease-in-out"
    });
    $(".inner-inner").css({
        width: "80px",
        height: "80px",
        border: "solid 1px #786450",
        borderRadius: "50%",
        borderRightColor: "transparent",
        position: "absolute",
        transition: "all 1s ease-in-out"
    });
    //hover
    $(".border-img").hover(() => {
        $(".inner-border").css("transform", "rotate(360deg)");
        $(".inner-inner").css("transform", "rotate(-360deg)");
    }, () => {
        $(".inner-border").css("transform", "rotate(0deg)");
        $(".inner-inner").css("transform", "rotate(0deg)");
    });
    //fin hover
    $(".form .form-left .info-perfil").css({
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        cursor: "text"
    });
    $(".form .form-left .info-perfil .name").css({
        fontWeight: "bolder",
        minWidth: "130px"
    });
    $(".form .form-left .info-perfil .title").css({
        fontSize: "14px"
    });
    $(".form .form-left .action").css({
        display: "flex",
        flexDirection: "column",
        fontSize: "18px",
        gap: "5px",
        position: "relative",
        bottom: "-15px"
    });
    $(".form .form-left .action .btn").css({
        border: "solid 1px #786450",
        width: "100px",
        textAlign: "center",
        borderRadius: "15px",
        fontSize: "14px",
        padding: "5px",
        fontWeight: "bold",
        transition: "all .5s ease"
    });
    //hover btn follow
    $("#btnFollow").hover(() => {
        $("#btnFollow").css({
            backgroundColor: "#786450",
            color: "white"
        })
    }, () => {
        $("#btnFollow").css({
            backgroundColor: "white",
            color: "#786450"
        });
    });
    //hover btn msg
    $("#btnMsg").hover(() => {
        $("#btnMsg").css({
            backgroundColor: "#786450",
            color: "white"
        });
    }, () => {
        $("#btnMsg").css({
            backgroundColor: "white",
            color: "#786450"
        })
    });
    $(".form .form-right").css({
        height: "100%",
        width: "40%",
        position: "absolute",
        right: "0",
        top: "0",
        display: "flex",
        flexDirection: "column",
        gap: "2px"
    });
    $(".form .form-right div").css({
        backgroundColor: "#f5e8df",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer"
    })
    //hover right
    //post
    $("#post").hover(() => {
        $("#post").css("background-color", "#E1CFC2" );
    }, () => {
        $("#post").css("background-color", "#f5e9df" );
    });
    //likes
    $("#likes").hover(() => {
        $("#likes").css("background-color", "#E1CFC2" );
    }, () => {
        $("#likes").css("background-color", "#f5e9df" );
    });
    //follower
    $("#follower").hover(() => {
        $("#follower").css("background-color", "#e1cfc2");
    }, () => {
        $("#follower").css("background-color", "#f5e9df")
    });
    //fin hovers
    $(".form .right div .num").css({
        fontSize: "20px",
        fontWeight: "bolder"
    });
    $(".form .right div .text").css({
        fontSize: "10px"
    });

    //Day 7
    $(".days-7").css({
        backgroundColor: "#264056",
        position: "relative",
        overflow: "hidden"
    });
    $("#nav-day7").css({
        zIndex: "2",
        color: "#93b2cd",
        backgroundColor: "#43627d",
        position: "absolute",
        width: "140px",
        height: "70%",
        padding: "10px",
        boxShadow: "0px 3px 10px 0px rgba(0, 0, 0, 0.3)",
        transition: "all 0.4s ease-in-out"
    });
    $("#nav-day7 ul").css({
        listStyle: "none",
        display: "flex",
        flexDirection: "column",
    });
    $("#nav-day7 ul li").css({
        display: "flex",
        gap: "5px",
        padding: "10px",
        position: "relative",
        width: "140px",
        left: "-10px"
    });
    //hover
    $("#nav-day7 ul li").on({
        mouseenter: function(){
            $(this).addClass("hover-bg");
        },
        mouseleave: function(){
            $(this).removeClass("hover-bg");
        }
    });
    $(".content-notifications").css({
        backgroundColor: "#fff",
        position: "absolute",
        zIndex: "3",
        boxShadow: "0px 3px 10px 0px rgba(0, 0, 0, 0.3)",
        height: "80%",
        width: "87%",
        transition: "all 0.4s ease-in-out"
    });
    $(".head-notif").css({
        backgroundColor: "#5f98cd",
        padding: "10px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "44px",
        position: "relative"
    });
    //hover color fondo menu
    $(".head-notif .icon-menu").css({
        position: "absolute"
    }).hover(() => {
        $(".head-notif .icon-menu .raya1, .raya2, .circle-menu").css({
            backgroundColor: "#fff"
        });
    }, () => {
        $(".head-notif .icon-menu .raya1, .raya2, .circle-menu").css({
            backgroundColor: "#b2daff"
        });
    });
    $(".head-notif .icon-menu .raya1").css({
        backgroundColor: "#b2daff",
        width: "17px",
        height: "4px",
        borderRadius: "2px"
    });
    $(".head-notif .icon-menu .circle-menu").css({
        backgroundColor: "#b2daff",
        width: "6px",
        height: "6px",
        borderRadius: "50%",
        position: "relative",
        top: "-5px",
        left: "19px"
    });
    $(".head-notif .icon-menu .raya2").css({
        backgroundColor: "#b2daff",
        width: "25px",
        height: "4px",
        borderRadius: "2px"
    });
    $(".head-notif .noti-text").css({
        fontWeight: "bold",
        color: "#fff",
        position: "absolute",
        left: "90px"
    });
    $(".head-notif .search").css({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row-reverse",
        gap: "6px",
        position: "absolute",
        right: 10
    });
    $(".head-notif .search .icon").css({
        display: "flex"
    })
    $(".head-notif .search iconify-icon").css({
        color: "#b2daff",
        fontSize: "1.5rem"
    });
    //hover 
    $(".head-notif .search .icon").hover(() => {
        $(".head-notif .search .icon iconify-icon").css({
            color: "#fff"
        });
    }, () => {
        $(".head-notif .search .icon iconify-icon").css("color", "#b2daff")
    });
    $(".head-notif .search #input-search").css({
        padding: "6px",
        border: "none",
        borderRadius: "30px",
        outline: "none",
        width: "212px",
        boxShadow: "0px 3px 10px 0px rgba(0, 0, 0, 0.3)"
    }).hide();
    $(".body-notif").css({
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        padding: "10px"
    });
    $(".body-notif .circle-noti").css({
        width: "11px",
        height: "11px",
        border: "solid 2px #5f98cd",
        borderRadius: "50%"
    });
    //hover circle con herencia
    $(".body-notif .circle-noti").hover(() => {
        $(".body-notif .circle-noti > .itemNotif").css("color", "#5f98cd")
    });
    $(".body-notif .item-1 .circle-noti").after("<div class='line1'></div>");
    $(".line1").css({
        width: "7px",
        height: "2px",
        backgroundColor: "#afafafc2",
        position: "absolute",
        transform: "rotate(90deg)",
        top: "-7px",
        left: "1px",
    });
    $(".body-notif .item-1 .circle-noti").before("<div class='line2'></div>");
    $(".line2").css({
        width: "56px",
        height: "2px",
        backgroundColor: "#afafafc2",
        position: "absolute",
        transform: "rotate(90deg)",
        bottom: "9px",
        left: "-23px",
    });
    $(".body-notif .item-3 .circle-noti").after("<div class='line3'></div>");
    $(".line3").css({
        width: "56px",
        height: "2px",
        backgroundColor: "#afafafc2",
        position: "absolute",
        transform: "rotate(90deg)",
        top: "-31px",
        left: "-23px",
    });
    $(".body-notif .item-3 .circle-noti").before("<div class='line4'></div>");
    $(".line4").css({
        width: "31px",
        height: "2px",
        backgroundColor: "#afafafc2",
        position: "absolute",
        transform: "rotate(90deg)",
        bottom: "3px",
        left: "-10px",
    });
    $(".body-notif .itemNotif").css({
        display: "flex",
        alignItems: "start",
        gap: "10px",
        color: "#7a7977c2",
        position: "relative"
    });
    $(".body-notif .itemNotif .name").css({
        fontWeight: "bold"
    })
    $(".body-notif .itemNotif .date").css({
        fontSize: "12px",
    });
    //hover text body
    $(".body-notif .itemNotif").on({
        mouseenter: function(){
            $(this).css({
                color: "#5f98cd"
            });
        },
        mouseleave: function(){
            $(this).css({
                color: "#7a7977c2"
            });
        }
    });
    // event click search 
    $("#iconSearch").on("click", function(){
        $("#input-search").toggle(500);
    });
    // event click menu
    let moved = false;
    $("#iconMenu").on("click", () => {
        if(moved){
            $(".content-notifications").css({
                "transform": "translateX(0px)"
            });
            $("#nav-day7").css({
                transform: "translateX(0px)"
            });
        }
        else{
            $(".content-notifications").css({
                "transform": "translateX(120px)"
            });
            $("#nav-day7").css({
                transform: "translateX(-70px)"
            });
        }
        moved = !moved;   
    });
    //fin eventos

    //Day 8
    $(".days-8").css({
        overflow: "hidden"
    });
    $("#container-balls").css({
        backgroundColor: "#000",
        width: "300px",
        height: "300px",
        position: "relative",
        filter: "contrast(25)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    });
    $("#ball-center").css({
        width: "100px",
        height: "100px",
        backgroundColor: "#fff",
        borderRadius: "50%",
        position: "relative",
        filter: "blur(15px)"
    });
    $("#container-balls .inner-1").css({
        width: "50px",
        height: "50px",
        position: "absolute",
        borderRadius: "50%",
        transform: "rotate(123deg)",
    }).after("<div class='inner-1-1'></div>")
    $("#container-balls .inner-1-1").css({
        content: "",
        position: "absolute",
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        backgroundColor: "#fff",
        filter: "blur(5px)",
        transformOrigin: "7px 37px",
        animationDuration: "2.4s"
    }).addClass("rotate360");
    //animation en css mas comodo
    $(".inner-2").css({
        width: "50px",
        height: "50px",
        position: "absolute",
        borderRadius: "50%",
        transform: "rotate(-40deg)"
    }).after("<div class='inner-2-1'></div>");
    $(".inner-2-1").css({
        content: "",
        position: "absolute",
        width: "70px",
        height: "70px",
        backgroundColor: "#fff",
        borderRadius: "50%",
        filter: "blur(5px)",
        transformOrigin: "27px 47px",
        animationDuration: "2.8s"
    }).addClass("rotate360");
    $("#container-balls .inner-3").css({
        width: "60px",
        height: "60px",
        position: "absolute",
        borderRadius: "50%",
        transform: "rotate(40deg)"
    }).after("<div class='inner-3-1'></div>");
    $(".inner-3-1").css({
        content: "",
        position: "absolute",
        width: "60px",
        height: "60px",
        backgroundColor: "#fff",
        borderRadius: "50%",
        filter: "blur(7px)",
        transformOrigin: "25px 15px",
        animationDuration: "2.3s"

    }).addClass("rotate360");
    $("#container-balls .inner-4").css({
        width: "10px",
        height: "10px",
        position: "absolute",
        borderRadius: "50%",
        transform: "rotate(350deg)"
    }).after("<div class='inner-4-1'></div>");
    $(".inner-4-1").css({
        content: "",
        position: "absolute",
        width: "10px",
        height: "10px",
        backgroundColor: "#fff",
        borderRadius: "50%",
        filter: "blur(3px)",
        transformOrigin: "70px 40px",
        animationDuration: "3.5s"
    }).addClass("rotate360");
    $("#container-balls .inner-5").css({
        width: "5px",
        height: "5px",
        position: "absolute",
        borderRadius: "50%",
        transform: "rotate(190deg)",
    }).after("<div class='inner-5-1'></div>");
    $(".inner-5-1").css({
        content: "",
        position: "absolute",
        width: "6px",
        height: "6px",
        backgroundColor: "#fff",
        borderRadius: "50%", 
        transformOrigin: "10px -50px", 
        animationDuration: "3.2s",
        filter: "blur(2px)"
    }).addClass("rotate360");
    $("#container-balls .inner-6").css({
        width: "20px",
        height: "20px",
        position: "absolute",
        borderRadius: "50%",
        transform: "rotate(30deg)",
    }).after("<div class='inner-6-1'></div>");
    $(".inner-6-1").css({
        content: "",
        position: "absolute",
        width: "20px",
        height: "20px",
        backgroundColor: "#fff",
        filter: "blur(5px)",
        transformOrigin: "50px 50px",
        animationDuration: "3.5s"
    }).addClass("rotate360");
    $("#container-balls .inner-7").css({
        width: "25px",
        height: "25px",
        position: "absolute",
        borderRadius: "50%",
        transform: "rotate(120deg)"
    }).after("<div class='inner-7-1'></div>");
    $(".inner-7-1").css({
        content: "",
        position: "absolute",
        width: "25px",
        height: "25px",
        backgroundColor: "#fff",
        borderRadius: "50%",
        transformOrigin: "-30px -30px",
        filter: "blur(5px)",
        animationDuration: "4.7s"
    }).addClass("rotate360");
    $("#container-balls .inner-8").css({
        width: "18px",
        height: "18px",
        position: "absolute",
        borderRadius: "50%",
        transform: "rotate(180deg)"
    }).after("<div class='inner-8-1'></div>");
    $(".inner-8-1").css({
        content: "",
        position: "absolute",
        width: "18px",
        height: "18px",
        backgroundColor: "#fff",
        borderRadius: "50%",
        transformOrigin: "-45px 60px",
        animationDuration: "3.7s",
        filter: "blur(5px)"
    }).addClass("rotate360");
    $("#container-balls .inner-9").css({
        width: "15px",
        height: "15px",
        position: "absolute",
        borderRadius: "50%",
        transform: "rotate(-45deg)"
    }).after("<div class='inner-9-1'></div>");
    $(".inner-9-1").css({
        content: "",
        position: "absolute",
        width: "15px",
        height: "15px",
        backgroundColor: "#fff",
        borderRadius: "50%",
        transformOrigin: "-20px 40px",
        animationDuration: "2.5s",
        filter: "blur(5px)"
    }).addClass("rotate360");
    $("#container-balls .inner-10").css({
        width: "22px",
        height: "22px",
        position: "absolute",
        borderRadius: "50%",
        transform: "rotate(80deg)"
    }).after("<div class='inner-10-1'></div>");
    $(".inner-10-1").css({
        content: "",
        position: "absolute",
        width: "22px",
        height: "22px",
        backgroundColor: "#fff",
        borderRadius: "50%",
        transformOrigin: "60px -30px",
        animationDuration: "3.8s",
        filter: "blur(5px)"
    }).addClass("rotate360");

    // Day 9
    $(".days-9").css({
        backgroundColor: "#1a2238",
        position: "relative",
        overflow: "hidden"
    });
    $(".floor").css({
        position: "relative",
        width: "100%",
        height: "50%",
        top: "97px"
    });
    $(".floorG").css({
        backgroundColor: "#26314f",
        position: "absolute",
        boxShadow: "1px 0px 10px 0px rgba(0, 0, 0, 0.1)",
        borderRadius: "50%",
        zIndex: "2" 
    })
    $(".floor1").css({
        width: "200px",
        height: "100%",
        left: "-20px"
    });
    $(".floor2").css({
        width: "200px",
        height: "100%",
        right: "-60px",
    });
    $(".floor3").css({
        width: "200px",
        height: "100%",
        backgroundColor: "#303c5d",
        boxShadow: "none",
        left: "50px",
        top: "30px"
    });
    $(".floor4").css({
        width: "60%",
        height: "100%",
        top: "40px",
        left: "-50px",
        backgroundColor: "#303c5d",
        boxShadow: "none"
    });
    $(".floor5").css({
        width: "50%",
        height: "100%",
        backgroundColor: "#303c5d",
        top: "50px",
        right: "-70px",
        boxShadow: "none"
    });
    //the moon
    $(".moon").css({
        width: "67px",
        height: "67px",
        backgroundColor: "#f6edbd",
        boxShadow: "0px 0px 10px 0px #f6edbd",
        position: "absolute",
        top: "30px",
        left: "50px",
        borderRadius: "50%",
        overflow: "hidden"
    });
    $(".krater1").css({
        width: "6px",
        height: "6px",
        position: "absolute",
        left: "27px",
        top: "25px",
        borderRadius: "50%",
        backgroundColor: "#ece1a8"
    });
    $(".krater2").css({
        width: "4px",
        height: "4px",
        backgroundColor: "#ece1a8",
        borderRadius: "50%",
        position: "absolute",
        top: "22px",
        left: "18px"
    });
    $(".krater3").css({
        width: "11px",
        height: "11px",
        backgroundColor: "#ece1a8",
        borderRadius: "50%",
        position: "absolute",
        top: "9px",
        left: "2px"
    });
    $(".krater4").css({
        width: "11px",
        height: "11px",
        backgroundColor: "#ece1a8",
        borderRadius: "50%",
        position: "absolute",
        top: "7px",
        left: "28px"
    });
    $(".krater5").css({
        width: "6px",
        height: "6px",
        backgroundColor: "#ece1a8",
        borderRadius: "50%",
        position: "absolute",
        top: "37px",
        left: "48px"
    });
    $(".krater6").css({
        width: "6px",
        height: "6px",
        backgroundColor: "#ece1a8",
        borderRadius: "50%",
        position: "absolute",
        top: "17px",
        left: "48px"
    });
    $(".krater7").css({
        width: "4px",
        height: "4px",
        backgroundColor: "#ece1a8",
        borderRadius: "50%",
        position: "absolute",
        top: "35px",
        left: "38px"
    });
    $(".krater8").css({
        width: "6px",
        height: "6px",
        backgroundColor: "#ece1a8",
        borderRadius: "50%",
        position: "absolute",
        top: "54px",
        left: "35px"
    });
    $(".krater9").css({
        width: "6px",
        height: "6px",
        backgroundColor: "#ece1a8",
        borderRadius: "50%",
        position: "absolute",
        top: "25px",
        left: "62px"
    });
    $(".krater10").css({
        width: "6px",
        height: "6px",
        backgroundColor: "#ece1a8",
        borderRadius: "50%",
        position: "absolute",
        top: "38px",
        left: "19px"
    });
    $(".krater11").css({
        width: "11px",
        height: "11px",
        backgroundColor: "#ece1a8",
        borderRadius: "50%",
        position: "absolute",
        top: "55px",
        left: "10px"
    });
    //rain
    $(".rain").css({
        backgroundColor: "transparent",
        width: "100%",
        height: "300px",
        position: "absolute",
        zIndex: "3",
        // filter: "contrast(25)"
    });
    $(".big-drop").css({
        position: "absolute",
        zIndex: "20",
        left: "18px",
        bottom: "0px",
        borderRadius: "50%",
        width: "8px",
        height: "8px",
        backgroundColor: "#7fc1f9",
    });
    $(".big-drop").eq(0).css({
        animationDuration: "1s"
    }).before("<div class='bigdrop1'></div>");
    $(".bigdrop1").css({
        content: "",
        position: "absolute",
        bottom: "0px",
        left: "18px",
        width: "6px",
        height: "6px",
        backgroundColor: "#7fc1f9",
        borderRadius: "3px",
        animationDuration: "1s"
    }).addClass("dropAnimation");
    $(".big-drop").eq(0).after("<div class='bigdrop1-2'></div>");
    $(".bigdrop1-2").css({
        content: "",
        position: "absolute",
        bottom: "0px",
        left: "19px",
        width: "4px",
        height: "10px",
        borderRadius: "50%",
        backgroundColor: "#7fc1f9",
        animationDuration: "1s"
    });
    $(".bigdrop1-2").addClass("dropAnimation")
    $(".big-drop").addClass("dropAnimation");
    // segunda gota
    $(".big-drop").eq(1).css({
        left: "40px",
        animationDuration: "1.3s"
    }).before("<div class='bigdrop2'></div>");
    $(".bigdrop2").css({
        content: "",
        position: "absolute",
        left: "41px",
        bottom: "0px",
        width: "6px",
        height: "6px",
        backgroundColor: "#7fc1f9",
        borderRadius: "3px",
        animationDuration: "1.3s"
    }).addClass("dropAnimation");
    $(".big-drop").eq(1).after("<div class='bigdrop2-1'></div>");
    $(".bigdrop2-1").css({
        content: "",
        position: "absolute",
        bottom: "1px",
        left: "42px",
        width: "4px",
        height: "10px",
        backgroundColor: "#7fc1f9",
        borderRadius: "50%",
        animationDuration: "1.3s"
    }).addClass("dropAnimation");
    // 3 gota
    $(".big-drop").eq(2).css({
        left: "65px",
        animationDuration: "1.2s"
    }).before("<div class='eq2'></div>");
    $(".eq2").css({
        content: "",
        position: "absolute",
        width: "6px",
        height: "6px",
        bottom: "0px",
        backgroundColor: "#7fc1f9",
        borderRadius: "50%",
        left: "65px",
        animationDuration: "1.2s"
    }).addClass("dropAnimation");
    $(".big-drop").eq(2).after("<div class='eq2-1'></div>");
    $(".eq2-1").css({
        content: "",
        position: "absolute",
        bottom: "1px",
        left: "66px",
        width: "4px",
        height: "10px",
        backgroundColor: "#7fc1f9",
        borderRadius: "50%",
        animationDuration: "1.2s",
        transform: "rotate(35deg)"
    }).addClass("dropAnimation");
    // 4gota
    $(".big-drop").eq(3).css({
        left: "95px",
        animationDuration: "1.3s",
        animationDelay: "0.3s"
    }).before("<div class='eq3'></div>");
    $(".eq3").css({
        content: "",
        position: "absolute",
        width: "6px",
        height: "6px",
        bottom: "0px",
        backgroundColor: "#7fc1f9",
        borderRadius: "50%",
        left: "95px",
        animationDuration: "1.3s",
        animationDelay: "0.3s"
    }).addClass("dropAnimation");
    $(".big-drop").eq(3).after("<div class='eq3-1'></div>");
    $(".eq3-1").css({
        content: "",
        position: "absolute",
        bottom: "1px",
        left: "96px",
        width: "4px",
        height: "10px",
        backgroundColor: "#7fc1f9",
        borderRadius: "50%",
        animationDuration: "1.3s",
        animationDelay: "0.3s",
        transform: "rotate(35deg)"
    }).addClass("dropAnimation");
    // 5 dig drop
    $(".big-drop").eq(4).css({
        left: "125px",
        animationDuration: "1.1s",
        animationDelay: "0.3s"
    }).before("<div class='eq4'></div>");
    $(".eq4").css({
        content: "",
        position: "absolute",
        width: "6px",
        height: "6px",
        bottom: "0px",
        backgroundColor: "#7fc1f9",
        borderRadius: "50%",
        left: "125px",
        animationDuration: "1.1s",
        animationDelay: "0.3s"
    }).addClass("dropAnimation");
    $(".big-drop").eq(4).after("<div class='eq4-1'></div>");
    $(".eq4-1").css({
        content: "",
        position: "absolute",
        bottom: "1px",
        left: "126px",
        width: "4px",
        height: "10px",
        backgroundColor: "#7fc1f9",
        borderRadius: "50%",
        animationDuration: "1.1s",
        animationDelay: "0.3s",
        transform: "rotate(35deg)"
    }).addClass("dropAnimation");
    // 6 bid drop
    $(".big-drop").eq(5).css({
        left: "155px",
        animationDuration: "1.3s",
        animationDelay: "0.2s"
    }).before("<div class='eq5'></div>");
    $(".eq5").css({
        content: "",
        position: "absolute",
        width: "6px",
        height: "6px",
        bottom: "0px",
        backgroundColor: "#7fc1f9",
        borderRadius: "50%",
        left: "155px",
        animationDuration: "1.3s",
        animationDelay: "0.2s"
    }).addClass("dropAnimation");
    $(".big-drop").eq(5).after("<div class='eq5-1'></div>");
    $(".eq5-1").css({
        content: "",
        position: "absolute",
        bottom: "1px",
        left: "157px",
        width: "4px",
        height: "10px",
        backgroundColor: "#7fc1f9",
        borderRadius: "50%",
        animationDuration: "1.3s",
        animationDelay: "0.2s",
        transform: "rotate(35deg)"
    }).addClass("dropAnimation");
    // 7 big drop
    $(".big-drop").eq(6).css({
        left: "175px",
        animationDuration: "1.1s",
        animationDelay: "0.2s"
    }).before("<div class='eq6'></div>");
    $(".eq6").css({
        content: "",
        position: "absolute",
        width: "6px",
        height: "6px",
        bottom: "0px",
        backgroundColor: "#7fc1f9",
        borderRadius: "50%",
        left: "175px",
        animationDuration: "1.1s",
        animationDelay: "0.2s"
    }).addClass("dropAnimation");
    $(".big-drop").eq(6).after("<div class='eq6-1'></div>");
    $(".eq6-1").css({
        content: "",
        position: "absolute",
        bottom: "1px",
        left: "177px",
        width: "4px",
        height: "10px",
        backgroundColor: "#7fc1f9",
        borderRadius: "50%",
        animationDuration: "1.1s",
        animationDelay: "0.2s",
        transform: "rotate(35deg)"
    }).addClass("dropAnimation");
    // 8 big drop
    $(".big-drop").eq(7).css({
        left: "195px",
        animationDuration: "1s",
        animationDelay: "0.2s"
    }).before("<div class='eq7'></div>");
    $(".eq7").css({
        content: "",
        position: "absolute",
        width: "6px",
        height: "6px",
        bottom: "0px",
        backgroundColor: "#7fc1f9",
        borderRadius: "50%",
        left: "195px",
        animationDuration: "1s",
        animationDelay: "0.2s"
    }).addClass("dropAnimation");
    $(".big-drop").eq(7).after("<div class='eq7-1'></div>");
    $(".eq7-1").css({
        content: "",
        position: "absolute",
        bottom: "1px",
        left: "197px",
        width: "4px",
        height: "10px",
        backgroundColor: "#7fc1f9",
        borderRadius: "50%",
        animationDuration: "1s",
        animationDelay: "0.2s",
        transform: "rotate(35deg)"
    }).addClass("dropAnimation");
    // 9 dig drop
    $(".big-drop").eq(8).css({
        left: "225px",
        animationDuration: "1.1s",
        animationDelay: "0.2s"
    }).before("<div class='eq8'></div>");
    $(".eq8").css({
        content: "",
        position: "absolute",
        width: "6px",
        height: "6px",
        bottom: "0px",
        backgroundColor: "#7fc1f9",
        borderRadius: "50%",
        left: "225px",
        animationDuration: "1.1s",
        animationDelay: "0.2s"
    }).addClass("dropAnimation");
    $(".big-drop").eq(8).after("<div class='eq8-1'></div>");
    $(".eq8-1").css({
        content: "",
        position: "absolute",
        bottom: "1px",
        left: "227px",
        width: "4px",
        height: "10px",
        backgroundColor: "#7fc1f9",
        borderRadius: "50%",
        animationDuration: "1.1s",
        animationDelay: "0.2s",
        transform: "rotate(35deg)"
    }).addClass("dropAnimation");
    // 10 bid drop
    $(".big-drop").eq(9).css({
        left: "260px",
        animationDuration: "1.1s",
        animationDelay: "0.4s"
    }).before("<div class='eq9'></div>");
    $(".eq9").css({
        content: "",
        position: "absolute",
        width: "6px",
        height: "6px",
        bottom: "0px",
        backgroundColor: "#7fc1f9",
        borderRadius: "50%",
        left: "260px",
        animationDuration: "1.1s",
        animationDelay: "0.4s"
    }).addClass("dropAnimation");
    $(".big-drop").eq(9).after("<div class='eq9-1'></div>");
    $(".eq9-1").css({
        content: "",
        position: "absolute",
        bottom: "1px",
        left: "262px",
        width: "4px",
        height: "10px",
        backgroundColor: "#7fc1f9",
        borderRadius: "50%",
        animationDuration: "1.1s",
        animationDelay: "0.4s",
        transform: "rotate(35deg)"
    }).addClass("dropAnimation");

    //Mediun drop
    $(".medium-drop").css({
        position: "absolute",
        zIndex: "20",
        left: "18px",
        bottom: "0px",
        borderRadius: "50%",
        width: "6px",
        height: "6px",
        backgroundColor: "#3f82c2",
    }).addClass("dropAnimation");
    // 1 mediun drop
    $(".medium-drop1").css({
        animationDuration: "1.5s"
    }).before("<div class='med0'></div>");
    $(".med0").css({
        content: "",
        position: "absolute",
        bottom: "0px",
        left: "18px",
        width: "4px",
        height: "4px",
        backgroundColor: "#7fc1f9",
        borderRadius: "3px",
        animationDuration: "1.5s"
    }).addClass("dropAnimation");
    $(".medium-drop1").after("<div class='med0-1'></div>");
    $(".med0-1").css({
        content: "",
        position: "absolute",
        bottom: "0px",
        left: "18px",
        width: "4px",
        height: "8px",
        borderRadius: "50%",
        backgroundColor: "#7fc1f9",
        animationDuration: "1.5s"
    }).addClass("dropAnimation");
    // segunda gota
    $(".medium-drop2").css({
        left: "48px",
        animationDuration: "1.8s"
    }).before("<div class='med2'></div>");
    $(".med2").css({
        content: "",
        position: "absolute",
        left: "48px",
        bottom: "0px",
        width: "4px",
        height: "4px",
        backgroundColor: "#7fc1f9",
        borderRadius: "3px",
        animationDuration: "1.8s"
    }).addClass("dropAnimation");
    $(".medium-drop2").after("<div class='med2-1'></div>");
    $(".med2-1").css({
        content: "",
        position: "absolute",
        bottom: "1px",
        left: "48px",
        width: "4px",
        height: "8px",
        backgroundColor: "#7fc1f9",
        borderRadius: "50%",
        animationDuration: "1.8s"
    }).addClass("dropAnimation");
    // 3 gota
    $(".medium-drop3").css({
        left: "85px",
        animationDuration: "1.6s"
    }).before("<div class='med3'></div>");
    $(".med3").css({
        content: "",
        position: "absolute",
        width: "4px",
        height: "4px",
        bottom: "0px",
        backgroundColor: "#7fc1f9",
        borderRadius: "50%",
        left: "85px",
        animationDuration: "1.6s"
    }).addClass("dropAnimation");
    $(".medium-drop3").after("<div class='med3-1'></div>");
    $(".med3-1").css({
        content: "",
        position: "absolute",
        bottom: "1px",
        left: "85px",
        width: "4px",
        height: "8px",
        backgroundColor: "#7fc1f9",
        borderRadius: "50%",
        animationDuration: "1.6s",
        transform: "rotate(35deg)"
    }).addClass("dropAnimation");
    // 4gota
    $(".medium-drop4").css({
        left: "95px",
        animationDuration: "1.9s",
        animationDelay: "0.3s"
    }).before("<div class='med4'></div>");
    $(".med4").css({
        content: "",
        position: "absolute",
        width: "4px",
        height: "4px",
        bottom: "0px",
        backgroundColor: "#7fc1f9",
        borderRadius: "50%",
        left: "95px",
        animationDuration: "1.9s",
        animationDelay: "0.3s"
    }).addClass("dropAnimation");
    $(".medium-drop4").after("<div class='med4-1'></div>");
    $(".med4-1").css({
        content: "",
        position: "absolute",
        bottom: "1px",
        left: "96px",
        width: "4px",
        height: "8px",
        backgroundColor: "#7fc1f9",
        borderRadius: "50%",
        animationDuration: "1.9s",
        animationDelay: "0.3s",
        transform: "rotate(35deg)"
    }).addClass("dropAnimation");
    // 5  drop
    $(".medium-drop5").css({
        left: "130px",
        animationDuration: "1.4s",
        animationDelay: "0.3s"
    }).before("<div class='med5'></div>");
    $(".med5").css({
        content: "",
        position: "absolute",
        width: "4px",
        height: "4px",
        bottom: "0px",
        backgroundColor: "#7fc1f9",
        borderRadius: "50%",
        left: "130px",
        animationDuration: "1.4s",
        animationDelay: "0.3s"
    }).addClass("dropAnimation");
    $(".medium-drop").after("<div class='med5-1'></div>");
    $(".med5-1").css({
        content: "",
        position: "absolute",
        bottom: "1px",
        left: "131px",
        width: "4px",
        height: "8px",
        backgroundColor: "#7fc1f9",
        borderRadius: "50%",
        animationDuration: "1.4s",
        animationDelay: "0.3s",
        transform: "rotate(35deg)"
    }).addClass("dropAnimation");
    // 6 drop
    $(".medium-drop6").css({
        left: "150px",
        animationDuration: "1.9s",
        animationDelay: "0.8s"
    }).before("<div class='med6'></div>");
    $(".med6").css({
        content: "",
        position: "absolute",
        width: "4px",
        height: "4px",
        bottom: "0px",
        backgroundColor: "#7fc1f9",
        borderRadius: "50%",
        left: "150px",
        animationDuration: "1.9s",
        animationDelay: "0.8s"
    }).addClass("dropAnimation");
    $(".medium-drop6").after("<div class='med6-1'></div>");
    $(".med6-1").css({
        content: "",
        position: "absolute",
        bottom: "1px",
        left: "151px",
        width: "4px",
        height: "8px",
        backgroundColor: "#7fc1f9",
        borderRadius: "50%",
        animationDuration: "1.9s",
        animationDelay: "0.8s",
        transform: "rotate(25deg)"
    }).addClass("dropAnimation");
    // 7 drop
    $(".medium-drop7").css({
        left: "180px",
        animationDuration: "1.6s",
        animationDelay: "0.2s"
    }).before("<div class='med7'></div>");
    $(".med7").css({
        content: "",
        position: "absolute",
        width: "4px",
        height: "4px",
        bottom: "0px",
        backgroundColor: "#7fc1f9",
        borderRadius: "50%",
        left: "180px",
        animationDuration: "1.6s",
        animationDelay: "0.2s"
    }).addClass("dropAnimation");
    $(".medium-drop7").after("<div class='med7-1'></div>");
    $(".med7-1").css({
        content: "",
        position: "absolute",
        bottom: "1px",
        left: "180px",
        width: "4px",
        height: "8px",
        backgroundColor: "#7fc1f9",
        borderRadius: "50%",
        animationDuration: "1.6s",
        animationDelay: "0.2s",
        transform: "rotate(35deg)"
    }).addClass("dropAnimation");
    // 8 drop
    $(".medium-drop8").css({
        left: "215px",
        animationDuration: "2s",
        animationDelay: "0.2s"
    }).before("<div class='med8'></div>");
    $(".med8").css({
        content: "",
        position: "absolute",
        width: "4px",
        height: "4px",
        bottom: "0px",
        backgroundColor: "#7fc1f9",
        borderRadius: "50%",
        left: "215px",
        animationDuration: "2s",
        animationDelay: "0.2s"
    }).addClass("dropAnimation");
    $(".medium-drop8").after("<div class='med8-1'></div>");
    $(".med8-1").css({
        content: "",
        position: "absolute",
        bottom: "1px",
        left: "215px",
        width: "4px",
        height: "8px",
        backgroundColor: "#7fc1f9",
        borderRadius: "50%",
        animationDuration: "2s",
        animationDelay: "0.2s",
        transform: "rotate(35deg)"
    }).addClass("dropAnimation");
    // 9 drop
    $(".medium-drop9").css({
        left: "245px",
        animationDuration: "2s",
        animationDelay: "0.3s"
    }).before("<div class='med9'></div>");
    $(".med9").css({
        content: "",
        position: "absolute",
        width: "4px",
        height: "4px",
        bottom: "0px",
        backgroundColor: "#7fc1f9",
        borderRadius: "50%",
        left: "245px",
        animationDuration: "2s",
        animationDelay: "0.3s"
    }).addClass("dropAnimation");
    $(".medium-drop9").after("<div class='med9-1'></div>");
    $(".med9-1").css({
        content: "",
        position: "absolute",
        bottom: "0px",
        left: "245px",
        width: "4px",
        height: "8px",
        backgroundColor: "#7fc1f9",
        borderRadius: "50%",
        animationDuration: "2s",
        animationDelay: "0.3s",
        transform: "rotate(15deg)"
    }).addClass("dropAnimation");
    
    //small drop
    $(".small-drop").css({
        position: "absolute",
        zIndex: "20",
        left: "10px",
        bottom: "0px",
        borderRadius: "50%",
        width: "3px",
        height: "3px",
        backgroundColor: "#265a8a",
    }).addClass("dropAnimation");
    // 1  drop
    $(".sd1").css({
        animationDuration: "2s"
    }).before("<div class='sm1'></div>");
    $(".sm1").css({
        content: "",
        position: "absolute",
        bottom: "0px",
        left: "9px",
        width: "2px",
        height: "2px",
        backgroundColor: "#7fc1f9",
        borderRadius: "3px",
        animationDuration: "2s"
    }).addClass("dropAnimation");
    $(".sd1").after("<div class='sm1-1'></div>");
    $(".sm1-1").css({
        content: "",
        position: "absolute",
        bottom: "0px",
        left: "10px",
        width: "1px",
        height: "4px",
        borderRadius: "50%",
        backgroundColor: "#7fc1f9",
        animationDuration: "2s"
    }).addClass("dropAnimation");
    // 2 drop
    $(".sd2").css({
        left: "40px",
        animationDuration: "2.5s"
    }).before("<div class='sm2'></div>");
    $(".sm2").css({
        content: "",
        position: "absolute",
        left: "40px",
        bottom: "0px",
        width: "2px",
        height: "2px",
        backgroundColor: "#7fc1f9",
        borderRadius: "3px",
        animationDuration: "2.5s"
    }).addClass("dropAnimation");
    $(".sd2").after("<div class='sm2-1'></div>");
    $(".sm2-1").css({
        content: "",
        position: "absolute",
        bottom: "0px",
        left: "40px",
        width: "1px",
        height: "4px",
        backgroundColor: "#7fc1f9",
        borderRadius: "50%",
        animationDuration: "2.5s"
    }).addClass("dropAnimation");
    // 3 gota
    $(".sd3").css({
        left: "65px",
        animationDuration: "2.4s"
    }).before("<div class='sm3'></div>");
    $(".sm3").css({
        content: "",
        position: "absolute",
        width: "2px",
        height: "2px",
        bottom: "0px",
        backgroundColor: "#7fc1f9",
        borderRadius: "50%",
        left: "65px",
        animationDuration: "2.4s"
    }).addClass("dropAnimation");
    $(".sd3").after("<div class='sm3-1'></div>");
    $(".sm3-1").css({
        content: "",
        position: "absolute",
        bottom: "1px",
        left: "65px",
        width: "1px",
        height: "4px",
        backgroundColor: "#7fc1f9",
        borderRadius: "50%",
        animationDuration: "2.4s",
        transform: "rotate(35deg)"
    }).addClass("dropAnimation");
    // 4gota
    $(".sd4").css({
        left: "88px",
        animationDuration: "2.1s",
        animationDelay: "0.3s"
    }).before("<div class='sm4'></div>");
    $(".sm4").css({
        content: "",
        position: "absolute",
        width: "2px",
        height: "2px",
        bottom: "0px",
        backgroundColor: "#7fc1f9",
        borderRadius: "50%",
        left: "88px",
        animationDuration: "2.1s",
        animationDelay: "0.3s"
    }).addClass("dropAnimation");
    $(".sd4").after("<div class='sm4-1'></div>");
    $(".sm4-1").css({
        content: "",
        position: "absolute",
        bottom: "1px",
        left: "88px",
        width: "1px",
        height: "4px",
        backgroundColor: "#7fc1f9",
        borderRadius: "50%",
        animationDuration: "2.1s",
        animationDelay: "0.3s",
        transform: "rotate(35deg)"
    }).addClass("dropAnimation");
    // 5 dig drop
    $(".sd5").css({
        left: "120px",
        animationDuration: "2.4s",
        animationDelay: "0.1s"
    }).before("<div class='sm5'></div>");
    $(".sm5").css({
        content: "",
        position: "absolute",
        width: "2px",
        height: "2px",
        bottom: "0px",
        backgroundColor: "#7fc1f9",
        borderRadius: "50%",
        left: "120px",
        animationDuration: "2.4s",
        animationDelay: "0.1s"
    }).addClass("dropAnimation");
    $(".sd5").after("<div class='sm5-1'></div>");
    $(".sm5-1").css({
        content: "",
        position: "absolute",
        bottom: "1px",
        left: "120px",
        width: "1px",
        height: "4px",
        backgroundColor: "#7fc1f9",
        borderRadius: "50%",
        animationDuration: "2.4s",
        animationDelay: "0.1s",
        transform: "rotate(35deg)"
    }).addClass("dropAnimation");
    // 6 bid drop
    $(".sd6").css({
        left: "150px",
        animationDuration: "2.9s",
        animationDelay: "0.3s"
    }).before("<div class='sm6'></div>");
    $(".sm6").css({
        content: "",
        position: "absolute",
        width: "2px",
        height: "2px",
        bottom: "0px",
        backgroundColor: "#7fc1f9",
        borderRadius: "50%",
        left: "150px",
        animationDuration: "2.9s",
        animationDelay: "0.3s"
    }).addClass("dropAnimation");
    $(".sd6").after("<div class='sm6-1'></div>");
    $(".sm6-1").css({
        content: "",
        position: "absolute",
        bottom: "1px",
        left: "151px",
        width: "1px",
        height: "4px",
        backgroundColor: "#7fc1f9",
        borderRadius: "50%",
        animationDuration: "2.9s",
        animationDelay: "0.3s",
        transform: "rotate(25deg)"
    }).addClass("dropAnimation");
    // 7 big drop
    $(".sd7").css({
        left: "175px",
        animationDuration: "2.6s",
        animationDelay: "0.2s"
    }).before("<div class='sm7'></div>");
    $(".sm7").css({
        content: "",
        position: "absolute",
        width: "2px",
        height: "2px",
        bottom: "0px",
        backgroundColor: "#7fc1f9",
        borderRadius: "50%",
        left: "175px",
        animationDuration: "2.6s",
        animationDelay: "0.2s"
    }).addClass("dropAnimation");
    $(".sd7").after("<div class='sm7-1'></div>");
    $(".sm7-1").css({
        content: "",
        position: "absolute",
        bottom: "1px",
        left: "175px",
        width: "1px",
        height: "4px",
        backgroundColor: "#7fc1f9",
        borderRadius: "50%",
        animationDuration: "2.6s",
        animationDelay: "0.2s",
        transform: "rotate(35deg)"
    }).addClass("dropAnimation");
    // 8 big drop
    $(".sd8").css({
        left: "205px",
        animationDuration: "2s",
        animationDelay: "0.4s"
    }).before("<div class='sm8'></div>");
    $(".sm8").css({
        content: "",
        position: "absolute",
        width: "2px",
        height: "2px",
        bottom: "0px",
        backgroundColor: "#7fc1f9",
        borderRadius: "50%",
        left: "205px",
        animationDuration: "2s",
        animationDelay: "0.4s"
    }).addClass("dropAnimation");
    $(".sd8").after("<div class='sm8-1'></div>");
    $(".sm8-1").css({
        content: "",
        position: "absolute",
        bottom: "1px",
        left: "205px",
        width: "1px",
        height: "4px",
        backgroundColor: "#7fc1f9",
        borderRadius: "50%",
        animationDuration: "2s",
        animationDelay: "0.4s",
        transform: "rotate(35deg)"
    }).addClass("dropAnimation");
    // 9 dig drop
    $(".sd9").css({
        left: "235px",
        animationDuration: "2.3s",
        animationDelay: "0.1s"
    }).before("<div class='sm9'></div>");
    $(".sm9").css({
        content: "",
        position: "absolute",
        width: "2px",
        height: "2px",
        bottom: "0px",
        backgroundColor: "#7fc1f9",
        borderRadius: "50%",
        left: "235px",
        animationDuration: "2.3s",
        animationDelay: "0.1s"
    }).addClass("dropAnimation");
    $(".sd9").after("<div class='sm9-1'></div>");
    $(".sm9-1").css({
        content: "",
        position: "absolute",
        bottom: "0px",
        left: "235px",
        width: "1px",
        height: "6px",
        backgroundColor: "#7fc1f9",
        borderRadius: "50%",
        animationDuration: "2.3s",
        animationDelay: "0.1s",
        transform: "rotate(15deg)"
    }).addClass("dropAnimation");

    //Day 10
    $(".days-10").css({
        backgroundColor: "#4c4c4c"
    });
    $(".content-reloj").css({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    });
    $(".inner-reloj").css({
        position: "absolute",
        width: "200px",
        height: "200px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#242424",
        borderRadius: "50%",
        border: "7px solid #3a3a3a",
        color: "#ffffff"
    });
    $(".inner-reloj .inner-text .date-reloj").css({
        fontSize: "12px"
    });
    $(".inner-reloj .inner-text .time-reloj").css({
        fontSize: "45px"
    });
    $(".inner-reloj .inner-text .state").css({
        display: "flex",
        justifyContent: "space-between",
        fontSize: "12px",
        alignItems: "center"
    });
    $(".inner-reloj .inner-text .state .like iconify-icon").css({
        transform: "scale(1.2)"
    }).addClass("likeReloj")
    $(".inner-reloj .inner-text .state .like").css({
        display: "flex",
        gap: "3px"
    });
    $(".inner-reloj .inner-text .state .kcal").css({
        display: "flex",
        gap:"3px"
    })
    $(".content-reloj svg").css({
        position: "absolute",
        transform: "rotate(270deg)"
    })
    $(".inner-reloj .borderReloj").css({
        width: "85%",
        height: "85%",
        // backgroundColor: "red",
        position: "absolute",
        borderRadius: "50%",
        border: "dotted 3px #ffffff"
    })
    $(".content-reloj circle").css({
        fill: "none",
        stroke: "url(#backgroundColor)",
        strokeWidth: "3px",
        strokeDasharray: "550",
        strokeDashoffset: "550"
    }).addClass("relojAnimation");

    //Day 11
    $(".days-11").css({
        background: "radial-gradient(ellipse at center,  rgba(246,232,215,1) 0%,rgba(218,190,155,1) 100%)", 
        position: "relative"
    });
});

// A partir de este ejercicios utilizaremos jQuery de otra manera
// lo usaremos para añadir funcionalidades.
    //Day 12
$(document).ready(function(){
    // hover ventana flotante
    $(".obsession").hover(()=>{
        $("#floatingW").css({
            position: "absolute",
            transform: "translateY(-141px)",
            opacity: "1",
        });
        //mantener hover
        $("#floatingW").hover(() => {
            $("#floatingW").css({
                "transform": "translateY(-141px)",
            });
        });
    },()=>{
        $("#floatingW").css({
            transform: "translateY(-280px)"
        });
    });
});

$(document).ready(function(){
    //Day 13
    $(".profile-container div").each((index, element) => {
        $(element).hover(() => {
            $(element).css({
                filter: "contrast(0.8)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }).append("<button type='submit' class='btn-submit'>+</button>")
            $(".btn-submit").css({
                width: "50px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                border: "none",
                fontSize: "25px",
                position: "absolute",
                backgroundColor: "#e96565",
                color: "#fff",
                scale: "1.5",
                transition: "scale 0.3s ease-out"
            }).animate({
                scale: "1"
            }, 100);
            //evento click
            $(".btn-submit").on("click", (e) => {
                e.preventDefault();
                $(`<div id='profileAll'>
                        <span class="name-profile">
                            ${index === 1 ? "Juan Pedro" : "Julia Toth " + (index + 1)}
                        </span>
                        <div class="icon-container">
                            <div class="icon telephone">
                                <iconify-icon icon="mdi:telephone" width="24" height="24"></iconify-icon>
                            </div>
                            <div class="icon message">
                                <iconify-icon icon="iconoir:message-solid" width="24" height="24"></iconify-icon>
                            </div>
                            <div class="icon eart">
                                <iconify-icon icon="bi:suit-heart-fill" width="24" height="24"></iconify-icon>
                            </div>
                        </div>
                    </div>`).insertAfter(".profile-container");
                $("#profileAll").css({
                    width: "100%",
                    height: "50%",
                    backgroundColor: "#e96565",
                    position: "absolute",
                    transform: "translateY(230px)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    gap:"15px",
                    transition: "transform 1s ease"
                });
                setTimeout(() => {
                    $("#profileAll").css({
                        transform: "translateY(75px)"
                    });
                }, 200)
                $(".name-profile").css({
                    fontSize: "1.1rem",
                    fontWeight: "bold"
                });
                $(".icon-container").css({
                    display: "flex",
                    gap: "30px",
                    marginBottom: "-25px"
                });
                $(".icon-container .icon").css({
                    border: "solid 1px #fff",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                    display: "flex",
                    alignItems:  "center",
                    justifyContent: "center",
                    boxShadow: "1px 2px 10px 0px rgba(0, 0, 0, 0.1)"
                });
                // hover iconify-icon
                $(".icon-container .icon").each((indexIcon, elementIcon) => {
                    $(elementIcon).hover(() => {
                        $(elementIcon).css({
                            backgroundColor: "#fff",
                            color: "#e96565",
                        });
                    }, () => {
                        $(elementIcon).css({
                            backgroundColor: "#e96565",
                            color: "#fff"
                        });
                    });
                });
                //fin hover
                // head del evento click
                $("<div id='head-profile'></div>").insertAfter(".profile-container");
                $("#head-profile").css({
                    width: "100%",
                    height: "50%",
                    transform: "translateY(-230px)",
                    position: "absolute",
                    transition: "transform 1s ease"
                });
                setTimeout(() => {
                    $("#head-profile").css({
                        transform: "translateY(-75px)"
                    });
                }, 200);
                $("<div class='circle-profile'></div>").insertBefore("#head-profile");
                $(".circle-profile").css({
                    width: "100px",
                    height: "100px",
                    backgroundImage: `url("https://100dayscss.com/codepen/13-${(index + 1)}.jpg")`,
                    backgroundSize: "cover",
                    backgroundRepeat: "not-repeat",
                    position: "absolute",
                    borderRadius: "50%",
                    transform: "translateX(0%) translateY(-200%)",
                    zIndex: "1",
                    border: "solid 1px #fff",
                    transition: "transform 1s ease"
                });
                setTimeout(() => {
                    $(".circle-profile").css({
                        transform: "translateX(0%) translateY(0%)"
                    })
                }, 400);
                $("#head-profile").append("<button id='btn-x'>X</button>");
                $("#btn-x").css({
                    width: "50px",
                    height: "50px",
                    backgroundColor: "#e96565",
                    position: "absolute",
                    color: "#fff",
                    border: "none",
                    borderRadius: "50%",
                    right: "10px",
                    top: "-60px",
                    transition: "top 1s ease"
                });
                setTimeout(() => {
                    $("#btn-x").css({
                        top: "10px"
                    })
                }, 1000);
                //hover btn-x
                $("#btn-x").hover(() => {
                    $("#btn-x").css({
                        backgroundColor: "#fff",
                        color: "#e96565"
                    });
                }, () => {
                    $("#btn-x").css({
                        backgroundColor: "#e96565",
                        color: "#fff"
                    });
                });
                //event btn-x
                $("#btn-x").on("click", (e) => {
                    e.preventDefault();
                    setTimeout(() => {
                        $("#head-profile").css({
                            transform: "translateY(-230px)"
                        });
                        $("#profileAll").css({
                            transform: "translateY(230px)"
                        });
                    }, 1000);
                    setTimeout(() => {
                        $(".circle-profile").css({
                            transform: "translateX(0%) translateY(-200%)"
                        })
                    }, 500);
                    setTimeout(() => {
                        $("#btn-x").css({
                            top: "-60px"
                        });
                    }, 200);
                });
                
            });// fin evento click +
        }, () => {
            $(element).css({
                filter: "contrast(1)",
            });
            $(".btn-submit").animate({
                scale: "3",
                opacity: "0"
            }, 250);
        });
    });
    //Day 14
    $(".days-14 .content-animation .bicycle-helicopter .bicycle").append("<div class='eartBC'></div>");
    $(".eartBC").css({
        width: "3px",
        height: "110%",
        position: "absolute",
        bottom: "-38px",
        left: "60px",
        transform: "rotate(90deg)",
        overflow: "hidden",
    });
    $(".days-14 .content-animation .bicycle-helicopter .helicopter").append("<div class='airHelicopter'></div>");
    $(".airHelicopter").css({
        width: "80%",
        height: "80%",
        left: "-40px",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        top: "15px",
    });
    let count = 0;
    function renderHtml(){        
        while(count < 10){
            const renderElement =  `<div class="appendBC" id="item-${count}"></div>`;
            $(".eartBC").append(renderElement);
            $(`#item-${count}`).css({
                width: "2px",
                height: `${count}px`,
                backgroundColor: "#4b4841",
                position: "relative",
                transform: "translateY(-10px) translateX(0px)",
                transition: "transform ease",
                animationDuration: `.${count}s`,
                animationDelay: `.${count}s`
            });
            const renderElement1 =  `<div class="appendAir" id="itemAir-${count}"></div>`;
            $(".airHelicopter").append(renderElement1);
            $(`#itemAir-${count}`).css({
                width: `${count}px`,
                height: "3px",
                backgroundColor: "#4b4841",
                position: "relative",
                transition: "transform ease",
                animationDuration: `${Math.random()* 2}s`,
                animationDelay: `.${count}s`,
            });
                count++;
        }
    }
    renderHtml();

    // Day 15
    $(".days-15 .form .body-form .action-form").hover(() => {
        $(".action-form").css({
            boxShadow: "0px 2px 0px 0px #498c25,0px 2px 10px 0px #6ece3b",
        });
    }, () => {
        $(".action-form").css({
            boxShadow: "0px 2px 0px 0px #498c25"
        });
    });
    // input
    $("#inputFile").change((e) => {
        let file = e.target.files[0];
        function fileTrueAndFalse(file){
            return file && file.name !== "";
        };
        $("#drop-icon").on("hover");
        $("#drop-icon").on("mousemove");
        console.log(fileTrueAndFalse(file))
        //condicion  
        if(fileTrueAndFalse(file)){
            $("#drop-icon iconify-icon").hide();
            //hover
            $("#drop-icon").append(file.name).hover(() => {
            $("#contentFile").append(`<div id='textFile'>${file.name}</div>`);
            
                
            }, () => {
                $("#drop-icon").find("#textFile").last().remove();
            });
            //evento mouse
            $("#drop-icon").on("mousemove", (e) => {
                let pageX = e.pageX;
                let pageY = e.pageY;
                $("#textFile").css({
                    position: "absolute",
                    transform: `translateX(${pageX - 100}px) translateY(${pageY - 215}px)`,
                    padding: "2px 4px",
                    border: "solid 1px black",
                    backgroundColor: "#fff"
                });
            });
            //event button
            $("#btnFile").on("click", () => {
                $(".content-iconify iconify-icon").each((index, element) => {
                    $("#btnFile").text("loading...");
                    $(".content-iconify").css("display", "flex");
                    $("#drop-icon").hide();
                    $(element).eq(index === 0).css({
                        display: "flex",
                        color: "#a3a2a0",
                        backgroundColor: "#fff",
                    });
                    setTimeout(() => {
                        $(element).eq(index === 0).css({
                            display: "none"
                        });
                    }, 3000);
                    setTimeout(() => {
                        $(element).eq(index === 1).css({
                            display: "flex",
                            color: "#a3a2a0"
                        });
                        $("#btnFile").text("Done");
                        $("#btnFile").off("click")
                    }, 3001);
                });
                $(".days-15 .form .head-form").after("<div id='loadingFile'></div>");
                $("#loadingFile").css({
                    width: "0%",
                    height: "4px",
                    backgroundColor: "#498c25",
                    position: "relative",
                    transform: "translateX(-120px)"
                })
                $("#loadingFile").animate({
                    width: "200%"
                }, 3000);
                
            })
        }else {
            //hover
            $("#drop-icon").hover(() => {
                $("#contentFile").append("<div id='alert'>No ha seleccionado ningún archivo</div>");    
            }, () => {
                $("#drop-icon").find("#alert").last().remove();
            });
            //evento mouse
            $("#drop-icon").on("mousemove", (e) => {
                let pageX = e.pageX;
                let pageY = e.pageY;
                $("#alert").css({
                    position: "absolute",
                    transform: `translateX(${pageX - 125}px) translateY(${pageY - 215}px)`,
                    padding: "4px",
                    border: "solid 1px black",
                    backgroundColor: "#fff",
                    width: "160px",
                    fontSize: "10px",
                });
            });
        };
    });

    // Day 16 y 17 cons css.

    // Day 18
    $(".days-18").css({
        position: "relative",
        boxShadow: "1px 2px 10px 0px rgba(0,0,0,0.3)",
        overflow: "hidden"
    });
    $(".days-18 .top").css({
        width: "100%",
        height: "50%",
        backgroundColor: "#363636",
        position: "absolute",
        top: "0"
    });
    $(".days-18 .bottom").css({
        width: "100%",
        height: "50%",
        backgroundColor: "#2ec9a2",
        position: "absolute",
        bottom: "0px"
    });
    $(".days-18 .elastic").css({
        position: "absolute",
        width: "320px",
        height: "300px",
        borderRadius: "50%",
        transformStyle: "preserve-3d",
        zIndex: "2",
        animation: "elastic 5s ease-in-out infinite"
    });
    $(".elastic .grey").css({
        position: "absolute",
        width: "100%",
        height: "100%",
        "backface-visibility": "hidden",
        backgroundColor: "#363636",
        borderRadius: "50%",
        zIndex: "2",
        transform: "rotateX(0deg)"
    });
    $(".elastic .green").css({
        position: "absolute",
        width: "100%",
        height: "100%",
        "backface-visibility": "hidden",
        backgroundColor: "#2ec9a2",
        borderRadius: "50%",
        zIndex: "1",
        transform: "rotateX(180deg)"
    });

    // Day 19
    $(".days-19").css({
        boxShadow: "1px 2px 10px 0px rgba(0, 0, 0, 0.3)",
        position: "relative",
        overflow: "hidden"
    });
    $(".days-19 .slider-container").css({
        width: "1000px",
        height: "100%",
        position: "absolute",
        display: "flex",
        transform: "translateX(330px)",
    });
    $("#slider-1").css({
        backgroundColor: "#a95bf1",
        width: "100%",
        height: "100%"
    });
    $("#slider-2").css({
        width: "100%",
        height: "100%",
        backgroundColor: "#4a9eff",
    });
    $("#slider-3").css({
        width: "100%",
        height: "100%",
        backgroundColor: "#08dbbf",
    });
    $(".days-19 .content-radioBtn").css({
        width: "200px",
        height: "100px",
        position: "absolute",
        display: "flex",
        padding: "10px",
        gap: "10px",
        alignItems: "center",
        justifyContent: "center"
    }).after("<div id='radioMove'></div>");
    $("#radioMove").css({
        width: "40px",
        height: "40px",
        backgroundColor: "#fff",
        position: "absolute",
        borderRadius: "50%",
        transform: "translateX(-60px)",
        transition: "transform 0.5s ease-in-out"
    });
    $(".days-19 .content-radioBtn .btnRadio").css({
        width: "50px",
        height: "50px",
        border: "solid 2px #fff",
        borderRadius: "50%"
    });
    $(".days-19 .content-radioBtn .btnRadio").each((index, element) => {
        $(element).on("click", (e) => {
            if(e.target.id === "slider1"){
                $(".days-19 .slider-container").css({
                    transform: "translateX(330px)",
                    transition: "transform 0.8s ease-in-out"
                });
                $("#radioMove").css({
                    transform: "translateX(-60px)"
                });
            }else if(e.target.id === "slider2"){
                $(".days-19 .slider-container").css({
                    transform: "translateX(0px)",
                    transition: "transform 0.8s ease-in-out"
                });
                $("#radioMove").css({
                    transform: "translateX(0px)"
                });
            }else if(e.target.id === "slider3"){
                $(".days-19 .slider-container").css({
                    transform: "translateX(-330px)",
                    transition: "transform 0.8s ease-in-out"
                });
                $("#radioMove").css({
                    transform: "translate(60px)"
                });
            }
        });
    });

    // Day 20 
    $(".days-20 .frame .button").on("click", () => {
        let label = $("input:checked").length;
        if(label === 0){
            setTimeout(() => {
                $(".days-20 .frame .circle-day20").css({
                    animation: "circleDay20 2s ease-in-out forwards"
                });
                $(".days-20 .frame .circle-outer20").css({
                    animation: "outer20 2s ease-in-out forwards"
                })
            }, 100);
            setTimeout(() => {
                $(".days-20 .frame .mail").css({
                    animation: "mail 1.5s ease-in-out forwards"
                });
                $(".days-20 .frame .plane").css({
                    animation: "plane 1.5s ease-in-out 1s forwards"
                })
            }, 1000);
            setTimeout(() => {
                $(".days-20 .frame .button").css({
                    animation: "button20 3s ease-in-out forwards"
                });
                $(".days-20 .frame .reset").css({
                    animation: "buttonReset 3.5s ease-in-out forwards"
                })
            },3500);
        }
        if(label === 1){
            $(".days-20 .frame .circle-day20, .circle-outer20, .mail, .plane, .button").css({
                animation: "none"
            });
        }

    })
});
// Ahora pasamos con los de sass
// JQuery es bueno reduciendo el codigo js para añadir funcionalidad me gusta 
// falta mas practica para poder dominar todo su poder

// Day 25


//Day 26
$(document).ready(function(){
    let active = 1;
    $(".days-26 .carD26 .action-btn button").on("click", function(){
        $(`.days-26 .carD26:nth-child(` + active + `)`).removeClass("active").addClass("inactive");
        if(active === 3){
            active = 0;
        }
        active++;
        $(`.days-26 .carD26:nth-child(` + active + `)`).removeClass("inactive").addClass("active");
    })
});
// copiado esta parte del day 26 solucionar problema para empezar de cero(practicar logica)

//Day 29
$(document).ready(function(){
    $(".days-29 .inputContainerD29 input[type='text']").keyup(function(){
        let text = $(this).val();
        if(text.length){
            $(".days-29 .listD29").css({
                display: "flex"
            });
            $(".days-29 .listD29").html(`
                    <li class="liD29">${text}</li>
                    <li class="liD29">Veritatis et ${text}</li>
                    <li class="liD29">ut aliquid ex ${text} vero eos</li>
                `);
        }else{
            $(".days-29 .listD29").css({
                display: "none"
            });
        }
    });


    //Day 32
    let countD32 = 0;
    $(".days-32 .actionD32 #numD32").append(`<div class="divD32">${countD32}</div>`);
    $(".days-32 .actionD32 button").on("click", (e) => {
        
        if(e.target.id === "minusD32"){
            countD32--;
            $(".days-32 .actionD32 .content-num .divD32").text(countD32);
            $(".days-32 .actionD32 #numD32").addClass("animateD32");
            setTimeout(() => {
                $(".days-32 .actionD32 #numD32").removeClass("animateD32");
            }, 501);
        }
        if(e.target.id === "plusD32"){
            countD32++
            $(".days-32 .actionD32 .content-num .divD32").text(countD32);
            $(".days-32 .actionD32 #numD32").addClass("animateD32");
            setTimeout(() => {
                $(".days-32 .actionD32 #numD32").removeClass("animateD32");
            }, 501);
        }

        return countD32;
    });
    

    // Day 36
    
    $(".days-36 .contentD36-noti .icons iconify-icon").on("click", (e) => {
        let str = e.target.id;
        $(`.days-36 .contentD36-noti .icons iconify-icon`).css({
            backgroundColor: "rgb(36, 66, 90)"
        });//background-color default dentro del event click antes del each
        $(".days-36 .contentD36-noti .bodyD36 .info").each((index, element) => {
            if(element.id === `text-${str}`){
                $(element).css({
                    display: "flex",
                }).addClass("animate-d36");
                $(`.days-36 .contentD36-noti .icons #${str}`).css({
                    backgroundColor: "#4074c2",
                });
            }
            else{
                $(element).css({
                    display: "none",
                });
                
            }
        });
    });
    
    //Day 37
    $(".days-37 .contentD37 .card .bodyD37").css({
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        gap: "5px"
    })
    $(".days-37 .contentD37 #itemD37-1 .bodyD37").append(`
        <div class="lineD37-1"></div>
        <div class="lineD37-2"></div>
        <div class="lineD37-3"></div>
        <div class="lineD37-4"></div>
        <div class="lineD37-5"></div>
        `);
        $(".days-37 .contentD37 #itemD37-2 .bodyD37").append(`
            <div class="lineD37-1"></div>
            <div class="lineD37-2"></div>
            <div class="lineD37-3"></div>
            <div class="lineD37-4"></div>
            <div class="lineD37-5"></div>
            `);
            $(".days-37 .contentD37 #itemD37-3 .bodyD37").append(`
                <div class="lineD37-1"></div>
                <div class="lineD37-2"></div>
                <div class="lineD37-3"></div>
                <div class="lineD37-4"></div>
                <div class="lineD37-5"></div>
                `);

    // day 38
    //evento click primario (+ zoom)
    $(".days-38 .contentD38 #path38-1").on("click", (e) => {
        $("#path38-1").css({
            transform: "scale(5)"
        });
        $("#path38-2").css({
            transform: "scale(1)"
        });
    });
    //evento click secundario (- zoom)
    $("#path38-2").on("click", (e) => {
        $("#path38-2").css({
            transform: "scale(0)"
        });
        $("#path38-1").css({
            transform: "scale(1)"
        })
    });

   
});

//Day 39
$(document).ready(function(){
    //event click linea
    $(".days-39 .svg39-line").on("click", (e) => {
        $(e.target).css({
            animation: "lnZPlus 2s ease-in-out forwards"
        });
        //line 1
        $(".days-39 .svg39-line .lineD39-1").css({
            animation: "ln39Trans1 2s ease-in-out forwards"
        });
        //line 2
        $(".days-39 .svg39-line .lineD39-2").css({
            animation: "ln39Trans2 2s ease-in-out forwards"
        });
        //text opacity
        $(".days-39 .svg39-text").css({
            animation: "textOpacity 2s ease-in-out forwards"
        });
    });

    //event click text
    $(".days-39 .svg39-text text").on("click", (e) => {
        // text opacity
        $(".days-39 .svg39-text").css({
            animation: "textOpacity2 2s ease-in-out forwards"
        });
        // minus - linea
        $(".days-39 .svg39-line").css({
            animation: "lnZMinus 2s ease-in-out forwards"
        });
        $(".days-39 .svg39-line .lineD39-1").css({
            animation: "ln39Trans1minus1 2s ease-in-out forwards"
        });
        $(".days-39 .svg39-line .lineD39-2").css({
            animation: "ln39Trans1minus2 2s ease-in-out forwards"
        });
    });




    // Day 40
    $(".days-40 .contentD40 .itemd40").on("click", (e) => {
        let target = $(e.target);
        if($(target).hasClass("activeD40-big")){
            $(target).removeClass("activeD40-big").addClass("activeD40-small");
        }else{
            $(target).removeClass("activeD40-small").addClass("activeD40-big");
        }
    });
});


//Day 41 practicar js y JQuery
$(document).ready(function(){
    
    //Day 41
    //position initial con 2s de espera
    setTimeout(() => {
        $(".days-41 .contentD41").addClass("snapD41B")
    }, 2000)
    //crear un constante funcional 
    const snap = () => {
        const src = "https://100dayscss.com/codepen/alert.png";
        const srcWidth = "44px";
        const srcheight = "38px";
        const span = "Oh snap!";
        const paragraph1 = "An error has occured while";
        const paragraph2 = "creating an error report.";
        const textButton = "Dismiss";

        function renderHtml(){
            $(".days-41 .contentD41").append(`
                <img class="imgD41" src=${src} width=${srcWidth} height=${srcheight}></img>
                <span class="spanD41">${span}</span>
                <p class="pD41">${paragraph1}\n${paragraph2}</p>
                <button id="buttonD41">${textButton}</button>
                `)
        }
        renderHtml();
        function scaleD41(){
            $(".days-41 .contentD41 #buttonD41").on("click", (e) => {
                let target = $(e.target);
                
                if($(target)){
                    $(".days-41 .contentD41").toggleClass("snapD41A").removeClass("snapD41B");
                    //hay que remover para que funcione la clase a intercambiar
                }
            })
        }
        scaleD41();
    }
    snap();



    //Day 42

    //idea crear svg para esto 
    function renderStarD42(){
        const countStar = 250;
        //contenedor star
        for(let i = 1; i <= countStar; i++){
             //variables de position
            const pX =  Math.random() * countStar;
            const pY =  Math.random() * countStar;
            const starR = Math.random();
            //ajuste de radius aleatorio y posicion
            if(i % 2 === 0){
                $(".days-42 .contentSvgD42").append(`
                    <svg><circle class="circleD42-${i}" cx="${pX}" cy="${pY}" r="0.4"></circle></svg>
                `);
            }else{
                $(".days-42 .contentSvgD42").append(`
                    <svg><circle class="circleD42-${i}" cx="${pX}" cy="${pY}" r="${starR}"></circle></svg>
                `);
            }    
        }
    }
    renderStarD42();


    //Day 43
    // no hace falta js o jquery



    //Day 44 
    //variables     restas y sumas
    let MLX = 195; // - 5 
    let MLY = 195; // - 5
    let LX1 = MLX; // - 5 
    let LY1 = MLY; // - 5 
    let LX2 = 205; // + 5
    let LY2 = MLY; // - 5 
    let LX3 = LX2; // + 5 
    let LY3 = LX2; // + 5 
    let LX4 = MLX; // - 5 
    let LY4 = LX2; // + 5 
    let LX5 = MLX; // - 5  
    let LY5 = MLY; // - 5   
    //numero para el espacios entre cuadros
    const subtractNum = 6;
    //usaremos un for bucle
    for(let i = 1; i <= 20; i++){
        $(".days-44 .svgD44").append(`
            <svg fill="transparent">
            <path id="rectD44-${i}"
                d="M${MLX},${MLY} L${LX1},${LY1} ${LX2},${LY2} 
                ${LX3},${LY3} ${LX4},${LY4} ${LX5},${LY5} Z"></path>
            </svg>
        `);
        // variables de cordenadas x, y
        MLX -= subtractNum;         
        MLY -= subtractNum;
        LX1 = MLX;
        LY1 = MLY; 
        LX2 += subtractNum;
        LY2 -= subtractNum;
        LX3 += subtractNum;
        LY3 += subtractNum; 
        LX4 -= subtractNum;
        LY4 += subtractNum; 
        LX5 -= subtractNum;
        LY5 -= subtractNum;
        //hover
        $(".days-44 .svgD44").hover(() => {
            $(`#rectD44-${i}`).css({
                animationPlayState: "paused"
            });
        }, () => {
            $(`#rectD44-${i}`).css({
                animationPlayState: "running"
            });
        })
        //fin hover
    }


    //Day 45
        // mousedown     ratón abajo
        // mouseenter    entran con el mouse
        // mouseleave   dejar el ratón
        // mousemove    movimiento del mouse (e.clienteX, e.clienteY)
        // mouseout     ratón fuera
        // mouseover   pasar el ratón por encima
        // mouseup    ratón arriba

    //D46
    //aprender mas sobre sass y sus for y la utilidad
    // que nos dan estas herramientas
    //utilize un color de fondo mas oscuro para
    // eliminar una sombra no deseada y que no 
    // pude retirar, buscare otra solucion mas adelante.
    //Nota para aprender en ejercicios siguientes


    //Day 47
    //inyectar 200 cuadros.
    for(let i = 1; i <= 400; i++){
        // añadiendo los 400 cuadros
        $(".days-47 .contentD47").append(`
                <div id="squad-${i}" class="squadD47"></div>
        `);
        //seleccionar cuadros blancos
        if(i >=130 && i <= 131 || i >= 149 && i <= 152 || i >= 168 && i <= 173
            || i >= 187 && i <= 188 || i >= 190 && i <= 191 || i >= 193 && i <= 194
            || i >= 207 && i <= 214 || i == 229 || i == 232 || i == 248 || i >= 250 && i <= 251
            || i == 253 || i == 267 || i == 269 || i == 272 || i == 274
        ){
            $(`#squad-${i}`).addClass("bgD47-white"); 
        }else{//seleccionar cuadros rojos
            $(`#squad-${i}`).addClass("bgD47-red");
        }  
    }
    //evento click
    $(".days-47 .contentD47 .squadD47").on("click", (e) => {
        let elementHtml = e.target;
        if($(elementHtml).hasClass("bgD47-white")){
            $(elementHtml).removeClass("bgD47-white").addClass("bgD47-red");
        }else{
            $(elementHtml).addClass("bgD47-white").removeClass("bgD47-red");
        }
    })
    

    //Day 49
    $(".days-49").on("mousemove", (e) => {
        let translX = e.clientX - 195;
        let translY = e.clientY - 255;
        $(".days-49 .outerPuntoD49").css({
            transition: "all 0.1s ease",
            // mejor que top y left
            transform: `translate3d(${translX}px, ${translY}px, 0px)`
        })
        // cuando salgo del content vuelvo a position center
        $(".days-49").on("mouseout", (e) => {
            $(".days-49 .outerPuntoD49").css({
                transform: `translate3d(0px, 0px, 0px)`,
                transition: "all 0.1s ease"
            })
        })
    })

    //Day 51
    $(".days-51 form").on("submit", (e) => {
        e.preventDefault();
    });

    //Days 52
    //inyectar html
    for(let i = 1; i <= 10; i++){
        $(".days-52 .contentD52").append(`
            <div class="ringD52${i}"></div>
        `);
        // prueba (bien)
        let numBoltD52 = (i * 10) + 10;
        // console.log(numBoltD52);
        for(let j = 1; j <= numBoltD52; j++){
            $(`.ringD52${i}`).append(`
                <span class="bolt-${j}"></span>
            `);
        }
    };

    //Day 60 
    $(".days-60").on("mousemove", (e) => {
        let heightD60 = e.clientY;
        $(".days-60 .planeD60").css({
            height: heightD60,
        });
    })
    $(".days-60").on("mouseleave", (e) => {
        $(".days-60 .planeD60").css({
            height: 250,
        });
    })


    //Day 62
    for(let i = 1; i <= 3; i++){
        $(`.days-62 .contentD62 .headerD62 #itemD62-${i}`).on("mouseover", (e) => {
            let idD62 = e.currentTarget.id;
            if(idD62 == `itemD62-1`){
                $(`.days-62 .contentD62 .footerD62 .listD62 .lineD62 .BGLineD62`).css({
                    width: "5%",
                });
            }else if(idD62 == `itemD62-2`){
                $(`.days-62 .contentD62 .footerD62 .listD62-1 .lineD62 .BGLineD62`).css({
                    width: "25%",
                });
                $(`.days-62 .contentD62 .footerD62 .listD62-2 .lineD62 .BGLineD62`).css({
                    width: "75%",
                }); 
                $(`.days-62 .contentD62 .footerD62 .listD62-3 .lineD62 .BGLineD62`).css({
                    width: "45%",
                });
            }else if(idD62 == `itemD62-3`){
                $(`.days-62 .contentD62 .footerD62 .listD62 .lineD62 .BGLineD62`).css({
                    width: "100%",
                });
            }
        })
        
        $(`.days-62 .contentD62 .headerD62 #itemD62-${i}`).on("mouseleave", (e) => {
            let idD62 = e.currentTarget.id;
            if(idD62 == `itemD62-${i}`){
                $(`.days-62 .contentD62 .footerD62 .listD62 .lineD62 .BGLineD62`).css({
                    width: "0%",
                })
            }
        })
    } 
    
});
