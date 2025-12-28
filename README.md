# AI Workshop

A beginner-friendly workshop companion guide for learning Claude Code - from zero to deployed project.

## What is this?

This is an interactive workshop guide that teaches complete beginners how to:
- Set up GitHub and Git
- Install and use Claude Code
- Build a real project with AI assistance
- Deploy to GitHub Pages
- Use the Claude API
- Add analytics with PostHog

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/ai-workshop.git

# Navigate to the project
cd ai-workshop

# Install dependencies
npm install

# Start the development server
npm run dev
```

The site will be available at `http://localhost:4321/ai-workshop/`

### Building for Production

```bash
npm run build
```

The built site will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## Deploying to GitHub Pages

This project is configured for GitHub Pages deployment. You can:

1. Push to the `main` branch
2. Enable GitHub Pages in repository settings
3. Set the source to "GitHub Actions"
4. Add a GitHub Actions workflow for Astro deployment

## Project Structure

```
ai-workshop/
├── src/
│   ├── assets/           # Logo and images
│   ├── content/docs/     # Workshop content (Markdown)
│   └── styles/           # Custom CSS
├── public/               # Static assets
├── astro.config.mjs      # Astro configuration
└── package.json
```

## License

MIT
