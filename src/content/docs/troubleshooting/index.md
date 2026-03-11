---
title: Troubleshooting
description: Solutions to common problems you might encounter during the AI Workshop course
sidebar:
  order: 3
head:
  - tag: script
    attrs:
      type: application/ld+json
    content: |
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How do I fix 'node: command not found' or 'npm: command not found'?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Restart your terminal, then check if Node.js is installed by running 'node --version'. If not installed, follow the Install Claude Code guide to set up Node.js."
            }
          },
          {
            "@type": "Question",
            "name": "How do I fix 'claude: command not found'?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Restart your terminal first. Check the installation with 'npm list -g @anthropic-ai/claude-code'. If not found, reinstall with 'npm install -g @anthropic-ai/claude-code'."
            }
          },
          {
            "@type": "Question",
            "name": "What do I do when Claude Code is stuck or frozen?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Press Ctrl + C to cancel the current operation. Wait a moment as complex tasks can take time. If still stuck, close the terminal and restart Claude Code."
            }
          },
          {
            "@type": "Question",
            "name": "How do I change my GitHub repository from private to public?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "If you forgot to uncheck 'Keep this code private' when publishing, go to your repository on GitHub.com, then Settings, then General, scroll down to the Danger Zone and click Change repository visibility to switch from Private to Public."
            }
          },
          {
            "@type": "Question",
            "name": "How do I fix a 404 error on GitHub Pages?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Wait longer as first deployments can take 10+ minutes. Check you have an index.html in the root of your repository. Verify Pages is enabled in Repository Settings > Pages. Check the URL format: https://username.github.io/repo-name/."
            }
          },
          {
            "@type": "Question",
            "name": "Why is my GitHub Pages site not updating?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Wait 2-5 minutes as GitHub Pages caches aggressively. Try a hard refresh with Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac). Check the Actions tab to see if deployment is still running. Make sure you pushed your changes."
            }
          },
          {
            "@type": "Question",
            "name": "How do I fix a '401 Unauthorized' error with the Claude API?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Check your API key is correct with no extra spaces. Verify the key is active in your Anthropic console at console.anthropic.com. Check the environment variable is set by running 'echo $ANTHROPIC_API_KEY'."
            }
          }
        ]
      }
---

# Troubleshooting

Something not working? Don't panic! Here are solutions to common problems.


## Installation Issues

### "node: command not found" or "npm: command not found"

**Problem:** Your terminal doesn't recognize Node.js commands.

**Solutions:**

1. **Restart your terminal** - Close and reopen Command Prompt/Terminal
2. **Check if Node is installed:**
   ```bash
   node --version
   ```
3. **If not installed**, go back to the [Install Claude Code](/ai-workshop/install-claude-code/) section

### "npm ERR! permission denied" (Mac)

**Problem:** npm doesn't have permission to install globally.

