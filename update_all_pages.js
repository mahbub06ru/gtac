// This is a reference script showing the pattern for updating pages
// Run this manually or use it as a guide

/*
For each HTML page, replace:
1. Header section (from <header> to </header>) with:
   <!-- Header will be loaded here -->
   <div id="header-placeholder"></div>

2. Footer section (from <footer> to </footer> and all scripts after) with:
   <!-- Footer will be loaded here -->
   <div id="footer-placeholder"></div>
   
   <!-- Load Header and Footer -->
   <script src="../includes/load-header-footer.js"></script>
   (or "../includes/" for pages folder, "../../includes/" for training folder)

3. Update CSS/asset paths:
   - pages/*.html: "../assets/..." 
   - pages/training/*.html: "../../assets/..."
   - index.html: "assets/..."

4. Remove all duplicate scripts (nav-toggle, chat widget, scroll-to-top) as they're in footer.html
*/

console.log('Use this as a reference for updating pages');

