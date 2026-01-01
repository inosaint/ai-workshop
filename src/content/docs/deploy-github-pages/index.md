---
title: Deploy to GitHub Pages
description: Put your project live on the internet for free
sidebar:
  order: 8
---


This is the moment of truth! Let's put your project on the internet where anyone can see it.

GitHub Pages is a free hosting service that turns your GitHub repository into a live website.

You should already have:
- ✅ Your project code created with Claude Code
- ✅ Your repository published to GitHub via GitHub Desktop
- ✅ All changes committed and pushed


## Step 1: Verify Your Code is on GitHub

Let's make sure everything is ready:

1. Open **GitHub Desktop**
2. Check that the **Changes tab** is empty (all changes committed)
3. Click **Repository → View on GitHub** (or press `Ctrl+Shift+G` / `Cmd+Shift+G`)
4. Your browser will open to your repository - you should see your project files!

<div class="warning-box">
  <strong>⚠️ Files not showing?</strong><br/>
  If you don't see your files on GitHub, go back to GitHub Desktop and look for a "Push origin" or "Publish repository" button. Click it to upload your code.
</div>


## Step 2: Enable GitHub Pages

Now let's turn your repository into a live website!

1. In your repository, click **"Settings"** (tab at the top)
2. Scroll down and click **"Pages"** in the left sidebar
3. Under **"Source"**, select **"Deploy from a branch"**
4. Under **"Branch"**, select **"main"** and leave the folder as **"/ (root)"**
5. Click **"Save"**

<div class="image-placeholder">
  <div class="image-placeholder-icon">🖼️</div>
  <div class="image-placeholder-text">
    <strong>[Screenshot: GitHub Pages settings]</strong><br/>
    GitHub Settings > Pages section showing:<br/>
    • Source: "Deploy from a branch"<br/>
    • Branch: "main" selected, "/(root)" folder<br/>
    • Save button
  </div>
</div>


## Step 3: Wait for Deployment

GitHub needs a minute or two to build and deploy your site.

1. Stay on the Pages settings page
2. Refresh after a minute
3. You'll see a message: **"Your site is live at..."**

<div class="image-placeholder">
  <div class="image-placeholder-icon">🖼️</div>
  <div class="image-placeholder-text">
    <strong>[Screenshot: GitHub Pages deployed]</strong><br/>
    GitHub Pages settings showing green banner: "Your site is live at https://username.github.io/repo-name/"
  </div>
</div>


## Step 4: Visit Your Live Site!

Click the link or type it in your browser:

```
https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/
```

🎉 **Congratulations! Your project is live on the internet!**


## Updating Your Site

Whenever you make changes to your project:

### Step 1: Make Your Changes

Edit your files in your code editor and save them.

### Step 2: Commit in GitHub Desktop

1. Open GitHub Desktop
2. You'll see your changes in the "Changes" tab
3. Write a summary of what you changed (e.g., "Updated homepage colors")
4. Click **"Commit to main"**

### Step 3: Push to GitHub

Click the **"Push origin"** button at the top.

GitHub Pages will automatically update within a few minutes!


## Troubleshooting

### 404 Error / Page Not Found

- **Check the URL** - Make sure you're using the correct repository name
- **Check your files** - Make sure you have an `index.html` file in the root of your repository
- **Wait a bit** - First deployment can take up to 10 minutes

### Blank Page

- **Check browser console** for errors (F12 → Console tab)
- **Check file paths** - Links to CSS/JS might need updating
- **Case sensitivity** - `Styles.css` is different from `styles.css`

### Changes Not Showing

- **Wait 2-5 minutes** - GitHub Pages caches aggressively
- **Hard refresh** - `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
- **Check Actions tab** - See if the deployment is still running

<div class="image-placeholder">
  <div class="image-placeholder-icon">🖼️</div>
  <div class="image-placeholder-text">
    <strong>[Screenshot: GitHub Actions tab]</strong><br/>
    GitHub repository Actions tab showing deployment status with green checkmark
  </div>
</div>


## Sharing Your Site

Your site URL is:
```
https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/
```

Share it with:
- Friends and family
- Social media
- Your resume/portfolio
- Job applications

<div class="tip-box">
  <strong>💡 Pro Tip:</strong> You can use a custom domain (like "yourname.com") instead of the github.io address. That's a bit more advanced, but GitHub has <a href="https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site" target="_blank">great documentation</a> if you're interested!
</div>


<div class="checkpoint">
  <div class="checkpoint-title">✅ Checkpoint</div>
  <p>Your project is LIVE on the internet! You just deployed a real website. 🎉</p>
</div>


## What's Next?

You've accomplished something amazing - going from zero to a deployed website!

In the next sections, we'll level up your skills by:
- Learning to use the Claude API directly
- Adding analytics to track visitors
