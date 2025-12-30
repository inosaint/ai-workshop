import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeRapide from 'starlight-theme-rapide';

export default defineConfig({
  site: 'https://inosaint.github.io',
  base: '/ai-workshop',
  integrations: [
    starlight({
      title: 'AI Workshop',
      description: 'A beginner-friendly guide to building projects with Claude Code',
      plugins: [starlightThemeRapide()],
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
            { label: 'Welcome', link: '/01-introduction/' },
            { label: 'Your First AI Creation', link: '/02-quick-win/' },
          ],
        },
        {
          label: 'Setup',
          items: [
            { label: 'GitHub Account', link: '/03-github-setup/' },
            { label: 'Install Claude Code', link: '/04-install-claude-code/' },
            { label: 'Git Basics', link: '/05-git-basics/' },
          ],
        },
        {
          label: 'Build Your Project',
          items: [
            { label: 'Choose Your Project', link: '/06-choose-project/' },
            { label: 'Building with Claude', link: '/07-building-with-claude/' },
            { label: 'Testing Locally', link: '/08-testing-locally/' },
          ],
        },
        {
          label: 'Go Live',
          items: [
            { label: 'Deploy to GitHub Pages', link: '/09-deploy-github-pages/' },
          ],
        },
        {
          label: 'Level Up',
          items: [
            { label: 'Claude API Basics', link: '/10-claude-api/' },
            { label: 'Add Analytics (PostHog)', link: '/11-analytics-posthog/' },
          ],
        },
        {
          label: 'Optional',
          collapsed: true,
          items: [
            { label: 'Using Cursor (Alternative)', link: '/optional/cursor/' },
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
