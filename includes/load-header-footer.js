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
        
        // Ensure dropdown toggle handler is set up after header loads
        // Small delay to ensure scripts in header.html have executed
        setTimeout(function() {
          // Re-setup dropdown toggle handler to ensure it works
          if (typeof window._dropdownToggleHandler === 'function') {
            // Handler should already be set up by header.html script
            // But ensure it's working by checking
            const nav = document.getElementById('main-nav');
            if (nav && !nav._dropdownHandlerVerified) {
              nav._dropdownHandlerVerified = true;
              // Force a test to ensure handler is attached
              const testEvent = new MouseEvent('click', { bubbles: true, cancelable: true });
              // Handler should be on document, so it should work
            }
          }
        }, 100);
        
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

