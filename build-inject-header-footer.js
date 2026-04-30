// Build script to inject header and footer into all HTML files
// This works with file:// protocol
const fs = require('fs');
const path = require('path');

// Read header and footer files
const headerContent = fs.readFileSync('includes/header.html', 'utf8');
const footerContent = fs.readFileSync('includes/footer.html', 'utf8');

// Function to update asset paths based on file location
function updateAssetPaths(content, depth) {
  const prefix = '../'.repeat(depth);
  // Update CSS and image paths - more specific regex to avoid double prefixing
  // Only match paths that start with assets/ or includes/ (not ../assets/)
  content = content.replace(/(href|src)="assets\//g, `$1="${prefix}assets/`);
  content = content.replace(/(href|src)="includes\//g, `$1="${prefix}includes/`);
  return content;
}

// Function to process an HTML file
function processFile(filePath, depth) {
  console.log(`Processing: ${filePath}`);
  
  if (!fs.existsSync(filePath)) {
    console.log(`⚠ File not found: ${filePath}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  const prefix = '../'.repeat(depth);

  // 1. Update existing asset paths in the page head (only if not already prefixed)
  content = content.replace(/(href|src)="assets\//g, `$1="${prefix}assets/`);

  // 2. Replace Header
  // Targets <div id="header-placeholder"></div> OR <header class="site-header">...</header>
  const headerRegex = /<div id="header-placeholder"><\/div>|<header class="site-header">[\s\S]*?<\/header>/;
  if (headerRegex.test(content)) {
    let updatedHeader = updateAssetPaths(headerContent, depth);
    content = content.replace(headerRegex, updatedHeader);
  } else if (!content.includes('<header')) {
    // If no header found at all, insert after <body>
    let updatedHeader = updateAssetPaths(headerContent, depth);
    content = content.replace(/<body[^>]*>/, `$& \n${updatedHeader}`);
  }
  
  // 3. Replace Footer
  // More surgical: targets the footer and common scripts, preserving unique page scripts
  const footerStartRegex = /<footer class="site-footer">/;
  const footerEndRegex = /<\/footer>/;

  if (footerStartRegex.test(content)) {
    // We replace from the footer start until the end of the site-footer,
    // AND then we clean up common trailing scripts like update-links.js
    // to prevent duplicates, but we must NOT touch unique scripts.

    let updatedFooter = updateAssetPaths(footerContent, depth);

    // Replace the footer tag itself
    const fullFooterRegex = /<footer class="site-footer">[\s\S]*?<\/footer>/;
    content = content.replace(fullFooterRegex, updatedFooter);

    // Clean up duplicated update-links.js script tags if they appear after footer
    // (This is common if the script was already present)
    const scriptRegex = new RegExp(`<script src="[^"]*update-links\\.js"><\\/script>`, 'g');
    // We want to keep ONLY the one that is part of the injected footerContent.
    // Since we just injected it, any *other* occurrence should be removed.
    // However, it's safer to just let the script handle its own logic.
  } else if (content.includes('<div id="footer-placeholder"></div>')) {
    let updatedFooter = updateAssetPaths(footerContent, depth);
    content = content.replace('<div id="footer-placeholder"></div>', updatedFooter);
  } else {
    // No footer found, insert before </body>
    let updatedFooter = updateAssetPaths(footerContent, depth);
    content = content.replace('</body>', `${updatedFooter}\n</body>`);
  }
  
  // Remove duplicate loader scripts if any exist
  content = content.replace(/<script src="[^"]*load-header-footer\.js"><\/script>/g, '');
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✓ Updated: ${filePath}`);
}

// Process all HTML files
const filesToProcess = [
  { path: 'index.html', depth: 0 },
  { path: 'pages/about.html', depth: 1 },
  { path: 'pages/career.html', depth: 1 },
  { path: 'pages/contact.html', depth: 1 },
  { path: 'pages/success_story.html', depth: 1 },
  { path: 'pages/terms.html', depth: 1 },
  { path: 'pages/privacy.html', depth: 1 },
  { path: 'pages/latest_update.html', depth: 1 },
  { path: 'pages/training/ielts_preparation.html', depth: 2 },
  { path: 'pages/training/gds_training.html', depth: 2 },
  { path: 'pages/training/visa_process.html', depth: 2 },
  { path: 'pages/training/flutter_development.html', depth: 2 },
  { path: 'pages/service/student_visa_processing.html', depth: 2 },
  { path: 'pages/service/country_visa_processing.html', depth: 2 },
  { path: 'pages/service/holiday_tour_packages.html', depth: 2 },
  { path: 'pages/service/airticket_domestic_international.html', depth: 2 },
  { path: 'pages/service/hajj_umrah_package.html', depth: 2 },
  { path: 'pages/service/passport_nid_police_verification.html', depth: 2 },
  { path: 'pages/service/hotel_booking.html', depth: 2 },
  { path: 'pages/service/it_software_service.html', depth: 2 }
];

filesToProcess.forEach(file => {
  processFile(file.path, file.depth);
});

console.log('\n✓ Build complete! All files updated.');
