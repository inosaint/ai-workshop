---
title: Troubleshooting
description: Solutions to common problems you might encounter
sidebar:
  order: 3
---

# Troubleshooting

Something not working? Don't panic! Here are solutions to common problems.

---

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

---

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

---

## Git Issues

### "git: command not found"

**Problem:** Git isn't installed.

**Solutions:**

- **Windows:** Download from [git-scm.com](https://git-scm.com)
- **Mac:**
  ```bash
  xcode-select --install
  ```
  or
  ```bash
  brew install git
  ```

### "fatal: not a git repository"

**Problem:** You're not in a Git-initialized folder.

**Solution:**
```bash
git init
```

### "error: failed to push some refs"

**Problem:** Your local copy is behind the remote.

**Solution:**
```bash
git pull --rebase
git push
```

### "Permission denied (publickey)"

**Problem:** GitHub doesn't recognize you.

**Solutions:**

1. **Use HTTPS instead of SSH:**
   ```bash
   git remote set-url origin https://github.com/USERNAME/REPO.git
   ```
2. **Create a Personal Access Token:**
   - Go to GitHub → Settings → Developer settings → Personal access tokens
   - Generate new token with 'repo' scope
   - Use this as your password when pushing

### "Username for 'https://github.com':" keeps appearing

**Problem:** Git doesn't remember your credentials.

**Solution (store credentials):**
```bash
git config --global credential.helper store
```
Then push once - it will save your credentials for next time.

---

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

---

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
   ```bash
   git status  # Should say "nothing to commit"
   git push    # Push any pending changes
   ```

### Mixed Content Error

**Problem:** Your site uses HTTPS but some resources use HTTP.

**Solution:** Change all `http://` links to `https://` in your code.

---

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

---

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

---

## Still Stuck?

1. **Ask Claude Code** - Describe your problem in detail
2. **Check documentation:**
   - [Claude Code Docs](https://docs.anthropic.com/claude-code)
   - [GitHub Docs](https://docs.github.com)
   - [MDN Web Docs](https://developer.mozilla.org)
3. **Take a break** - Sometimes stepping away helps!
4. **Ask a friend** - Fresh eyes often spot the problem

---

<div class="tip-box">
  <strong>💡 Remember:</strong> Making mistakes is part of learning. Every experienced developer has seen these errors hundreds of times!
</div>

---

<div style="display: flex; justify-content: space-between; margin-top: 2rem;">
  <a href="/ai-workshop/reference/glossary/" style="padding: 0.75rem 1.5rem; border: 2px solid var(--sl-color-gray-3); color: inherit; text-decoration: none; border-radius: 8px;">
    ← Glossary
  </a>
  <a href="/ai-workshop/" style="padding: 0.75rem 1.5rem; background: var(--sl-color-accent); color: white; text-decoration: none; border-radius: 8px; font-weight: 600;">
    Back to Start →
  </a>
</div>
