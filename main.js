
var indexPosition = 0;

var rotation = 0;

$("#gallery div").hover(function () { // Mouse over
    indexPosition++;
    $(this).css({
        "z-index": indexPosition,
        "width": "50%",
        "height": "25rem",
    });
    $(this).addClass("noRotation");
    $(this).siblings().css("filter", "blur(3px)");
}, function () { // Mouse out
    $(this).css({
        "width": "40%",
        "height": "20rem",
    });
    $(this).siblings().css("filter", "grayscale(0%)");
    $(this).removeClass("noRotation");
});





$(".gallery-block-img img").click(function () {
    $(this).parent().detach().prependTo(".gallery-block-img");
    $(this).parent().siblings().removeClass("col-12");
    $(this).parent().siblings().addClass("col-4")
    $(this).parent().removeClass("col-4");
    $(this).parent().addClass("col-12");
});

$(".row-imgs .col").mouseenter(
    function () {
        $(this).css({
            "margin": "0",
            "padding-right": "5px",
            "padding-left": "5px"
        });
        if (window.matchMedia("(max-width: 540px)").matches) {
            $(this).css("margin: 0");
            $(this).find("img").css({
                "height": "300px",
                "width": "100%"
            });
            $(this).removeClass('col');
            $(this).addClass('col-9');
        } else {
            $(this).find("img").css({
                "height": "500px",
                "width": "100%",
            });
            $(this).removeClass('col');
            $(this).addClass('col-6');
        }
    }
);

$(".row-imgs .col").mouseleave(
    function () {
        $(this).css({
            "margin": "0",
            "padding-right": "0px",
            "padding-left": "0px"
        });
        if (window.matchMedia("(max-width: 540px)").matches) {
            $(this).find("img").css({
                "height": "200px",
                "width": "100%"
            });
            $(this).removeClass('col-9');
            $(this).addClass('col');
        } else {
            $(this).find("img").css({
                "height": "200px",
                "width": "100%"
            });
            $(this).removeClass('col-6');
            $(this).addClass('col');
        }
    }
);
