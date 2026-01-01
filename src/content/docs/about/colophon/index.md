---
title: Colophon
description: How this guide was built and the tools behind it
sidebar:
  order: 3
---

This page describes how the AI Workshop was created and the technologies behind it.

## Built With

### Static Site Generator
**[Astro](https://astro.build)** - A modern web framework optimized for content-rich websites. Fast, flexible, and built for the edge.

### Documentation Theme
**[Starlight](https://starlight.astro.build)** - Astro's official documentation theme, providing beautiful, accessible, and responsive design out of the box.

**[starlight-theme-rapide](https://github.com/HiDeoo/starlight-theme-rapide)** - A custom Starlight theme for enhanced visual polish.

### Typography
**[Inter](https://rsms.me/inter/)** by Rasmus Andersson - A carefully crafted typeface designed for user interfaces. Optimized for screens and highly legible.

### Hosting
**[GitHub Pages](https://pages.github.com)** - Free, reliable hosting directly from the GitHub repository.

### Analytics
**[PostHog](https://posthog.com)** - Privacy-focused product analytics to understand how people use this guide and improve the learning experience.

## Development

### Version Control
**[Git](https://git-scm.org)** & **[GitHub](https://github.com)** - Source code management and collaboration.

### Created With
This entire workshop was built using **[Claude Code](https://claude.ai)** - practicing what we preach! The guide itself is a testament to AI-assisted development.


## Design Philosophy

### Accessibility First
- Semantic HTML structure
- ARIA labels and roles where needed
- Keyboard navigation support
- Screen reader friendly
- High contrast color schemes

### Mobile Responsive
Every page is designed to work beautifully on phones, tablets, and desktops.

### Plain Language
Technical jargon is minimized. When technical terms are necessary, they're defined clearly.

### Progressive Disclosure
Information is revealed gradually - start simple, add complexity only when needed.

## Content License

This work is licensed under **[CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)**.

You're free to share and adapt this content for non-commercial purposes, as long as you give credit and share your adaptations under the same license.

## Credits

### Created By
**Kenneth Mark Dsouza** - Concept, content, and development.

## Open Source

This project is open source and available on GitHub:

**[github.com/inosaint/ai-workshop](https://github.com/inosaint/ai-workshop)**

Contributions, suggestions, and feedback are welcome!

## Technical Details

### Repository Structure
```
ai-workshop/
├── src/
│   ├── content/docs/    # All workshop content
│   ├── components/      # Custom components
│   └── styles/          # Custom CSS
├── astro.config.mjs     # Astro configuration
└── package.json         # Dependencies
```

### Build Process
1. Content written in Markdown/MDX
2. Astro builds static HTML
3. Deployed to GitHub Pages
4. Available at [kenneth.dsouza.im/ai-workshop](https://kenneth.dsouza.im/ai-workshop)

---

<div class="tip-box">
  <strong>Curious about the code?</strong> Check out the <a href="https://github.com/inosaint/ai-workshop">GitHub repository</a> to see how everything works!
</div>
