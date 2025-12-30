---
title: Testing Locally
description: Run and test your project on your own computer
sidebar:
  order: 7
---

# Testing Locally

Before sharing your project with the world, let's make sure it works properly on your own computer.

---

## What Does "Testing Locally" Mean?

"Local" means on your own computer (as opposed to "the cloud" or "online").

When you test locally:
- Only you can see it
- Changes appear instantly
- You can break things safely (no one else will see!)
- It's free - no hosting needed

---

## Method 1: Just Open the HTML File

The simplest way to view your project:

### Windows

1. Open File Explorer
2. Navigate to your project folder
3. Double-click on `index.html`

### Mac

1. Open Finder
2. Navigate to your project folder
3. Double-click on `index.html`

<div class="image-placeholder">
  <div class="image-placeholder-icon">🖼️</div>
  <div class="image-placeholder-text">
    <strong>[Screenshot: Browser showing local file]</strong><br/>
    A browser window displaying the project, with the address bar showing<br/>
    "file:///Users/yourname/my-project/index.html"
  </div>
</div>

<div class="tip-box">
  <strong>💡 Tip:</strong> The address bar will show something like <code>file:///path/to/your/file</code>. This means you're viewing a local file, not a website on the internet.
</div>

---

## Method 2: Use a Local Server (Recommended)

Some features (like loading data or using certain JavaScript) require a "real" server. Here's how to set one up:

### Using Python (Usually Pre-installed on Mac)

Open your terminal in the project folder and run:

**Python 3:**
```bash
python -m http.server 8000
```

**Python 2 (older systems):**
```bash
python -m SimpleHTTPServer 8000
```

Then open your browser and go to:
```
http://localhost:8000
```

### Using Node.js (Since You Already Have It!)

Install a simple server globally:

```bash
npm install -g serve
```

Then in your project folder:

```bash
serve
```

Open the URL it shows (usually `http://localhost:3000`).

<div class="image-placeholder">
  <div class="image-placeholder-icon">🖼️</div>
  <div class="image-placeholder-text">
    <strong>[Screenshot: Terminal running local server]</strong><br/>
    Terminal showing "serve" running with the local URL displayed
  </div>
</div>

### Using VS Code Live Server (If You Use VS Code)

1. Install the "Live Server" extension
2. Right-click on `index.html`
3. Select "Open with Live Server"

---

## Testing Checklist

Go through your project and check these things:

### Visual Checks

- [ ] Does everything appear on screen?
- [ ] Do the colors look right?
- [ ] Is text readable (not too small/large)?
- [ ] Do images load correctly?

### Interactive Checks

- [ ] Do buttons do something when clicked?
- [ ] Do links go to the right places?
- [ ] Do forms accept input?
- [ ] Do animations/effects work?

### Responsive Checks (Mobile-Friendly)

Most browsers let you simulate mobile devices:

1. Right-click anywhere on the page
2. Click **"Inspect"** or **"Inspect Element"**
3. Click the **device toggle** icon (looks like a phone/tablet)
4. Select different devices to test

<div class="image-placeholder">
  <div class="image-placeholder-icon">🖼️</div>
  <div class="image-placeholder-text">
    <strong>[Screenshot: Browser DevTools device mode]</strong><br/>
    Chrome DevTools with device toolbar visible, showing mobile preview
  </div>
</div>

---

## Found a Problem? Fix It!

When something's not right, you have options:

### Option 1: Ask Claude Code

Go back to Claude Code and describe the issue:

```text
The button on the homepage isn't centered. Can you fix it?
```

```text
When I click "Submit", nothing happens. The form should
show a success message.
```

### Option 2: Debug Yourself

Open your browser's developer tools:

- **Windows**: Press `F12` or `Ctrl + Shift + I`
- **Mac**: Press `Cmd + Option + I`

Look for red error messages in the **Console** tab. These tell you what went wrong!

<div class="image-placeholder">
  <div class="image-placeholder-icon">🖼️</div>
  <div class="image-placeholder-text">
    <strong>[Screenshot: Browser Console with error]</strong><br/>
    Chrome DevTools Console tab showing a JavaScript error in red
  </div>
</div>

---

## Common Issues and Fixes

### Images Not Loading

**Possible causes:**
- Wrong file path (check the `src` attribute)
- File is in the wrong folder
- Typo in the filename (case matters!)

**Fix:** Make sure your image path matches exactly where the file is:
```html
<!-- If image is in the same folder -->
<img src="photo.jpg" alt="Photo">

<!-- If image is in an "images" folder -->
<img src="images/photo.jpg" alt="Photo">
```

### CSS Not Applying

**Possible causes:**
- CSS file not linked in HTML
- Typo in the CSS link path
- Browser cached old version

**Fix:** Check your HTML `<head>` section:
```html
<link rel="stylesheet" href="styles.css">
```

Try hard refresh: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)

### JavaScript Not Working

**Possible causes:**
- Script file not linked
- Script loaded before HTML elements exist
- Syntax error in code

**Fix:** Check Console for errors, and make sure your script is at the bottom of the body:
```html
<body>
  <!-- Your content -->

  <script src="script.js"></script>  <!-- Put scripts at the end! -->
</body>
```

---

## Making Changes and Seeing Updates

The development cycle is:

```
┌──────────────────────────────────────────────────────┐
│                                                      │
│   1. EDIT      →  Change your code                  │
│       ↓                                              │
│   2. SAVE      →  Ctrl+S / Cmd+S                    │
│       ↓                                              │
│   3. REFRESH   →  Browser refresh (F5 or Cmd+R)     │
│       ↓                                              │
│   4. CHECK     →  See if it worked                  │
│       ↓                                              │
│   [ Repeat until happy! ]                            │
│                                                      │
└──────────────────────────────────────────────────────┘
```

---

## Save Your Work!

Once you're happy with your changes, save them with Git:

```bash
git add .
git commit -m "Fix styling issues and test locally"
```

<div class="checkpoint">
  <div class="checkpoint-title">✅ Checkpoint</div>
  <p>Your project works locally and you've saved your progress. Time to share it with the world!</p>
</div>

---

## Next Steps

Your project is looking good! Let's deploy it to GitHub Pages so anyone with the link can see it.
