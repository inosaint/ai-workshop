---
title: Installing Claude Code
description: Get Claude Code running on your computer
sidebar:
  order: 3
---

# Installing Claude Code

Next - let's install Claude Code on your computer. We'll be using the Claude Code desktop app, which includes everything you need to start building.

## Download Claude Code

### Windows

1. Go to **[claude.ai/download](https://claude.ai/download)** (or the official Claude Code download page)
2. Click **"Download for Windows"**
3. The installer will download (usually to your Downloads folder)

### Mac

1. Go to **[claude.ai/download](https://claude.ai/download)** (or the official Claude Code download page)
2. Click **"Download for Mac"**
3. The installer will download (usually to your Downloads folder)

<div class="image-placeholder">
  <div class="image-placeholder-icon">🖼️</div>
  <div class="image-placeholder-text">
    <strong>[Screenshot: Claude Code download page]</strong><br/>
    The download page showing Windows and Mac download buttons
  </div>
</div>


## Install Claude Code

### Windows

1. Open the downloaded file from your Downloads folder
2. Follow the installation wizard
3. Click **"Install"** and wait for the installation to complete
4. Click **"Finish"** when done

<div class="image-placeholder">
  <div class="image-placeholder-icon">🖼️</div>
  <div class="image-placeholder-text">
    <strong>[Screenshot: Claude Code Windows installer]</strong><br/>
    The installation wizard showing the install button
  </div>
</div>

### Mac

1. Open the downloaded `.dmg` file from your Downloads folder
2. Drag the **Claude Code** app to your **Applications** folder
3. Open **Applications** and double-click **Claude Code**
4. If you see a security warning, click **"Open"** to confirm

<div class="image-placeholder">
  <div class="image-placeholder-icon">🖼️</div>
  <div class="image-placeholder-text">
    <strong>[Screenshot: Claude Code Mac installation]</strong><br/>
    The DMG window showing the drag-to-Applications process
  </div>
</div>

<div class="checkpoint">
  <div class="checkpoint-title">✅ Checkpoint</div>
  <p>Claude Code is now installed on your computer!</p>
</div>

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

### Can't find Claude Code after installation (Mac)

Check your **Applications** folder. If Claude Code is there but won't open, right-click it and select **"Open"** to bypass the security warning.

### Installation stuck or won't complete (Windows)

Try running the installer as Administrator:
1. Right-click the installer file
2. Select **"Run as administrator"**
3. Follow the installation steps again

### "App is damaged" message (Mac)

This can happen with downloaded apps. Try:
1. Open **Terminal**
2. Run: `xattr -cr /Applications/Claude\ Code.app`
3. Try opening Claude Code again


## Next Steps

Claude Code is installed and ready to go! Next, you'll choose a project to build with Claude Code.
