AOS.init();

$(document).ready(function() {
    $('#cv').on('slide.bs.carousel', function (e) {
      // Remove the active class from all header items
      $('.cv-header-item').removeClass('active');
      // Add the active class to the header item corresponding to the new active slide
      $('.cv-header-item[data-bs-slide-to="' + e.to + '"]').addClass('active');
    });
  });