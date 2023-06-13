import $ from 'jquery';
// import 'bootstrap';
// import 'lazyload';

$(document).ready(function() {
  
	

});

// Show | Hide Icon
$('.js-gallery').on('scroll', function() {
	const el = $('.js-gallery');
	if (el) {
		console.log(el.scrollTop);
		// if (el.scrollTop > 100) {
		// 	$('.js-back-to-top').fadeIn();
		// }
		// else {
		// 	$('.js-back-to-top').fadeOut();
		// }
	}
});

// Gallery Loader
$(window).on('load', function () {
	if ($('.js-gallery').length) {
		$('.js-header').css('visibility', 'visible');
		$('.js-gallery').css('visibility', 'visible');
		$('.js-loader').hide(20);
	}
});