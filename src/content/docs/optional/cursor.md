---
title: Using Cursor (Alternative)
description: An AI-powered code editor when you hit Claude Code limits
sidebar:
  order: 2
---

Hit your Claude Code session limit? No worries! **Cursor** is an excellent alternative that works similarly but with a visual interface.

---

## What is Cursor?

Cursor is an **AI-powered code editor** built on top of VS Code. Instead of typing in a terminal like Claude Code, you get a full visual editor where you can:

- Chat with AI in a sidebar
- Highlight code and ask AI to modify it
- Generate entire files with natural language
- Get inline code suggestions as you type

<div class="image-placeholder">
  <div class="image-placeholder-icon">🖼️</div>
  <div class="image-placeholder-text">
    <strong>[Screenshot: Cursor editor interface]</strong><br/>
    The Cursor IDE showing the code editor on the left and AI chat on the right
  </div>
</div>


## Why Use Cursor?

| Feature | Claude Code | Cursor |
|---------|-------------|--------|
| Interface | Terminal (command line) | Visual editor (like VS Code) |
| Learning curve | Steeper for beginners | More familiar if you've used any editor |
| Session limits | Yes (on free tier) | Generous free tier |
| Code editing | Creates/modifies files | Edit + AI suggestions inline |
| Best for | Quick projects, automation | Longer coding sessions |


## Installing Cursor

### Step 1: Download Cursor

Go to [cursor.com](https://cursor.com) and download the installer for your operating system.

<div class="image-placeholder">
  <div class="image-placeholder-icon">🖼️</div>
  <div class="image-placeholder-text">
    <strong>[Screenshot: Cursor download page]</strong><br/>
    The Cursor website with download buttons for Mac, Windows, and Linux
  </div>
</div>

### Step 2: Install and Open

- **Mac**: Open the `.dmg` file and drag Cursor to Applications
- **Windows**: Run the installer and follow the prompts

### Step 3: Sign In

Open Cursor and create a free account (or sign in with GitHub/Google).

<div class="checkpoint">
  <div class="checkpoint-title">✅ Checkpoint</div>
  <p>You should now see the Cursor editor with a welcome screen.</p>
</div>


## Opening Your Project in Cursor

1. Click **File → Open Folder** (or `Cmd/Ctrl + O`)
2. Navigate to your project folder
3. Click **Open**

You'll see your project files in the sidebar on the left.


## Using AI in Cursor

### Method 1: Chat Panel

Press `Cmd + L` (Mac) or `Ctrl + L` (Windows) to open the AI chat.

Type your request just like you would in Claude Code:

```text
Create a simple landing page with a header, hero section,
and three feature cards. Use modern CSS with flexbox.
```

<div class="image-placeholder">
  <div class="image-placeholder-icon">🖼️</div>
  <div class="image-placeholder-text">
    <strong>[Screenshot: Cursor chat panel]</strong><br/>
    The AI chat sidebar with a conversation about creating a landing page
  </div>
</div>

### Method 2: Inline Editing (Cmd/Ctrl + K)

1. Select some code (or place your cursor where you want changes)
2. Press `Cmd + K` (Mac) or `Ctrl + K` (Windows)
3. Type what you want to change

```text
Add a hover effect to this button that scales it up slightly
```

Cursor will show you a preview of the changes. Press **Enter** to accept.

### Method 3: Tab Autocomplete

As you type code, Cursor suggests completions. Press **Tab** to accept them.


## Cursor Shortcuts Cheat Sheet

| Shortcut | Action |
|----------|--------|
| `Cmd/Ctrl + L` | Open AI chat panel |
| `Cmd/Ctrl + K` | Inline AI edit |
| `Cmd/Ctrl + Shift + L` | Add selection to chat |
| `Tab` | Accept AI suggestion |
| `Esc` | Dismiss suggestion |
| `Cmd/Ctrl + S` | Save file |
| `Cmd/Ctrl + P` | Quick file search |


## Example: Building the Same Project

Let's recreate what we'd do in Claude Code, but in Cursor:

### 1. Create a New File

Right-click in the sidebar → **New File** → name it `index.html`

### 2. Use AI to Generate Content

With the empty file open, press `Cmd/Ctrl + K` and type:

```text
Create a personal portfolio page with:
- Hero section with name and tagline
- About section
- Skills section with 4 cards
- Contact section
Use modern CSS, include it in a style tag
```

### 3. Preview Your Work

- Right-click on `index.html` → **Open with Live Server** (if you have the extension)
- Or just double-click the file to open it in your browser

### 4. Make Changes

Want to tweak something? Select the code, press `Cmd/Ctrl + K`:

```text
Change the color scheme to blue and white
```


## Cursor vs Claude Code: When to Use Which

### Use Claude Code when:
- You want the fastest path from idea to code
- You're comfortable with the terminal
- You need quick automation or scripting
- You're doing a quick prototype

### Use Cursor when:
- You hit your Claude Code session limit
- You prefer a visual interface
- You want to edit code manually alongside AI
- You're doing longer coding sessions
- You want inline suggestions as you type


## Tips for Cursor Success

<div class="tip-box">
  <strong>💡 Cursor Tips:</strong>
  <ul style="margin: 0.5rem 0 0 0; padding-left: 1.5rem;">
    <li><strong>Be specific</strong> in your prompts, just like with Claude Code</li>
    <li><strong>Use Cmd/Ctrl + K</strong> for quick inline changes</li>
    <li><strong>Select context</strong> - highlight relevant code before asking AI to modify it</li>
    <li><strong>Save often</strong> - Cmd/Ctrl + S after accepting AI changes</li>
    <li><strong>Use chat</strong> for bigger tasks, inline edit for small tweaks</li>
  </ul>
</div>


## Switching Between Tools

You can use both tools on the same project! Your files are just files on your computer.

1. Start a project with Claude Code
2. Hit a session limit
3. Open the same folder in Cursor
4. Continue where you left off
5. Go back to Claude Code later when limits reset


<div class="checkpoint">
  <div class="checkpoint-title">✅ Checkpoint</div>
  <p>You now have a backup option when Claude Code isn't available. Keep building!</p>
</div>


<div style="display: flex; justify-content: space-between; margin-top: 2rem;">
  <a href="/ai-workshop/optional/netlify/" style="padding: 0.75rem 1.5rem; border: 2px solid var(--sl-color-gray-3); color: inherit; text-decoration: none; border-radius: 8px;">
    ← Netlify Deploy
  </a>
  <a href="/ai-workshop/reference/cheat-sheet/" style="padding: 0.75rem 1.5rem; background: var(--sl-color-accent); color: white; text-decoration: none; border-radius: 8px; font-weight: 600;">
    Cheat Sheet →
  </a>
</div>
