/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'FPSMath Discord bot',
  tagline: 'The best calculations for anything FPS and more',
  url: 'https://fpsmath.animafps.xyz',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'AnimaFPS', // Usually your GitHub org/user name.
  projectName: 'fpsmath-docs', // Usually your repo name.
  stylesheets: [ '/src/css/heading.css'],
  scripts: [
    "https://kit.fontawesome.com/57eed046e7.js"
  ],
  themeConfig: {
    colorMode: {
      // "light" | "dark"
      defaultMode: "dark"
    },
    respectPrefersColorScheme: true,
    hideableSidebar: true,
    navbar: {
      title: 'FPSMath',
      logo: {
        alt: 'FPSMath\'s logo',
        src: 'img/fpsmath.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          to: 'docs/commands/overview',
          label: 'Commands',
          poition: 'left',
        },
        {
          to: 'invite',
          label: 'Invite',
          poition: 'left',
        },
        {
          href: 'https://github.com/AnimaFPS/fpsmath',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/',
            },
            {
              label: 'Commands',
              to: 'docs/commands/overview'
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/AnimaFPS/fpsmath',
            },
            {
              label: 'Docs - Source/Github',
              href: 'https://github.com/AnimaFPS/fpsmath-docs'
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} FPSMath.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/animafps/fpsmath-docs/edit/main/',
        },
      },
    ],
  ],
  plugins: [
    // ... Your other plugins.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        indexBlog: false,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
        // When applying `zh` in language, please install `nodejieba` in your project.
      },
    ],
  ],
};
