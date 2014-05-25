
	jQuery(document).ready(function($) {

		// Your JavaScript goes here

		//the whole page needs to shift down if the site is logged in, or the horrid WP bar covers stuff.
		if($("body").hasClass('logged-in')) {
			
			$("nav").addClass('nav-logged-in');
			$("#home-container").addClass('container-logged-in');
		}
	});

