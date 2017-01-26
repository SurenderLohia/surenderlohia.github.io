(function(w, d, $) {

  $(document).ready(function() {
    setDate();
    slickInit();
    lightBoxInit();
    colorboxInit();
    shareInit();
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

  function colorboxInit() {
    var $colorbox = $('.thumb-box');
    var $colorboxPrevBtn = $('.colorbox-prev-btn');
    var $colorboxNextBtn = $('.colorbox-next-btn');
    var $colorboxCloseBtn = $('.colorbox-close-btn');
    
    
    $colorbox.colorbox({
      rel:'gal', 
      inline: true,
      arrowKey: false,
      closeButton: false,
      width: '100%',
      maxWidth: '1000px',
      onComplete: setAsideHeight
    });

    $colorboxPrevBtn.on('click', $.colorbox.prev);
    $colorboxNextBtn.on('click', $.colorbox.next);
    $colorboxCloseBtn.on('click', $.colorbox.close);

    function setAsideHeight() {
      console.log('setAsideHeight');
      var projectDetailAside = $('#cboxLoadedContent .project-detail-aside');
      var projectDetailImageCt = $('#cboxLoadedContent .project-detail-image-ct');
      projectDetailImageCtHeight = projectDetailImageCt.height();
      projectDetailAside.outerHeight(projectDetailImageCtHeight);
    }
  }

  function shareInit() {
    config = {
      url: 'https://surenderlohia.github.io/',
      title: 'Surender Lohia',
      description: 'Surender Lohia | Front-End Developer, Passionate programmer.',
      imgage: '/assets/images/share-image.png',
      networks: {
        pinterest: {
            enabled: false
        },
        reddit: {
            enabled: false
        },
        email: {
            enabled: false
        },
        facebook: {
          url: 'https://surenderlohia.github.io/',
        }
      }
    }

    var share = new ShareButton(config);
  }

  function setDate() {
    var $currentYear = $('.current-year');
    var d = new Date();
    $currentYear.text(d.getFullYear());
  }

})(window, document, window.jQuery);