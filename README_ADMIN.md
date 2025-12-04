# GTAC Admin Panel Setup Guide

## ⚠️ Important: Firebase requires HTTP/HTTPS protocol

Firebase **does not work** with `file://` protocol. You must run the project on a local server.

## Quick Start Options

### Option 1: Python HTTP Server (Recommended)

1. Open terminal/command prompt in the project directory
2. Run one of these commands:

**Windows:**
```bash
python -m http.server 8000
```

**Mac/Linux:**
```bash
python3 -m http.server 8000
```

3. Open browser and go to: `http://localhost:8000/admin_login.html`

**Or use the provided script:**
- Windows: Double-click `start_server.bat`
- Mac/Linux: Run `bash start_server.sh`

### Option 2: Node.js HTTP Server

1. Install http-server globally (if not installed):
```bash
npm install -g http-server
```

2. Run in project directory:
```bash
http-server -p 8000
```

3. Open browser and go to: `http://localhost:8000/admin_login.html`

### Option 3: VS Code Live Server Extension

1. Install "Live Server" extension in VS Code
2. Right-click on `admin_login.html`
3. Select "Open with Live Server"
4. Browser will open automatically

### Option 4: GitHub Pages (For Production)

1. Push your code to GitHub
2. Go to repository Settings → Pages
3. Select source branch (usually `main`)
4. Your site will be available at: `https://yourusername.github.io/gtac/admin_login.html`

## Firebase Setup

1. **Firestore Rules** (Temporary for development):
   - Go to Firebase Console → Firestore Database → Rules
   - Use these rules:
   ```
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /{document=**} {
         allow read, write: if true;
       }
     }
   }
   ```

2. **Create Admin User**:
   - Go to Firebase Console → Authentication → Users
   - Click "Add user"
   - Enter email and password
   - Use these credentials to log in

## Troubleshooting

### "Firebase is not initialized" error
- Make sure you're using `http://localhost:8000` not `file:///`
- Check browser console for errors (F12)

### Login not working
- Verify user exists in Firebase Authentication
- Check email and password are correct
- Check browser console for error messages

### Careers not showing
- Make sure Firestore rules allow read access
- Check that careers collection exists in Firestore
- Verify data structure matches expected format

## Admin Panel Features

- **Login**: `admin_login.html`
- **Dashboard**: `admin_dashboard.html`
- **Careers Management**: `admin_careers.html`
- **Services Management**: `admin_services.html` (Coming soon)
- **Courses Management**: `admin_courses.html` (Coming soon)
- **Success Stories**: `admin_success_stories.html` (Coming soon)

## Public Pages

- **Career Page**: `career.html` (Dynamically loads from Firestore)

