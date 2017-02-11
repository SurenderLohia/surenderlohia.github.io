(function(w, d, $) {

  $(document).ready(function() {
    setDate();
    slickInit();
    lightBoxInit();
    colorboxInit();
  });

  //Slick
  function slickInit() {
    var slider = $('.slider');

    var slickOptins = {
      autoplay: true,
      autoplaySpeed: 4000,
      prevArrow: '<div class="icon a p-left p-v-center trans slider-btn"><i class="fa fa-chevron-left"></i></div>',
      nextArrow: '<div class="icon a p-right p-v-center trans slider-btn"><i class="fa fa-chevron-right"></i></div>'
    }

    slider.slick(slickOptins);
  }

  // Light box
  function lightBoxInit() {
    var lightBoxBtns = document.querySelectorAll('.light-box-btn');
    var lightBoxBtnsLen = lightBoxBtns.length;

    var lightBoxCloseBtns = document.querySelectorAll('.light-box-close-btn');

    var overlay = document.querySelectorAll('.overlay')[0];
    var body = document.querySelectorAll('body');

    for(var i = 0; i < lightBoxBtnsLen; i += 1) {
      lightBoxBtns[i].addEventListener('click', showLightBox);
      lightBoxCloseBtns[i].addEventListener('click', closeLightBox);
    }
    

    function showLightBox(e) {
      var currentId = (e.target).getAttribute('data-href');
      var lightBox = document.querySelector('#' + currentId);

      w.scrollTo(0, 0);
      body.className = 'overflow-hidden'; // Todo
      overlay.style.display='block';
      lightBox.style.display='block';
    }

    function closeLightBox(e) {
      var lightBox = $(e.target).closest('.light-box')[0]; // Todo
      body.className = ''; // Todo
      overlay.style.display='none';
      lightBox.style.display='none';
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

  function setDate() {
    var $currentYear = $('.current-year');
    var d = new Date();
    $currentYear.text(d.getFullYear());
  }

})(window, document, window.jQuery);