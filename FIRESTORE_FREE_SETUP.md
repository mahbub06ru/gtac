# Setup Firestore on FREE Tier (Spark Plan)

## Yes, Firestore is FREE! 

Firebase offers a **Spark Plan (Free Tier)** that includes:
- ✅ 1 GB storage
- ✅ 10 GB/month network egress  
- ✅ 50,000 reads/day
- ✅ 20,000 writes/day
- ✅ 20,000 deletes/day

This is **more than enough** for a small to medium website!

## Step-by-Step Setup (FREE)

### Step 1: Create Firestore Database

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: **gtac-a9db5**
3. Click **Firestore Database** in the left menu
4. Click **Create database** button

### Step 2: Choose Location

1. Select **Start in test mode** (we'll update rules next)
2. Choose a location closest to your users (e.g., `asia-south1` for Bangladesh)
3. Click **Enable**

### Step 3: Update Security Rules (IMPORTANT!)

1. Go to **Firestore Database** → **Rules** tab
2. Replace with these rules (for development):

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

3. Click **Publish**

### Step 4: Verify Billing (Still FREE!)

Even though the error mentions billing, you can use the **free tier**:

1. Go to [Firebase Console](https://console.firebase.google.com/) → **Project Settings** → **Usage and billing**
2. You should see **Spark Plan (Free)** 
3. If it asks for billing, you can add a payment method but **won't be charged** unless you exceed free limits
4. The free tier is generous - you likely won't exceed it

## Important Notes

### About Billing Error
- The error appears when trying to **create** the database
- Once created, you can use it on the free tier
- Adding a payment method doesn't mean you'll be charged
- You only pay if you exceed free tier limits (which is unlikely for a small site)

### Free Tier Limits (More than enough!)
- **50,000 reads/day** = ~1,600 reads per day for 30 days
- **20,000 writes/day** = ~650 writes per day for 30 days
- **1 GB storage** = Can store thousands of career posts

### If You Still See Billing Error

1. Make sure you're creating the database in **test mode** first
2. Try using the Firebase Console web interface instead of API
3. Wait a few minutes if you just created the project
4. Check if your Google account has any restrictions

## Alternative: Use Realtime Database (Also FREE)

If Firestore still gives issues, you can use **Realtime Database** (also free):
- Different structure but also free
- I can help convert the code if needed

## After Setup

Once Firestore is created:
1. Refresh your admin page
2. Try adding a career
3. It should work now!

## Need Help?

If you still get billing errors:
1. Check your Firebase project settings
2. Make sure you're on the Spark (Free) plan
3. Try creating database from Firebase Console web interface
4. Contact Firebase support if needed

