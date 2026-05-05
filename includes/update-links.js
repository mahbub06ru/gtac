// Update all navigation and footer links based on current page location
(function() {
  'use strict';
  
  function getBasePath() {
    let path = window.location.pathname;
    const href = window.location.href;
    
    if (!path || path === '/' || path === '\\' || path.endsWith('.html')) {
      if (href.includes('/pages/training/') || href.includes('\\pages\\training\\')) return '../../';
      if (href.includes('/pages/service/') || href.includes('\\pages\\service\\')) return '../../';
      if (href.includes('/pages/') || href.includes('\\pages\\')) return '../';
      return '';
    }

    if (path.includes('/pages/training/')) return '../../';
    if (path.includes('/pages/service/')) return '../../';
    if (path.includes('/pages/')) return '../';
    return '';
  }
  
  function updateAllLinks() {
    const basePath = getBasePath();
    const isRoot = basePath === '';
    const isInPages = basePath === '../';
    const isInService = basePath === '../../' && (window.location.href.includes('/pages/service/') || window.location.href.includes('\\pages\\service\\'));
    const isInTraining = basePath === '../../' && !isInService && (window.location.href.includes('/pages/training/') || window.location.href.includes('\\pages\\training\\'));

    const brandLink = document.getElementById('brand-link');
    const brandLogo = document.getElementById('brand-logo-img');
    if (brandLink) brandLink.href = basePath + 'index.html';
    if (brandLogo) brandLogo.src = basePath + 'assets/assets/images/gtac-logo.png';

    const navLinks = {
      'nav-home': isRoot ? 'index.html' : (isInTraining || isInService ? '../../index.html' : '../index.html'),
      'nav-about': isRoot ? 'pages/about.html' : (isInTraining || isInService ? '../about.html' : 'about.html'),
      'nav-service': 'javascript:void(0)',
      'nav-training': 'javascript:void(0)',
      'nav-career': isRoot ? 'pages/career.html' : (isInTraining || isInService ? '../career.html' : 'career.html'),
      'nav-success': isRoot ? 'pages/success_story.html' : (isInTraining || isInService ? '../success_story.html' : 'success_story.html'),
      'nav-contact': isRoot ? 'pages/contact.html' : (isInTraining || isInService ? '../contact.html' : 'contact.html'),

      // Updated Service dropdown mapping (5 items)
      'nav-service-1': isRoot ? 'pages/service/student_visa_processing.html' : (isInTraining ? '../service/student_visa_processing.html' : (isInService ? 'student_visa_processing.html' : 'service/student_visa_processing.html')),
      'nav-service-2': isRoot ? 'pages/service/country_visa_processing.html' : (isInTraining ? '../service/country_visa_processing.html' : (isInService ? 'country_visa_processing.html' : 'service/country_visa_processing.html')),
      'nav-service-3': '#', // Medical Visa (Add page if exists)
      'nav-service-4': '#', // Visa Documentation
      'nav-service-5': '#', // SOP & Application Support

      // Training items
      'nav-training-1': isRoot ? 'pages/training/ielts_preparation.html' : (isInTraining ? 'ielts_preparation.html' : (isInService ? '../training/ielts_preparation.html' : 'training/ielts_preparation.html')),
      'nav-training-2': isRoot ? 'pages/training/flutter_development.html' : (isInTraining ? 'flutter_development.html' : (isInService ? '../training/flutter_development.html' : 'training/flutter_development.html')),
      'nav-training-3': isRoot ? 'pages/training/gds_training.html' : (isInTraining ? 'gds_training.html' : (isInService ? '../training/gds_training.html' : 'training/gds_training.html')),
      'nav-training-4': isRoot ? 'pages/training/visa_process.html' : (isInTraining ? 'visa_process.html' : (isInService ? '../training/visa_process.html' : 'training/visa_process.html'))
    };

    Object.keys(navLinks).forEach(id => {
      const link = document.getElementById(id);
      if (link) {
        link.href = navLinks[id];
        // Force update labels to match your new request
        if (id === 'nav-service-1') link.textContent = 'Study Visa';
        if (id === 'nav-service-2') link.textContent = 'Tourist Visa';
        if (id === 'nav-service-3') link.textContent = 'Medical Visa';
        if (id === 'nav-service-4') link.textContent = 'Visa Documentation';
        if (id === 'nav-service-5') link.textContent = 'SOP & Application Support';
      }
    });

    const footerLinks = {
      'footer-home': isRoot ? 'index.html' : (isInTraining || isInService ? '../../index.html' : '../index.html'),
      'footer-about': isRoot ? 'pages/about.html' : (isInTraining || isInService ? '../about.html' : 'about.html'),
      'footer-career': isRoot ? 'pages/career.html' : (isInTraining || isInService ? '../career.html' : 'career.html'),
      'footer-success': isRoot ? 'pages/success_story.html' : (isInTraining || isInService ? '../success_story.html' : 'success_story.html'),
      'footer-contact': isRoot ? 'pages/contact.html' : (isInTraining || isInService ? '../contact.html' : 'contact.html'),
      'footer-privacy': isRoot ? 'pages/privacy.html' : (isInTraining || isInService ? '../privacy.html' : 'privacy.html'),
      'footer-terms': isRoot ? 'pages/terms.html' : (isInTraining || isInService ? '../terms.html' : 'terms.html')
    };

    Object.keys(footerLinks).forEach(id => {
      const link = document.getElementById(id);
      if (link) link.href = footerLinks[id];
    });
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateAllLinks);
  } else {
    updateAllLinks();
  }
  setTimeout(updateAllLinks, 100);
})();
