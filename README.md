# AI Workshop

[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)

A beginner-friendly workshop companion guide for learning Claude Code - from zero to deployed project.

## What is this?

This is an interactive workshop guide that teaches complete beginners how to:
- Set up GitHub and Git
- Install and use Claude Code
- Build a real project with AI assistance
- Deploy to GitHub Pages
- Use the Claude API
- Add analytics with PostHog

**Workshop Duration:** ~3-3.5 hours

**Target Audience:** Complete beginners with no coding experience

## Workshop Structure

| Module | Topic | Duration |
|--------|-------|----------|
| 01 | Introduction | 10 min |
| 02 | GitHub Setup | 20 min |
| 03 | Install Claude Code | 25 min |
| 04 | Git Basics | 20 min |
| 05 | Choose Your Project | 10 min |
| 06 | Build with Claude | 45 min |
| 07 | Test Locally | 15 min |
| 08 | Deploy to GitHub Pages | 20 min |
| 09 | Claude API Basics | 20 min |
| 10 | Analytics (PostHog) | 15 min |

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm

### Local Development

```bash
# Clone the repository
git clone https://github.com/inosaint/ai-workshop.git

# Navigate to the project
cd ai-workshop

# Install dependencies
npm install

# (Optional) Set up analytics
# Copy .env.example to .env and add your PostHog API key
cp .env.example .env
# Then edit .env with your PostHog credentials

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

This project includes a GitHub Actions workflow for automatic deployment.

### Setup Steps:

1. Fork or push this repository to your GitHub account

2. Go to **Settings** → **Pages**

3. Under "Build and deployment", select:
   - **Source**: "GitHub Actions"

4. Update `astro.config.mjs` with your GitHub username:
   ```javascript
   site: 'https://YOUR-USERNAME.github.io',
   ```

5. Push to the `main` branch

6. The site will automatically deploy to `https://YOUR-USERNAME.github.io/ai-workshop/`

## Project Structure

```
ai-workshop/
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions deployment
├── src/
│   ├── assets/             # Logo and images
│   ├── content/docs/       # Workshop content (Markdown)
│   │   ├── introduction/
│   │   ├── github-setup/
│   │   ├── install-claude-code/
│   │   ├── choose-project/
│   │   ├── building-with-claude/
│   │   ├── testing-locally/
│   │   ├── deploy-github-pages/
│   │   ├── claude-api/
│   │   ├── analytics-posthog/
│   │   ├── optional/
│   │   ├── reference/
│   │   └── troubleshooting/
│   └── styles/             # Custom CSS
├── public/                 # Static assets
├── astro.config.mjs        # Astro configuration
└── package.json
```

## Customization

### Analytics Setup (Optional)

This project includes PostHog analytics integration with automatic course progression tracking. To enable it:

1. Sign up for a free account at [PostHog](https://posthog.com)
2. Get your API key from your PostHog project settings
3. Copy `.env.example` to `.env`
4. Add your PostHog API key to the `.env` file

The analytics will automatically track:
- Page views with module progression (1-11)
- User funnels through the course
- Checkpoint engagement
- Popular pages and sections

**See [ANALYTICS.md](ANALYTICS.md) for detailed tracking capabilities and how to create dashboards in PostHog.**

### Adding Screenshots

Replace placeholder images in the content with actual screenshots:

1. Add images to `public/images/`
2. Update Markdown to use: `![Alt text](/ai-workshop/images/your-image.png)`

### Updating Colors

Edit `src/styles/custom.css` to change the color scheme.

### Adding New Content

Add new Markdown files in `src/content/docs/` and update the sidebar in `astro.config.mjs`.

## Contributing

Contributions are welcome! Please:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This work is licensed under a [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-nc-sa/4.0/).

You are free to share and adapt this material for non-commercial purposes, as long as you give appropriate credit and share your adaptations under the same license.
