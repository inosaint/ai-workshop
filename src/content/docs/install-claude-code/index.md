---
title: Installing Claude Code
description: Get Claude Code running on your computer
sidebar:
  order: 3
---

# Installing Claude Code

Now for the exciting part - let's install Claude Code on your computer!

Don't worry, we'll go step by step. Choose your operating system below.

---

## Prerequisites: Installing Node.js

Claude Code is built using Node.js, so we need to install that first. Think of Node.js as the "engine" that powers Claude Code.

---

## Windows Installation

### Step 1: Download Node.js

1. Open your browser and go to **[nodejs.org](https://nodejs.org)**
2. Click the **LTS** (Long Term Support) version - this is the stable one

<div class="image-placeholder">
  <div class="image-placeholder-icon">🖼️</div>
  <div class="image-placeholder-text">
    <strong>[Screenshot: Node.js website]</strong><br/>
    The Node.js homepage showing two download buttons - LTS and Current.<br/>
    Arrow pointing to the LTS button.
  </div>
</div>

### Step 2: Run the Installer

1. Open the downloaded file (usually in your Downloads folder)
2. Click **"Next"** through the installer
3. Accept the license agreement
4. Keep the default installation location
5. Click **"Next"** and then **"Install"**

<div class="image-placeholder">
  <div class="image-placeholder-icon">🖼️</div>
  <div class="image-placeholder-text">
    <strong>[Screenshot: Node.js installer on Windows]</strong><br/>
    The installation wizard with default options selected
  </div>
</div>

<div class="warning-box">
  <strong>⚠️ Important:</strong> When asked about "Tools for Native Modules", you can uncheck this option. We don't need it for this workshop.
</div>

### Step 3: Verify Installation

1. Press `Windows + R` to open the Run dialog
2. Type `cmd` and press Enter to open Command Prompt
3. Type the following and press Enter:

```bash
node --version
```

You should see something like `v20.x.x` (the exact numbers may differ).

4. Now check npm (Node Package Manager):

```bash
npm --version
```

You should see a version number like `10.x.x`.

<div class="checkpoint">
  <div class="checkpoint-title">✅ Checkpoint</div>
  <p>If you see version numbers for both commands, Node.js is installed correctly!</p>
</div>

### Step 4: Install Claude Code

Now let's install Claude Code! In the same Command Prompt window, type:

```bash
npm install -g @anthropic-ai/claude-code
```

Wait for the installation to complete. You'll see a progress bar and some text.

<div class="tip-box">
  <strong>💡 What does this command mean?</strong><br/>
  <code>npm install</code> = Install a package<br/>
  <code>-g</code> = Globally (available everywhere on your computer)<br/>
  <code>@anthropic-ai/claude-code</code> = The name of the Claude Code package
</div>

### Step 5: Verify Claude Code Installation

```bash
claude --version
```

You should see the Claude Code version number.

---

## Mac Installation

### Step 1: Open Terminal

1. Press `Cmd + Space` to open Spotlight
2. Type `Terminal` and press Enter

<div class="image-placeholder">
  <div class="image-placeholder-icon">🖼️</div>
  <div class="image-placeholder-text">
    <strong>[Screenshot: Mac Spotlight with Terminal]</strong><br/>
    Spotlight search showing Terminal application
  </div>
</div>

### Step 2: Install Homebrew (Package Manager)

Homebrew is like an app store for your Terminal. Paste this command and press Enter:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

<div class="warning-box">
  <strong>⚠️ Note:</strong> This might take a few minutes. You may be asked to enter your Mac password.
</div>

When Homebrew finishes installing, it will show you some "Next steps" - follow those instructions to add Homebrew to your path.

### Step 3: Install Node.js via Homebrew

```bash
brew install node
```

### Step 4: Verify Node.js Installation

```bash
node --version
npm --version
```

Both commands should show version numbers.

<div class="checkpoint">
  <div class="checkpoint-title">✅ Checkpoint</div>
  <p>If you see version numbers, Node.js is installed!</p>
</div>

### Step 5: Install Claude Code

```bash
npm install -g @anthropic-ai/claude-code
```

### Step 6: Verify Claude Code Installation

```bash
claude --version
```

---

## Your First Claude Code Command

Let's make sure Claude Code is working! In your terminal (Command Prompt on Windows, Terminal on Mac):

```bash
claude
```

This will launch Claude Code. The first time you run it, you'll need to authenticate.

<div class="image-placeholder">
  <div class="image-placeholder-icon">🖼️</div>
  <div class="image-placeholder-text">
    <strong>[Screenshot: Claude Code first run]</strong><br/>
    The Claude Code CLI interface showing the authentication prompt
  </div>
</div>

### Authenticating Claude Code

1. Claude Code will provide a URL or open your browser automatically
2. Log in with your Anthropic account (or create one)
3. Authorize Claude Code to access your account
4. Return to your terminal - you should now be authenticated!

<div class="checkpoint">
  <div class="checkpoint-title">✅ Checkpoint</div>
  <p>You should now see the Claude Code interface ready for your commands!</p>
</div>

---

## Troubleshooting

### "command not found: claude" (Mac)

Try closing and reopening Terminal, then run:
```bash
source ~/.zshrc
```

### "npm is not recognized" (Windows)

Close Command Prompt completely and reopen it. The installation needs a fresh window to work.

### Permission Errors

On Mac, you might need to prefix the install command with `sudo`:
```bash
sudo npm install -g @anthropic-ai/claude-code
```

You'll be asked for your password. Type it (it won't show characters) and press Enter.

---

## Next Steps

Claude Code is installed and ready to go! Before we start building, let's learn the basics of Git - the tool that helps us save and share our code.

---

<div style="display: flex; justify-content: space-between; margin-top: 2rem;">
  <a href="/ai-workshop/github-setup/" style="padding: 0.75rem 1.5rem; border: 2px solid var(--sl-color-gray-3); color: inherit; text-decoration: none; border-radius: 8px;">
    ← GitHub Setup
  </a>
  <a href="/ai-workshop/git-basics/" style="padding: 0.75rem 1.5rem; background: var(--sl-color-accent); color: white; text-decoration: none; border-radius: 8px; font-weight: 600;">
    Git Basics →
  </a>
</div>
