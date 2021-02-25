/**
 * @file
 * Da Vinci Minimal Custom Code of the javascript behaviour.
 */

'use strict';

(function ($) {
  Drupal.behaviors.da_vinci_minimalTheme = {
    attach: function (context) {

			// Slider Type Varieties Block.
			$('.field--name-field-paragraphs-varieties').not('.slick-initialized').slick({
				dots: false,
				infinite: true,
				speed: 300,
				slidesToShow: 3,
				slidesToScroll: 1,
				responsive: [{
						breakpoint: 1170,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
				}]
			});

    }
  };
})(jQuery);
