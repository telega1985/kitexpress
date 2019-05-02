$(document).ready(function() {
    
    "use strict";
    
    // navbar-button + menu
    
    $(".navbar-button").on("click", function() {
        $(this).toggleClass("navbar-button--active");
        $(".menu").toggleClass("menu-active");
    });
    
    // Slick slider bus
    
    $(".bus-block").slick({
        slidesToShow: 3,
        infinite: false,
        prevArrow: '<span class="icon-left"></span>',
		nextArrow: '<span class="icon-right"></span>'
    });
    
    // Navigation
    
    $("a[href^='#']").on("click", function(e) {
        e.preventDefault();
        $(".navbar-button").removeClass("navbar-button--active");
        $(".menu").removeClass("menu-active");
        var elemHref = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(elemHref).offset().top
        }, 800);
    });
    
    // To-top
    
    $('body').append('<button type="button" name="top" class="to-top icon-up-open"></button>');
	$(window).scroll(function() {
		if ($(this).scrollTop() >= 500) {
			$('.to-top').fadeIn(300);
		} else {
			$('.to-top').fadeOut(300);
		}
	});
	$('.to-top').click(function() {
		$('html, body').animate({
			scrollTop: 0
		}, 600);
	});
    
    // Animation
    
    $(".section-title, .bus-block--item, .work-block--item").addClass("wow zoomIn");
    $(".contacts-block--list").addClass("wow fadeInLeft");
    $(".contacts-block--form").addClass("wow fadeInRight");
    
    new WOW({
        offset: 200
    }).init();
    
    
});

























