---
title: Deploy to Netlify (Optional)
description: An alternative way to deploy your project
sidebar:
  order: 1
---

# Deploy to Netlify (Optional)

GitHub Pages is great, but Netlify offers some extra features:
- Custom domains with automatic HTTPS
- Form handling without a backend
- Continuous deployment from Git
- Deploy previews for branches


## Step 1: Create a Netlify Account

1. Go to [netlify.com](https://netlify.com)
2. Click **"Sign up"**
3. Sign up with your GitHub account (easiest!)

<div class="image-placeholder">
  <div class="image-placeholder-icon">🖼️</div>
  <div class="image-placeholder-text">
    <strong>[Screenshot: Netlify signup]</strong><br/>
    Netlify homepage with "Sign up" button and GitHub login option
  </div>
</div>


## Step 2: Connect Your Repository

1. Click **"Add new site"** → **"Import an existing project"**
2. Choose **GitHub** as your Git provider
3. Authorize Netlify to access your repositories
4. Select your project repository

<div class="image-placeholder">
  <div class="image-placeholder-icon">🖼️</div>
  <div class="image-placeholder-text">
    <strong>[Screenshot: Netlify import project]</strong><br/>
    Netlify interface showing GitHub repository selection
  </div>
</div>


## Step 3: Configure Build Settings

For a simple HTML/CSS/JS project:

- **Build command:** Leave empty (or `echo "No build needed"`)
- **Publish directory:** `.` (or the folder with your index.html)

<div class="image-placeholder">
  <div class="image-placeholder-icon">🖼️</div>
  <div class="image-placeholder-text">
    <strong>[Screenshot: Netlify build settings]</strong><br/>
    Build settings form with fields for build command and publish directory
  </div>
</div>

Click **"Deploy site"**!


## Step 4: Wait for Deployment

Netlify will:
1. Clone your repository
2. Run any build commands (if specified)
3. Publish your site

<div class="checkpoint">
  <div class="checkpoint-title">✅ Checkpoint</div>
  <p>Your site should be live at something like <code>random-name-12345.netlify.app</code></p>
</div>


## Step 5: Change Your Site Name

The random URL isn't great. Let's change it:

1. Go to **Site settings** → **Site details** → **Change site name**
2. Choose something memorable (e.g., `my-portfolio`)
3. Your URL becomes: `my-portfolio.netlify.app`

<div class="image-placeholder">
  <div class="image-placeholder-icon">🖼️</div>
  <div class="image-placeholder-text">
    <strong>[Screenshot: Netlify site name settings]</strong><br/>
    Site settings page with "Change site name" option
  </div>
</div>


## Automatic Deployments

The best part: Netlify automatically redeploys whenever you push to GitHub!

```
Push to GitHub → Netlify detects changes → Site updates automatically
```

No manual steps needed after initial setup.


## Adding a Custom Domain

Want to use your own domain (like `yourname.com`)?

1. Go to **Site settings** → **Domain management**
2. Click **"Add custom domain"**
3. Enter your domain name
4. Follow the DNS configuration instructions

Netlify provides free HTTPS certificates automatically!


## Netlify Forms (Bonus Feature)

Netlify can handle form submissions without a backend!

Just add the `netlify` attribute to your form:

```html
<form name="contact" netlify>
  <label>
    Name: <input type="text" name="name">
  </label>
  <label>
    Email: <input type="email" name="email">
  </label>
  <label>
    Message: <textarea name="message"></textarea>
  </label>
  <button type="submit">Send</button>
</form>
```

Submissions appear in your Netlify dashboard!


## GitHub Pages vs Netlify

| Feature | GitHub Pages | Netlify |
|---------|--------------|---------|
| Price | Free | Free (with limits) |
| Custom domain | Yes | Yes |
| HTTPS | Yes | Yes (easier setup) |
| Form handling | No | Yes |
| Deploy previews | No | Yes |
| Build tools | Limited | Extensive |
| Ease of setup | Easier | Slightly more steps |

**Bottom line:** Both are great! GitHub Pages is simpler, Netlify has more features.


## Troubleshooting

### "Page not found" after deploy

- Check your **publish directory** is correct
- Make sure `index.html` exists in that directory
- Check for case sensitivity in filenames

### Build failing

- Check the **deploy log** for error messages
- For simple HTML sites, leave build command empty
- Make sure all file paths are correct

### Changes not appearing

- Check the **Deploys** tab to see if deployment succeeded
- Hard refresh: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
- Check that you pushed to the correct branch
