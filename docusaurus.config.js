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
  themeConfig: {
    navbar: {
      title: 'FPSMath',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/AnimaFPS/fpsmath',
          label: 'GitHub',
          position: 'right',
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
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/AnimaFPS',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/AnimaFPS/fpsmath',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} AnimaFPS, Built with Docusaurus.`,
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
            'https://github.com/animafps/fpsmath-docs/edit/master/docs/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/animafps/fpsmath-docs/edit/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
