(function(w, d, $) {

  $(document).ready(function() {
    slickInit();
    lightBoxInit();
  });


  //Slick
  function slickInit() {
    $('.slider').slick({
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
      var currentId = $(e.target).attr('data-href');
      var $lightBox = $('#' + currentId);
      $(window).scrollTop(0);
      $('body').addClass('overflow-hidden');

      $overlay.show();
      $lightBox.show();
    }

    function closeLightBox(e) {
      var $overlay = $('.overlay');
      var $lightBox = $(e.target).closest('.light-box');
      $('body').removeClass('overflow-hidden');

      $overlay.hide();
      $lightBox.hide();
    }
  }

})(window, document, window.jQuery);