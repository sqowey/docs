// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Sqowey - Docs',
    tagline: 'Documentation for Sqowey',
    url: 'https://your-docusaurus-test-site.com',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon_transparent.ico',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'sqowey', // Usually your GitHub org/user name.
    projectName: 'docs', // Usually your repo name.

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'de'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl: 'https://github.com/sqowey/docs/blob/main/',
                },
                blog: {
                    showReadingTime: true,
                    feedOptions: {
                        type: 'all',
                        copyright: `Copyright © ${new Date().getFullYear()} Sqowey`,
                    },
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl: 'https://github.com/sqowey/docs/blob/main/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
        navbar: {
            title: 'Sqowey',
            logo: {
                alt: 'Sqowey Logo',
                src: 'img/logo_transparent.png',
            },
            items: [{
                    type: 'localeDropdown',
                    position: 'right',
                },
                // {
                //     type: 'doc',
                //     docId: 'intro',
                //     position: 'left',
                //     label: 'Tutorial',
                // },
                // { to: '/blog', label: 'Blog', position: 'left' },
                // {
                //     href: 'https://github.com/facebook/docusaurus',
                //     label: 'GitHub',
                //     position: 'right',
                // },
            ],
        },
        footer: {
            style: 'dark',
            links: [{
                    title: 'Documentation',
                    items: [{
                            label: 'Introduction',
                            to: '/docs/intro',
                        },
                        {
                            label: 'API',
                            to: '/docs/category/api',
                        },
                        {
                            label: 'Trustable domains',
                            to: '/docs/domains/subdomains',
                        },
                        {
                            label: 'Updates',
                            to: '/docs/category/updates',
                        },
                    ],
                },
                {
                    title: 'Community',
                    items: [{
                        label: 'Twitter',
                        href: 'https://twitter.com/sqowey',
                    }, ],
                },
                {
                    title: 'More',
                    items: [{
                            label: 'Blog',
                            to: '/blog',
                        },
                        {
                            label: 'GitHub',
                            href: 'https://github.com/sqowey/',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Sqowey.<br>Built with Docusaurus.`,
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
        },
    }),
};

module.exports = config;