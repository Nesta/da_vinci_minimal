/**
 * @file
 * Your custom code into javascript behaviour.
 */

'use strict';

(function (Drupal, $) {
  $(document).ready(function () {

    // Code for Header.

    // Variables.
    var height_header = $('header').outerHeight();
    var resolucion = $(window).width();

    // Function.

    // Menu header mobile.
    if(resolucion < 1170){

      // Create icon-burger.
      $('header .menu--main .menu').before('<span class="icon-burger"/>');

      $('.icon-burger').click(function() {
        $('.menu--menu-mobile').toggleClass('show_menu');
        $('body').toggleClass('frozen-body');
      });
    }

  });
})(Drupal, jQuery);