**Solution:** Use sudo:
```bash
sudo npm install -g @anthropic-ai/claude-code
```
Enter your Mac password when prompted (you won't see characters as you type).

### "npm ERR! network error"

**Problem:** Can't connect to npm servers.

**Solutions:**

1. Check your internet connection
2. Try again in a few minutes (servers might be busy)
3. If behind a firewall/VPN, try disabling temporarily


## Claude Code Issues

### "claude: command not found"

**Problem:** Claude Code isn't recognized.

**Solutions:**

1. **Restart your terminal**
2. **Check installation:**
   ```bash
   npm list -g @anthropic-ai/claude-code
   ```
3. **Reinstall if needed:**
   ```bash
   npm install -g @anthropic-ai/claude-code
   ```

### Claude Code Won't Authenticate

**Problem:** Can't log in to Claude Code.

**Solutions:**

1. Make sure you have a valid Anthropic account
2. Try opening the authentication URL manually in your browser
3. Check that cookies aren't being blocked
4. Try logging out and back in:
   ```bash
   claude logout
   claude
   ```

### Claude Code is Stuck/Frozen

**Problem:** Claude Code isn't responding.

**Solutions:**

1. Press `Ctrl + C` to cancel
2. Wait a moment - complex tasks can take time
3. If still stuck, close the terminal and restart Claude Code


## GitHub Desktop Issues

### GitHub Desktop Won't Open/Install

**Problem:** Can't install or open GitHub Desktop.

**Solutions:**

- **Windows:** Make sure you're running Windows 10 or later
- **Mac:** Make sure you're running macOS 10.15 or later
- Download the latest version from [desktop.github.com](https://desktop.github.com)
- Try restarting your computer

### Can't Sign In to GitHub Desktop

**Problem:** GitHub Desktop won't accept your credentials.

**Solutions:**

1. Make sure you're using your GitHub username and password
2. Check your internet connection
3. If using two-factor authentication, you may need a personal access token:
   - Go to GitHub.com → Settings → Developer settings → Personal access tokens
   - Generate a new token with 'repo' scope
   - Use this token as your password in GitHub Desktop

### "Push Rejected" or "Can't Push"

**Problem:** GitHub Desktop says it can't push your changes.

**Solutions:**

1. Click **Repository → Pull** to get the latest changes first
2. Then try pushing again
3. If still failing, check that you have internet connection
4. Make sure you have permission to push to this repository

### No Changes Showing Up

**Problem:** You made changes but don't see them in GitHub Desktop.

**Solutions:**

1. Make sure you've saved your files in your code editor
2. Click **Repository → Refresh** in GitHub Desktop
3. Check that you're looking at the correct repository (check the name at the top)

### "Repository Not Found"

**Problem:** GitHub Desktop can't find your repository.

**Solutions:**

1. Make sure the repository exists on GitHub.com
2. Try removing and re-adding the repository:
   - Right-click the repository name
   - Select "Remove"
   - Then **File → Clone Repository** to add it back

### Can't See My Repository on GitHub

**Problem:** Pushed changes but can't see them on GitHub.com.

**Solutions:**

1. Make sure you clicked **"Push origin"** after committing
2. Check that the push completed (look for the checkmark)
3. Refresh the GitHub.com page in your browser
4. Verify you're looking at the correct repository and branch

### Repository is Private (GitHub Pages Won't Work)

**Problem:** You forgot to uncheck 'Keep this code private' when publishing, so GitHub Pages won't deploy.

**Solution:** Go to your repository on GitHub.com → **Settings** → **General** → scroll down to the **Danger Zone** → click **Change repository visibility** and switch it from Private to Public.


## Website Issues

### Page is Blank / Nothing Showing

**Possible causes:**

1. **JavaScript error** - Check browser console (F12)
2. **Wrong file path** - Check your HTML links
3. **Syntax error in HTML** - Validate at [validator.w3.org](https://validator.w3.org)

### CSS Not Loading

**Solutions:**

1. **Check the link path:**
   ```html
   <!-- If CSS is in same folder -->
   <link rel="stylesheet" href="styles.css">

   <!-- If CSS is in a css folder -->
   <link rel="stylesheet" href="css/styles.css">
   ```

2. **Hard refresh the page:** `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)

3. **Check for typos** in the filename (case matters!)

### Images Not Showing

**Solutions:**

1. **Check the image path:**
   ```html
   <!-- Same folder -->
   <img src="photo.jpg" alt="Photo">

   <!-- In images folder -->
   <img src="images/photo.jpg" alt="Photo">
   ```

2. **Check the filename** - `Photo.jpg` is different from `photo.jpg`

3. **Verify the file exists** in the right location

### JavaScript Not Working

**Solutions:**

1. **Check browser console** (F12 → Console) for red error messages

2. **Make sure script is at the end of body:**
   ```html
   <body>
     <!-- content -->
     <script src="script.js"></script>
   </body>
   ```

3. **Check for typos** in element IDs and function names


## GitHub Pages Issues

### 404 - Page Not Found

**Solutions:**

1. **Wait longer** - First deployment can take 10+ minutes
2. **Check you have `index.html`** in the root of your repository
3. **Verify Pages is enabled:**
   - Repository → Settings → Pages
   - Should show "Your site is live at..."
4. **Check the URL** - Should be `https://username.github.io/repo-name/`

### Site Not Updating

**Solutions:**

1. **Wait 2-5 minutes** - GitHub Pages caches aggressively
2. **Hard refresh:** `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
3. **Check Actions tab** for deployment status
4. **Make sure you pushed:**
   - Open GitHub Desktop
   - Look for "Push origin" button - if you see it, click it
   - Changes tab should be empty (everything committed)

### Mixed Content Error

**Problem:** Your site uses HTTPS but some resources use HTTP.

**Solution:** Change all `http://` links to `https://` in your code.


## API Issues

### "401 Unauthorized"

**Problem:** Invalid or missing API key.

**Solutions:**

1. Check your API key is correct
2. Make sure there are no extra spaces
3. Verify the key is active in your Anthropic console
4. Check environment variable is set:
   ```bash
   echo $ANTHROPIC_API_KEY
   ```

### "429 Too Many Requests"

**Problem:** You've exceeded the rate limit.

**Solutions:**

1. Wait a minute and try again
2. Add delays between requests in your code
3. Upgrade your plan if needed

### "500 Internal Server Error"

**Problem:** Something went wrong on the API side.

**Solutions:**

1. Wait a few minutes and try again
2. Check [status.anthropic.com](https://status.anthropic.com) for outages
3. If persistent, contact support


## General Tips

### When Something Goes Wrong

1. **Read the error message** - It often tells you exactly what's wrong
2. **Google the error** - Someone else has probably had the same problem
3. **Check the browser console** - F12 → Console tab
4. **Ask Claude Code** - Paste the error and ask for help
5. **Start small** - Undo recent changes and add them back one at a time

### Prevention

- **Save often** with Git commits
- **Test frequently** as you make changes
- **Keep backups** of working versions


## Still Stuck?

1. **Ask Claude Code** - Describe your problem in detail
2. **Check documentation:**
   - [Claude Code Docs](https://docs.anthropic.com/claude-code)
   - [GitHub Docs](https://docs.github.com)
   - [MDN Web Docs](https://developer.mozilla.org)
3. **Take a break** - Sometimes stepping away helps!
4. **Ask a friend** - Fresh eyes often spot the problem


<div class="tip-box">
  <strong>💡 Remember:</strong> Making mistakes is part of learning. Every experienced developer has seen these errors hundreds of times!
</div>
