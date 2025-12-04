# Fix Firestore Permission Denied Error

## The Problem
If you see "Adding..." but nothing happens, it's likely because Firestore security rules are blocking write access.

## Quick Fix - Update Firestore Rules

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: **gtac-a9db5**
3. Go to **Firestore Database** → **Rules** tab
4. Replace the rules with this (for development):

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

5. Click **Publish**

## ⚠️ Security Warning
The above rules allow **anyone** to read and write to your database. This is only for development/testing.

## Production Rules (Later)
For production, you should restrict access:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /careers/{careerId} {
      allow read: if true;  // Anyone can read
      allow write: if request.auth != null;  // Only authenticated users can write
    }
  }
}
```

## Test After Updating Rules

1. Refresh the admin page
2. Try adding a career again
3. Check browser console (F12) for any errors
4. You should see success message and the career should appear in the list

## Other Possible Issues

### Network Connection
- Check your internet connection
- Try refreshing the page

### Browser Console Errors
- Open browser console (F12)
- Look for red error messages
- Share the error message if you need help

### Firestore Not Enabled
- Make sure Firestore Database is enabled in Firebase Console
- Go to Firestore Database → Create database (if not created)

