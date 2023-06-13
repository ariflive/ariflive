// Call GA4 Events
function callGA4Event(event) {
	gtag('event', event, {
		'app_name': 'ariflive.com',
		'screen_name': 'Home'
	});
}

// Gallery Loader
jQuery(window).on('load', function () {
	if ($('.js-gallery').length) {
		$('.js-header').css('visibility', 'visible');
		$('.js-gallery').css('visibility', 'visible');
		$('.js-loader').hide(20);
	}
});

// Init
$(function() {

	// lazyload()
	if ($('.lazyload').length) {
		lazyload();
	}

	// Show | Hide Icon
	$('.js-gallery').on('scroll', function() {
		if ($(this).scrollTop() > 100) {
			$('.js-back-to-top').fadeIn();
		} else {
			$('.js-back-to-top').fadeOut();
		}
	});

	// Animate To Top
	$('.js-back-to-top').on('click', function(e){
		$('.js-gallery').animate({ scrollTop: 0 }, 600);
	});

	// Count Items
	if ($('.js-items').length) {
		$('.js-count').html($('.js-items').children().length);
	}

});
