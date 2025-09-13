function gf_bind_buttons() {
	jQuery(".gfield.auto-next .ginput_container ul > li > label").on('click', function(){

			var currentUL		= jQuery(this).parents('ul').attr('id');
			var clickedLI 		= jQuery(this).parents('li').attr('class');
			var clickedLI 		= clickedLI.replace(/ /g, '.');
			var clickedInput 	= jQuery('.' + clickedLI + ' input');
			var clickedLabel 	= jQuery('.' + clickedLI + ' label');
			var otherLI 		= jQuery(document).find('#' + currentUL + ' > li:not(.' + clickedLI + ')').attr('class');
			var otherInput 		= jQuery('.' + otherLI + ' input');
			var otherLabel 		= jQuery('.' + otherLI + ' label');

			if ( otherInput.prop('checked') == true ) {

				otherInput.prop('checked', false);

				clickedInput.prop('checked', true);
				otherLabel.removeClass('active');
				clickedLabel.toggleClass('active');
				jQuery(this).closest('.gform_page').find('.gform_page_footer .gform_next_button').click();

			} else {

				clickedInput.prop('checked', true);
				clickedLabel.toggleClass('active');
				jQuery(this).closest('.gform_page').find('.gform_page_footer .gform_next_button').click();

			}
	});
}

function getTheID() {
    var tracker = ga.getAll()[0];
	var id = tracker.get('clientId');
	
	// console.log('logged client ID: ' + id);

	try {
		document.getElementById('input_3_56').value = id;
		// console.log('clientID added to form "Fragebogen"');
	} catch (e) {
		// console.log('Error: "Fragebogen" form not found');
		return;
	}
}

function empty(e) {
	switch (e) {
	  case "":
	  case 0:
	  case "0":
	  case null:
	  case false:
	  case typeof this == "undefined":
		return true;
	  default:
		return false;
	}
  }

jQuery(function() {
	
	gf_bind_buttons();

	dataLayer.push({
		'event':'VirtualPageview',
		'virtualPageURL':window.location.pathname+'1/',
		'virtualPageTitle' : 'Fragebogen Seite 1/'
	});
	// console.log('virtualPageView logged: '+window.location.pathname+'1/');

    if ( empty( window.google_tag_manager) ) {

        // Google Tag Manager has already been loaded
        setTimeout(getTheID, 100);
		// console.log('Container already loaded');

    } else {

        window.addEventListener('gtm_loaded', function () {
            // Google Tag Manager has been loaded
            getTheID();
			// console.log('Container loaded after');

        });
    }
});

jQuery(document).bind('gform_page_loaded', function(event, form_id, current_page){
	jQuery('html, body').animate({ scrollTop: 0 }, 300);
	gf_bind_buttons();
	dataLayer.push({
		'event':'VirtualPageview',
		'virtualPageURL':window.location.pathname+current_page+'/',
		'virtualPageTitle' : 'Fragebogen Seite '+current_page+'/'
	});
	// console.log('virtualPageView logged: '+window.location.pathname+current_page+'/');
});