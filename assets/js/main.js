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
	lazyload();

	// Count Items
	if ($('.js-items').length) {
		$('.js-count').html($('.js-items').children().length);
	}

});
