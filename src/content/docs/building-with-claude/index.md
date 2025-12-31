---
title: Building with Claude Code
description: Use Claude Code to create your project step by step
sidebar:
  order: 6
---

# Building with Claude Code

This is the moment you've been waiting for! Let's use Claude Code to build your project.

You should already have:
- ✅ A project folder created via GitHub Desktop
- ✅ Git initialized in your project
- ✅ Claude Code app installed and open


## Step 1: Open Your Project Folder in Terminal

We need to navigate to your project folder in the terminal so Claude Code knows where to create your files.

### Opening Terminal

<div class="tip-box">
  <strong>💡 Quick Reference:</strong> See the <a href="/ai-workshop/reference/cheat-sheet/#terminal--command-line">Terminal section of our Cheat Sheet</a> for more terminal commands.
</div>

**Windows:**
1. Press `Win + R` to open Run dialog
2. Type `cmd` and press Enter

**Mac:**
1. Press `Cmd + Space` to open Spotlight
2. Type `Terminal` and press Enter

### Navigate to Your Project

In the terminal, use `cd` (change directory) to go to your project folder:

**Windows:**
```bash
cd Documents\GitHub\my-project
```

**Mac:**
```bash
cd ~/Documents/GitHub/my-project
```

<div class="tip-box">
  <strong>💡 Tip:</strong> Replace "my-project" with your actual project folder name. If you're not sure where GitHub Desktop saves projects, check GitHub Desktop → Preferences → Advanced → Repository storage location.
</div>

You can verify you're in the right place by running:
- **Windows:** `dir`
- **Mac:** `ls`

You should see your project files (or an empty folder if you just created it).


## Step 2: Launch Claude Code

Now start Claude Code in your project folder:

```bash
claude
```

The first time you run Claude Code, it will ask you to authenticate with your Anthropic account. Follow the prompts in your browser.

<div class="image-placeholder">
  <div class="image-placeholder-icon">🖼️</div>
  <div class="image-placeholder-text">
    <strong>[Screenshot: Claude Code interface]</strong><br/>
    The Claude Code CLI showing the welcome message and prompt ready for input
  </div>
</div>


## Step 3: Give Claude Code Your Prompt

Now paste your project prompt from the previous section. For example, if you chose the Portfolio project:

```text
Create a personal portfolio website with:
- A hero section with my name and a short tagline
- An "About Me" section where I can describe myself
- A "Skills" section showing 4-6 things I'm good at
- A "Projects" section with placeholder cards for 3 projects
- A "Contact" section with links to email and social media
- Modern, clean design with a color scheme of your choice
- Mobile-responsive layout
- Use HTML, CSS, and vanilla JavaScript only
```

Press **Enter** and watch Claude Code work!

<div class="image-placeholder">
  <div class="image-placeholder-icon">🖼️</div>
  <div class="image-placeholder-text">
    <strong>[Screenshot: Claude Code generating code]</strong><br/>
    Claude Code showing progress as it creates files, with file names appearing as they're created
  </div>
</div>


## Step 4: Watch and Learn

Claude Code will:

1. **Plan** - Think about the best approach
2. **Create files** - Generate HTML, CSS, and JavaScript files
3. **Explain** - Tell you what it's doing and why

<div class="warning-box">
  <strong>⚠️ Be patient!</strong> Complex projects might take a minute or two. Don't interrupt Claude Code while it's working.
</div>


## Step 5: Review What Was Created

After Claude Code finishes, let's see what files were created. You can check in your file explorer or run:

**Windows:**
```bash
dir
```

**Mac:**
```bash
ls
```

You should see something like:
```
index.html
styles.css
script.js
```

(The exact files depend on your project)


## Working with Claude Code: Tips & Tricks

### Asking Follow-up Questions

You can ask Claude Code to modify or add things:

```text
Can you change the color scheme to blue and white?
```

```text
Add a dark mode toggle button
```

```text
The contact form needs email validation
```

### Being Specific Helps

Instead of:
> "Make it look better"

Try:
> "Add more spacing between sections and make the headings larger"

Instead of:
> "It's not working"

Try:
> "When I click the submit button, nothing happens. Can you check the JavaScript?"

### Asking for Explanations

Don't understand something? Just ask!

