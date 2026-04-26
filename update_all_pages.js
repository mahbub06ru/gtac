const fs = require('fs');
const path = require('path');

// Read footer file
const footerPath = path.join(__dirname, 'includes', 'footer.html');
const footerContent = fs.readFileSync(footerPath, 'utf8');

// Function to update asset paths based on file location
function updateAssetPaths(content, depth) {
  const prefix = '../'.repeat(depth);
  // Update CSS and image paths in the injected footer
  let updatedContent = content.replace(/href="assets\//g, `href="${prefix}assets/`);
  updatedContent = updatedContent.replace(/src="assets\//g, `src="${prefix}assets/`);
  updatedContent = updatedContent.replace(/href="pages\//g, `href="${prefix}pages/`);
  updatedContent = updatedContent.replace(/src="pages\//g, `src="${prefix}pages/`);
  updatedContent = updatedContent.replace(/src="includes\//g, `src="${prefix}includes/`);

  // Specifically fix the update-links.js path
  updatedContent = updatedContent.replace(/src=".*update-links\.js"/g, `src="${prefix}includes/update-links.js"`);

  return updatedContent;
}

// Function to process an HTML file
function processFile(filePath, depth) {
  console.log(`Processing: ${filePath}`);

  let content = fs.readFileSync(filePath, 'utf8');

  const prefix = '../'.repeat(depth);
  let updatedFooter = updateAssetPaths(footerContent, depth);

  // Match <footer> to </footer> and everything after it until </body>
  const footerRegex = /<footer[\s\S]*?<\/footer>[\s\S]*?(?=<\/body>)/;

  if (footerRegex.test(content)) {
    content = content.replace(footerRegex, updatedFooter + '\n');
    console.log(`✓ Replaced existing footer in: ${filePath}`);
  } else if (content.includes('</body>')) {
    content = content.replace('</body>', updatedFooter + '\n</body>');
    console.log(`✓ Inserted footer before </body> in: ${filePath}`);
  }

  fs.writeFileSync(filePath, content, 'utf8');
}

// Files to update
const files = [
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
  { path: 'pages/service/hotel_booking.html', depth: 2 },
  { path: 'pages/service/it_software_service.html', depth: 2 }
];

files.forEach(file => {
  const fullPath = path.join(__dirname, file.path);
  if (fs.existsSync(fullPath)) {
    processFile(fullPath, file.depth);
  } else {
    console.log(`⚠ File not found: ${fullPath}`);
  }
});

console.log('All pages updated with the common footer.');
