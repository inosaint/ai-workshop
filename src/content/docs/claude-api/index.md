---
title: Claude API Basics
description: Learn how to use the Claude API directly in your projects
sidebar:
  order: 9
---

# Claude API Basics

You've been using Claude Code, which is like having a conversation with Claude. But what if you want to add AI capabilities directly into your own projects?

That's where the **Claude API** comes in!


## What is an API?

**API** stands for **Application Programming Interface**. Think of it as a waiter at a restaurant:

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│   You (Customer)     →     Waiter (API)     →    Kitchen   │
│                                                             │
│   "I'd like the      →    Takes order to    →   Cooks the  │
│    pasta, please"         the kitchen           food       │
│                                                             │
│   Receives pasta     ←    Brings food back  ←   Prepares   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

You don't go into the kitchen yourself - you ask the waiter (API), and they handle the communication.

With the Claude API:
- **You** = Your application
- **Waiter** = The Claude API
- **Kitchen** = Claude's AI brain


## Getting Your API Key

To use the Claude API, you need an API key - like a password that identifies you.

### Step 1: Create an Anthropic Account

1. Go to [console.anthropic.com](https://console.anthropic.com)
2. Click **"Sign Up"** or **"Log In"**
3. Complete the registration process

<div class="image-placeholder">
  <div class="image-placeholder-icon">🖼️</div>
  <div class="image-placeholder-text">
    <strong>[Screenshot: Anthropic Console login page]</strong><br/>
    The Anthropic Console welcome page with Sign Up / Log In buttons
  </div>
</div>

### Step 2: Get Your API Key

1. Once logged in, go to **"API Keys"** in the sidebar
2. Click **"Create Key"**
3. Give it a name (e.g., "Workshop Project")
4. Copy the key immediately!

<div class="warning-box">
  <strong>⚠️ Critical:</strong> You can only see your API key once! Copy it and save it somewhere safe. If you lose it, you'll need to create a new one.
</div>

<div class="image-placeholder">
  <div class="image-placeholder-icon">🖼️</div>
  <div class="image-placeholder-text">
    <strong>[Screenshot: API Keys page]</strong><br/>
    Anthropic Console API Keys section with "Create Key" button and a blurred API key
  </div>
</div>

### Step 3: Store Your Key Safely

Never put your API key directly in your code! Instead:

**For local development**, create a file called `.env`:

```bash
ANTHROPIC_API_KEY=sk-ant-your-key-here
```

<div class="warning-box">
  <strong>⚠️ Never commit this file!</strong> Add <code>.env</code> to your <code>.gitignore</code> file to keep it out of GitHub.
</div>


## Understanding API Pricing

The Claude API charges based on **tokens** (roughly 4 characters = 1 token).

| Model | Input (per 1M tokens) | Output (per 1M tokens) |
|-------|----------------------|------------------------|
| Claude 3.5 Sonnet | $3.00 | $15.00 |
| Claude 3 Haiku | $0.25 | $1.25 |

For learning and small projects, you'll likely spend less than $1!

New accounts often get free credits to start - check your console.


## Your First API Call

Let's make a simple API call using JavaScript. This is the foundation of adding AI to any project!

### Basic Example (Node.js)

First, install the Anthropic SDK:

```bash
npm install @anthropic-ai/sdk
```

Then create a file called `test-api.js`:

```javascript
import Anthropic from "@anthropic-ai/sdk";

// Create the client
const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

// Make a request to Claude
async function askClaude(question) {
  const message = await client.messages.create({
    model: "claude-sonnet-4-20250514",
    max_tokens: 1024,
    messages: [
      {
        role: "user",
        content: question,
      },
    ],
  });

  // Print Claude's response
  console.log(message.content[0].text);
}

// Try it out!
askClaude("What are three fun facts about penguins?");
```

Run it:

```bash
ANTHROPIC_API_KEY=your-key-here node test-api.js
```

<div class="checkpoint">
  <div class="checkpoint-title">✅ Checkpoint</div>
  <p>If you see penguin facts in your terminal, congratulations! You've made your first API call!</p>
</div>


## Understanding the API Response

When you call the API, you get back a structured response:

```javascript
{
  "id": "msg_01XFDUDYJgAACzvnptvVoYEL",
  "type": "message",
  "role": "assistant",
  "content": [
    {
      "type": "text",
      "text": "Here are three fun facts about penguins..."
    }
  ],
  "model": "claude-sonnet-4-20250514",
  "stop_reason": "end_turn",
  "usage": {
    "input_tokens": 12,
    "output_tokens": 150
  }
}
```

Key parts:
- `content[0].text` - Claude's actual response
- `usage` - How many tokens were used (for billing)
- `stop_reason` - Why Claude stopped (usually "end_turn")


## Building a Simple AI Feature

Let's add a real AI feature to a web page - a writing assistant!

### HTML Setup

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>AI Writing Helper</title>
  <style>
    body {
      font-family: system-ui, sans-serif;
      max-width: 600px;
      margin: 50px auto;
      padding: 20px;
    }
    textarea {
      width: 100%;
      height: 150px;
      margin: 10px 0;
      padding: 10px;
      font-size: 16px;
    }
    button {
      background: #6366f1;
      color: white;
      padding: 12px 24px;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      font-size: 16px;
    }
    button:hover {
      background: #4f46e5;
    }
    #result {
      margin-top: 20px;
      padding: 20px;
      background: #f1f5f9;
      border-radius: 8px;
      white-space: pre-wrap;
    }
    .loading {
      opacity: 0.5;
    }
  </style>
