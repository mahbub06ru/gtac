# Navigation Structure - Updated for Folder Organization

## Folder Structure

```
gtac/
├── index.html (Root - Home page)
├── pages/
│   ├── about.html
│   ├── service.html
│   ├── courses.html
│   ├── career.html
│   ├── contact.html
│   ├── success_story.html
│   ├── terms.html
│   ├── privacy.html
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
- Services: `pages/service.html`
- Training: `pages/courses.html`
- Career: `pages/career.html`
- Success Story: `pages/success_story.html`
- Contact: `pages/contact.html`

### Pages Folder (pages/*.html)
- Home: `../index.html`
- About: `about.html` (same folder)
- Services: `service.html` (same folder)
- Training: `courses.html` (same folder)
- Career: `career.html` (same folder)
- Success Story: `success_story.html` (same folder)
- Contact: `contact.html` (same folder)
- Training sub-items: `training/gds_training.html`, `training/visa_process.html`

### Training Folder (pages/training/*.html)
- Home: `../../index.html`
- About: `../about.html`
- Services: `../service.html`
- Training: `../courses.html`
- Career: `../career.html`
- Success Story: `../success_story.html`
- Contact: `../contact.html`
- Training sub-items: `ielts_preparation.html`, `gds_training.html`, `visa_process.html`, `flutter_development.html` (same folder)

## Dropdown Menus

### Services Dropdown (8 items)
1. Student Consultancy → `pages/service.html#student-consultancy`
2. Visa Process → `pages/service.html#visa-process`
3. Tour Packages → `pages/service.html#tour-packages`
4. Air Ticketing → `pages/service.html#air-ticketing`
5. Hajj & Umrah → `pages/service.html#hajj-umrah`
6. E-passport, NID, Police Clearance → `pages/service.html#epassport-nid`
7. Business & Legal Consultancy → `pages/service.html#business-legal`
8. IT Services → `pages/service.html#it-services`

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
- pages/service.html
- pages/courses.html
- pages/career.html
- pages/contact.html
- pages/success_story.html
- pages/terms.html
- pages/privacy.html

✅ **Training Folder:**
- pages/training/ielts_preparation.html
- pages/training/gds_training.html
- pages/training/visa_process.html
- pages/training/flutter_development.html

## Notes

- All navigation links use relative paths
- Brand logo links updated to point to correct home page
- Footer links updated in all pages
- Dropdown menus work correctly with new folder structure
- Training dropdown links to actual training pages (gds_training, visa_process, flutter_development)

