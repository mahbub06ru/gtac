# Digital Business Card - GitHub Pages Setup

## To Fix the 404 Error and Make Your Site Work at https://mahbub06ru.github.io/

### Option 1: Rename Repository (Recommended for Root URL)

To make your site accessible at `https://mahbub06ru.github.io/` (without the `/portfolio_of_mahbub/` path):

1. **Rename your repository** on GitHub:
   - Go to your repository: `https://github.com/mahbub06ru/portfolio_of_mahbub`
   - Click on **Settings** tab
   - Scroll down to **Repository name** section
   - Rename it to: `mahbub06ru.github.io` (must match your username exactly)
   - Click **Rename**

2. **Enable GitHub Pages**:
   - In the same Settings page, go to **Pages** section (left sidebar)
   - Under **Source**, select **Deploy from a branch**
   - Select branch: `main` (or `master` if that's your default branch)
   - Select folder: `/ (root)`
   - Click **Save**

3. **Wait 1-2 minutes** for GitHub to build and deploy your site

4. **Access your site** at: `https://mahbub06ru.github.io/`

### Option 2: Keep Current Repository Name

If you want to keep the repository name as `portfolio_of_mahbub`:

1. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Select branch: `main` (or `master`)
   - Select folder: `/ (root)`
   - Click **Save**

2. **Access your site** at: `https://mahbub06ru.github.io/portfolio_of_mahbub/`

3. **Update the base href** in `index.html` back to:
   ```html
   <base href="https://mahbub06ru.github.io/portfolio_of_mahbub/">
   ```

## Important Notes

- The repository must be **public** (for free GitHub Pages)
- After enabling Pages, it may take a few minutes for the site to be available
- Make sure all your files (including `index.html`, `manifest.json`, icons, etc.) are committed and pushed to the repository
- The `index.html` file should be in the root of your repository

## Current Configuration

- Base href is set to `/` (works for root URL if repository is named `mahbub06ru.github.io`)
- All assets and icons are referenced with relative paths
- The site is fully responsive and mobile-friendly



