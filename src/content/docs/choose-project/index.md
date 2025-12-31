---
title: Choose Your Project
description: Pick a project to build or create your own
sidebar:
  order: 5
---

Now comes the fun part - deciding what to build!

During this workshop, you can choose from three project ideas, or bring your own:

| Project | Description |
|---------|-------------|
| Personal Portfolio | A beautiful one-page website showcasing who you are |
| Interactive Quiz | A fun game that tests knowledge and shows results |
| Habit Tracker | A simple app to track daily habits and see your progress |
| Your Own Idea | Anything you can imagine! |

All paths lead to the same destination: a working project you can show off!

## Option 1: Personal Portfolio

<div class="project-card" style="margin: 2rem 0; padding: 1.5rem; border-radius: 12px; border: 2px solid var(--sl-color-gray-3);">
  <div style="font-size: 2.5rem; margin-bottom: 1rem;">👤</div>
  <h3 style="margin: 0 0 0.5rem 0;">Personal Portfolio</h3>
  <p style="color: var(--sl-color-gray-5); margin-bottom: 1rem;">
    A beautiful one-page website that showcases who you are. Perfect for job hunting, networking, or just having your own corner of the internet.
  </p>

  <details>
    <summary style="cursor: pointer; font-weight: 600; color: var(--sl-color-accent);">View starter prompt (click to expand)</summary>

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
  </details>
</div>

## Option 2: Interactive Quiz Game

<div class="project-card" style="margin: 2rem 0; padding: 1.5rem; border-radius: 12px; border: 2px solid var(--sl-color-gray-3);">
  <div style="font-size: 2.5rem; margin-bottom: 1rem;">🎮</div>
  <h3 style="margin: 0 0 0.5rem 0;">Interactive Quiz Game</h3>
  <p style="color: var(--sl-color-gray-5); margin-bottom: 1rem;">
    A fun trivia game that tests knowledge and shows a final score. Great for learning how user interaction works.
  </p>

  <details>
    <summary style="cursor: pointer; font-weight: 600; color: var(--sl-color-accent);">View starter prompt (click to expand)</summary>

```text
Create an interactive quiz game with:
- A welcome screen with a "Start Quiz" button
- 5 multiple-choice questions about [choose a topic: movies, science, history, etc.]
- 4 answer options per question
- Visual feedback showing if the answer was correct or wrong
- A progress bar showing current question number
- A results screen showing final score with a message based on performance
- Option to restart the quiz
- Fun, colorful design with animations
- Use HTML, CSS, and vanilla JavaScript only
```
  </details>
</div>

## Option 3: Habit Tracker

<div class="project-card" style="margin: 2rem 0; padding: 1.5rem; border-radius: 12px; border: 2px solid var(--sl-color-gray-3);">
  <div style="font-size: 2.5rem; margin-bottom: 1rem;">✅</div>
  <h3 style="margin: 0 0 0.5rem 0;">Habit Tracker</h3>
  <p style="color: var(--sl-color-gray-5); margin-bottom: 1rem;">
    A simple app to track daily habits and visualize your consistency. Perfect for building good routines.
  </p>

  <details>
    <summary style="cursor: pointer; font-weight: 600; color: var(--sl-color-accent);">View starter prompt (click to expand)</summary>

```text
Create a habit tracker app with:
- Ability to add new habits with a name and emoji
- A list of habits that can be marked complete for today
- Visual checkboxes or toggle buttons for each habit
- A simple streak counter showing consecutive days
- Data saved in browser localStorage (persists between visits)
- Clean, minimal design with satisfying animations when completing habits
- A weekly view showing which days each habit was completed
- Use HTML, CSS, and vanilla JavaScript only
```
  </details>
</div>


## Option 4: Build Your Own Idea!

Have something else in mind? Use our Prompt Builder to create your own project prompt!

