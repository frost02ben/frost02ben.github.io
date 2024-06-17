AOS.init();

  function downloadPDF() {
    var pdfUrl = '/Assets/documents/ben-frost-cv.pdf';   
    var anchor = document.createElement('a');
  
    anchor.href = pdfUrl;
    anchor.download = 'ben-frost-cv.pdf';
    anchor.click();
  }

  

  window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.nav-primary');
    if (window.scrollY > 600) { 
      navbar.classList.add('scrolled-bg');
      navbar.classList.remove('nav-alt');
    } else {
      navbar.classList.remove('scrolled-bg');
    }
  });

  window.addEventListener('scroll', function() {
    var navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(function(navLink) {
      if (window.scrollY > 600) { 
        navLink.classList.add('scrolled-font');
      } else {
        navLink.classList.remove('scrolled-font');
      }
    });
  });

function setbgColor(bgAlt) {
  document.documentElement.style.setProperty('--bg-color', bgAlt);
}

function setfontColor(fontAlt) {
  document.documentElement.style.setProperty('--font-color', fontAlt);
}

function applyDarkMode(isDarkMode) {
  const darkBtn = document.getElementById('dark-btn');
  const icon = darkBtn.querySelector('i');
  const text = darkBtn.querySelector('span'); 

  if (isDarkMode) {
    setbgColor('#2b2b2b'); // Dark background color
    setfontColor('#fff'); // Light font color
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
    text.textContent = 'Light Mode';
  } else {
    setbgColor('#fff'); // Default background color
    setfontColor('#000'); // Default font color
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
    text.textContent = 'Dark Mode';
  }
}

function toggleDarkMode() {
  const isDarkMode = localStorage.getItem('isDarkMode') === 'true';
  localStorage.setItem('isDarkMode', !isDarkMode);
  applyDarkMode(!isDarkMode);
}

// Event listener for the button
document.getElementById('dark-btn').addEventListener('click', toggleDarkMode);

// Apply the stored mode on page load
window.addEventListener('DOMContentLoaded', (event) => {
  const isDarkMode = localStorage.getItem('isDarkMode') === 'true';
  applyDarkMode(isDarkMode);
});





