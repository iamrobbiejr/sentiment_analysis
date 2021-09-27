var slidePage;
var progressText;
var progressCheck;
var bullet;
let current = 1;

$(function() {
    slidePage = $(".slide-page");
    progressText = $(".step p");
    progressCheck = $(".step .check");
    bullet = $(".step .bullet");
    console.log("loaded");
});

function stepForward() {
    slidePage.css("marginLeft", "-25%");
    $(bullet[current - 1]).addClass("active");
    $(progressCheck[current - 1]).addClass("active");
    $(progressText[current - 1]).addClass("active");
    current += 1;
}

function stepBack() {
    slidePage.css("marginLeft", "0%");
    $(bullet[current - 2]).removeClass("active");
    $(progressCheck[current - 2]).removeClass("active");
    $(progressText[current - 2]).removeClass("active");
    current -= 1;
}
