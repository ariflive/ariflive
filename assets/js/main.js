// Call GA4 Events
function callGA4Event(event) {
	gtag('event', event, {
		'app_name': 'ariflive.com',
		'screen_name': 'Home'
	});
}

// Handle Loader
jQuery(window).on('load', function () {
	if ($('.js-gallery').length) { // Gallery
		$('.js-header').css('visibility', 'visible');
		$('.js-gallery').css('visibility', 'visible');
		$('.js-loader').hide(20);
	}
	if ($('.js-case-study').length) { // Case Study
		$('.js-header').css('visibility', 'visible');
		$('.js-case-study').css('visibility', 'visible');
		$('.js-loader').hide(20);
	}
});

// Init
$(function() {

	// Set Time Ago
	if ($('.timeago').length) {
		$('.timeago').timeago();
	}

	// lazyload()
	if ($('.lazyload').length) {
		lazyload();
	}

	// Animate to Top in Gallery
	if ($('.js-gallery').length) {
		$('.js-back-to-top').on('click', function(e){
			$('.js-gallery').animate({ scrollTop: 0 }, 600);
		});
		$('.js-gallery').on('scroll', function() { // Show | Hide Icon
			if ($(this).scrollTop() > 100) {
				$('.js-back-to-top').fadeIn();
			} else {
				$('.js-back-to-top').fadeOut();
			}
		});
	}

	// Animate to Top in Case Study
	if ($('.js-case-study').length) {
		$('.js-back-to-top').on('click', function(e){
			$('.js-case-study').animate({ scrollTop: 0 }, 600);
		});
		$('.js-case-study').on('scroll', function() { // Show | Hide Icon
			if ($(this).scrollTop() > 100) {
				$('.js-back-to-top').fadeIn();
			} else {
				$('.js-back-to-top').fadeOut();
			}
		});
	}

	// Count Items
	if ($('.js-items').length) {
		if ($('.js-items').find('.item').length) {
			$('.js-count').html($('.js-items').find('.item').length);
		}
	}

	// Close Dropdown
	if ($('.js-close-dropdown').length) {
		$('.js-close-dropdown').on('click', function(e){
			$('#dropdownMenu').dropdown('toggle');
		});
		$('#dropdownMenu').on("hide.bs.dropdown", function(){
			document.querySelector('body').style.overflow = 'inherit';
		});
		$('#dropdownMenu').on("show.bs.dropdown", function(){
			document.querySelector('body').style.overflow = 'hidden';
		});
	}

});
