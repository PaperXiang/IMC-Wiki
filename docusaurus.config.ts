import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'IMC百科',
  tagline: '服务器的非官方百科,收录大量内容,持续更新~',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://wiki.imccd.icu',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/PaperXiang/IMC-Wiki/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/PaperXiang/IMC-Wiki/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'IMC百科',
      logo: {
        alt: 'IMC V3服务器图标',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '导览',
        },
        {to: '/blog', label: '博客', position: 'left'},
        {
          href: 'https://github.com/PaperXiang/IMC-Wiki',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '文档',
          items: [
            {
              label: '开始阅读',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: '社区',
          items: [
            {
              label: 'IMC官网',
              href: 'https://imc.re',
            },
            {
              label: 'Discord',
              href: 'https://discord.com/invite/thKjQ7t',
            },
            {
              label: 'QQ群',
              href: 'https://l.imc.re/qqgroup',
            },
            {
              label: 'DoDo',
              href: 'https://imdodo.com/s/170663?inv=SNVV3',
            },
          ],
        },
        {
          title: '更多',
          items: [
            {
              label: '乐子百科',
              href: 'https://lezi.imccd.icu',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/PaperXiang/IMC-Wiki',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} IMC-Wiki.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
