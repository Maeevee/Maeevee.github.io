//  Carousel

$(document).ready(function(){
    $('.carousel').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpead: 1000
    });
});


// Burger

let burger = document.querySelector("#burger-icon");
let header = document.querySelector("#header");
burger.onclick = function() {
    header.classList.toggle("menu-open");
}


// Counter

$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 1000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});