# Navigation Structure - Updated for Folder Organization

## Folder Structure

```
gtac/
├── index.html (Root - Home page)
├── pages/
│   ├── about.html
│   ├── career.html
│   ├── contact.html
│   ├── success_story.html
│   ├── terms.html
│   ├── privacy.html
│   ├── service/
│   │   ├── student_visa_processing.html
│   │   ├── country_visa_processing.html
│   │   ├── holiday_tour_packages.html
│   │   ├── airticket_domestic_international.html
│   │   ├── hajj_umrah_package.html
│   │   ├── passport_nid_police_verification.html
│   │   ├── business_legal_consultancy.html
│   │   └── it_software_service.html
│   └── training/
│       ├── ielts_preparation.html
│       ├── gds_training.html
│       ├── visa_process.html
│       └── flutter_development.html
└── admin/
    ├── admin_login.html
    ├── admin_dashboard.html
    ├── admin_careers.html
    └── ...
```

## Navigation Links Updated

### Root Level (index.html)
- Home: `index.html`
- About: `pages/about.html`
- Services: `pages/service/student_visa_processing.html` (links to first service page)
- Training: `pages/training/ielts_preparation.html` (links to first training page)
- Career: `pages/career.html`
- Success Story: `pages/success_story.html`
- Contact: `pages/contact.html`

### Pages Folder (pages/*.html)
- Home: `../index.html`
- About: `about.html` (same folder)
- Services: `service/student_visa_processing.html` (links to first service page)
- Training: `training/ielts_preparation.html` (links to first training page)
- Career: `career.html` (same folder)
- Success Story: `success_story.html` (same folder)
- Contact: `contact.html` (same folder)

### Service Folder (pages/service/*.html)
- Home: `../../index.html`
- About: `../about.html`
- Services: `student_visa_processing.html` (links to first service page)
- Training: `../training/ielts_preparation.html` (links to first training page)
- Career: `../career.html`
- Success Story: `../success_story.html`
- Contact: `../contact.html`
- Service sub-items: All service pages in same folder

### Training Folder (pages/training/*.html)
- Home: `../../index.html`
- About: `../about.html`
- Services: `../service/student_visa_processing.html` (links to first service page)
- Training: `ielts_preparation.html` (links to first training page)
- Career: `../career.html`
- Success Story: `../success_story.html`
- Contact: `../contact.html`
- Training sub-items: `ielts_preparation.html`, `gds_training.html`, `visa_process.html`, `flutter_development.html` (same folder)

## Dropdown Menus

### Services Dropdown (8 items)
1. Student Consultancy → `pages/service/student_visa_processing.html`
2. Visa Process → `pages/service/country_visa_processing.html`
3. Tour Packages → `pages/service/holiday_tour_packages.html`
4. Air Ticketing → `pages/service/airticket_domestic_international.html`
5. Hajj & Umrah → `pages/service/hajj_umrah_package.html`
6. E-passport, NID, Police Clearance → `pages/service/passport_nid_police_verification.html`
7. Business & Legal Consultancy → `pages/service/business_legal_consultancy.html`
8. IT Services → `pages/service/it_software_service.html`

### Training Dropdown (4 items)
1. IELTS → `pages/training/ielts_preparation.html`
2. Mobile App Dev → `pages/training/flutter_development.html`
3. GDS Ticketing → `pages/training/gds_training.html`
4. Visa Processing → `pages/training/visa_process.html`

## All Files Updated

✅ **Root Level:**
- index.html

✅ **Pages Folder:**
- pages/about.html
- pages/career.html
- pages/contact.html
- pages/success_story.html
- pages/terms.html
- pages/privacy.html

✅ **Service Folder:**
- pages/service/student_visa_processing.html
- pages/service/country_visa_processing.html
- pages/service/holiday_tour_packages.html
- pages/service/airticket_domestic_international.html
- pages/service/hajj_umrah_package.html
- pages/service/passport_nid_police_verification.html
- pages/service/business_legal_consultancy.html
- pages/service/it_software_service.html

✅ **Training Folder:**
- pages/training/ielts_preparation.html
- pages/training/gds_training.html
- pages/training/visa_process.html
- pages/training/flutter_development.html

## Notes

- **Removed Pages**: `pages/service.html` and `pages/courses.html` have been removed as all services and training now have dedicated pages
- **Services & Training Navigation**: The main "Services" and "Training" dropdown toggles now link directly to the first item in their respective dropdowns
- **Footer Links**: Footer "Services" and "Training" links also point to the first item in their dropdowns
- All navigation links use relative paths
- Brand logo links updated to point to correct home page
- Footer links updated in all pages
- Dropdown menus work correctly with new folder structure
- Each service and training has its own dedicated page

