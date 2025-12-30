---
title: Cheat Sheet
description: Quick reference for all the commands you learned
sidebar:
  order: 1
---

# Cheat Sheet

Keep this page bookmarked! Here's a quick reference for everything you learned.


## Terminal / Command Line

### Navigation

| Command | What It Does | Example |
|---------|--------------|---------|
| `cd folder` | Go into a folder | `cd my-project` |
| `cd ..` | Go up one folder | `cd ..` |
| `pwd` (Mac) / `cd` (Win) | Show current location | `pwd` |
| `ls` (Mac) / `dir` (Win) | List files | `ls` |
| `mkdir name` | Create a folder | `mkdir my-project` |

### Opening Terminal

- **Windows**: `Win + R`, type `cmd`, press Enter
- **Mac**: `Cmd + Space`, type `Terminal`, press Enter


## Git Commands

### Starting Out

```bash
# Initialize Git in a folder
git init

# Clone a repository
git clone https://github.com/user/repo.git

# Configure your identity (first time only)
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

### Daily Workflow

```bash
# Check what's changed
git status

# Stage all changes
git add .

# Stage specific file
git add filename.html

# Commit with message
git commit -m "Your message here"

# Push to GitHub
git push

# Pull latest changes
git pull
```

### Connecting to GitHub

```bash
# Add remote repository
git remote add origin https://github.com/user/repo.git

# Push and set upstream
git push -u origin main
```


## Claude Code

### Basic Commands

```bash
# Start Claude Code
claude

# Exit Claude Code
exit
# or press Ctrl+C
```

### Inside Claude Code

| Command | What It Does |
|---------|--------------|
| `/help` | Show available commands |
| `/clear` | Clear conversation |
| Type normally | Chat with Claude |

### Useful Prompts

```text
# Create a project
Create a [type] website with [features]

# Fix something
The [feature] isn't working. Can you check why?

# Explain something
Can you explain what [code/concept] does?

# Change something
Can you change [feature] to [new behavior]?
```


## Node.js / npm

```bash
# Check Node version
node --version

# Check npm version
npm --version

# Install a package globally
npm install -g package-name

# Install project dependencies
npm install

# Run a script from package.json
npm run scriptname

# Start a local server
npx serve
# or
npm install -g serve && serve
```


## Local Testing

### Python Server

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Then open: http://localhost:8000
```

### Node Server

```bash
npx serve
# or
npm install -g serve && serve
```

### Browser Developer Tools

- **Windows**: `F12` or `Ctrl + Shift + I`
- **Mac**: `Cmd + Option + I`

### Hard Refresh (Clear Cache)

- **Windows**: `Ctrl + Shift + R`
- **Mac**: `Cmd + Shift + R`


## GitHub Pages

### Setup Steps

1. Go to repository **Settings**
2. Click **Pages** in sidebar
3. Set Source to **Deploy from a branch**
4. Select **main** branch, **/ (root)** folder
5. Click **Save**

### Your URL Format

```
https://USERNAME.github.io/REPO-NAME/
```


## Claude API

### Installation

```bash
npm install @anthropic-ai/sdk
```

### Basic API Call

```javascript
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const message = await client.messages.create({
  model: "claude-sonnet-4-20250514",
  max_tokens: 1024,
  messages: [{ role: "user", content: "Hello!" }],
});

console.log(message.content[0].text);
```


## PostHog Analytics

### Quick Setup

Add before `</head>`:

```html
<script>
  !function(t,e){/*...PostHog snippet...*/}
  posthog.init('YOUR_KEY', {api_host: 'https://app.posthog.com'})
</script>
```

### Track Custom Events

```javascript
// Track event
posthog.capture('event_name');

// Track with data
posthog.capture('event_name', { key: 'value' });

// Opt out
posthog.opt_out_capturing();

// Opt in
posthog.opt_in_capturing();
```


## Keyboard Shortcuts

### Terminal

| Shortcut | Action |
|----------|--------|
| `Ctrl + C` | Stop current command |
| `Ctrl + L` | Clear screen |
| `↑` / `↓` | Previous/next command |
| `Tab` | Auto-complete |

### Browser

| Shortcut | Action |
|----------|--------|
| `F5` or `Cmd/Ctrl + R` | Refresh |
| `Cmd/Ctrl + Shift + R` | Hard refresh |
| `F12` or `Cmd + Option + I` | Developer tools |
| `Cmd/Ctrl + U` | View source |


## File Structure Basics

### Typical Web Project

```
my-project/
├── index.html      # Main page
├── styles.css      # Styling
├── script.js       # JavaScript
├── images/         # Image files
│   ├── logo.png
│   └── photo.jpg
└── .gitignore      # Files Git should ignore
```

### .gitignore Template

```
# Dependencies
node_modules/

# Environment
.env

# System files
.DS_Store
Thumbs.db

# Build output
dist/
build/
```


## Quick Troubleshooting

| Problem | Solution |
|---------|----------|
| "command not found" | Restart terminal, check installation |
| Git push rejected | Run `git pull` first |
| CSS not loading | Check `<link>` path, hard refresh |
| JS not working | Check browser console for errors |
| GitHub Pages 404 | Wait 5 min, check `index.html` exists |
| API error 401 | Check API key is correct |


## Helpful Links

- [GitHub Docs](https://docs.github.com)
- [Claude Code Documentation](https://docs.anthropic.com/claude-code)
- [Anthropic API Reference](https://docs.anthropic.com/api)
- [PostHog Docs](https://posthog.com/docs)
- [MDN Web Docs](https://developer.mozilla.org) (HTML/CSS/JS reference)


<div style="text-align: center; margin-top: 2rem;">
  <a href="/ai-workshop/reference/glossary/" style="padding: 0.75rem 1.5rem; background: var(--sl-color-accent); color: white; text-decoration: none; border-radius: 8px; font-weight: 600;">
    View Glossary →
  </a>
</div>
