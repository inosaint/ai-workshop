import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeRapide from 'starlight-theme-rapide';

export default defineConfig({
  site: 'https://howtoaicode.com',
  integrations: [
    starlight({
      defaultLocale: 'root',
      locales: {
        root: { label: 'English', lang: 'en' },
        'zh-cn': { label: '简体中文', lang: 'zh-CN' },
        'es': { label: 'Español', lang: 'es' },
      },
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
            url: 'https://howtoaicode.com/',
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
              url: 'https://howtoaicode.com/',
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
        Banner: './src/components/BetaTranslationBanner.astro',
      },
      sidebar: [
        {
          label: 'Start Here',
          translations: { 'zh-CN': '从这里开始', 'es': 'Empezar aquí' },
          items: [
            { label: 'Welcome', translations: { 'zh-CN': '欢迎', 'es': 'Bienvenido' }, link: '/introduction/' },
            { label: 'Your First AI Creation', translations: { 'zh-CN': '你的第一个 AI 创作', 'es': 'Tu primera creación con IA' }, link: '/quick-win/' },
          ],
        },
        {
          label: 'Setup',
          translations: { 'zh-CN': '环境配置', 'es': 'Configuración' },
          items: [
            { label: 'GitHub Account', translations: { 'zh-CN': 'GitHub 账号', 'es': 'Cuenta de GitHub' }, link: '/github-setup/' },
            { label: 'Install Claude Code', translations: { 'zh-CN': '安装 Claude Code', 'es': 'Instalar Claude Code' }, link: '/install-claude-code/' },
          ],
        },
        {
          label: 'Build Your Project',
          translations: { 'zh-CN': '构建你的项目', 'es': 'Construye tu proyecto' },
          items: [
            { label: 'Choose Your Project', translations: { 'zh-CN': '选择你的项目', 'es': 'Elige tu proyecto' }, link: '/choose-project/' },
            { label: 'Building with Claude', translations: { 'zh-CN': '使用 Claude Code 进行构建', 'es': 'Construyendo con Claude' }, link: '/building-with-claude/' },
            { label: 'Testing Locally', translations: { 'zh-CN': '本地测试', 'es': 'Pruebas locales' }, link: '/testing-locally/' },
            { label: 'Making Changes', translations: { 'zh-CN': '使用 Claude Code 进行更改', 'es': 'Realizando cambios' }, link: '/making-changes/' },
          ],
        },
        {
          label: 'Go Live',
          translations: { 'zh-CN': '发布上线', 'es': 'Publicar' },
          items: [
            { label: 'Deploy to GitHub Pages', translations: { 'zh-CN': '部署到 GitHub Pages', 'es': 'Desplegar en GitHub Pages' }, link: '/deploy-github-pages/' },
          ],
        },
        {
          label: 'Level Up',
          translations: { 'zh-CN': '进阶提升', 'es': 'Nivel avanzado' },
          items: [
            { label: 'Tips & Tricks', translations: { 'zh-CN': '技巧与窍门', 'es': 'Consejos y trucos' }, link: '/claude-tips/' },
            { label: 'Claude API Basics', translations: { 'zh-CN': 'Claude API 基础', 'es': 'Conceptos básicos de la API de Claude' }, link: '/claude-api/' },
            { label: 'Add Analytics (PostHog)', translations: { 'zh-CN': '添加数据分析 (PostHog)', 'es': 'Añadir análisis (PostHog)' }, link: '/analytics-posthog/' },
          ],
        },
        {
          label: 'Optional',
          translations: { 'zh-CN': '可选内容', 'es': 'Opcional' },
          collapsed: true,
          items: [
            { label: 'Using Cursor (Alternative)', translations: { 'zh-CN': '使用 Cursor（替代方案）', 'es': 'Usar Cursor (alternativa)' }, link: '/optional/cursor/' },
            { label: 'Deploy to Netlify', translations: { 'zh-CN': '部署到 Netlify', 'es': 'Desplegar en Netlify' }, link: '/optional/netlify/' },
          ],
        },
        {
          label: 'Reference',
          translations: { 'zh-CN': '参考资料', 'es': 'Referencia' },
          collapsed: true,
          items: [
            { label: 'Cheat Sheet', translations: { 'zh-CN': '速查表', 'es': 'Guía rápida' }, link: '/reference/cheat-sheet/' },
            { label: 'Glossary', translations: { 'zh-CN': '术语表', 'es': 'Glosario' }, link: '/reference/glossary/' },
            { label: 'Troubleshooting', translations: { 'zh-CN': '故障排查', 'es': 'Solución de problemas' }, link: '/troubleshooting/' },
          ],
        },
        {
          label: 'About',
          translations: { 'zh-CN': '关于', 'es': 'Acerca de' },
          collapsed: true,
          items: [
            { label: 'Why This Guide', translations: { 'zh-CN': '为什么写这份指南', 'es': 'Por qué esta guía' }, link: '/about/why-this-guide/' },
            { label: 'Version', translations: { 'zh-CN': '版本', 'es': 'Versión' }, link: '/about/version/' },
            { label: 'Improve This Guide', translations: { 'zh-CN': '改进这份指南', 'es': 'Mejorar esta guía' }, link: '/about/improve-this-guide/' },
            { label: 'Further Learning', translations: { 'zh-CN': '延伸学习', 'es': 'Seguir aprendiendo' }, link: '/about/further-learning/' },
            { label: 'Colophon', translations: { 'zh-CN': '版权页', 'es': 'Colofón' }, link: '/about/colophon/' },
            { label: 'License', translations: { 'zh-CN': '许可协议', 'es': 'Licencia' }, link: '/about/license/' },
          ],
        },
      ],
    }),
  ],
});
