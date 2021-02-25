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
    $(window).on('scroll', function() {
      if ($(window).scrollTop() >= height_header){
        $('header').addClass('fixed');
      } else {
        $('header').removeClass('fixed');
      }
    });

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

