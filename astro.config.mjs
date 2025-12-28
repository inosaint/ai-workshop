import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://yourusername.github.io',
  base: '/ai-workshop',
  integrations: [
    starlight({
      title: 'AI Workshop',
      description: 'A beginner-friendly guide to building projects with Claude Code',
      logo: {
        src: './src/assets/logo.svg',
        replacesTitle: false,
      },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/inosaint/ai-workshop' },
      ],
      customCss: [
        './src/styles/custom.css',
      ],
      sidebar: [
        {
          label: 'Start Here',
          items: [
            { label: 'Welcome', link: '/introduction/' },
            { label: 'Your First AI Creation', link: '/quick-win/' },
          ],
        },
        {
          label: 'Setup',
          items: [
            { label: 'GitHub Account', link: '/github-setup/' },
            { label: 'Install Claude Code', link: '/install-claude-code/' },
            { label: 'Git Basics', link: '/git-basics/' },
          ],
        },
        {
          label: 'Build Your Project',
          items: [
            { label: 'Choose Your Project', link: '/choose-project/' },
            { label: 'Building with Claude', link: '/building-with-claude/' },
            { label: 'Testing Locally', link: '/testing-locally/' },
          ],
        },
        {
          label: 'Go Live',
          items: [
            { label: 'Deploy to GitHub Pages', link: '/deploy-github-pages/' },
          ],
        },
        {
          label: 'Level Up',
          items: [
            { label: 'Claude API Basics', link: '/claude-api/' },
            { label: 'Add Analytics (PostHog)', link: '/analytics-posthog/' },
          ],
        },
        {
          label: 'Optional',
          collapsed: true,
          items: [
            { label: 'Deploy to Netlify', link: '/optional/netlify/' },
          ],
        },
        {
          label: 'Reference',
          collapsed: true,
          items: [
            { label: 'Cheat Sheet', link: '/reference/cheat-sheet/' },
            { label: 'Glossary', link: '/reference/glossary/' },
            { label: 'Troubleshooting', link: '/troubleshooting/' },
          ],
        },
      ],
    }),
  ],
});
