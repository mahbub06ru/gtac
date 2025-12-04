// Update all navigation and footer links based on current page location
(function() {
  'use strict';
  
  function getBasePath() {
    // Handle both file:// and http:// protocols
    let path = window.location.pathname;
    const href = window.location.href;
    
    // For file:// protocol, pathname might be empty or just the filename
    // Check href for better detection
    if (!path || path === '/' || path === '\\' || path.endsWith('.html')) {
      // For file:// protocol, use href to determine location
      // Check deeper folders first
      if (href.includes('/pages/training/') || href.includes('\\pages\\training\\')) {
        return '../../';
      } else if (href.includes('/pages/service/') || href.includes('\\pages\\service\\')) {
        return '../../';
      } else if (href.includes('/pages/') || href.includes('\\pages\\')) {
        return '../';
      } else {
        return '';
      }
    }
    
    // For http:// protocol, use pathname
    // Check deeper folders first
    if (path.includes('/pages/training/')) {
      return '../../';
    } else if (path.includes('/pages/service/')) {
      return '../../';
    } else if (path.includes('/pages/')) {
      return '../';
    } else {
      return '';
    }
  }
  
  // Run immediately and also on DOMContentLoaded
  function updateAllLinks() {
  const basePath = getBasePath();
  const isRoot = basePath === '';
  const isInPages = basePath === '../';
  const isInService = basePath === '../../' && (window.location.href.includes('/pages/service/') || window.location.href.includes('\\pages\\service\\'));
  const isInTraining = basePath === '../../' && !isInService && (window.location.href.includes('/pages/training/') || window.location.href.includes('\\pages\\training\\'));
  
  // Update brand logo
  const brandLink = document.getElementById('brand-link');
  const brandLogo = document.getElementById('brand-logo-img');
  if (brandLink) {
    brandLink.href = basePath + 'index.html';
  }
  if (brandLogo) {
    brandLogo.src = basePath + 'assets/assets/images/gtac-logo.png';
  }
  
  // Update navigation links
  const navLinks = {
    'nav-home': isRoot ? 'index.html' : (isInTraining || isInService ? '../../index.html' : '../index.html'),
    'nav-about': isRoot ? 'pages/about.html' : (isInTraining || isInService ? '../about.html' : 'about.html'),
    'nav-service': isRoot ? 'pages/service.html' : (isInTraining || isInService ? '../service.html' : 'service.html'),
    'nav-training': isRoot ? 'pages/courses.html' : (isInTraining || isInService ? '../courses.html' : 'courses.html'),
    'nav-career': isRoot ? 'pages/career.html' : (isInTraining || isInService ? '../career.html' : 'career.html'),
    'nav-success': isRoot ? 'pages/success_story.html' : (isInTraining || isInService ? '../success_story.html' : 'success_story.html'),
    'nav-contact': isRoot ? 'pages/contact.html' : (isInTraining || isInService ? '../contact.html' : 'contact.html'),
    // Service dropdown items - linking to dedicated service pages
    'nav-service-1': isRoot ? 'pages/service/student_visa_processing.html' : (isInTraining ? '../service/student_visa_processing.html' : (isInService ? 'student_visa_processing.html' : 'service/student_visa_processing.html')),
    'nav-service-2': isRoot ? 'pages/service/country_visa_processing.html' : (isInTraining ? '../service/country_visa_processing.html' : (isInService ? 'country_visa_processing.html' : 'service/country_visa_processing.html')),
    'nav-service-3': isRoot ? 'pages/service/holiday_tour_packages.html' : (isInTraining ? '../service/holiday_tour_packages.html' : (isInService ? 'holiday_tour_packages.html' : 'service/holiday_tour_packages.html')),
    'nav-service-4': isRoot ? 'pages/service/airticket_domestic_international.html' : (isInTraining ? '../service/airticket_domestic_international.html' : (isInService ? 'airticket_domestic_international.html' : 'service/airticket_domestic_international.html')),
    'nav-service-5': isRoot ? 'pages/service/hajj_umrah_package.html' : (isInTraining ? '../service/hajj_umrah_package.html' : (isInService ? 'hajj_umrah_package.html' : 'service/hajj_umrah_package.html')),
    'nav-service-6': isRoot ? 'pages/service/passport_nid_police_verification.html' : (isInTraining ? '../service/passport_nid_police_verification.html' : (isInService ? 'passport_nid_police_verification.html' : 'service/passport_nid_police_verification.html')),
    'nav-service-7': isRoot ? 'pages/service/business_legal_consultancy.html' : (isInTraining ? '../service/business_legal_consultancy.html' : (isInService ? 'business_legal_consultancy.html' : 'service/business_legal_consultancy.html')),
    'nav-service-8': isRoot ? 'pages/service/it_software_service.html' : (isInTraining ? '../service/it_software_service.html' : (isInService ? 'it_software_service.html' : 'service/it_software_service.html')),
    // Training dropdown items
    'nav-training-1': isRoot ? 'pages/training/ielts_preparation.html' : (isInTraining ? 'ielts_preparation.html' : (isInService ? '../training/ielts_preparation.html' : 'training/ielts_preparation.html')),
    'nav-training-2': isRoot ? 'pages/training/flutter_development.html' : (isInTraining ? 'flutter_development.html' : (isInService ? '../training/flutter_development.html' : 'training/flutter_development.html')),
    'nav-training-3': isRoot ? 'pages/training/gds_training.html' : (isInTraining ? 'gds_training.html' : (isInService ? '../training/gds_training.html' : 'training/gds_training.html')),
    'nav-training-4': isRoot ? 'pages/training/visa_process.html' : (isInTraining ? 'visa_process.html' : (isInService ? '../training/visa_process.html' : 'training/visa_process.html'))
  };
  
  Object.keys(navLinks).forEach(id => {
    const link = document.getElementById(id);
    if (link) {
      link.href = navLinks[id];
    }
  });
  
  // Update footer links
  const footerLinks = {
    'footer-home': isRoot ? 'index.html' : (isInTraining || isInService ? '../../index.html' : '../index.html'),
    'footer-about': isRoot ? 'pages/about.html' : (isInTraining || isInService ? '../about.html' : 'about.html'),
    'footer-service': isRoot ? 'pages/service.html' : (isInTraining || isInService ? '../service.html' : 'service.html'),
    'footer-training': isRoot ? 'pages/courses.html' : (isInTraining || isInService ? '../courses.html' : 'courses.html'),
    'footer-career': isRoot ? 'pages/career.html' : (isInTraining || isInService ? '../career.html' : 'career.html'),
    'footer-success': isRoot ? 'pages/success_story.html' : (isInTraining || isInService ? '../success_story.html' : 'success_story.html'),
    'footer-contact': isRoot ? 'pages/contact.html' : (isInTraining || isInService ? '../contact.html' : 'contact.html'),
    'footer-privacy': isRoot ? 'pages/privacy.html' : (isInTraining || isInService ? '../privacy.html' : 'privacy.html'),
    'footer-terms': isRoot ? 'pages/terms.html' : (isInTraining || isInService ? '../terms.html' : 'terms.html')
  };
  
  Object.keys(footerLinks).forEach(id => {
    const link = document.getElementById(id);
    if (link) {
      link.href = footerLinks[id];
    }
  });
  
  // Update chat contact link
  const chatContact = document.getElementById('chat-contact');
  if (chatContact) {
    chatContact.href = isRoot ? 'pages/contact.html' : (isInTraining || isInService ? '../contact.html' : 'contact.html');
  }
  }
  
  // Run immediately
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateAllLinks);
  } else {
    updateAllLinks();
  }
  
  // Also run after a short delay to ensure all elements are available
  setTimeout(updateAllLinks, 100);
})();

