export default {
  title: 'База знаний',
  tagline: 'Инструкции и FAQ',
  url: 'https://Enjoy4e.github.io',       // замените на свой GitHub username
  baseUrl: '/my-knowledge-base/',          // имя репозитория
  favicon: 'img/favicon.ico',
  organizationName: 'Enjoy4e',            // GitHub username
  projectName: 'my-knowledge-base',        // репозиторий
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,    // отключаем блог
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: 'База знаний',
      items: [
        { to: '/docs/intro', label: 'Документация', position: 'left' },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `© ${new Date().getFullYear()} База знаний`,
    },
  },
};
