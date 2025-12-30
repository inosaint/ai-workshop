---
title: Deploy to GitHub Pages
description: Put your project live on the internet for free
sidebar:
  order: 8
---

# Deploy to GitHub Pages

This is the moment of truth! Let's put your project on the internet where anyone can see it.

GitHub Pages is a free hosting service that turns your GitHub repository into a live website.


## Step 1: Create a GitHub Repository

First, we need a place on GitHub to store your project.

1. Go to [github.com](https://github.com) and log in
2. Click the **+** icon in the top-right corner
3. Select **"New repository"**

<div class="image-placeholder">
  <div class="image-placeholder-icon">🖼️</div>
  <div class="image-placeholder-text">
    <strong>[Screenshot: GitHub new repository button]</strong><br/>
    GitHub interface showing the "+" dropdown menu with "New repository" highlighted
  </div>
</div>

### Fill in the Details

- **Repository name**: Something descriptive (e.g., `my-portfolio`, `quiz-game`)
- **Description**: Optional, but helpful (e.g., "My personal portfolio website")
- **Public**: Select this (required for free GitHub Pages)
- **Skip** all the other options (no README, no .gitignore, no license)

Click **"Create repository"**

<div class="image-placeholder">
  <div class="image-placeholder-icon">🖼️</div>
  <div class="image-placeholder-text">
    <strong>[Screenshot: Create repository form]</strong><br/>
    GitHub create repository form with fields filled in and "Public" selected
  </div>
</div>


## Step 2: Push Your Code to GitHub (If Not Already Done)

If you followed the previous section, your code should already be on GitHub. Let's verify:

### Check GitHub Desktop

Open GitHub Desktop and check:
- **Changes tab**: Should be empty (everything committed)
- **Top of window**: Should say "No local changes" or show "Push origin" button

### If You See "Push origin"

Click the **"Push origin"** button to upload your code.

### If You Haven't Published Yet

1. Click **"Publish repository"** at the top
2. Uncheck "Keep this code private"
3. Click **"Publish repository"**

### Verify on GitHub.com

1. Open GitHub Desktop
2. Click **Repository → View on GitHub** (or press Ctrl+Shift+G / Cmd+Shift+G)
3. You should see your files in the repository!

<div class="checkpoint">
  <div class="checkpoint-title">✅ Checkpoint</div>
  <p>Your code is now on GitHub! Time to turn on GitHub Pages.</p>
</div>


## Step 3: Enable GitHub Pages

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


## Step 4: Wait for Deployment

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


## Step 5: Visit Your Live Site!

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
