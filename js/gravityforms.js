function gf_bind_buttons() {
    jQuery(".gfield_radio > .gchoice > label").on("click", function() {
        var currentInputId = jQuery(this).attr("for");
        var currentLabelId = currentInputId.replace("choice", "label");
        var currentFieldsetId = jQuery(this).parents("div.gfield_radio").attr("id");
        //   jQuery("input#" + currentInputId).attr("checked", true);
        jQuery("#" + currentFieldsetId + ">.gchoice>label").removeClass(
            "gf-label-active"
        );
        jQuery("label#" + currentLabelId).addClass("gf-label-active");
    });
    jQuery(".gfield_checkbox > .gchoice > label").on("click", function() {
        var vcurrentInputId = jQuery(this).attr("for");
        var vcurrentLabelId = vcurrentInputId.replace("choice", "label");
        jQuery("label#" + vcurrentLabelId).toggleClass("gf-label-active");
    });
}

function getTheID() {
    var tracker = ga.getAll()[0];
    var id = tracker.get("clientId");

    // console.log('logged client ID: ' + id);

    try {
        document.getElementById("input_3_56").value = id;
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

    /*	dataLayer.push({
        	'event':'VirtualPageview',
        	'virtualPageURL':window.location.pathname+'1/',
        	'virtualPageTitle' : 'Fragebogen Seite 1/'
        });*/
    // console.log('virtualPageView logged: '+window.location.pathname+'1/');

    if (empty(window.google_tag_manager)) {
        // Google Tag Manager has already been loaded
        setTimeout(getTheID, 100);
        // console.log('Container already loaded');
    } else {
        window.addEventListener("gtm_loaded", function() {
            // Google Tag Manager has been loaded
            getTheID();
            // console.log('Container loaded after');
        });
    }
});

jQuery(document).bind(
    "gform_page_loaded",
    function(event, form_id, current_page) {
        jQuery("html, body").animate({ scrollTop: 0 }, 300);
        gf_bind_buttons();
        /*	dataLayer.push({
		'event':'VirtualPageview',
		'virtualPageURL':window.location.pathname+current_page+'/',
		'virtualPageTitle' : 'Fragebogen Seite '+current_page+'/'
	});*/
        // console.log('virtualPageView logged: '+window.location.pathname+current_page+'/');
    }
);
const utmData = sessionStorage.getItem('utm_data');

console.log('UTM Data from sessionStorage:', utmData);

if (utmData) {
  const utm = JSON.parse(utmData);
 // console.log('Parsed UTM data:', utm);
  
  // Znajdź wszystkie formularze i wypełnij istniejące pola
  jQuery('form').each(function() {
 //   console.log('Processing form:', this);
    
    if (utm.source) {
      const sourceField = jQuery(this).find('input[name="input_137"]');
   //   console.log('Source field found:', sourceField.length > 0);
      sourceField.val(utm.source);
    //  console.log('Set source value:', utm.source);
    }
    if (utm.medium) {
      const mediumField = jQuery(this).find('input[name="input_138"]');
    //  console.log('Medium field found:', mediumField.length > 0);
      mediumField.val(utm.medium);
    //  console.log('Set medium value:', utm.medium);
    }
    if (utm.campaign) {
      const campaignField = jQuery(this).find('input[name="input_136"]');
   //   console.log('Campaign field found:', campaignField.length > 0);
      campaignField.val(utm.campaign);
  //    console.log('Set campaign value:', utm.campaign);
    }
    if (utm.gclid) {
      const gclidField = jQuery(this).find('input[name="input_139"]');
    //  console.log('GCLID field found:', gclidField.length > 0);
      gclidField.val(utm.gclid);
    //  console.log('Set gclid value:', utm.gclid);
    }
    if (utm.msclkid) {
        const msclkidField = jQuery(this).find('input[name="input_140"]');
      //  console.log('GCLID field found:', gclidField.length > 0);
      msclkidField.val(utm.msclkid); 
      //  console.log('Set gclid value:', utm.gclid);
      }
  });
} else {
  //console.log('No UTM data found in sessionStorage');
}