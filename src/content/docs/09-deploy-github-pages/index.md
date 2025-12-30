---
title: Deploy to GitHub Pages
description: Put your project live on the internet for free
sidebar:
  order: 8
---

# Deploy to GitHub Pages

This is the moment of truth! Let's put your project on the internet where anyone can see it.

GitHub Pages is a free hosting service that turns your GitHub repository into a live website.

---

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

---

## Step 2: Connect Your Local Project to GitHub

After creating the repository, GitHub will show you some commands. We'll use the "existing repository" option.

### Set Up the Remote Connection

In your terminal (make sure you're in your project folder):

```bash
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
```

<div class="warning-box">
  <strong>⚠️ Important:</strong> Replace <code>YOUR-USERNAME</code> with your GitHub username and <code>YOUR-REPO-NAME</code> with your repository name!
</div>

### Push Your Code to GitHub

```bash
git branch -M main
git push -u origin main
```

You might be asked for your GitHub username and password.

<div class="tip-box">
  <strong>💡 Password Issues?</strong> GitHub now requires a Personal Access Token instead of your password for command line access.
  <br/><br/>
  <a href="https://github.com/settings/tokens" target="_blank">Create a token here</a> and use it as your password.
</div>

### Verify on GitHub

Refresh your GitHub repository page. You should see your files!

<div class="image-placeholder">
  <div class="image-placeholder-icon">🖼️</div>
  <div class="image-placeholder-text">
    <strong>[Screenshot: GitHub repository with files]</strong><br/>
    GitHub repository showing uploaded files: index.html, styles.css, script.js
  </div>
</div>

<div class="checkpoint">
  <div class="checkpoint-title">✅ Checkpoint</div>
  <p>Your code is now on GitHub! Time to turn on GitHub Pages.</p>
</div>

---

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

---

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

---

## Step 5: Visit Your Live Site!

Click the link or type it in your browser:

```
https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/
```

🎉 **Congratulations! Your project is live on the internet!**

---

## Updating Your Site

Whenever you make changes:

```bash
# Make your changes, then:
git add .
git commit -m "Description of changes"
git push
```

GitHub Pages will automatically update within a few minutes.

---

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

---

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

---

<div class="checkpoint">
  <div class="checkpoint-title">✅ Checkpoint</div>
  <p>Your project is LIVE on the internet! You just deployed a real website. 🎉</p>
</div>

---

## What's Next?

You've accomplished something amazing - going from zero to a deployed website!

In the next sections, we'll level up your skills by:
- Learning to use the Claude API directly
- Adding analytics to track visitors

---

<div style="display: flex; justify-content: space-between; margin-top: 2rem;">
  <a href="/ai-workshop/testing-locally/" style="padding: 0.75rem 1.5rem; border: 2px solid var(--sl-color-gray-3); color: inherit; text-decoration: none; border-radius: 8px;">
    ← Testing Locally
  </a>
  <a href="/ai-workshop/claude-api/" style="padding: 0.75rem 1.5rem; background: var(--sl-color-accent); color: white; text-decoration: none; border-radius: 8px; font-weight: 600;">
    Claude API Basics →
  </a>
</div>
