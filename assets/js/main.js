// Call GA4 Events
function callGA4Event(event) {
	gtag('event', event, {
		'app_name': 'ariflive.com',
		'screen_name': 'Home'
	});
}

// Init
$(function() {

	// Gallery Loader
	jQuery(window).on('load', function () {
		if ($('.js-gallery').length) {
			$('.js-gallery').css('visibility', 'visible');
			$('.js-loader').hide(20);
		}
	});

	// Count Items
	if ($('.js-items').length) {
		$('.js-count').html($('.js-items').children().length);
	}

	// Load Gallery
	if ($('.js-gallery').length) {
		let objSlider = $('.js-slider');
		objSlider.on('init', function(event, slick){
			$('.js-gallery').css('visibility', 'visible');
			$('.js-loader').hide(20);
		});
		objSlider.slick({
			lazyLoad: 'ondemand',
			dots: true,
			infinite: true,
			speed: 600,
			slidesToShow: 2,
			slidesToScroll: 1,
			autoplay: false,
			autoplaySpeed: 6000,
			adaptiveHeight: true,
			prevArrow: '<img src="/assets/images/slider-left.svg" class="svg slick-prev" />',
			nextArrow: '<img src="/assets/images/slider-right.svg" class="svg slick-next" />',
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		});
	}

});
