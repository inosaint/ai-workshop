import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeRapide from 'starlight-theme-rapide';

export default defineConfig({
  site: 'https://inosaint.github.io',
  base: '/ai-workshop',
  integrations: [
    starlight({
      title: 'AI Workshop — Free AI Course',
      description: 'A free, beginner-friendly course on building projects with Claude Code. Go from zero coding experience to a deployed website in 3 hours.',
      head: [
        // Open Graph tags
        { tag: 'meta', attrs: { property: 'og:type', content: 'website' } },
        { tag: 'meta', attrs: { property: 'og:site_name', content: 'AI Workshop — Free AI Course' } },
        { tag: 'meta', attrs: { property: 'og:locale', content: 'en_US' } },
        // Twitter Card tags
        { tag: 'meta', attrs: { name: 'twitter:card', content: 'summary_large_image' } },
        // JSON-LD: WebSite schema
        {
          tag: 'script',
          attrs: { type: 'application/ld+json' },
          content: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'AI Workshop — Free AI Course',
            url: 'https://inosaint.github.io/ai-workshop/',
            description: 'A free, beginner-friendly course on building projects with Claude Code. Go from zero coding experience to a deployed website in 3 hours.',
          }),
        },
        // JSON-LD: Course schema
        {
          tag: 'script',
          attrs: { type: 'application/ld+json' },
          content: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Course',
            name: 'AI Workshop — Free AI Course: Build with Claude Code',
            description: 'A free, beginner-friendly course that teaches you to build and deploy web projects using Claude Code. No coding experience required. Go from zero to a live website in about 3 hours.',
            provider: {
              '@type': 'Organization',
              name: 'AI Workshop',
              url: 'https://inosaint.github.io/ai-workshop/',
            },
            isAccessibleForFree: true,
            educationalLevel: 'Beginner',
            teaches: [
              'How to use Claude Code to build web projects',
              'Git and GitHub basics',
              'Deploying websites to GitHub Pages',
              'Using the Claude API',
              'Web analytics with PostHog',
            ],
            inLanguage: 'en',
            coursePrerequisites: 'No coding experience required. Just a computer and internet connection.',
            hasCourseInstance: {
              '@type': 'CourseInstance',
              courseMode: 'Online',
              courseWorkload: 'PT3H',
            },
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
              category: 'Free',
            },
          }),
        },
      ],
      plugins: [starlightThemeRapide()],
      logo: {
        src: './src/assets/logo.svg',
        replacesTitle: false,
      },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/inosaint/ai-workshop' },
      ],
      credits: true,
      lastUpdated: true,
      editLink: {
        baseUrl: 'https://github.com/inosaint/ai-workshop/edit/main/',
      },
      customCss: [
        './src/styles/custom.css',
      ],
      components: {
        Head: './src/components/posthog.astro',
      },
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
          ],
        },
        {
          label: 'Build Your Project',
          items: [
            { label: 'Choose Your Project', link: '/choose-project/' },
            { label: 'Building with Claude', link: '/building-with-claude/' },
            { label: 'Testing Locally', link: '/testing-locally/' },
            { label: 'Making Changes', link: '/making-changes/' },
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
            { label: 'Tips & Tricks', link: '/claude-tips/' },
            { label: 'Claude API Basics', link: '/claude-api/' },
            { label: 'Add Analytics (PostHog)', link: '/analytics-posthog/' },
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
        {
          label: 'About',
          collapsed: true,
          items: [
            { label: 'Why This Guide', link: '/about/why-this-guide/' },
            { label: 'Version', link: '/about/version/' },
            { label: 'Improve This Guide', link: '/about/improve-this-guide/' },
            { label: 'Further Learning', link: '/about/further-learning/' },
            { label: 'Colophon', link: '/about/colophon/' },
            { label: 'License', link: '/about/license/' },
          ],
        },
      ],
    }),
  ],
});
