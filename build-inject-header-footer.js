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
  // Update CSS and image paths
  content = content.replace(/href="assets\//g, `href="${prefix}assets/`);
  content = content.replace(/src="assets\//g, `src="${prefix}assets/`);
  content = content.replace(/href="includes\//g, `href="${prefix}includes/`);
  content = content.replace(/src="includes\//g, `src="${prefix}includes/`);
  return content;
}

// Function to process an HTML file
function processFile(filePath, depth) {
  console.log(`Processing: ${filePath}`);
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Update asset paths in the file
  const prefix = '../'.repeat(depth);
  content = content.replace(/href="assets\//g, `href="${prefix}assets/`);
  content = content.replace(/src="assets\//g, `src="${prefix}assets/`);
  
  // Replace header placeholder or existing header
  const headerRegex = /<div id="header-placeholder"><\/div>|<header[\s\S]*?<\/header>/;
  if (headerRegex.test(content)) {
    let updatedHeader = updateAssetPaths(headerContent, depth);
    content = content.replace(headerRegex, updatedHeader);
  }
  
  // Replace footer placeholder or existing footer (including scripts)
  // First check if footer placeholder exists
  if (content.includes('<div id="footer-placeholder"></div>')) {
    let updatedFooter = updateAssetPaths(footerContent, depth);
    // Fix update-links.js path - ensure it uses the correct relative path
    updatedFooter = updatedFooter.replace(/src="includes\/update-links\.js"/g, `src="${prefix}includes/update-links.js"`);
    updatedFooter = updatedFooter.replace(/src="\.\.\/includes\/update-links\.js"/g, `src="${prefix}includes/update-links.js"`);
    updatedFooter = updatedFooter.replace(/src="\.\.\/\.\.\/includes\/update-links\.js"/g, `src="${prefix}includes/update-links.js"`);
    content = content.replace('<div id="footer-placeholder"></div>', updatedFooter);
  } else {
    // Match from <footer> to </footer> and all scripts until </body>
    const footerRegex = /<footer[\s\S]*?<\/footer>[\s\S]*?(?=<script src="[^"]*load-header-footer|<\/body>)/;
    if (footerRegex.test(content)) {
      let updatedFooter = updateAssetPaths(footerContent, depth);
      // Fix update-links.js path
      updatedFooter = updatedFooter.replace(/src="includes\/update-links\.js"/g, `src="${prefix}includes/update-links.js"`);
      updatedFooter = updatedFooter.replace(/src="\.\.\/includes\/update-links\.js"/g, `src="${prefix}includes/update-links.js"`);
      updatedFooter = updatedFooter.replace(/src="\.\.\/\.\.\/includes\/update-links\.js"/g, `src="${prefix}includes/update-links.js"`);
      // Remove the loader script if it exists
      content = content.replace(/<script src="[^"]*load-header-footer\.js"><\/script>/g, '');
      content = content.replace(footerRegex, updatedFooter);
    } else {
      // If no footer found, insert before </body>
      let updatedFooter = updateAssetPaths(footerContent, depth);
      updatedFooter = updatedFooter.replace(/src="includes\/update-links\.js"/g, `src="${prefix}includes/update-links.js"`);
      content = content.replace('</body>', updatedFooter + '\n</body>');
    }
  }
  
  // Remove duplicate loader scripts
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
  { path: 'pages/service/business_legal_consultancy.html', depth: 2 },
  { path: 'pages/service/it_software_service.html', depth: 2 }
];

filesToProcess.forEach(file => {
  if (fs.existsSync(file.path)) {
    processFile(file.path, file.depth);
  } else {
    console.log(`⚠ File not found: ${file.path}`);
  }
});

console.log('\n✓ Build complete! All files updated.');

