---
title: Installing Claude Code
description: Get Claude Code running on your computer
sidebar:
  order: 3
---


Next - let's install Claude Code on your computer. You can also use Claude Code on the web, but I've found it easier to have Claude Code on desktop. 

## Prerequisites: Installing Node.js

Claude Code is built using Node.js, so we need to install that first. Think of Node.js as the "engine" that powers Claude Code.

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


## Mac Installation

### Step 1: Download Node.js

1. Open your browser and go to **[nodejs.org](https://nodejs.org)**
2. Click the **LTS** (Long Term Support) version - this is the stable one

<div class="image-placeholder">
  <div class="image-placeholder-icon">🖼️</div>
  <div class="image-placeholder-text">
    <strong>[Screenshot: Node.js website]</strong><br/>
    The Node.js homepage showing two download buttons - LTS and Current.<br/>
    Arrow pointing to the LTS button for macOS.
  </div>
</div>

### Step 2: Run the Installer

1. Open the downloaded `.pkg` file (usually in your Downloads folder)
2. Click **"Continue"** through the installer
3. Accept the license agreement
4. Keep the default installation location
5. Click **"Install"** and enter your Mac password when prompted

<div class="image-placeholder">
  <div class="image-placeholder-icon">🖼️</div>
  <div class="image-placeholder-text">
    <strong>[Screenshot: Node.js installer on Mac]</strong><br/>
    The installation wizard with default options selected
  </div>
</div>

### Step 3: Verify Installation

1. Press `Cmd + Space` to open Spotlight
2. Type `Terminal` and press Enter to open Terminal
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

Now let's install Claude Code! In the same Terminal window, type:

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

## Opening Your Terminal

Before we test Claude Code, you need to know how to open the terminal on your system.

### Windows

1. Press `Win + R` to open the Run dialog
2. Type `cmd` and press Enter
3. The Command Prompt window will open

### Mac

1. Press `Cmd + Space` to open Spotlight
2. Type `Terminal` and press Enter
3. The Terminal window will open

<div class="tip-box">
  <strong>💡 Terminal Reference:</strong> For more terminal commands and tips, check out the <a href="/ai-workshop/reference/cheat-sheet/#terminal--command-line">Terminal section of our Cheat Sheet</a>.
</div>


## Your First Claude Code Command

Let's make sure Claude Code is working! In your terminal:

```bash
claude --version
```

You should see the Claude Code version number.

Now let's start Claude Code:

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
2. Log in with your Anthropic account (or create one if you don't have one)
3. Authorize Claude Code to access your account
4. Return to your terminal - you should now be authenticated!

<div class="checkpoint">
  <div class="checkpoint-title">✅ Checkpoint</div>
  <p>You should now see the Claude Code interface ready for your commands! You can type <code>/exit</code> or press <code>Ctrl+C</code> to exit.</p>
</div>

---

## Troubleshooting

### "command not found: claude" (Mac)

Close Terminal completely and reopen it. The installation needs a fresh window to work.

If that doesn't work, try:
```bash
source ~/.zshrc
```

### "npm is not recognized" (Windows)

Close Command Prompt completely and reopen it. The installation needs a fresh window to work.

### Permission Errors (Mac)

If you see permission errors during installation, you might need to prefix the install command with `sudo`:
```bash
sudo npm install -g @anthropic-ai/claude-code
```

You'll be asked for your Mac password. Type it (it won't show characters) and press Enter.


## Next Steps

Claude Code is installed and ready to go! Next, you'll choose a project to build with Claude Code.