<div class="prompt-editor" style="margin: 2rem 0; padding: 2rem; background: var(--sl-color-gray-1); border-radius: 12px;">
  <h3 style="margin: 0 0 1.5rem 0; display: flex; align-items: center; gap: 0.5rem;">
    ✨ Prompt Builder
  </h3>

  <div style="display: grid; gap: 1rem; margin-bottom: 1.5rem;">
    <div class="prompt-field">
      <label style="display: block; font-weight: 500; margin-bottom: 0.5rem;">What type of project?</label>
      <select id="projectType">
        <option value="">Choose a type...</option>
        <option value="website">Website / Landing Page</option>
        <option value="game">Game</option>
        <option value="tool">Utility / Tool</option>
        <option value="dashboard">Dashboard</option>
        <option value="other">Other</option>
      </select>
    </div>

    <div class="prompt-field">
      <label style="display: block; font-weight: 500; margin-bottom: 0.5rem;">Describe your idea (1-2 sentences)</label>
      <textarea id="projectIdea" placeholder="e.g., A recipe organizer where I can save and search my favorite recipes"></textarea>
    </div>

    <div class="prompt-field">
      <label style="display: block; font-weight: 500; margin-bottom: 0.5rem;">Key features (comma-separated)</label>
      <input type="text" id="projectFeatures" placeholder="e.g., search, favorites, categories, dark mode" />
    </div>

    <div class="prompt-field">
      <label style="display: block; font-weight: 500; margin-bottom: 0.5rem;">Color preference (optional)</label>
      <input type="text" id="projectColors" placeholder="e.g., blue and white, dark theme, colorful" />
    </div>
  </div>

  <button onclick="generatePrompt()" style="width: 100%; padding: 0.875rem; background: var(--sl-color-accent); color: white; border: none; border-radius: 8px; font-size: 1rem; font-weight: 600; cursor: pointer;">
    Generate My Prompt
  </button>

  <div id="generatedPrompt" style="display: none; margin-top: 1.5rem;">
    <label style="display: block; font-weight: 500; margin-bottom: 0.5rem;">Your custom prompt:</label>
    <div style="position: relative;">
      <pre id="promptOutput" style="background: #1e293b; color: #e2e8f0; padding: 1.5rem; border-radius: 8px; white-space: pre-wrap; font-size: 0.9rem; line-height: 1.6;"></pre>
      <button onclick="copyPrompt()" id="copyBtn" style="position: absolute; top: 0.75rem; right: 0.75rem; padding: 0.5rem 1rem; background: var(--sl-color-accent); color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 0.85rem;">
        Copy
      </button>
    </div>
  </div>
</div>

<script>
{`
function generatePrompt() {
  const type = document.getElementById('projectType').value;
  const idea = document.getElementById('projectIdea').value;
  const features = document.getElementById('projectFeatures').value;
  const colors = document.getElementById('projectColors').value;

  if (!idea) {
    alert('Please describe your project idea!');
    return;
  }

  let prompt = 'Create a ' + (type || 'web project') + ':\\n\\n';
  prompt += 'Main concept: ' + idea + '\\n\\n';
  prompt += 'Features to include:\\n';

  if (features) {
    features.split(',').forEach(feature => {
      prompt += '- ' + feature.trim() + '\\n';
    });
  } else {
    prompt += '- [Add your key features here]\\n';
  }

  prompt += '\\nAdditional requirements:\\n';
  if (colors) {
    prompt += '- Color scheme: ' + colors + '\\n';
  }
  prompt += '- Mobile-responsive design\\n';
  prompt += '- Clean, modern UI\\n';
  prompt += '- Use HTML, CSS, and vanilla JavaScript only\\n';
  prompt += '- Include helpful comments in the code';

  document.getElementById('promptOutput').textContent = prompt;
  document.getElementById('generatedPrompt').style.display = 'block';
}

function copyPrompt() {
  const prompt = document.getElementById('promptOutput').textContent;
  navigator.clipboard.writeText(prompt).then(() => {
    const btn = document.getElementById('copyBtn');
    btn.textContent = 'Copied!';
    btn.style.background = '#10b981';
    setTimeout(() => {
      btn.textContent = 'Copy';
      btn.style.background = 'var(--sl-color-accent)';
    }, 2000);
  });
}
`}
</script>


## Tips for Writing Good Prompts

<div class="tip-box">
  <strong>💡 Prompt Writing Tips:</strong>
  <ul style="margin: 0.5rem 0 0 0; padding-left: 1.5rem;">
    <li><strong>Be specific</strong> - "A contact form" is vague; "A contact form with name, email, message fields and validation" is clear</li>
    <li><strong>List features</strong> - Bullet points help Claude Code understand exactly what you want</li>
    <li><strong>Mention the tech</strong> - "Use HTML, CSS, and JavaScript" keeps things simple for beginners</li>
    <li><strong>Describe the look</strong> - "Modern and minimal" or "Fun and colorful" guides the design</li>
  </ul>
</div>


## What Happens Next?

Once you've chosen (or created) your project:

1. **Copy your prompt** - Either from the templates above or from the Prompt Builder
2. **Open Claude Code** - In your terminal, navigate to where you want your project
3. **Paste and run** - Give Claude Code your prompt and watch the magic happen!

We'll walk through this step-by-step in the next section.

<div class="checkpoint">
  <div class="checkpoint-title">✅ Checkpoint</div>
  <p>You have a project idea and a prompt ready to go. Time to build!</p>
</div>
