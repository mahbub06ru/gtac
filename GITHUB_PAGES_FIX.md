# Fix GitHub Pages 404 Error

## Step 1: Commit and Push All Admin Files

Run these commands in your terminal (in the project directory):

```bash
# Add all admin files
git add admin_login.html
git add admin_dashboard.html
git add admin_careers.html
git add admin_services.html
git add admin_courses.html
git add admin_success_stories.html
git add admin_styles.css
git add career.html

# Or add all files at once
git add .

# Commit
git commit -m "Add admin panel with Firebase integration"

# Push to GitHub
git push origin main
```

## Step 2: Verify GitHub Pages Settings

1. Go to your GitHub repository: `https://github.com/mahbub06ru/gtac`
2. Click **Settings** → **Pages** (left sidebar)
3. Under **Source**, make sure:
   - Branch is set to `main` (or `master`)
   - Folder is set to `/ (root)`
4. Click **Save**

## Step 3: Wait for GitHub Pages to Build

- GitHub Pages takes 1-2 minutes to build after pushing
- You'll see a green checkmark when it's ready
- Check the **Actions** tab to see build status

## Step 4: Clear Browser Cache

After deployment:
1. Hard refresh: `Ctrl + F5` (Windows) or `Cmd + Shift + R` (Mac)
2. Or try incognito/private browsing mode

## Step 5: Verify File is in Repository

1. Go to: `https://github.com/mahbub06ru/gtac`
2. Check if `admin_login.html` appears in the file list
3. If not, the file wasn't pushed - repeat Step 1

## Common Issues:

### Issue: File exists locally but not on GitHub
**Solution:** The file wasn't committed/pushed. Run Step 1.

### Issue: GitHub Pages shows old version
**Solution:** 
- Wait 2-3 minutes for rebuild
- Clear browser cache
- Check Actions tab for build errors

### Issue: Case sensitivity
**Solution:** GitHub Pages is case-sensitive. Make sure URL matches filename exactly:
- ✅ `admin_login.html` 
- ❌ `Admin_Login.html` or `ADMIN_LOGIN.HTML`

### Issue: Branch mismatch
**Solution:** Make sure GitHub Pages is set to the same branch you're pushing to (usually `main`)

## Test URLs After Fix:

- Login: `https://mahbub06ru.github.io/gtac/admin_login.html`
- Dashboard: `https://mahbub06ru.github.io/gtac/admin_dashboard.html`
- Careers: `https://mahbub06ru.github.io/gtac/admin_careers.html`
- Career Page: `https://mahbub06ru.github.io/gtac/career.html`