</head>
<body>
  <h1>✍️ AI Writing Helper</h1>
  <p>Enter some text and let AI improve it!</p>

  <textarea id="userInput" placeholder="Type or paste your text here..."></textarea>

  <button onclick="improveText()">Improve My Text</button>

  <div id="result"></div>

  <script src="app.js"></script>
</body>
</html>
```

<div class="warning-box">
  <strong>⚠️ Security Note:</strong> For a real production app, you'd need a backend server to keep your API key secret. For learning purposes, this example shows the concept.
</div>


## System Prompts: Giving Claude a Role

You can give Claude a specific role or personality using a **system prompt**:

```javascript
const message = await client.messages.create({
  model: "claude-sonnet-4-20250514",
  max_tokens: 1024,
  system: "You are a helpful writing assistant. Improve the user's text while maintaining their voice and intent. Be concise and helpful.",
  messages: [
    {
      role: "user",
      content: userText,
    },
  ],
});
```

### System Prompt Ideas

| Use Case | System Prompt |
|----------|---------------|
| Writing Helper | "You are a friendly editor. Improve clarity and flow while keeping the author's voice." |
| Code Reviewer | "You are a senior developer. Review code for bugs and suggest improvements." |
| Tutor | "You are a patient teacher. Explain concepts simply, using examples." |
| Translator | "You are a professional translator. Translate accurately while preserving tone." |


## Streaming Responses

For long responses, you can "stream" the response word-by-word (like ChatGPT does):

```javascript
const stream = await client.messages.stream({
  model: "claude-sonnet-4-20250514",
  max_tokens: 1024,
  messages: [{ role: "user", content: "Tell me a story" }],
});

for await (const chunk of stream) {
  if (
    chunk.type === "content_block_delta" &&
    chunk.delta.type === "text_delta"
  ) {
    process.stdout.write(chunk.delta.text);
  }
}
```

This creates a more dynamic, engaging user experience!


## Best Practices

### 1. Handle Errors Gracefully

```javascript
try {
  const response = await client.messages.create({...});
  // Use response
} catch (error) {
  if (error.status === 429) {
    console.log("Rate limited - slow down!");
  } else if (error.status === 401) {
    console.log("Invalid API key");
  } else {
    console.log("Something went wrong:", error.message);
  }
}
```

### 2. Set Reasonable Limits

```javascript
{
  max_tokens: 500,  // Don't let responses get too long
  // ...
}
```

### 3. Keep API Keys Secret

- Never commit API keys to Git
- Use environment variables
- For web apps, call the API from a backend server


## Ideas for Your Projects

Now that you understand the API, here are some features you could add:

| Feature | Description |
|---------|-------------|
| **Smart Search** | Let users ask questions about your content |
| **Content Generator** | Auto-generate product descriptions, bios, etc. |
| **Chatbot** | Add a helpful chat widget to your site |
| **Summarizer** | Summarize long articles or documents |
| **Translator** | Translate content on the fly |
| **Writing Assistant** | Help users improve their writing |


<div class="checkpoint">
  <div class="checkpoint-title">✅ Checkpoint</div>
  <p>You understand how the Claude API works and can make basic API calls. You're now ready to add AI features to any project!</p>
</div>


## Next Steps

In the next section, we'll add analytics to your project so you can see how people are using it!
