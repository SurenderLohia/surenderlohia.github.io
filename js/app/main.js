(function(w, d, $) {

  $(document).ready(function() {
    slickInit();
  });


  //Slick
  function slickInit() {
    $('.slider').slick({
      prevArrow: '<div class="icon a p-left p-v-center trans slider-btn"><i class="fa fa-chevron-left"></i></div>',
      nextArrow: '<div class="icon a p-right p-v-center trans slider-btn"><i class="fa fa-chevron-right"></i></div>'
    });
  }

})(window, document, window.jQuery);