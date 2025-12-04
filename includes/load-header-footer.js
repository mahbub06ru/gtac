// Centralized Header and Footer Loader
(function() {
  'use strict';
  
  // Determine base path based on current page location
  function getBasePath() {
    const path = window.location.pathname;
    if (path.includes('/pages/training/')) {
      return '../../';
    } else if (path.includes('/pages/')) {
      return '../';
    } else {
      return '';
    }
  }
  
  const basePath = getBasePath();
  
  // Load header
  fetch(basePath + 'includes/header.html')
    .then(response => response.text())
    .then(data => {
      const headerPlaceholder = document.getElementById('header-placeholder');
      if (headerPlaceholder) {
        headerPlaceholder.outerHTML = data;
        
        // Load update-links script after header is loaded
        const script = document.createElement('script');
        script.src = basePath + 'includes/update-links.js';
        document.head.appendChild(script);
      }
    })
    .catch(error => {
      console.error('Error loading header:', error);
    });
  
  // Load footer
  fetch(basePath + 'includes/footer.html')
    .then(response => response.text())
    .then(data => {
      const footerPlaceholder = document.getElementById('footer-placeholder');
      if (footerPlaceholder) {
        footerPlaceholder.outerHTML = data;
      }
    })
    .catch(error => {
      console.error('Error loading footer:', error);
    });
  
})();

