// Build script to inject header and footer into all HTML files
// This version is "idempotent": it cleans up duplicates before injecting
const fs = require('fs');
const path = require('path');

// Read header and footer files
const headerContent = fs.readFileSync('includes/header.html', 'utf8');
const footerContent = fs.readFileSync('includes/footer.html', 'utf8');

/**
 * Updates asset paths based on the file's directory depth.
 */
function updateAssetPaths(content, depth) {
  const prefix = '../'.repeat(depth);
  // Match paths that start with assets/ or includes/
  content = content.replace(/(href|src)="assets\//g, `$1="${prefix}assets/`);
  content = content.replace(/(href|src)="includes\//g, `$1="${prefix}includes/`);
  return content;
}

/**
 * Processes an HTML file: Cleans up all duplicates and injects fresh content with markers.
 */
function processFile(filePath, depth) {
  console.log(`Processing: ${filePath}`);
  
  if (!fs.existsSync(filePath)) {
    console.log(`⚠ File not found: ${filePath}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');

  // Markers for reliable replacement
  const H_START = '<!-- HEADER_START -->';
  const H_END = '<!-- HEADER_END -->';
  const F_START = '<!-- FOOTER_START -->';
  const F_END = '<!-- FOOTER_END -->';

  const updatedHeader = `\n${H_START}\n${updateAssetPaths(headerContent, depth).trim()}\n${H_END}\n`;
  const updatedFooter = `\n${F_START}\n${updateAssetPaths(footerContent, depth).trim()}\n${F_END}\n`;

  // --- 1. CLEANUP PREVIOUS INJECTIONS & DUPLICATES ---

  // Remove any previous marker-wrapped blocks (removes all occurrences)
  content = content.replace(new RegExp(`${H_START}[\\s\\S]*?${H_END}`, 'g'), '');
  content = content.replace(new RegExp(`${F_START}[\\s\\S]*?${F_END}`, 'g'), '');

  // Remove legacy tags (for migration) and ALL their duplicates
  content = content.replace(/<header class="site-header">[\s\S]*?<\/header>/g, '');
  content = content.replace(/<footer class="site-footer">[\s\S]*?<\/footer>/g, '');

  // Remove common components that leaked out of the footer tag in previous runs
  content = content.replace(/<!-- Chat Widget -->[\s\S]*?<script src="[^"]*update-links\.js"><\/script>/g, '');
  content = content.replace(/<div class="chat-widget" id="chatWidget">[\s\S]*?<script src="[^"]*update-links\.js"><\/script>/g, '');
  content = content.replace(/<button class="scroll-to-top"[\s\S]*?<\/script>/g, '');

  // Remove duplicate script tags
  content = content.replace(/<script src="[^"]*update-links\.js"><\/script>/g, '');
  content = content.replace(/<script src="[^"]*load-header-footer\.js"><\/script>/g, '');

  // Remove old placeholder divs
  content = content.replace(/<div id="header-placeholder"><\/div>/g, '');
  content = content.replace(/<div id="footer-placeholder"><\/div>/g, '');

  // --- 2. INJECT NEW CONTENT ---

  // Inject Header right after <body>
  if (content.includes('<body')) {
    content = content.replace(/(<body[^>]*>)/, `$1${updatedHeader}`);
  }

  // Inject Footer right before </body>
  if (content.includes('</body>')) {
    content = content.replace('</body>', `${updatedFooter}</body>`);
  }

  // --- 3. FINAL POLISH ---
  // Remove excessive blank lines created by multiple replacements
  content = content.replace(/\n\s*\n\s*\n+/g, '\n\n');

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✓ Updated and Cleaned: ${filePath}`);
}

// All pages to process
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
  { path: 'pages/service/hotel_booking.html', depth: 2 },
  { path: 'pages/service/it_software_service.html', depth: 2 }
];

filesToProcess.forEach(file => {
  processFile(file.path, file.depth);
});

console.log('\n✓ Build complete! All files cleaned and updated with markers.');
