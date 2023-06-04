$(function() {
	// Document Ready
});


// Call GA4 Events
function callGA4Event(event) {
	gtag('event', event, {
		'app_name': 'ariflive.com',
		'screen_name': 'Home'
	});
}