```text
Can you explain what the CSS flexbox code does?
```

```text
Why did you use addEventListener instead of onclick?
```

Claude Code is patient and loves explaining things!

### Getting Beginner-Friendly Responses

If you're new to coding and want Claude to explain things in simple terms, add this to your prompts:

<div class="tip-box">
  <strong>💡 Beginner-Friendly Prompt:</strong>
  <p>Add this at the end of your requests to Claude:</p>
  <pre><code>Please explain everything in simple terms, as if I'm a complete
beginner. Avoid technical jargon and use everyday language.
If you need to use a technical term, please define it first.</code></pre>
</div>

**Example:**

```text
Can you add a contact form to my website? Please explain
everything in simple terms, as if I'm a complete beginner.
```

This helps Claude:
- Use plain, everyday language instead of technical terms
- Explain concepts like you're learning for the first time
- Define any technical words before using them
- Keep explanations clear and approachable

**Before (technical):**
> "I'll implement a POST request handler with form validation using regex patterns and preventDefault to handle the submit event."

**After (beginner-friendly):**
> "I'll add code that checks if the email looks correct when someone clicks the submit button, and then sends the message."


## Common Claude Code Commands

While chatting with Claude Code, you can use these helpful commands:

| Command | What It Does |
|---------|--------------|
| `/help` | Shows available commands |
| `/clear` | Clears the conversation history |
| `exit` or `Ctrl+C` | Exit Claude Code |


## Example Conversation

Here's what a typical session might look like:

```
You: Create a simple landing page with a hero section,
     3 feature cards, and a footer with social links

Claude: I'll create a clean landing page for you. Let me
        set up the structure with HTML, add styling with
        CSS, and include some interactive elements...

        [Creates index.html]
        [Creates styles.css]
        [Creates script.js]

        Done! I've created a landing page with:
        - A hero section with a headline and CTA button
        - 3 feature cards with icons
        - A footer with social media links

        You can open index.html in your browser to see it.

You: Can you make the feature cards have a hover effect?

Claude: Sure! I'll add a smooth hover animation to the
        cards...

        [Updates styles.css]

        Done! Now when you hover over a card, it will
        lift up slightly with a shadow effect.
```


## Making Changes

Want to tweak something? You have two options:

### Option 1: Ask Claude Code

The easiest way - just tell Claude Code what to change:

```text
Change the heading font to something more playful
```

### Option 2: Edit Files Yourself

You can also edit files directly using any text editor:

1. Open the file in a text editor (VS Code, Notepad++, TextEdit, etc.)
2. Make your changes
3. Save the file
4. Refresh your browser to see the changes

<div class="tip-box">
  <strong>💡 Pro Tip:</strong> Try making small changes yourself! If you break something, you can always ask Claude Code to fix it.
</div>


## Save Your Progress with GitHub Desktop

After Claude Code creates your project, let's save it with GitHub Desktop:

### Step 1: Open GitHub Desktop

Switch to GitHub Desktop. You should see your new files listed in the "Changes" tab.

### Step 2: Review Your Changes

Click on the files to see what was created. All the new files should be checked.

### Step 3: Commit Your Changes

1. In the "Summary" field at the bottom left, type: `Initial project created with Claude Code`
2. Click the **"Commit to main"** button

### Step 4: Publish to GitHub

1. Click the **"Publish repository"** button at the top
2. Uncheck "Keep this code private" (we want it public for GitHub Pages)
3. Click **"Publish repository"**

Your project is now saved and backed up on GitHub! 🎉

<div class="checkpoint">
  <div class="checkpoint-title">✅ Checkpoint</div>
  <p>Your project files are created and saved on GitHub. Let's test it locally!</p>
</div>


## Troubleshooting

### Claude Code isn't responding

Try pressing Enter. If that doesn't work, press `Ctrl+C` to exit and restart with `claude`.

### "I don't like what Claude Code made"

That's okay! You can:
1. Ask Claude Code to change it: "Can you try a different style?"
2. Start over: Delete the files and give a new prompt
3. Be more specific in your next prompt

### Files weren't created

Make sure you're in the right folder. Run `pwd` (Mac) or `cd` (Windows) to see your current location.


## Next Steps

You have a working project! In the next section, we'll learn how to view it in your browser and make sure everything works.
