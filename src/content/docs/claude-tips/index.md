---
title: Working with Claude Code - Tips & Tricks
description: Advanced techniques for getting the most out of Claude Code
sidebar:
  order: 10
---

Master these techniques to become more effective with Claude Code!

## Asking Follow-up Questions

You can ask Claude Code to modify or add things at any time:

```text
Can you change the color scheme to blue and white?
```

```text
Add a dark mode toggle button
```

```text
The contact form needs email validation
```

```text
Make the navigation sticky at the top when scrolling
```

## Being Specific Helps

The more specific your requests, the better results you'll get.

### Vague vs. Specific

**Instead of:**
> "Make it look better"

**Try:**
> "Add more spacing between sections and make the headings larger"

**Instead of:**
> "It's not working"

**Try:**
> "When I click the submit button, nothing happens. Can you check the JavaScript?"

**Instead of:**
> "Add some colors"

**Try:**
> "Use a blue (#2563eb) and white color scheme with subtle gray backgrounds"

## Asking for Explanations

Don't understand something? Just ask!

```text
Can you explain what the CSS flexbox code does?
```

```text
Why did you use addEventListener instead of onclick?
```

```text
How does the form validation work?
```

```text
What's the difference between let and const in JavaScript?
```

Claude Code is patient and loves explaining things in beginner-friendly terms!

## Getting Beginner-Friendly Responses

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

## Common Patterns

### Iterative Improvements

Don't try to get everything perfect in one go. Build iteratively:

1. Start with basic structure
2. Add functionality
3. Improve styling
4. Add polish and details

**Example workflow:**
```text
1. "Create a simple contact form with name, email, and message fields"
2. "Add validation to make sure all fields are filled"
3. "Style the form to match my site's blue color scheme"
4. "Add a success message after submission"
```

### Breaking Down Complex Features

Complex features are easier to build in steps:

**Instead of:**
> "Build a complete e-commerce shopping cart"

**Try:**
```text
1. "Create a product card component with image, title, price"
2. "Add an 'Add to Cart' button to each product"
3. "Create a cart that shows selected items"
4. "Add quantity controls to the cart"
5. "Calculate and display the total price"
```

### Learning from the Code

Ask Claude to teach you while building:

```text
Create a photo gallery with a lightbox effect.
As you build it, explain each major part of the code
so I can understand how it works.
```

## Troubleshooting Tips

### When Something Doesn't Work

1. **Be descriptive** - Explain exactly what's happening
2. **Share error messages** - If you see errors in the browser console, share them
3. **Describe what you expected** - What should have happened?

**Good troubleshooting request:**
```text
When I click the "Submit" button, I see this error in the console:
"Uncaught TypeError: Cannot read property 'value' of null"

I expected the form to show a success message. Can you help fix this?
```

### When You Want Something Different

Be honest! Claude Code won't be offended.

```text
The design is nice, but can we try a more modern, minimalist style?
```

```text
This works, but the animations feel too slow. Can we speed them up?
```

## Advanced Techniques

### Referencing Existing Code

You can ask Claude to work with your existing code:

```text
I have a navigation menu in header.html.
Can you make it responsive and add a mobile hamburger menu?
```

### Asking for Multiple Variations

```text
Can you show me 3 different color schemes I could use for this site?
```

```text
What are some alternative ways to layout this contact section?
```

### Requesting Best Practices

```text
Can you review my HTML and suggest accessibility improvements?
```

```text
Are there any performance optimizations I should make to this code?
```

## Keep Exploring!

The more you work with Claude Code, the better you'll get at:
- Asking clear, specific questions
- Breaking down problems
- Understanding the code it generates
- Building more complex projects

Don't be afraid to experiment and ask questions!

<div class="checkpoint">
  <div class="checkpoint-title">✅ Checkpoint</div>
  <p>You've learned pro tips for working effectively with Claude Code!</p>
</div>
