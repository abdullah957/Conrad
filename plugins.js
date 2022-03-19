$(function() {

    // Add Active Class To navBar
    //When Click on menu Sign
    $("header .container .open ").click(function() {
        $("header .container nav").addClass("active");


    });

    // Add remove Class To navBar
    //When Click on Close Sign
    $("header .container nav .close i ").click(function() {
        $("header .container nav").removeClass("active");

    });
    // Change Header Background When scroll
    $(window).scroll(function() {
            if ($(window).scrollTop() >= 100 && $(window).scrollTop() < $(".about").offset().top) {
                $("header").fadeOut(300)
            } else if ($(window).scrollTop() >= $(".about").offset().top) {
                $("header").fadeIn(700)
                $("header").css({ "background": "#000" })
            } else {
                $("header").fadeIn(800)
                $("header").css({ "background": "transparent" })
            }
        })
      


    //Add padding To Home Section
    $("body .sync .container ,body .contact .container .down").css({
        "padding-top": $(" body header").height() + 40
    });
    //Animate Arrow On Hover
    $(".arrow").hover(
        function() {
            $(this).animate({ width: "4rem" })
        },
        function() {
            $(this).animate({ width: "3rem" })

        }, 1000)

    //Slide Of Home Background when click in bottom or dots
    x = 0;
    $(".left").click(function() {
        x -= 1;
        x == -1 ? x = 3 : true;
        slide(x);


    });
    $(".right").click(function() {
        x += 1;
        x == 4 ? x = 0 : true;
        slide(x);
    });

    function slide(x) {
        if (x == 0) {
            $(".home.one").addClass("active")
            $(".home.one").siblings().removeClass("active")
        } else
        if (x == 1) {
            $(".home.two").addClass("active")
            $(".home.two").siblings().removeClass("active")
        } else if (x == 2) {
            $(".home.three").addClass("active")
            $(".home.three").siblings().removeClass("active")
        } else if (x == 3) {
            $(".home.four").addClass("active")
            $(".home.four").siblings().removeClass("active")
        };
    };

    //slide when click on dots
    $(".slide-dots span ").click(function() {
        x = $(this).data("click");
        slide(x);
    });

    //appear of dots and arrows when hover on home section 
    $(".home ").hover(function() {
        $(".arrow ,.slide-dots").css({ "display": "flex" })
    }, function() {
        $(".arrow ,.slide-dots").css({ "display": "none" })
    });

    //add gray color to even span in content 
    $(".content > span:even").css("color", "#c1c1c1");
    $(".home.one .content > span").css("color", "#fff");

    $(" .works .container .content > div a").click(function(e) {
        e.preventDefault()
        $(this).addClass("active").siblings().removeClass("active")

    })
$(window).on("load",function(){
    $("body .home-container").find(".translate").css("transform","translateX(0)")
})
//declear variables of blog section
span1=Number($(".blog .container .right .number-container>div span:nth-child(1)")[0].innerText);
span2=Number($(".blog .container .right .number-container>div span:nth-child(1)")[1].innerText);
span3=Number($(".blog .container .right .number-container>div span:nth-child(1)")[2].innerText);
span4=Number($(".blog .container .right .number-container>div span:nth-child(1)")[3].innerText);
$(".blog .container .right .number-container>div span:nth-child(1)")[0].innerText="";
$(".blog .container .right .number-container>div span:nth-child(1)")[1].innerText="";
$(".blog .container .right .number-container>div span:nth-child(1)")[2].innerText="";
$(".blog .container .right .number-container>div span:nth-child(1)")[3].innerText="";
console.log(span1)
console.log(span2)
console.log(span3)
console.log(span4)
$(window).on("scroll",function(){
    //show content div in writer section on scroll
    if($(window).scrollTop() >= $("body .writer").offset().top){
$("body .writer .container .content ").animate({bottom:"0"},500)   
 }
 
})
state=false;
$(window).on("scroll",function(){
     //encrement numbers in blogs section 
 if($(window).scrollTop() <= $("body .blog").outerHeight() + $("body .blog").offset().top && state == false){
    s1=0;
    s2=0;
    s3=0;
    s4=0;
    state=true
    setSpanOne=setInterval(function(){
        $(".blog .container .right .number-container>div span:nth-child(1)")[0].innerText=s1 +"K";
        s1==400?clearInterval(setSpanOne):s1++;
    
    },5)
    setSpanTwo=setInterval(function(){
        $(".blog .container .right .number-container>div span:nth-child(1)")[1].innerText=s2 +"+";
        s2==350?clearInterval(setSpanTwo):s2++;
    
    },5)
    setSpanThree=setInterval(function(){
        $(".blog .container .right .number-container>div span:nth-child(1)")[2].innerText=s3;
        s3==1500?clearInterval(setSpanThree):s3++;
    
    },3)
    setSpanFour=setInterval(function(){
        $(".blog .container .right .number-container>div span:nth-child(1)")[3].innerText=s4+"K";
        s4==800?clearInterval(setSpanFour):s4++;
    
    },5)
     }
})
$("body .footer").find(".scroll-to-top").click(function(e){
    e.preventDefault()
    $("html").animate({
      scrollTop:"0"
    },1000)
})
});
