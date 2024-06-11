AOS.init();

$(document).ready(function() {
    $('#cv').on('slide.bs.carousel', function (e) {

      $('.cv-header-item').removeClass('active');

      $('.cv-header-item[data-bs-slide-to="' + e.to + '"]').addClass('active');
    });
  });

  function downloadPDF() {
    var pdfUrl = '/Assets/documents/ben-frost-cv.pdf';   
    var anchor = document.createElement('a');
  
    anchor.href = pdfUrl;
    anchor.download = 'ben-frost-cv.pdf';
    anchor.click();
  }

  document.getElementById('colorPickerOne').addEventListener('input', function(event) {
    const newColor = event.target.value;
    document.documentElement.style.setProperty('--green', newColor);
  });

  document.getElementById('colorPickerTwo').addEventListener('input', function(event) {
    const newColor = event.target.value;
    document.documentElement.style.setProperty('--blue', newColor);
  });

  window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 700) { 
      navbar.classList.add('scrolled-bg');
    } else {
      navbar.classList.remove('scrolled-bg');
    }
  });

  window.addEventListener('scroll', function() {
    var navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(function(navLink) {
      if (window.scrollY > 700) { 
        navLink.classList.add('scrolled-font');
      } else {
        navLink.classList.remove('scrolled-font');
      }
    });
  });

