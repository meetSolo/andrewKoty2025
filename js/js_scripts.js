jQuery(document).ready(function () {
	jQuery("#back-to-top").click(function () {
		window.scrollTo({ top: 0 });
	});

	var header = jQuery("header");
	var scrollChange = 90;
	var scroll2 = jQuery(window).scrollTop();
	if (scroll2 >= scrollChange) {
		header.addClass("bg-header");
		jQuery("#back-to-top").addClass("active-back-to-top");
	} else {
		header.removeClass("bg-header");
		jQuery("#back-to-top").removeClass("active-back-to-top");
	}
	jQuery(window).scroll(function () {
		var scroll = jQuery(window).scrollTop();

		if (scroll >= scrollChange) {
			header.addClass("bg-header");
			jQuery("#back-to-top").addClass("active-back-to-top");
		} else {
			header.removeClass("bg-header");
			jQuery("#back-to-top").removeClass("active-back-to-top");
		}
	});

	jQuery(".wp-block-navigation__responsive-container-open").click(function () {
		var elem = jQuery(".uagb-block-7413b2d3");

		jQuery(elem).appendTo(".is-menu-open, .has-modal-open");
		//jQuery(".is-menu-open, .has-modal-open").append('<div class="wp-block-uagb-marketing-button uagb-marketing-btn__align-center uagb-marketing-btn__align-text-center uagb-marketing-btn__icon-after uagb-block-b2a54f71 wp-block-button modal_menu_"><a href="tel:030948520610" class="uagb-marketing-btn__link wp-block-button__link" target="" rel="noopener noreferrer"><span class="uagb-marketing-btn__title"></span><svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z"></path></svg></a></div>');
	});
	jQuery(".calendly-inline-widget").append(
		"<div class='calendly_loader' ></div>"
	);
	/* Tabs Unsere Kooperationspartner - on hover hack */
	//  jQuery("ul.uagb-tabs__panel > li").hover(function() {
	//      jQuery(this).addClass("uagb-tabs__active");
	//alert("efdf");
	//  });
	jQuery(window).scroll(function () {
		var scroll = jQuery(window).scrollTop();

		//>=, not <=
		if (scroll >= 700)
			jQuery(".static-mobile-footer").addClass("static-mobile-footer-show");
		else
			jQuery(".static-mobile-footer").removeClass("static-mobile-footer-show");
	});
	focusTitle = jQuery("head title").text(); // Originalen Title speichern
	jQuery(window).on("blur focus", function (e) {
		var prevType = jQuery(this).data("prevType");
		if (prevType != e.type) {
			switch (e.type) {
				case "blur":
					var i = 0;
					tab = setInterval(function () {
						switch (
							i++ % 2 // Die Zahl hinter dem % muss mit der Anzahl der Cases übereinstimmen
						) {
							case 0:
								document.title = "Jetzt"; // Erste Anzeige im Tab
								break;
							case 1:
								document.title = "Pflegekraft finden"; // Zweite Anzeige im Tab
						}
					}, 1000); // Zeit zwischen dem Wechsel der Anzeigen
					break;
				case "focus":
					var i = 0;
					tab = setInterval(function () {
						switch (
							i++ % 2 // Die Zahl hinter dem % muss mit der Anzahl der Cases übereinstimmen
						) {
							case 0:
								document.title = "Jetzt"; // Erste Anzeige im Tab
								break;
							case 1:
								document.title = "Pflegekraft finden"; // Zweite Anzeige im Tab
						}
					}, 1000); 
					clearInterval(tab);
					document.title = focusTitle; // Originalen Title einsetzen
					break;
			}
		}
		jQuery(this).data("prevType", e.type);
	});
	// DYNAMIC HEADERS FOR LP
	if (jQuery("div").hasClass("dynamic-header")) {
		jQuery.urlParam = function (name) {
			var results = new RegExp("[?&]" + name + "=([^&#]*)").exec(
				decodeURI(window.location.href)
			);
			if (results !== null && results !== undefined) {
				var result = results[1];
				jQuery(
					"div.dynamic-header > h1, div.dynamic-header > h2,div.dynamic-header > h3 "
				).replaceWith('<h1 class="uagb-heading-text">' + result + "</h1>");
				//	return results[1] || 0;
			}
			//    console.log($.urlParam('city'));
		};
		jQuery.urlParam("h1");
	}
	jQuery("#modal-2-content").append(jQuery("#mobile-header-container"));
	jQuery("#mobile-header-container").css("display", "flex");
});
// Funkcja pomocnicza do pobierania parametrów z URL-a
function getUTMParams() {
	const params = new URLSearchParams(window.location.search);
	const utm = {};
  
	if (params.has('utm_source')) utm.source = params.get('utm_source');
	if (params.has('utm_medium')) utm.medium = params.get('utm_medium');
	if (params.has('utm_campaign')) utm.campaign = params.get('utm_campaign');
	if (params.has('gclid')) utm.gclid = params.get('gclid');
	if (params.has('msclkid')) utm.msclkid = params.get('msclkid');
  
	return utm;
}
  
  // Pobierz UTM-y z URL-a
  const utmParams = getUTMParams();
  
  // Zapisz tylko jeśli coś istnieje
  if (Object.keys(utmParams).length > 0) {
	sessionStorage.setItem('utm_data', JSON.stringify(utmParams));
  }
  