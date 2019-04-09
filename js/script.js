$(document).ready(function(){
	//smooth scroll
	$('nav ul li a').on('click', function() {
	    $('html, body').animate({
	    	scrollTop: $(this.hash).offset().top
	    }, 1000);
	});
	//owl-carousel
	$(".owl-carousel").owlCarousel({
    items:1,
    loop:true,
    autoplay:true,
    autoplayTimeout:2500,
    smartSpeed:1000,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
	});
})