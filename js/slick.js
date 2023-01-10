$(document).ready(function () {
	$('.slider').slick({
		slidesToShow: 3,
		variableWidth: true,
		asNavFor: '.slider-big',
		focusOnSelect: true,
		easing: 'ease-in-out',
		swipeToSlide: true,
		prevArrow: '<button class="btn-slider slider-prev"><img src="./img/arrow-l.png" alt="arrow-l"></button>',
		nextArrow: '<button class="btn-slider slider-next"><img src="./img/arrow-r.png" alt="arrow-r"></button>',
	});

	$('.slider-big').slick({
		slidesToShow: 1,
		arrows: false,
		asNavFor: '.slider',
		fade: true,

	});
});