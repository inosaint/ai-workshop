---
title: Git Basics
description: Essential Git commands explained in plain English
sidebar:
  order: 4
---

# Git Basics

Git might sound intimidating, but it's actually quite simple once you understand what it does. Let's break it down!

---

## What is Git?

**Git is a time machine for your code.**

Remember when you'd save files like:
- `essay_final.doc`
- `essay_final_v2.doc`
- `essay_FINAL_FINAL.doc`
- `essay_FINAL_FINAL_actually_final.doc`

Git solves this problem elegantly. Instead of creating copies, Git tracks every change you make. You can:
- Go back to any previous version
- See what changed and when
- Work with others without overwriting each other's work

---

## Git vs GitHub: What's the Difference?

| Git | GitHub |
|-----|--------|
| Software on your computer | Website on the internet |
| Tracks changes locally | Stores your code in the cloud |
| Free and open source | Free for public projects |
| Works offline | Requires internet |

**Analogy**: Git is like Microsoft Word's "Track Changes." GitHub is like OneDrive where you store and share your documents.

---

## Essential Git Commands

Here are the only commands you need for this workshop. We'll use them together, so you don't need to memorize them!

### 1. `git clone` - Copy a Project

This downloads a project from GitHub to your computer.

```bash
git clone https://github.com/username/project-name.git
```

**Analogy**: Like downloading a Google Doc to edit offline.

<div class="image-placeholder">
  <div class="image-placeholder-icon">🖼️</div>
  <div class="image-placeholder-text">
    <strong>[Diagram: git clone visualization]</strong><br/>
    Shows GitHub cloud → arrow → Local computer folder<br/>
    "GitHub repository" → "Your computer"
  </div>
</div>

---

### 2. `git status` - Check What's Changed

See which files you've modified.

```bash
git status
```

**Analogy**: Like asking "what have I changed since I last saved?"

You'll see output like:
```
Changes not staged for commit:
  modified:   index.html
  modified:   style.css
```

---

### 3. `git add` - Prepare Changes for Saving

Tell Git which changes you want to save.

```bash
# Add a specific file
git add index.html

# Add all changed files
git add .
```

**Analogy**: Like selecting which files to include in an email attachment.

---

### 4. `git commit` - Save Your Changes

Create a snapshot of your work with a message describing what you did.

```bash
git commit -m "Add homepage layout and styling"
```

**Analogy**: Like hitting "Save As" with a note explaining what this version contains.

<div class="tip-box">
  <strong>💡 Good commit messages:</strong><br/>
  ✅ "Add contact form to homepage"<br/>
  ✅ "Fix broken image links"<br/>
  ✅ "Update colors to match brand"<br/><br/>
  ❌ "Fixed stuff"<br/>
  ❌ "asdfasdf"<br/>
  ❌ "Changes"
</div>

---

### 5. `git push` - Upload to GitHub

Send your saved changes to GitHub so they're backed up in the cloud.

```bash
git push
```

**Analogy**: Like uploading your Word document to OneDrive.

<div class="image-placeholder">
  <div class="image-placeholder-icon">🖼️</div>
  <div class="image-placeholder-text">
    <strong>[Diagram: git push visualization]</strong><br/>
    Shows Local computer folder → arrow → GitHub cloud<br/>
    "Your computer" → "GitHub repository"
  </div>
</div>

---

### 6. `git pull` - Download Latest Changes

Get the newest version from GitHub (useful when working with others).

```bash
git pull
```

**Analogy**: Like syncing to get the latest version from the cloud.

---

## The Git Workflow

Here's the typical flow you'll use:

```
┌─────────────────────────────────────────────────────────────┐
│                      THE GIT WORKFLOW                       │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   1. MAKE CHANGES     →    Edit your files normally        │
│         ↓                                                   │
│   2. git status       →    See what changed                │
│         ↓                                                   │
│   3. git add .        →    Stage your changes              │
│         ↓                                                   │
│   4. git commit -m    →    Save with a message             │
│         ↓                                                   │
│   5. git push         →    Upload to GitHub                │
│                                                             │
│   [ Repeat as needed! ]                                     │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Setting Up Git (First-Time Only)

If this is your first time using Git, you need to tell it who you are. This only needs to be done once.

Open your terminal and run these commands, replacing with your info:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

<div class="warning-box">
  <strong>⚠️ Important:</strong> Use the same email you used for GitHub!
</div>

---

## Connecting to GitHub (SSH vs HTTPS)

When you push code to GitHub, it needs to verify it's really you. There are two ways:

### Option 1: HTTPS (Easier, Recommended for Beginners)

GitHub will ask for your username and password (or a personal access token). We'll set this up when needed.

### Option 2: SSH (More Advanced)

Uses cryptographic keys. We won't cover this in the workshop, but it's great for the future!

---

## Common Git Situations

### "I made a mistake in my last commit message!"

```bash
git commit --amend -m "New, better message"
```

### "I want to undo my changes to a file"

```bash
git checkout -- filename.html
```

### "I'm confused about what state my project is in"

```bash
git status
```

Always run `git status` when in doubt. It tells you exactly what's happening!

---

## Don't Worry About Memorizing

Here's a secret: **you don't need to memorize these commands.**

Claude Code will help you with Git! You can simply tell it:

> "Save my changes and push to GitHub"

And Claude Code will run the right commands for you. How cool is that?

---

## Practice Time! (Optional)

Try these in your terminal:

1. Create a new folder:
```bash
mkdir my-practice-folder
cd my-practice-folder
```

2. Initialize Git in this folder:
```bash
git init
```

3. Check the status:
```bash
git status
```

You should see something like "On branch main" and "nothing to commit."

---

## Next Steps

You now understand the basics of Git! Let's put this knowledge to use by choosing and building your project.

<div class="checkpoint">
  <div class="checkpoint-title">✅ Checkpoint</div>
  <p>You understand what Git is and know the basic commands. Don't worry about memorizing them - Claude Code will help!</p>
</div>
