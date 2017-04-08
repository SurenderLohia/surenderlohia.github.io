var jQuery = require('jquery');
var slick = require('slick-carousel');
var prism = require('prismjs');
var Normalizer = require('prismjs/plugins/normalize-whitespace/prism-normalize-whitespace');

(function(w, d, $) {

  $(document).ready(function() {
    setDate();
    slickInit();
    lightBoxInit();
  });


  //Slick
  function slickInit() {
    $('.slider').slick({
      autoplay: true,
      autoplaySpeed: 4000,
      prevArrow: '<div class="icon a p-left p-v-center trans slider-btn"><i class="fa fa-chevron-left"></i></div>',
      nextArrow: '<div class="icon a p-right p-v-center trans slider-btn"><i class="fa fa-chevron-right"></i></div>'
    });
  }

  // Light box
  function lightBoxInit() {
    $('.light-box-btn').on('click', showLightBox);
    $('.light-box-close-btn').on('click', closeLightBox);

    function showLightBox(e) {
      var $overlay = $('.overlay');
      var $currentEl = $(e.target);
      
      if(!$currentEl.hasClass('light-box-btn')) {
        $currentEl = $currentEl.closest('.light-box-btn');
      }

      var currentId = $currentEl.attr('data-href');

      if(!currentId) {
        console.error('Current Lightbox id is undefined');
      }

      var $lightBox = $('#' + currentId);
      $(window).scrollTop(0);
      $('body').addClass('overflow-hidden');
      $lightBox.addClass('opened-light-box');

      $overlay.show();
      $lightBox.show();
    }

    function closeLightBox(e) {
      var $overlay = $('.overlay');
      var $openedLightBox = $('.light-box.opened-light-box');
      $('body').removeClass('overflow-hidden');
      $openedLightBox.removeClass('opened-light-box');

      $overlay.hide();
      $openedLightBox.hide();
    }
  }

  function setDate() {
    var $currentYear = $('.current-year');
    var d = new Date();
    $currentYear.text(d.getFullYear());
  }

})(window, document, jQuery);