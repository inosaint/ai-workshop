---
title: Git Basics
description: Understanding Git with GitHub Desktop - no command line needed!
sidebar:
  hidden: true
  order: 4
---

# Git Basics

Git might sound intimidating, but with GitHub Desktop, it's as easy as clicking buttons! Let's break it down.


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


## Git vs GitHub: What's the Difference?

| Git | GitHub |
|-----|--------|
| Software on your computer | Website on the internet |
| Tracks changes locally | Stores your code in the cloud |
| Free and open source | Free (public and private projects) |
| Works offline | Requires internet |

**Analogy**: Git is like Microsoft Word's "Track Changes." GitHub is like OneDrive where you store and share your documents.


## What is GitHub Desktop?

**GitHub Desktop is a friendly app that makes Git easy - no typing commands required!**

Instead of memorizing commands, you'll use buttons and visual tools. It's perfect for beginners and makes version control as simple as clicking "Save."


## Download and Install GitHub Desktop

### Step 1: Download

Go to [desktop.github.com](https://desktop.github.com) and download GitHub Desktop for your operating system (Windows or Mac).

### Step 2: Install

- **Windows**: Run the downloaded `.exe` file
- **Mac**: Drag GitHub Desktop to your Applications folder

### Step 3: Sign In

Open GitHub Desktop and sign in with your GitHub account credentials.


## How GitHub Desktop Works

Here's the workflow you'll use with GitHub Desktop:

```
┌─────────────────────────────────────────────────────────────┐
│                  GITHUB DESKTOP WORKFLOW                    │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   1. MAKE CHANGES     →    Edit your files normally        │
│         ↓                                                   │
│   2. SEE CHANGES      →    View in "Changes" tab          │
│         ↓                                                   │
│   3. WRITE MESSAGE    →    Describe what you changed       │
│         ↓                                                   │
│   4. COMMIT           →    Click "Commit" button           │
│         ↓                                                   │
│   5. PUSH            →    Click "Push origin"              │
│                                                             │
│   [ Repeat as needed! ]                                     │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```


## Key GitHub Desktop Features

### 1. The Changes Tab

This shows all files you've modified. You'll see:
- **Green** lines = added content
- **Red** lines = removed content
- **Checkboxes** = select which changes to save

**Analogy**: Like a "before and after" comparison.


### 2. Commit to Main

At the bottom left, you'll see:
- **Summary** field: Brief description of changes (required)
- **Description** field: More details (optional)
- **Commit** button: Saves your changes locally

<div class="tip-box">
  <strong>💡 Good commit messages:</strong><br/>
  ✅ "Add contact form to homepage"<br/>
  ✅ "Fix broken image links"<br/>
  ✅ "Update colors to match brand"<br/><br/>
  ❌ "Fixed stuff"<br/>
  ❌ "asdfasdf"<br/>
  ❌ "Changes"
</div>


### 3. Push Origin

After committing, you'll see a "Push origin" button at the top. This uploads your changes to GitHub (the cloud).

**Analogy**: Like uploading your Word document to OneDrive.


### 4. Fetch Origin / Pull Origin

These buttons download the latest changes from GitHub to your computer.

**Analogy**: Like syncing to get the latest version from the cloud.


## Creating Your First Repository

Let's practice creating a repository (project folder) with GitHub Desktop:

### Step 1: Click "New Repository"

In GitHub Desktop, click **File → New Repository** (or Ctrl+N / Cmd+N).

### Step 2: Fill in the Details

- **Name**: `my-first-project`
- **Description**: Practice repository for learning Git
- **Local Path**: Where on your computer to save it
- **Initialize with a README**: Check this box

### Step 3: Create Repository

Click **"Create Repository"** button.

🎉 You just created your first Git repository!


## Publishing to GitHub

Right now, your repository only exists on your computer. Let's put it on GitHub:

### Step 1: Click "Publish repository"

You'll see a blue button at the top that says "Publish repository".

### Step 2: Choose Settings

- **Name**: Keep it as `my-first-project`
- **Description**: Optional
- **Keep this code private**: Uncheck this (we want it public for GitHub Pages)

### Step 3: Publish

Click the **"Publish repository"** button.

Your code is now backed up on GitHub! 🎊


## Making and Saving Changes

Let's practice the full workflow:

### Step 1: Make a Change

Create a new file called `index.html` in your project folder with this content:

```html
<!DOCTYPE html>
<html>
<head>
    <title>My First Page</title>
</head>
<body>
    <h1>Hello, World!</h1>
</body>
</html>
```

### Step 2: See the Change in GitHub Desktop

Switch to GitHub Desktop. You'll see `index.html` listed in the "Changes" tab.

### Step 3: Review the Change

Click on `index.html` to see what you added. Green lines show new content.

### Step 4: Commit the Change

1. Make sure the checkbox next to `index.html` is checked
2. In the "Summary" field, type: `Add index.html with hello world`
3. Click the **"Commit to main"** button

### Step 5: Push to GitHub

Click the **"Push origin"** button at the top.

Done! Your changes are now on GitHub.


## Common Tasks in GitHub Desktop

### Opening Your Project in VS Code

Right-click your repository name → **Open in Visual Studio Code**

(Or your preferred editor)


### Viewing Your Repository on GitHub

Click **Repository → View on GitHub** (or Ctrl+Shift+G / Cmd+Shift+G)


### Discarding Changes

If you want to undo changes to a file:
1. Right-click the file in the Changes tab
2. Select **Discard changes...**
3. Confirm


### Seeing Your History

Click the **"History"** tab to see all your past commits. Click any commit to see what changed.


## Understanding Branches (Optional)

Branches let you work on new features without affecting your main code. For this workshop, we'll stick with the "main" branch, but it's good to know they exist!


## Don't Worry About Mistakes

Here's a secret: **Git makes it really hard to permanently lose your work.**

Everything is saved, and you can always go back. If something goes wrong, check the History tab - your previous versions are all there!


## Next Steps

You now understand Git basics using GitHub Desktop! No command line needed - just clicks and buttons.

<div class="checkpoint">
  <div class="checkpoint-title">✅ Checkpoint</div>
  <p>You have GitHub Desktop installed and understand the commit → push workflow. Time to build your project!</p>
</div>
