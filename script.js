AOS.init();

$(document).ready(function() {
    $('#cv').on('slide.bs.carousel', function (e) {
      // Remove the active class from all header items
      $('.cv-header-item').removeClass('active');
      // Add the active class to the header item corresponding to the new active slide
      $('.cv-header-item[data-bs-slide-to="' + e.to + '"]').addClass('active');
    });
  });

  function downloadPDF() {
    // Replace 'path_to_your_pdf.pdf' with the actual path to your PDF file
    var pdfUrl = '/Assets/documents/ben-frost-cv.pdf';
    
    // Create a temporary anchor element
    var anchor = document.createElement('a');
    
    // Set the href attribute to the PDF file URL
    anchor.href = pdfUrl;
    
    // Set the download attribute to force download
    anchor.download = 'ben-frost-cv.pdf';
    
    // Programmatically trigger a click event on the anchor element
    anchor.click();
  }


